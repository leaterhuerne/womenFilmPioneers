<script lang="ts">
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
    export let year: number = 1926;
    export let country: string = EUROPA;
    export let genderDistribution = {};                     // gender distribution data for each country
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
        //TODO genders ist beim Laden der Webseite undefined/ null -> internal error
        //genders = Object.keys(genderDistribution["DE"]);
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
        //console.log(displayGendersDistribution);
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

    $: {
        year = year;
        country = country;
        genderDistribution = genderDistribution;
        getGenderData();
        getCountryNamesLang();
    }

</script>

<div class="{className}">
    <h1 class="text-3xl font-semibold text-center">
        <T de="Die Filmindustrie in {countryLanguages.de} im Jahr {year}"
           en="The film industry of {countryLanguages.en} in {year}"
        />
    </h1>
    <h2 class="text-lg font-semibold">
        Geschlechterverteilung
    </h2>
    {#each genders as gender}
        <p>
            <T  de="{displayGenders[gender].de}"
                en={displayGenders[gender].en}
            />: {displayGendersDistribution[gender]}
        </p>
    {/each}
</div>