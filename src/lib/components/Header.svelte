<script lang="ts">
    import { language } from "$lib/stores/language.js";
    import Language from "./Language.svelte";
    import T from "$lib/components/T.svelte";
</script>

<div
        class="
            z-50
            flex justify-between gap-8 place-items-center
            w-full
            p-2
            text-center
            text-paper-200 dark:text-dark-paper-200
            bg-firebrick-500 dark:bg-firebrick-1000
        "
>
    <a href="/" class="italic font-semibold "><T de="Frauen in der frühen Filmgeschichte" en="Women in Early Film History" /></a>
    <div class="grow flex justify-end gap-4 place-items-center font-semibold">
        <a href="/roll" class="hover:underline">
            <T de="Walze" en="Roll" />
        </a>
        <a href="/geographic-map" class="hover:underline">
            <T de="Europakarte" en="Map of Europe" />
        </a>
        <a href="/api" class="hover:underline">
            API
        </a>
    </div>
    <Language />
</div>