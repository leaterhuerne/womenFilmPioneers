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
    let people: {name: string, profession: string}[] = new Array(3).fill({name: "name", profession: "profession"});

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

    function getPersons() {
        data.getPersonPerYear((json) => {
                const res = new Set();
                /*for (const film in json) {
                    for (const person in json[film]["people"]) {
                        if (country == "") {        // all countries
                            for (const gender of genders) {
                                if (json[film]["people"][person]["gender"] == gender) {
                                    res.add({name: person, profession: json[film]["people"][person]["profession"]});
                                }
                            }
                        } else {                    // specific country
                            for (const location of json[film]["location"]) {
                                if (location == country) {
                                    for (const gender of genders) {
                                        if (json[film]["people"][person]["gender"] == gender) {
                                            res.add({name: person, profession: json[film]["people"][person]["profession"]});
                                        }
                                    }
                                }
                            }
                        }
                    }
                }*/
                for(const film in json) {
                    for(const person in json[film]["people"]) {
                        if(
                            (country == "" || json[film]["location"].includes(country))
                            && genders.includes(json[film]["people"][person]["gender"])
                            && (profession === "" || profession === json[film]["people"][person]["profession"])
                        ) {
                            res.add({name: person, profession: json[film]["people"][person]["profession"]});
                        }
                    }
                }
                people = Array.from(res).sort(() => 0.5 - Math.random());
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
        getPersons();
    }

</script>

<div class="{className}">
    <h1 class="text-3xl font-semibold text-center">
        <T de="Die Filmindustrie in {countryLanguages.de} im Jahr {year}"
           en="The film industry of {countryLanguages.en} in {year}"
        />
    </h1>
    <h2 class="text-lg font-semibold">
        <T de="Geschlechterverteilung" en="Gender Distribution" />
    </h2>
    {#each genders as gender}
        <p>
            <T  de="{displayGenders[gender].de}"
                en={displayGenders[gender].en}
            />: {displayGendersDistribution[gender]}
        </p>
    {/each}
    <h2 class="mt-4 text-lg font-semibold">
        <T de="Personen" en="People" />
    </h2>
    {#each people as person}
        <div class="grid grid-cols-2">
            <p>
                {person.name}
            </p>
            <p>
                {person.profession}
            </p>
        </div>
    {/each}
</div>