<script lang="ts">
    import {Europe} from "$lib/utils/geographic-map/Europe";
    import HeatMap from "$lib/components/geographic-map/HeatMap.svelte";
    import ColorPicker from "$lib/components/ColorPicker.svelte";
    import CheveronRight from "$lib/icons/components/CheveronRight.svelte";
    import YearNumbers from "$lib/components/geographic-map/YearNumbers.svelte";
    import {language} from "$lib/stores/language";
    //import data from "$lib/data/genders_by_year_profession_location.json";
    import HeatMapSettings from "$lib/components/geographic-map/HeatMapSettings.svelte";

    /** @type {import('./$types').PageData} */
    export let data;

    console.log(data.professionList);

    // a map of country codes as key and name of the country as value
    const countryCodesMap = {
        DE: "germany",
        UK: "unitedKingdom",
        FR: "france",
        IT: "italy",
        ES: "spain",
        UA: "ukraine",
        PL: "poland",
        RO: "romania",
        NL: "netherlands",
        BE: "belgium",
        CZ: "czechia",
        EL: "greece",
        PT: "portugal",
        SE: "sweden",
        HU: "hungary",
        BY: "belarus",
        AT: "austria",
        CH: "switzerland",
        BG: "bulgaria",
        DK: "denmark",
        FI: "finland",
        SK: "slovakia",
        NO: "norway",
        IE: "ireland",
        HR: "croatia",
        MD: "moldova",
        BA: "bosniaAndHerzegovina",
        AL: "albania",
        LT: "lithuania",
        MK: "northMacedonia",
        SI: "slovenia",
        LV: "latvia",
        EE: "estonia",
        LU: "luxembourg",
        TR: "turkey"
    };

    // Settings of the HeatMap
    let year: string = "1890";                                                  // current year
    let chosenGenders: {female: boolean, male: boolean, unknown: boolean} = {   // genders with boolean field...
        female: false, male: false, unknown: false                              // ...to mark as chosen
    };
    let chosenProfession: string = "";                                          // chosen profession

    // create Random values between lower bound and upper bound for coloring the HeatMap
    let countryWithColors = new Europe();
    let europeCountryNames = Object.entries(countryWithColors);
    let heatMapRandomColors: {name: string; value: number}[] = [];
    for (const country of europeCountryNames) {
        let randomColor: {name: string; value: number} = {name: country.at(0), value: Math.random() * 100};
        heatMapRandomColors.push(randomColor);
    }

    // initial color of the HeatMap
    let heatMapBoundColors = [              // Array with 2 entries for the colors with the minimum and maximum heat
        {
            title: "",
            rgb: {
                red: 0,
                green: 0,
                blue: 139
            }
        },
        {
            title: "",
            rgb: {
                red: 238,
                green: 30,
                blue: 29
            }
        },
    ]

    // Sets the names for the Color Picker in the correct language
    const colorPickerNamesDE = ["Wenig Aktivität", "Viel Aktivität"];   // german names
    const colorPickerNamesEN = ["Little activity", "Much activity"];    // english names
    let currentLanguage: string[];                                      // names in the current language
    // Color picker: write words in the correct language
    $: {
        currentLanguage = $language === "de" ? colorPickerNamesDE : colorPickerNamesEN;
        heatMapBoundColors[0].title = currentLanguage[0];
        for (let i = 0; i < heatMapBoundColors.length; i++) {
            heatMapBoundColors[i].title = currentLanguage[i];
        }
    }

    let colorInput = false;         // for recognizing a change of the color input

    /*
    function countOccurrencesForCountryAndProfession(country: string, gender: string): number {
        if (chosenProfession === "") {
            console.log(country + " \n" + data[year][gender]["locations"][country]);
            return data[year][gender]["locations"][country]["occurences"];
        } else {
            if (data[year][gender]["locations"][country]["professions"][chosenProfession] != undefined) {
                return data[year][gender]["locations"][country]["professions"][chosenProfession];
            } else {
                return 0;
            }
        }
    }

     */

    /*
    function fillMap(): void {
        /* old code with country ARRAY
        let countries: string[] = Object.entries(new Europe()).map(country => country.at(0));
        // initialize object with country names and "heatmap"-value 0
        let heatMapValues: {name: string; value: number}[] = [];
        countries.forEach(country => heatMapValues.push({name: country, value: 0}));

        /* {
                "DE": {
                    "name": "germany",
                    "value": 0
                },
                "UK": {
                    "name": "unitedKingdom",
                    "value": 0
                },
                ...
           }

        let countryCodesValuesMap = {};
        for (const country of Object.keys(countryCodesMap)) {
            countryCodesValuesMap[country] = {name: countryCodesMap[country], value: 0};
        }
        let genderStatus: {female: boolean, male: boolean, unknown: boolean} = { ...chosenGenders };
        // if no gender is chosen all genders should be calculated
        if (!genderStatus.female && !genderStatus.male && !genderStatus.unknown) {
            for (const gender of Object.keys(genderStatus)) {
                genderStatus[gender] = true;
            }
        }

        if (genderStatus.female) {
            for (const country of Object.keys(data[year]["female"]["locations"])) {
                //console.log(year + " country: " + countryCodesValuesMap[country].value);
                if (Object.keys(countryCodesValuesMap).includes(country.toString())) {
                    countryCodesValuesMap[country].value += countOccurrencesForCountryAndProfession(country, "female");
                }
            }
        }
        if (genderStatus.male) {
            for (const country of Object.keys(data[year]["female"]["locations"])) {
                if (Object.keys(countryCodesValuesMap).includes(country.toString())) {
                    countryCodesValuesMap[country].value += countOccurrencesForCountryAndProfession(country, "male");
                }
            }
        }
        if (genderStatus.unknown) {
            for (const country of Object.keys(data[year]["female"]["locations"])) {
                if (Object.keys(countryCodesValuesMap).includes(country.toString())) {
                    countryCodesValuesMap[country].value += countOccurrencesForCountryAndProfession(country, "unknown");
                }
            }
        }
        heatMapRandomColors = Object.values(countryCodesValuesMap);
    }
    fillMap();
    // TODO: fillMap vollenden und berichtigen
    */

    /////////////// Styling functionality \\\\\\\\\\\\\\\

    let colorPickerVisibility: string = "-translate-x-[84%] 2xl:translate-x-0";
    let windowWidth = 0;    // current width of the window
    const MD = 768;         // constant for windowWidth of tailwind md: property
</script>

<svelte:window bind:innerWidth={windowWidth} />
<div class="grid grid-cols-1 grow md:grid-cols-3">
    <!-- Map with ColorPicker and YearNumbers -->
    <div class="relative w-full md:col-span-2">
        <!-- Map -->
        <HeatMap
                className="relative p-2"
                countryHeatValues={heatMapRandomColors}
                colorFrom={heatMapBoundColors[0].rgb}
                colorTo={heatMapBoundColors[1].rgb}
                upperBound=100
                lowerBound=0
                state={colorInput}
        />
        <!-- ColorPicker and Button -->
        <div
                class="mt-2 absolute left-0 top-0 flex {colorPickerVisibility}  rounded-r-md duration-500"
                on:mouseleave={() => colorPickerVisibility = "-translate-x-[84%] 2xl:translate-x-0"}
        >
            <ColorPicker
                    className="bg-paper-100 dark:bg-warm-gray-800 opacity-90"
                    bind:colors={heatMapBoundColors}
                    onInput={() => colorInput = !colorInput}
            />
            <button
                    class="
                        grid place-items-center
                        rounded-r-md
                        w-[20%]
                        h-10 md:h-20 2xl:hidden"
                    on:mouseover={() => colorPickerVisibility = ""}
                    style="background: linear-gradient(0deg, rgba(255,0,0, 0.9) 10%,
                                                             rgba(0,255,0,0.9) 50%,
                                                             rgba(0,0,255,0.9) 90%);
                    "
            >
                <CheveronRight size={windowWidth < 768 ? 2 : 4} darkColor="black"/>
            </button>
        </div>
        <!-- SCREEN: Year numbers on top right side in the map -->
        {#if windowWidth >= MD}
            <div class="mt-2 mr-2
                        absolute right-0 top-0
                        sm:scale-100
                "
            >
                <YearNumbers bind:year={year} responsive="md"/>
            </div>
        {/if}
        <!-- MOBILE: Year number on bottom of the map -->
        {#if windowWidth < MD}
            <div class="m-2">
                <YearNumbers bind:year={year} className="bg-amber-400 dark:bg-firebrick-800" />
            </div>
        {/if}
        <!-- Settings for HeatMap -->
        <div class="m-2">
            <HeatMapSettings bind:genders={chosenGenders} bind:profession={chosenProfession} />
        </div>
    </div>




    <!-- Detailed Information to Women -->
    <div class="md:border-l p-2 border-firebrick-500 dark:border-firebrick-1000 h-full">
        Detaillierte Informationen
    </div>
</div>
