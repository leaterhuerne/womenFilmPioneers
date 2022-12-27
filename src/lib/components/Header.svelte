<script lang="ts">
    import { language } from "$lib/stores/language.js";
    import Language from "./Language.svelte";

    let title: string = "";

    $: {
        title = $language == "de" ? "Frauen in der frühen Filmgeschichte" : "Women in Early Film History"
    }
</script>

<div class="w-full p-2 text-center text-paper-200 bg-firebrick-500 flex justify-between">
    <span></span>
    <h1 class="text-lg">{title}</h1>
    <Language />
</div>