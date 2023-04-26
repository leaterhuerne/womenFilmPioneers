<script lang="ts">
    import {language} from "$lib/stores/language";
    import HeatMap from "$lib/components/geographic-map/HeatMap.svelte";
    import ColorPicker from "$lib/components/ColorPicker.svelte";
    import CheveronRight from "$lib/icons/components/CheveronRight.svelte";
    import YearNumbers from "$lib/components/geographic-map/YearNumbers.svelte";
    import HeatMapSettings from "$lib/components/geographic-map/HeatMapSettings.svelte";
    import T from "$lib/components/T.svelte";
    import {Europe} from "$lib/utils/geographic-map/Europe";
    import SidePanel from "$lib/components/geographic-map/SidePanel.svelte";

    /** @type {import('./$types').PageData} */
    export let data;    // data from load function in page.ts
    const ALLE = "";    // constant for "no specific profession is choosed"

    // Settings of the HeatMap
    let year: string = "1926";                                                  // current year
    let chosenGenders: {female: boolean, male: boolean, unknown: boolean} = {   // genders with boolean field...
        female: false, male: false, unknown: false                              // ...to mark as chosen
    };
    let chosenProfession: string = ALLE;                                          // chosen profession
    let heatMapColors: {name: string; value: number}[] = [];            // country with values between min and max
    let mapUpperBound: number = 0;                                      // upper bound of the map
    let countryAmount: {countryDE: string, countryEN: string, amount: number} = {countryDE: "", countryEN: "", amount: 0};

    // listener functionality of the HeatMap

    let countryFocused: {state: boolean, country: string} = {state: false, country: ""};
    function mouseClickAction(country) {
        mouseAction(country);
        // click on the fixed country
        if (countryFocused.state && countryFocused.country == country["key"]) {
            countryFocused = {state: false, country: ""};
        // click on a country but not the fixed one
        } else if (countryFocused.state && countryFocused.country != country["key"]) {
            countryFocused.country = country["key"];
        // no country is fixed
        } else {
            countryFocused = {state: true, country: country["key"]};
        }
    }
    function mouseHoverAction(country) {
        if (!countryFocused.state) {
            mouseAction(country);
        }
    }
    function mouseAction(country) {
        return countryAmount = {
            countryDE: country.de,
            countryEN: country.en,
            amount: calculatePersonsPerLocation(country["key"])
        };
    }

    let svgListeners: {                                                 // listener for action on country
        onClick: (country) => void,
        onMouseEnter: (country) => void,
        onMouseLeave: (country) => void
    } = {
        onClick: country => mouseClickAction(country),
        onMouseEnter: country => mouseHoverAction(country),
        onMouseLeave: country => mouseHoverAction(country)
    };
    // upper bound of the map is the maximum of persons of all years (true) or of the current year (false)
    let germanyCounted: boolean = true;

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
    function getChosenGenders(): string[] {
        let res = []
        Object.keys(chosenGenders).forEach(e => chosenGenders[e] ? res.push(e) : null);
        res = Object.values(chosenGenders).includes(true) ? res : ["male", "female", "unknown"];
        return res;
    }

    /**
     * Method to calculate for each country the amount of persons who worked there.
     * @param json database
     */
    function fillMap(json: JSON) {
        let countryPeopleAmount: {name: string, value: number}[] = [];
        let europe = new Europe();
        for (const country in europe) {
            countryPeopleAmount.push({name: country, value: 0});
        }
        for (const gender of getChosenGenders()) {
            for (const country in json[year][gender]) {
                if (chosenProfession === ALLE && json[year] != undefined) {         // all professions chosen
                    if (Object.keys(europe).includes(country)) {
                        let index = countryPeopleAmount.findIndex(entry => entry.name === country);
                        countryPeopleAmount[index].value += json[year][gender][country];
                    }
                } else {                                                            // specific profession
                    if (json[year] != undefined) {
                        if (Object.keys(europe).includes(country)) {
                            let index = countryPeopleAmount.findIndex(entry => entry.name === country);
                            countryPeopleAmount[index].value += json[year][gender][country][chosenProfession] ?? 0;
                        }
                    }
                }
            }
        }
        console.log(countryPeopleAmount)
        heatMapColors = countryPeopleAmount;
    }


    /**
     * Finds the amount of persons that worked in a specific country at the specified year
     * by searching in the heatMapColors object.
     * @param country
     */
    function calculatePersonsPerLocation(country: string): number {
        return heatMapColors.find(entry => entry.name === country).value;
    }

    /**
     * Calculates the maximum amount of all persons per year
     * @param json database
     */
    function calculateMaximumOfAllYears(json): void {
        mapUpperBound = 0;      // reset upper bound
        for (const yearEntry in json) {
            let amountPerYear: number = 0;
            for (const gender of getChosenGenders()) {
                for (const country in json[yearEntry][gender]) {
                    if (chosenProfession === ALLE) {        // all professions chosen
                        amountPerYear += json[yearEntry][gender][country] ?? 0;
                    } else {                                // specific profession
                        amountPerYear += json[yearEntry][gender][country][chosenProfession]?? 0;
                    }
                }
            }
            mapUpperBound = Math.max(mapUpperBound, amountPerYear);
        }
    }

    function calculateMaximumExcludingGermany(json): void {
        mapUpperBound = 0;      // reset upper bound
        for (const yearEntry in json) {
            let amountPerYear: number = 0;
            for (const gender of getChosenGenders()) {
                for (const country in json[yearEntry][gender]) {
                    // don't count germany
                    if (country === "(DE)" || country === "DE" || country === "DE(" || country === "De") {
                        continue;
                    }
                    if (chosenProfession === ALLE) {        // all professions chosen
                        amountPerYear += json[yearEntry][gender][country] ?? 0;
                    } else {                                // specific profession
                        amountPerYear += json[yearEntry][gender][country][chosenProfession] ?? 0;
                    }
                }
            }
            mapUpperBound = Math.max(mapUpperBound, amountPerYear);
        }
    }

    function calculateMaximum() {
        if (germanyCounted) {
            data.getDataProfession(calculateMaximumOfAllYears, chosenProfession);
        } else {
            data.getDataProfession(calculateMaximumExcludingGermany, chosenProfession);
        }
    }

    /**
     * Calculates the maximum amount of persons in the current year
     * @param json database
     */
    function calculateMaximumPerYear(json): void {
        mapUpperBound = 0;      // reset upper bound
        for (const gender of getChosenGenders()) {
            for (const country in json[year][gender]) {
                if (chosenProfession === ALLE && json[year] != undefined) {                 // all professions chosen
                    mapUpperBound += json[year][gender][country];
                } else {
                    mapUpperBound += json[year][gender][country][chosenProfession] ?? 0;    // specific profession
                }
            }
        }
        mapUpperBound = mapUpperBound === 0 ? 1 : mapUpperBound;
    }

    let sidePanelStatus: boolean = false;

    // if genders, profession or maximum-setting changes then maximum must be recalculated
    $: {
        // trigger re-rendering
        chosenGenders = chosenGenders;
        chosenProfession = chosenProfession;
        germanyCounted = germanyCounted;
        calculateMaximum();
    }

    function updateMap() {
        // no specific profession
        if (chosenProfession === ALLE) {
            data.getPersonData(fillMap, year);
            // specific profession
        } else {
            data.getDataSpecificYearAndProfession(fillMap, year, chosenProfession);
        }
    }

    // reactive block: update Heat map on each change of year or settings
    $: {
        chosenGenders = chosenGenders; // reactivity for changed gender buttons
        sidePanelStatus = !sidePanelStatus; // update SidePanel for changed year or genders
        chosenProfession = chosenProfession;
        year = year;
        updateMap();
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
                upperBound={mapUpperBound}
                lowerBound=0
                state={colorInput}
                listeners={svgListeners}
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
                    on:mouseenter={() => colorPickerVisibility = ""}
                    style="background: linear-gradient(0deg, rgba(255,0,0, 0.9) 10%,
                                                             rgba(0,255,0,0.9) 50%,
                                                             rgba(0,0,255,0.9) 90%);
                    "
            >
                <CheveronRight size={windowWidth < 768 ? 2 : 4} darkColor="black"/>
            </button>
        </div>
        <!-- Information to amount of persons per country -->
        <p>
            <T de="Ein maximal eingefärbtes Land entspricht {mapUpperBound} Personen."
               en="A maximum colored country equals {mapUpperBound} persons."
            />
        </p>
        <p>
            <T de="In {countryAmount.countryDE} waren {countryAmount.amount} Personen beschäftigt."
               en="In {countryAmount.countryEN} worked {countryAmount.amount} persons."
            />
        </p>
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
            <HeatMapSettings
                    data={data}
                    bind:genders={chosenGenders}
                    bind:profession={chosenProfession}
                    bind:absoluteMap={germanyCounted}
            />
        </div>
    </div>
    <!-- Detailed Information to Women -->
    <div class="md:border-l p-2 border-firebrick-500 dark:border-firebrick-1000 h-full">
        Detaillierte Informationen:
        <SidePanel genders={getChosenGenders()}
                   state={sidePanelStatus}
        />
    </div>
</div>
