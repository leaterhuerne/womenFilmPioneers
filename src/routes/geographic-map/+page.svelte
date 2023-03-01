<script lang="ts">
    import SVGEurope from "$lib/components/geographic-map/SVGEurope.svelte";
    import {Europe} from "$lib/utils/geographic-map/Europe";

    let countryColors = new Europe();

    let color: string = "green";
    $: countryColors.sweden = color;
</script>

<div>
    <button class="h-20 w-40 bg-slate-300"
            on:click={() => {
                color === "blue" ? color = "green" : color = "blue";
                console.log(color.color)
            }}>Klick mich</button>
    <SVGEurope  countries={countryColors} />
</div>