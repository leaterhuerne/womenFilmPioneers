<script lang="ts">
    import { language } from "$lib/stores/language.js";
    import { domain } from "$lib/stores/domain";
    import  api  from "$lib/api/api.json";
    import ApiDocEntry from "$lib/components/APIDocEntry.svelte";
    import { error } from "@sveltejs/kit";
    import { onMount } from "svelte";
    type apikey = keyof typeof api;

    let endpoints = Object.keys(api) as apikey[];  

    let genderJson: {"female": number, "male": number, "unknown": number} | undefined = undefined; 
     onMount(async () => {
        const response = await fetch("/api/genders");
        genderJson = await response.json();
     });
</script>

<div class="p-2 flex flex-col place-items-center">
    <div class="p-2 text-base border-4 border-firebrick-300 h-24 w-36">
        {#if genderJson != undefined}
            <p>Frauen: {genderJson.female}</p>
            <p>Männer: {genderJson.male}</p>
            <p>Unbekannt: {genderJson.unknown}</p>
        {/if}    
    </div>
</div>