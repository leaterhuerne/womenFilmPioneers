<script lang="ts">
    import {language} from "$lib/stores/language";

    export let de: string;
    export let en: string;

    let display: string;

    $: {
        $language = $language;
        display = $language === "de" ? de : en;
    }
</script>

{display}