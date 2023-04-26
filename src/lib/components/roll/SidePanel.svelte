<script lang="ts">
    import Refresh from "$lib/icons/components/Refresh.svelte";
    import T from "$lib/components/T.svelte";

    export let year: number;
    export let leftGender: {de: string, en: string, value: number};
    export let rightGender: {de: string, en: string, value: number};

    export let professions: string[];


</script>

<div
        class="
                grow
                lg:w-1/3
                border-t lg:border-t-0 lg:border-l  border-firebrick-500 dark:border-firebrick-1000
                p-2
                flex flex-col gap-2
            "
>
    <h1 class="text-3xl font-semibold text-center">
        <T de="Die Filmindustrie im Jahr" en="The film industry in the year"/> {year}
    </h1>
    <div>
        <h2 class="text-lg font-semibold"><T de="Geschlechterverteilung" en="Gender distribution" /></h2>
        <p><T de={leftGender.de} en={leftGender.en} />: {leftGender.value}</p>
        <p><T de={rightGender.de} en={rightGender.en} />: {rightGender.value}</p>
    </div>
    <div>
        <div class="flex gap-4">
            <h2 class="text-lg font-semibold"><T de="Berufe" en="Professions" /></h2>
            <!--<button on:click={() => getProfessionsOfYear(5)}><Refresh darkColor="#D2CAB3" /></button>-->
        </div>
        {#each professions as profession}
            <p>{profession}</p>
        {/each}
    </div>
    <div>
        <h2 class="text-lg font-semibold"><T de="Filme aus diesem Jahr" en="Films from this year" /></h2>
        {"TODO: Hier Filme einfügen"}
    </div>
</div>