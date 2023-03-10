<script lang="ts">
    import SVGEurope from "$lib/components/geographic-map/SVGEurope.svelte";
    import {Europe} from "$lib/utils/geographic-map/Europe";
    import DuoEurop from "$lib/components/geographic-map/DuoEurop.svelte";
    import HeatMap from "$lib/components/geographic-map/HeatMap.svelte";

    let countryColors = new Europe();

    let color: string = "green";
    $: countryColors.sweden = color;

    let heatMapExample: {name: string; value: number}[] = [
        { name: "germany", value: 70 },
        { name: "portugal", value: 100 },
        { name: "spain", value: 90 },
        { name: "france", value: 80 },
        { name: "poland", value: 60 },
        { name: "belarus", value: 50 },
        { name: "ukraine", value: 40 },
        { name: "romania", value: 30 },
        { name: "hungary", value: 20 },
        { name: "italy", value: 10 },
        { name: "turkey", value: 0 },
    ];
</script>

<div>
    <button class="h-20 w-40 bg-slate-300"
            on:click={() => {
                color === "blue" ? color = "green" : color = "blue";
                console.log(color);
            }}>Klick mich</button>
    <!--<SVGEurope  countries={countryColors} /> -->
    <HeatMap countryHeatValues={heatMapExample} upperBound=100 lowerBound=0 />
    <!-- <DuoEurop onClick={(id) => {return id}} /> -->
</div>