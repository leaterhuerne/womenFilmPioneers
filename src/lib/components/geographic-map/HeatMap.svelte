<script lang="ts">
    import SVGEurope from "$lib/components/geographic-map/SVGEurope.svelte";
    import {Europe} from "$lib/utils/geographic-map/Europe";
    type rgb = {red: number, green: number, blue: number};

    export let colorFrom: rgb = {red: 0, green: 0, blue: 139};  // start color that specifies the minimum heat color
    export let colorTo: rgb = {red: 238, green: 30, blue: 29};  // end color that specifies the maximum heat color

    export let upperBound: number = 100;            // The upper bound for interpolating between start and end color
    export let lowerBound: number = 0;              // The lower bound for interpolating between start and end color

    // Specify the color of the countries between the start-color and the end-color.
    // The 'value' should be between upperBound and lowerBound.
    export let countryHeatValues: {name: string; value: number}[];
    export let state = false;               // for responsive behavior, if state changes, then europe SVG is rerendered

    let europe: Europe;                     // europe SVG that is to be rendered

    /**
     * The function calculates a rgb color that lays between the colorFrom and the colorTo variable.
     * The value parameter specifies how much the color should be changed on the scale of colorFrom to colorTo.
     * @param value a number that specifies how much the calculated color should be in near of colorFrom or colorTo
     * @return the calculated rgb color as CSS rgb(red, green, blue) function.
     */
    function mapColor(value: number): string {
        let colorResult: rgb = {red: 0, green: 0, blue: 0};
        if (lowerBound > upperBound) {
            let temp = lowerBound;
            lowerBound = upperBound;
            upperBound = temp;
        }
        if (value < lowerBound) {
            return "rgb(" + colorFrom.red + ", " + colorFrom.green + ", " + colorFrom.blue + ")";
        } else if (value > upperBound) {
            return "rgb(" + colorTo.red + ", " + colorTo.green + ", " + colorTo.blue + ")";
        } else {
            let mappingFactor: number = (value - lowerBound) / (upperBound - lowerBound);
            colorResult.red = Math.floor((1 - mappingFactor) * colorFrom.red + mappingFactor * colorTo.red);
            colorResult.green = Math.floor((1 - mappingFactor) * colorFrom.green + mappingFactor * colorTo.green);
            colorResult.blue = Math.floor((1 - mappingFactor) * colorFrom.blue + mappingFactor * colorTo.blue);
        }
        return "rgb(" + colorResult.red + ", " + colorResult.green + ", " + colorResult.blue + ")";
    }

    /**
     * Returns a colored HeatMap of Europe. Each country is colored as defined in the countryHeatValues.
     */
    function colorHeatMap(): Europe {
        let europeRes = new Europe();
        for (const country of countryHeatValues) {
            europeRes[country.name] = mapColor(country.value);
        }
        return europeRes;
    }

    // if the colorFrom and colorTo change, then the europe SVG is rendered new
    $: {
        state = state;
        europe = colorHeatMap();
    }

</script>

<div>
    <div>
        <SVGEurope
                countries={europe}
                className="bg-slate-300 max-w-full"
        />
    </div>
</div>
