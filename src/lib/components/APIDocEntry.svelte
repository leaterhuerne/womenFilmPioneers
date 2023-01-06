<script lang="ts">
    import { language } from "$lib/stores/language.js";
    import  api  from "$lib/api/api.json";
    type apikey = keyof typeof api;
    

    export let name: apikey = "amount-of-women";

</script>

<div class="my-2 p-2 border border-warm-gray-200 rounded shadow-xl w-full sm:w-[80%] md:w-2/3">
    <h1 class="my-2 text-lg font-semibold border-b-2 border-firebrick-500">
        {api[name].title[$language]}
    </h1>
    <div class="my-2 flex justify-between items-center">
        <code>{api[name].endpoint}</code>
        <p class="px-1 rounded font-semibold text-paper-100 text-sm bg-firebrick-300">
            {api[name]["method"]}
        </p>
    </div>
    {#if api[name]["parameters"].length > 0}
        <h2 class="italic">
            {$language === "de" ? "Parameter: " : "Parameters: "}
        </h2>
        {#each api[name]["parameters"] as parameter}
            <div class="flex items-center">
                <code class="mr-2">{parameter["name"]}</code>
                <p>{parameter[$language]}</p>
            </div>
        {/each}
    {/if}
    <h2 class="italic mt-2">
        Response:
    </h2>
    <p>
        {api[name].description[$language]}
    </p>
</div>