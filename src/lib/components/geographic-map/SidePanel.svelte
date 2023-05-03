<script lang="ts" crossorigin="anonymous">
    import T from "$lib/components/T.svelte";
    import {Europe} from "$lib/utils/geographic-map/Europe";
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
    let filmData: {film: {name: string, people: {name: string, profession: string}[]}}
        = {film: {name: "", people: [{name: "", profession: ""}]}};

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
        if (country ===EUROPA) {
            countryLanguages = EUROPE_NAMES;
        } else {
            countryLanguages = {de: europe[country].de, en: europe[country].en};
        }
    }

    function getPersonFilmData() {
        data.getFilmsPerYear((json) => {
            filmData = {}; //clear object
            for(const filmId in json) {
                for(const personId in json[filmId]["people"]) {
                    if((country == "" || json[filmId]["location"].includes(country))
                        && genders.includes(json[filmId]["people"][personId]["gender"])
                        && (profession == "" || profession == json[filmId]["people"][personId]["profession"])) {
                        const person = {
                            name: json[filmId]["people"][personId]["name"],
                            profession: json[filmId]["people"][personId]["profession"]
                        };
                        if (!Object.keys(filmData).includes(filmId)) {
                            filmData[filmId] = {
                                name: json[filmId]["title"],
                                people: [person]
                            };
                        } else {
                            filmData[filmId]["people"].push(person);
                        }
                    }
                }
            }
        },
        year
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

</script>

<div class="{className}">
    <h1 class="mb-4 text-3xl font-semibold text-center">
        <T de="Die Filmindustrie in {countryLanguages.de} im Jahr {year}"
           en="The film industry of {countryLanguages.en} in {year}"
        />
    </h1>
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
    <h2 class="mt-4 text-xl font-semibold">
        <T de="Filme und Personen" en="Films and People" />
    </h2>
    {#each Object.keys(filmData) as filmId}
        <div class="">
            <h3 class="mt-2 text-md font-semibold text-firebrick-700 dark:text-firebrick-500">
                {filmData[filmId].name}
            </h3>
            <ul class="">
                {#each filmData[filmId]["people"] as person, personIndex}
                    {#if personIndex < filmData[filmId]["people"].length - 1}
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