<script lang="ts">
    import SVGEurope from "$lib/components/geographic-map/SVGEurope.svelte";
    import {Europe} from "$lib/utils/geographic-map/Europe";
    type rgb = {red: number, green: number, blue: number};

    export let className: string = "";                          // styling variable
    export let colorFrom: rgb = {red: 0, green: 0, blue: 255};  // start color that specifies the minimum heat color
    export let colorTo: rgb = {red: 255, green: 0, blue: 0};  // end color that specifies the maximum heat color
    export let upperBound: number = 100;            // The upper bound for interpolating between start and end color
    export let lowerBound: number = 0;              // The lower bound for interpolating between start and end color
    export let listeners: {                         // passing on listener from SVGEurope.svelte
        onClick: (country) => void,
        onMouseEnter: (country) => void,
        onMouseLeave: (country) => void
    } = {
        onClick: country => console.log("The clicked country is " + country),
        onMouseEnter: country => console.log("Mouse is over: " + country),
        onMouseLeave: country => console.log("Mouse was over: " + country)
    };

    // Specify the color of the countries between the start-color and the end-color.
    // The 'value' should be between upperBound and lowerBound.
    export let state = false;               // for responsive behavior, if state changes, then europe SVG is rerendered
    export let europe: Europe = new Europe();              // europe SVG that is to be rendered

    export let countryHeatValues: {name: string; value: number}[] = [];
    let bool = true;
    for (const country in europe) {
        if (bool) {
            countryHeatValues.push({name: country, value: Math.random() * 100});
        } else {
            countryHeatValues.push({name: country, value: 0});
        }
        bool = !bool;
    }

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
        if (value <= lowerBound || upperBound === 0) {
            //return "linear-gradient(0deg, rgba(255,0,0, 0.9) 10%, rgba(0,255,0,0.9) 50%, rgba(0,0,255,0.9) 90%)";
            return "url(#grad1)";
            //return "rgb(" + colorFrom.red + ", " + colorFrom.green + ", " + colorFrom.blue + ")";
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
    function colorHeatMap(): void {
        for (const country of countryHeatValues) {
            europe[country.name].color = mapColor(country.value);
        }
        europe;
    }

    // if the colorFrom and colorTo change, then the europe SVG is rendered new
    $: {
        state = state;
        countryHeatValues = countryHeatValues;
        colorHeatMap();
    }
</script>

<div class="{className} w-full">
    <SVGEurope
            countries={europe}
            bind:listeners={listeners}
    />
</div>
