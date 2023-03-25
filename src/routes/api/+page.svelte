<script lang="ts">
    import { language } from "$lib/stores/language.js";
    import  api  from "$lib/api/api.json";
    import ApiDocEntry from "$lib/components/APIDocEntry.svelte";
    import InformationOutline from "$lib/icons/components/InformationOutline.svelte";
    import ExternalLink from "$lib/components/ExternalLink.svelte";


</script>
<div class="flex justify-center">
    <div class="p-2 flex flex-col place-items-center w-full lg:w-2/3 2xl:w-[1200px]">
        <div class="flex items-center">
            <h1 class="my-2 text-2xl sm:text-2xl font-semibold">
                {$language === "de" ? "API - Verfügbare Endpoints" : "API - List of Provided Endpoints"}
            </h1>
            <ExternalLink
                    className="ml-2"
                    de="https://de.wikipedia.org/wiki/Programmierschnittstelle"
                    en="https://en.wikipedia.org/wiki/API"
            >
                <InformationOutline color="#D2CAB3" />
            </ExternalLink>
        </div>
        {#each Object.keys(api) as endpoint}
            <ApiDocEntry name={endpoint} />
        {/each}
    </div>
</div>
