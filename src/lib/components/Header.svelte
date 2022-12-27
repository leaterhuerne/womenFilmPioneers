<script lang="ts">
    import { onMount } from "svelte";
    import { language } from "$lib/stores/language.js";


    let title: string = "";
    
    onMount(() => {title = $language == "de" ? "Frauen in der frühen Filmgeschichte" : "Women in early Film History"});
</script>

<div class="w-full p-2 text-center text-paper-200 bg-firebrick-500 ">
    <h1 class="text-lg">{title}</h1>
</div>