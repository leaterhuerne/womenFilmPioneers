<script lang="ts">
    import { language } from "$lib/stores/language.js";
    import  api  from "$lib/api/api.json";
    type apikey = keyof typeof api;
    

    export let name: apikey = "amount-of-women";
    $: lang = $language === "de" ? "german" : "english";

</script>

<div class="my-2 p-2 border border-warm-gray-400 rounded-lg shadow-lg w-full sm:w-[80%] md:w-2/3">
    <h1 class="mb-2 text-lg font-semibold border-b-2 border-firebrick-500">
        {api[name].title[lang]}
    </h1>
    <code>
        {api[name].endpoint}
    </code>    
    <p >
        {api[name].description[lang]}
    </p>
</div>