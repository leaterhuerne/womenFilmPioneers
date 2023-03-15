<script lang="ts">
    import SVGEurope from "$lib/components/geographic-map/SVGEurope.svelte";
    import {Europe} from "$lib/utils/geographic-map/Europe";
    import ColorPicker from "$lib/components/ColorPicker.svelte";
    type rgb = {red: number, green: number, blue: number};

    export let upperBound: number = 100;            // The upper bound for interpolating between start and end color
    export let lowerBound: number = 0;              // The lower bound for interpolating between start and end color

    // Specify the color of the countries between the start-color and the end-color.
    // The 'value' should be between upperBound and lowerBound.
    export let countryHeatValues: {name: string; value: number}[];
    let europe: Europe;                     // europe SVG that is to be rendered
    let heatMapBoundColors = [              // Array with 2 entries for the colors with the minimum and maximum heat
            {
                title: "start color",
                rgb: {
                    red: 0,
                    green: 0,
                    blue: 139
                }
            },
            {
                title: "end color",
                rgb: {
                    red: 238,
                    green: 77,
                    blue: 43
                }
            },
        ]

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
            return "rgb(" + heatMapBoundColors[0].rgb.red + ", " + heatMapBoundColors[0].rgb.green + ", " + heatMapBoundColors[0].rgb.blue + ")";
        } else if (value > upperBound) {
            return "rgb(" + heatMapBoundColors[1].rgb.red + ", " + heatMapBoundColors[1].rgb.green + ", " + heatMapBoundColors[1].rgb.blue + ")";
        } else {
            let mappingFactor: number = (value - lowerBound) / (upperBound - lowerBound);
            colorResult.red = Math.floor((1 - mappingFactor) * heatMapBoundColors[0].rgb.red + mappingFactor * heatMapBoundColors[1].rgb.red);
            colorResult.green = Math.floor((1 - mappingFactor) * heatMapBoundColors[0].rgb.green + mappingFactor * heatMapBoundColors[1].rgb.green);
            colorResult.blue = Math.floor((1 - mappingFactor) * heatMapBoundColors[0].rgb.blue + mappingFactor * heatMapBoundColors[1].rgb.blue);
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

    europe = colorHeatMap();

</script>

<div>
    <div>
        <ColorPicker
                className=""
                bind:colors={heatMapBoundColors}
                onInput={() => europe = colorHeatMap()}
        />
        <SVGEurope
                countries={europe}
                className="bg-slate-300 max-w-full"
        />
    </div>
</div>
