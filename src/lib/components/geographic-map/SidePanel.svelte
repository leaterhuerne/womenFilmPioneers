<script lang="ts" crossorigin="anonymous">
    import T from "$lib/components/T.svelte";
    import {Europe} from "$lib/utils/geographic-map/Europe";
    import Refresh from "$lib/icons/components/Refresh.svelte";
    type language = {de: string, en: string};

    const EUROPA = "";
    const EUROPE_NAMES = {de: "Europa", en: "Europe"};
    const displayGenders = {
        female: {de: "Weiblich", en: "Female"},
        male: {de: "Männlich", en: "Male"},
        unknown: {de: "Divers/Unbekannt", en: "Queer/Unknown"}
    };

    export let data;
    export let year: number = 1926;
    export let country: string = EUROPA;
    export let genderDistribution = {                       // gender distribution data for each country
        DE: {female: "", male: "", unknown: ""}
    };
    export let profession: string = "";
    export let className: string = "";

    let genders: string[] = ["female", "male", "unknown"];  // array of the clicked genders
    let displayGendersDistribution = {};                    // gender distribution data for the current country
    let countryLanguages: language = EUROPE_NAMES;          // object of the de and en-name of the current country

    /**
     * Extracts the currently needed data from the genderDistribution object.
     * Result is either a gender distribution of the clicked country or the gender distribution of
     * all countries
     */
    function getGenderData() {
        genders = Object.keys(genderDistribution["DE"]);
        displayGendersDistribution = {};            // clear object
        if (country === EUROPA) {                   // no country is focused -> sum up all europe countries
            for (const gender in genderDistribution["DE"]) {
                displayGendersDistribution[gender] = 0;
            }
            for (const country in genderDistribution) {
                for (const gender in genderDistribution[country]) {
                    displayGendersDistribution[gender] += genderDistribution[country][gender];
                }
            }
        } else {                                    // a country is focused
            displayGendersDistribution = genderDistribution[country];
        }
    }

    /**
     * Creates a simple object that includes the german an english name ob the focused country or europe
     * if no country is focused
     */
    function getCountryNamesLang() {
        let europe = new Europe();
        if (country === EUROPA) {
            countryLanguages = EUROPE_NAMES;
        } else {
            countryLanguages = {de: europe[country].de, en: europe[country].en};
        }
    }
    let filmData: {"title": string, people: {name: string, gender:string, profession: string}[]}[]
        = [{"title": "title", people: [{name: "name", gender: "gender", profession: "profession"}]}];
    function getPersonFilmData() {
        data.getFilmsPerYear((json) => {
            filmData = []; //clear object
            Object.values(json)
                .map(e => {
                    const film = {
                        title: e["title"] as string,
                        people: e["people"] as {name: string, gender:string, profession: string}[]
                    };
                    filmData.push(film);
                })
        },
        year,
        country,
        genders
        );
    }

    $: {
        year = year;
        country = country;
        genderDistribution = genderDistribution;
        getGenderData();
        getCountryNamesLang();
        getPersonFilmData();
    }

    let windowWidth;

</script>

<svelte:window bind:innerWidth={windowWidth} />
<div class="{className}">
    <!-- Headline -->
    <h1 class="mb-4 text-3xl font-semibold text-center">
        <T de="Die Filmindustrie in {countryLanguages.de} im Jahr {year}"
           en="The film industry of {countryLanguages.en} in {year}"
        />
    </h1>
    <!-- Gender distribution -->
    <h2 class="mb-2 text-xl font-semibold">
        <T de="Geschlechterverteilung" en="Gender Distribution" />
    </h2>
    {#each genders as gender}
        <p>
            <T  de="{displayGenders[gender].de}"
                en={displayGenders[gender].en}
            />: {displayGendersDistribution[gender]}
        </p>
    {/each}
    <p class="pt-4 text-sm italic">
        <T de="Der folgende Film ist ein zufälliger Film aus ausgewähltem Jahr und Region.
                Die angezeigten Personen sind an dem Film beteiligt und stimmen mit den gewählten Geschlechtern überein.
                Für weitere zufällige Filme kann der Button rechts neben der Überschrift angeklickt werden."
           en="The following movie is a random movie from the selected year and region.
                The displayed people are involved in the film and match the chosen genders.
                For more random films, the button on the right side the heading can be clicked."
        />
    </p>
    <!-- Random film and persons: Headline -->
    <div class="mt-4 flex place-items-center">
        <h2 class="text-xl font-semibold">
            <T de="Filme und Personen" en="Films and People" />
        </h2>
        <button class="pl-2"
                on:click={getPersonFilmData}
        >
            {#if windowWidth < 768}
                <Refresh size=1.5 darkColor="#D2CAB3"/>
            {:else}
                <Refresh darkColor="#D2CAB3"/>
            {/if}
        </button>
    </div>
    {#each Object.keys(filmData) as film}
        <div class="">
            <!-- Random film and persons: Film -->
            <h3 class="mt-2 text-md font-semibold text-firebrick-700 dark:text-firebrick-500">
                {filmData[film].title}
            </h3>
            <!-- Random film and persons: Persons -->
            <ul class="">
                {#each filmData[film]["people"] as person, personIndex}
                    {#if personIndex < filmData[film]["people"].length - 1}
                        <li class="grid grid-cols-2 gap-2 border-b border-warm-gray-700 dark:border-warm-gray-800 py-2">
                            <span>{person.name}</span>
                            <span>{person.profession}</span>
                        </li>
                    {:else}
                        <li class="grid grid-cols-2 gap-2 pt-2 pb-4 border-b-2 border-warm-gray-900 dark:border-warm-gray-600 ">
                            <span>{person.name}</span>
                            <span>{person.profession}</span>
                        </li>
                    {/if}
                {/each}
            </ul>
        </div>
    {/each}
</div>