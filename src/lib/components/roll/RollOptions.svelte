<script lang="ts">
    import {CircularIterator} from "$lib/utils/list/CircularIterator";
    import CheveronUp from "$lib/icons/components/CheveronUp.svelte";
    import CheveronDown from "$lib/icons/components/CheveronDown.svelte";
    import {CircularLinkedList} from "$lib/utils/list/CircularLinkedList";

    export let className: string;
    
    const test = new CircularLinkedList()<string>;
    test.add("aaaaaa", "bbbbbbb", "cccccc", "dddddd", "eeeeee");
    export let professions: CircularIterator<string> = test.iterator() as CircularIterator<string>;
    export let countries: CircularIterator<string> = test.iterator() as CircularIterator<string>;

    let professionLabel = professions.current;
    let countryLabel = countries.current;

</script>

<div class="{className} flex gap-2">
    <div class="flex">
        <p class="w-24">{professionLabel}</p>
        <div class="flex flex-col">
            <button on:click={() => professionLabel = professions.getPrevious()}><CheveronUp /></button>
            <button on:click={() => professionLabel = professions.getNext()}><CheveronDown /></button>
        </div>
    </div>
    <div class="flex">
        <p class="w-24">{countryLabel}</p>
        <div class="flex flex-col">
            <button on:click={() => countryLabel = countries.getPrevious()}><CheveronUp /></button>
            <button on:click={() => countryLabel = countries.getNext()}><CheveronDown /></button>
        </div>
    </div>
</div>