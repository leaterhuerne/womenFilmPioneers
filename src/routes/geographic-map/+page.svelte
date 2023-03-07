<script lang="ts">
    import SVGEurope from "$lib/components/geographic-map/SVGEurope.svelte";
    import {Europe} from "$lib/utils/geographic-map/Europe";
    import DuoEurop from "$lib/components/geographic-map/DuoEurop.svelte";
    import HeatMap from "$lib/components/geographic-map/HeatMap.svelte";

    let countryColors = new Europe();

    let color: string = "green";
    $: countryColors.sweden = color;
</script>

<div>
    <button class="h-20 w-40 bg-slate-300"
            on:click={() => {
                color === "blue" ? color = "green" : color = "blue";
                console.log(color);
            }}>Klick mich</button>
    <!--<SVGEurope  countries={countryColors} /> -->
    <HeatMap />
    <!-- <DuoEurop onClick={(id) => {return id}} /> -->
</div>