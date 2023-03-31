<script lang="ts">
    import {language} from "$lib/stores/language";
    import HeatMap from "$lib/components/geographic-map/HeatMap.svelte";
    import ColorPicker from "$lib/components/ColorPicker.svelte";
    import CheveronRight from "$lib/icons/components/CheveronRight.svelte";
    import YearNumbers from "$lib/components/geographic-map/YearNumbers.svelte";
    import HeatMapSettings from "$lib/components/geographic-map/HeatMapSettings.svelte";

    /** @type {import('./$types').PageData} */
    export let data;    // data from load function in page.ts

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
    let year: string = "1917";                                                  // current year
    let chosenGenders: {female: boolean, male: boolean, unknown: boolean} = {   // genders with boolean field...
        female: false, male: false, unknown: false                              // ...to mark as chosen
    };
    let chosenProfession: string = "";                                          // chosen profession
    let heatMapColors: {name: string; value: number}[] = [];            // country with values between min and max

     /*Random Colors for the HeatMap:
        // create Random values between lower bound and upper bound for coloring the HeatMap
        let countryWithColors = new Europe();
        let europeCountryNames = Object.entries(countryWithColors);
        for (const country of europeCountryNames) {
        let randomColor: {name: string; value: number} = {name: country.at(0), value: Math.random() * 100};
        heatMapColors.push(randomColor);
    }*/

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


    /**
     * The method returns the real gender status of the gender buttons. If no gender is chosen
     * all genders should be considered.
     * @return Returns an object with all genders and its real status to be considered.
     */
    function getActualGenderStatus(): {female: boolean, male: boolean, unknown: boolean} {
        let genderStatus: { female: boolean, male: boolean, unknown: boolean } = {...chosenGenders};
        if (!genderStatus.female && !genderStatus.male && !genderStatus.unknown) {
            for (const gender of Object.keys(genderStatus)) {
                genderStatus[gender] = true;
            }
        }
        return genderStatus;
    }

    function fillMap(json: JSON) {
        function logCountryCodesValuesMap() {
            let log = "fillMap: \n";
            for (const key in countryCodesValuesMap) {
                log += key + "/" + countryCodesValuesMap[key].name + ": " + countryCodesValuesMap[key].value + "\n";
            }
            console.log(log);
        }
        // if no gender is chosen all genders should be calculated
        let genderStatus = getActualGenderStatus();
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
         */
        let countryCodesValuesMap = {};
        for (const country of Object.keys(countryCodesMap)) {
            countryCodesValuesMap[country] = {name: countryCodesMap[country], value: 0};
        }
        for (const gender in genderStatus) {
            // is current gender chosen?
            if (genderStatus[gender]) {
                // no specific profession chosen
                if (chosenProfession === "") {
                    for (const country in json[year][gender]) {
                        if (Object.keys(countryCodesValuesMap).includes(country)) {
                            countryCodesValuesMap[country].value += json[year][gender][country];
                        }
                    }
                // specific profession
                } else {
                    for (const country in json[year][gender]) {
                        if (Object.keys(countryCodesValuesMap).includes(country)) {
                            countryCodesValuesMap[country].value += json[year][gender][country][chosenProfession]?? 0;
                        }
                    }
                }
            }
        }
        //logCountryCodesValuesMap();
        heatMapColors = Object.values(countryCodesValuesMap);
        console.log(heatMapColors);
    }


    let maxPersonsOfAllYears: number = 0;       // upper bound of the map
    function calculateMaximumOfAllYears(json): void {
        maxPersonsOfAllYears = 0;
        let genderStatus = getActualGenderStatus();
        for (const yearEntry in json) {
            let amountPerYear: number = 0;
            for (const gender in genderStatus) {
                // is current gender chosen
                if (genderStatus[gender]) {
                    // no specific profession chosen
                    if (chosenProfession === "") {
                        for (const country in json[yearEntry][gender]) {
                            if (Object.keys(countryCodesMap).includes(country)) {
                                amountPerYear += json[yearEntry][gender][country];
                                console.log(amountPerYear);
                            }
                        }
                    // specific profession
                    } else {
                        for (const country in json[yearEntry][gender]) {
                            if (Object.keys(countryCodesMap).includes(country)) {
                                amountPerYear += json[yearEntry][gender][country][chosenProfession]?? 0;
                            }
                        }
                    }
                }
            }
            maxPersonsOfAllYears = Math.max(maxPersonsOfAllYears, amountPerYear);
        }
    }

    // if genders or profession changes then maxima must be recalculated
    $: {
        chosenGenders = chosenGenders;
        chosenProfession = chosenProfession;
        data.getData(json => calculateMaximumOfAllYears(json));

    }

    // reactive block: update Heat map on each change of year or settings
    $: {
        chosenGenders = chosenGenders; // reactivity for changed gender buttons
        // no specific profession
        if (chosenProfession === "") {
            data.getData(json => {fillMap(json)}, year);
        // specific profession
        } else {
            data.getData(json => {fillMap(json)}, year, undefined, chosenProfession);
        }
    }

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
                countryHeatValues={heatMapColors}
                colorFrom={heatMapBoundColors[0].rgb}
                colorTo={heatMapBoundColors[1].rgb}
                upperBound={maxPersonsOfAllYears}
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
            <HeatMapSettings data={data} bind:genders={chosenGenders} bind:profession={chosenProfession} />
        </div>
    </div>




    <!-- Detailed Information to Women -->
    <div class="md:border-l p-2 border-firebrick-500 dark:border-firebrick-1000 h-full">
        Detaillierte Informationen
    </div>
</div>
