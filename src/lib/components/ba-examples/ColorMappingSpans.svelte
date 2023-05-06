<script lang="ts">
    type rgb = {red: number, green: number, blue: number};

    let colorFrom: rgb = {red: 0, green: 0, blue: 255};  // start color that specifies the minimum heat color
    let colorTo: rgb = {red: 255, green: 0, blue: 0};  // end color that specifies the maximum heat color
    let upperBound: number = 100;            // The upper bound for interpolating between start and end color
    let lowerBound: number = 0;
    let value: number = 0;
    let arr: string[] = [];

    function mapColor(value: number): string {
        let colorResult: rgb = {red: 0, green: 0, blue: 0};
        if (lowerBound > upperBound) {
            let temp = lowerBound;
            lowerBound = upperBound;
            upperBound = temp;
        }
        if (value <= lowerBound || upperBound === 0) {
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

    function arrayFill() {
        let tempArr = new Array(11).fill(7);
        for (const i in tempArr) {
            tempArr[i] = mapColor(Number(i * 10));
        }
        arr = tempArr;
    }
    arrayFill();

    $: {
        arr = arr;
    }

</script>

<div class="scale-[2] flex justify-center py-10 px-10 bg-white">
    {#each arr as i, index}
        <div>
            <span class="w-12 h-16 mx-0.5 text-white text-center"
                  style="background-color: {i}; display: inline-block;"
            >
                {index * 10} %
            </span>
        </div>
    {/each}
</div>