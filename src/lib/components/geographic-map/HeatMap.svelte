<script lang="ts">
    import SVGEurope from "$lib/components/geographic-map/SVGEurope.svelte";
    type rgb = {red: number, green: number, blue: number};
    let colorFrom: rgb = {red: 0, green: 0, blue: 139};
    let colorTo: rgb = {red: 238, green: 77, blue: 43};

    let divBack: rgb = {red: 0, green: 0, blue: 0};

    /**
     * The function calculates a rgb color that lays between the colorFrom and the colorTo variable.
     * The value parameter specifies how much the color should be changed on the scale of colorFrom to colorTo.
     * @param value a number that specifies how much the calculated color should be in near of colorFrom or colorTo
     * @param lowerBound of the range for the color calculation
     * @param upperBound of the range for the color calculation
     * @return returns the calculated rgb color between the colorFrom and the colorTo.
     */
    function mapColor(value: number, lowerBound: number, upperBound: number): rgb {
        let colorResult: rgb = {red: 0, green: 0, blue: 0};
        if (lowerBound > upperBound) {
            let temp = lowerBound;
            lowerBound = upperBound;
            upperBound = temp;
        }
        if (value < lowerBound) {
            divBack = colorFrom;
        } else if (value > upperBound) {
            divBack = colorTo;
        } else {
            let colorTransformationQuotient: number = (value - lowerBound) / (upperBound - lowerBound);
            colorResult.red = (1 - colorTransformationQuotient) * colorFrom.red + colorTransformationQuotient * colorTo.red;
            colorResult.green = (1 - colorTransformationQuotient) * colorFrom.green + colorTransformationQuotient * colorTo.green;
            colorResult.blue = (1 - colorTransformationQuotient) * colorFrom.blue + colorTransformationQuotient * colorTo.blue;
        }
        return colorResult;
    }
    // initialize divBack with color to the middle of colorFrom and colorTo
    divBack = mapColor(50, 0, 100);
    let range = 50;
</script>

<div>
    <input type="range" bind:value={range} on:change={() => divBack = mapColor(range, 0, 100)}>
    <div class="w-48 h-8" style="background-color: rgb({divBack.red}, {divBack.green}, {divBack.blue})"></div>
    {range}
</div>