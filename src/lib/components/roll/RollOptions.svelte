<script lang="ts">
    import {CircularIterator} from "$lib/utils/list/CircularIterator";
    import {CircularLinkedList} from "$lib/utils/list/CircularLinkedList";
    import CheveronUp from "$lib/icons/components/CheveronUp.svelte";
    import CheveronDown from "$lib/icons/components/CheveronDown.svelte";
    import T from "$lib/components/T.svelte";

    export let className: string;
    export let professions: CircularIterator<string> = new CircularIterator<string>(new CircularLinkedList<string>());
    export let countries: CircularIterator<string> = new CircularIterator<string>(new CircularLinkedList<string>());

    export let professionLabel = professions.getPrevious();
    export let countryLabel = countries.getPrevious();

    const boxStyle = "w-full flex place-items-center gap-2 p-2 rounded dark:bg-warm-gray-800";
    const selectorStyle = "grow flex place-items-center rounded px-2 dark:bg-warm-gray-900";
    const selectorLabelStyle = "grow";
    const buttonStyle = "flex flex-col";
</script>

<div
        class="{className} grid grid-cols-1 md:grid-cols-2 place-items-center gap-2 text-lg">
    <!-- Professions -->
    <div class={boxStyle}>
        <p><T de="Beruf" en="Profession" /></p>
        <div class={selectorStyle}>
            <p class={selectorLabelStyle}>{professionLabel}</p>
            <div class={buttonStyle}>
                <button on:click={() => professionLabel = professions.getPrevious()}><CheveronUp /></button>
                <button on:click={() => professionLabel = professions.getNext()}><CheveronDown /></button>
            </div>
        </div>
    </div>
    <!-- Countries -->
    <div class={boxStyle}>
        <p><T de="Land" en="Country" /></p>
        <div class={selectorStyle}>
            <p class={selectorLabelStyle}>{countryLabel}</p>
            <div class={buttonStyle}>
                <button on:click={() => countryLabel = countries.getPrevious()}><CheveronUp /></button>
                <button on:click={() => countryLabel = countries.getNext()}><CheveronDown /></button>
            </div>
        </div>
    </div>
</div>