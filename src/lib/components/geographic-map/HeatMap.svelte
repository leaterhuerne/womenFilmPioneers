<script lang="ts">
    import SVGEurope from "$lib/components/geographic-map/SVGEurope.svelte";
    import {Europe} from "$lib/utils/geographic-map/Europe";
    type rgb = {red: number, green: number, blue: number};

    // bounds are necessary for the mapping of colors
    export let upperBound: number = 100;
    export let lowerBound: number = 0;
    // In this variable can be specified how much a country should be colored.
    // The value field specifies the strength of the coloration between start and end color of the heatmap
    export let countryHeatValues: {name: string; value: number}[] = [];

    // start and end color of the heatmap
    let colorFrom: rgb = {red: 0, green: 0, blue: 139};
    let colorTo: rgb = {red: 238, green: 77, blue: 43};

    let testColorDiv: string;

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

    // initialize divBack with color to the middle of colorFrom and colorTo
    testColorDiv = mapColor(50);
    let range = 50;

    /**
     * The function colors each country of europe that is specified in the export variable countryHeatValues.
     */
    function colorHeatMap(): Europe {
        let europeRes = new Europe();
        for (const country of countryHeatValues) {
            europeRes[country.name] = mapColor(country.value);
        }
        return europeRes;
    }
</script>

<div>
    <input type="range" bind:value={range} on:change={() => testColorDiv = mapColor(range, 0, 100)}>
    <div class="w-48 h-8" style="background-color: {testColorDiv}"></div>
    {range}
    <SVGEurope countries={colorHeatMap()}/>
</div>