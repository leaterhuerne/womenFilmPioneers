<script lang="ts">
    import Refresh from "$lib/icons/components/Refresh.svelte";
    import T from "$lib/components/T.svelte";

    export let data;
    export let year = 1895;

    export let country = "alle";
    export let leftGender: {de: string, en: string, value: number};
    export let rightGender: {de: string, en: string, value: number};

    export let professions: string[] = new Array(5).fill("");
    export let locations: string[] = new Array(5).fill("");
    export let refreshProfessions: () => void = () => 
        data.getProfessionForYear(year, json => professions = Object.keys(json).sort(() => 0.5 - Math.random()).slice(0, 5));

    export let refreshFilms: () => void = () =>
        data.getFilmsForYear(year, json => {
            locations = Object.keys(json).filter(film => country != "alle"? json[film].location == country: true).sort(() => 0.5 - Math.random()).slice(0, 5)
        });

    let lastYearChange = Date.now();
    let changedYear = false;

    //Initialize component
    refreshProfessions();
    refreshFilms();

    $: {
        country = country;
        refreshFilms();
    }
    $: {
        year = year;
        lastYearChange = Date.now();
        changedYear = true;
    }

    setInterval(() => {
        if(changedYear && Date.now() - lastYearChange > 100) {
            refreshProfessions();
            refreshFilms();
            changedYear = false;
        }
    }, 10);


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
    <p
        class="flex gap-2 place-items-center justify-center text-sm italic mt-4"
    >
        <T
            de="Die folgenden Beispiele sind eine zufällige Auswahl. Für weitere klicken sie auf den Butten neben der Kategorie."
            en="The following examples are randomly chosen. For more, click on the button next to the category."
        />
    </p>
    <div>
        <div class="flex gap-4 place-items-center">
            <h2 class="text-lg font-semibold"><T de="Berufe" en="Professions" /></h2>
            <button on:click={refreshProfessions}><Refresh darkColor="#D2CAB3" /></button>
        </div>
        <ul class="list-disc ml-4">
            {#each professions as profession}
                <li>{profession}</li>
            {/each}
        </ul>
    </div>
    <div>
        <div class="flex gap-4">
            <h2 class="text-lg font-semibold"><T de="Filme aus diesem Jahr" en="Films from this year" /></h2>
            <button on:click={refreshFilms}><Refresh darkColor="#D2CAB3" /></button>
        </div>
        <ul class="list-disc ml-4">
            {#each locations as location}
                <li>{location}</li>
            {/each}
        </ul>
    </div>
</div>