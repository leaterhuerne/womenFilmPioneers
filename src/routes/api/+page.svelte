<script lang="ts">
    import { language } from "$lib/stores/language.js";
    import  api  from "$lib/api/api.json";
    import ApiDocEntry from "$lib/components/APIDocEntry.svelte";
    type apikey = keyof typeof api;

    let endpoints = Object.keys(api) as apikey[];
</script>

<div class="p-2 flex flex-col place-items-center">
    <h1 class="my-2 text-2xl text-center font-semibold">{$language == "de" ? "API - Liste der verfügbaren Endpoints" : "API - List of Provided Endpoints"}</h1>
    {#each endpoints as endpoint}
        <ApiDocEntry name={endpoint} />
    {/each}
</div>