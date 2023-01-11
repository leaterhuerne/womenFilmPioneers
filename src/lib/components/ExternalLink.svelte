<script lang="ts">
    import { language } from "$lib/stores/language";
    import {onMount} from "svelte";

    export let en: string = "/";
    export let de: string = "/";
    export let className: string;
    export let style: string;

    onMount(() => {
        de = de.length == 1 ? en : de;
        en = en.length == 1 ? de : en;

    });
</script>

<a
        href={$language === "de" ? de : en}
        target="_blank"
        rel="noreferrer"
        class={className}
        style={style}
>
    <slot />
</a>
