<script lang="ts">
    import {CircularIterator} from "$lib/utils/list/CircularIterator";
    import {CircularLinkedList} from "$lib/utils/list/CircularLinkedList";
    import CheveronUp from "$lib/icons/components/CheveronUp.svelte";
    import CheveronDown from "$lib/icons/components/CheveronDown.svelte";
    import T from "$lib/components/T.svelte";

    export let className: string;
    export let professions = ["alle"];
    export let countries = ["alle"];

    export let professionLabel = professions[0];
    export let countryLabel = countries[0];

    const boxStyle = "w-full flex place-items-center gap-2 p-2 rounded bg-firebrick-500 dark:bg-warm-gray-800";
    const selectorStyle = "grow flex place-items-center rounded px-2 bg-paper-200 dark:bg-warm-gray-900";
    const selectorLabelStyle = "grow";
    const buttonStyle = "flex flex-col";
    let titleStyle = "text-paper-200";

    const professionUp = () => {
        professionLabel = professions[(professions.indexOf(professionLabel) - 1 + professions.length) % professions.length];
    }

    const professionDown = () => {
        professionLabel = professions[(professions.indexOf(professionLabel) + 1) % professions.length];
    }

    const countryUp = () => {
        countryLabel = countries[(countries.indexOf(countryLabel) - 1 + countries.length) % countries.length];
    }

    const countryDown = () => {
        countryLabel = countries[(countries.indexOf(countryLabel) + 1) % countries.length];
    }

</script>

<div
        class="{className} grid grid-cols-1 md:grid-cols-2 place-items-center gap-2 text-lg">
    <!-- Professions -->
    <div class={boxStyle}>
        <p class={titleStyle}><T de="Beruf" en="Profession" /></p>
        <div class={selectorStyle}>
            <p class={selectorLabelStyle} >{professionLabel}</p>
            <div class={buttonStyle}>
                <button on:click={professionUp}><CheveronUp /></button>
                <button on:click={professionDown}><CheveronDown /></button>
            </div>
        </div>
    </div>
    <!-- Countries -->
    <div class={boxStyle}>
        <p class={titleStyle}><T de="Land" en="Country" /></p>
        <div class={selectorStyle}>
            <p class={selectorLabelStyle}>{countryLabel}</p>
            <div class={buttonStyle}>
                <button on:click={countryUp}><CheveronUp /></button>
                <button on:click={countryDown}><CheveronDown /></button>
            </div>
        </div>
    </div>
</div>