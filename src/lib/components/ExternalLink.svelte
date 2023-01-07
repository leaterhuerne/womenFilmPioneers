<script lang="ts">
    import { language } from "$lib/stores/language";

    export let en: string;
    export let de: string;
    export let className: string;
    export let style: string;
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
