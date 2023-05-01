<script lang="ts">
    import CheveronUp from "$lib/icons/components/CheveronUp.svelte";
    import CheveronDown from "$lib/icons/components/CheveronDown.svelte";
    import T from "$lib/components/T.svelte";
    import {CircularArrayIterator} from "$lib/utils/list/CircularArrayIterator";
    import {CircularArrayList} from "$lib/utils/list/CircularArrayList";

    export let className: string;
    export let professions = new CircularArrayIterator(new CircularArrayList<string>("alle"));
    export let countries = new CircularArrayIterator(new CircularArrayList<string>("alle"));

    export let professionLabel = professions.current;
    export let countryLabel = countries.current;

    const boxStyle = "w-full flex place-items-center gap-2 p-2 rounded bg-firebrick-500 dark:bg-warm-gray-800";
    const selectorStyle = "grow flex place-items-center rounded px-2 bg-paper-200 dark:bg-warm-gray-900";
    const selectorLabelStyle = "grow";
    const buttonStyle = "flex flex-col";
    let titleStyle = "text-paper-200";

    const professionUp = () => {
        professionLabel = professions.previous();
    }

    const professionDown = () => {
        professionLabel = professions.next();
    }

    const countryUp = () => {
        countryLabel = countries.previous();
    }

    const countryDown = () => {
        countryLabel = countries.next();
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
                <button on:click={professionUp}><CheveronUp darkColor="#D2CAB3"/></button>
                <button on:click={professionDown}><CheveronDown darkColor="#D2CAB3"/></button>
            </div>
        </div>
    </div>
    <!-- Countries -->
    <div class={boxStyle}>
        <p class={titleStyle}><T de="Land" en="Country" /></p>
        <div class={selectorStyle}>
            <p class={selectorLabelStyle}>{countryLabel}</p>
            <div class={buttonStyle}>
                <button on:click={countryUp}><CheveronUp darkColor="#D2CAB3"/></button>
                <button on:click={countryDown}><CheveronDown darkColor="#D2CAB3"/></button>
            </div>
        </div>
    </div>
</div>