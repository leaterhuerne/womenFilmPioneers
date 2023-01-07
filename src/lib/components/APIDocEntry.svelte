<script lang="ts">
    import { language } from "$lib/stores/language.js";
    import  api  from "$lib/api/api.json";
    type apikey = keyof typeof api;
    

    export let name: apikey = "amount-of-women";

</script>

<div class="my-2 border border-dark-paper-200 bg-paper-200 rounded shadow-2xl w-full">
    <div class="flex justify-between items-center p-2 rounded-t bg-firebrick-500">
        <h1 class="text-lg text-paper-200 font-semibold">
            {api[name].title[$language]}
        </h1>
        <p class="px-1 rounded font-semibold text-firebrick-500 text-sm  bg-paper-200">
            {api[name]["method"]}
        </p>
    </div>
    <div class="p-2">
        <div>
            <code>{api[name].endpoint}</code>
        </div>
        {#if api[name]["parameters"].length > 0}
            <h2 class="italic mt-2">{$language === "de" ? "Parameter: " : "Parameters: "}</h2>
            {#each api[name]["parameters"] as parameter}
                <div class="flex items-center">
                    <code class="mr-2">{parameter["name"]}</code>
                    <p>{parameter[$language]}</p>
                </div>
            {/each}
        {/if}
        <h2 class="italic mt-2">Response:</h2>
        <p>{api[name].description[$language]}</p>
    </div>
</div>