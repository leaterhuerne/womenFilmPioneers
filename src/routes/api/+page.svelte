<script lang="ts">
    import { language } from "$lib/stores/language.js";
    import  api  from "$lib/api/api.json";
    import ApiDocEntry from "$lib/components/APIDocEntry.svelte";
    import InformationOutline from "$lib/icons/components/InformationOutline.svelte";


</script>

<div class="p-2 flex flex-col place-items-center">
    <div class="flex justify-center items-center">
        <h1 class="my-2 text-2xl text-center font-semibold">
            {$language === "de" ? "API - Liste der verfügbaren Endpoints" : "API - List of Provided Endpoints"}
        </h1>
        <a
            href={$language === "de" ? "https://de.wikipedia.org/wiki/Programmierschnittstelle" : "https://en.wikipedia.org/wiki/API"}
            target="_blank"
            rel="noreferrer"
            class="mx-2"
        >
            <InformationOutline />
        </a>
    </div>
    {#each Object.keys(api) as endpoint}
        <ApiDocEntry name={endpoint} />
    {/each}
</div>