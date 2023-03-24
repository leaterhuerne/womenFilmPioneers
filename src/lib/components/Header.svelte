<script lang="ts">
    import { language } from "$lib/stores/language.js";
    import Language from "./Language.svelte";
</script>

<div
        class="
            flex justify-between
            w-full
            p-2
            text-center
            text-paper-200 dark:text-dark-paper-200
            bg-firebrick-500 dark:bg-firebrick-1000
        "
>
    <span></span>
    <h1 class="text-lg">
        {$language === "de" ? "Frauen in der frühen Filmgeschichte" : "Women in Early Film History"}
    </h1>
    <Language />
</div>