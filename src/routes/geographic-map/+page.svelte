<script lang="ts">
    import {Europe} from "$lib/utils/geographic-map/Europe";
    import HeatMap from "$lib/components/geographic-map/HeatMap.svelte";
    import ColorPicker from "$lib/components/ColorPicker.svelte";
    import CheveronRight from "$lib/icons/components/CheveronRight.svelte";
    import YearNumbers from "$lib/components/geographic-map/YearNumbers.svelte";
    import {language} from "$lib/stores/language";
    import data from "$lib/data/genders_by_year_profession_location.json";
    import HeatMapSettings from "$lib/components/geographic-map/HeatMapSettings.svelte";

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
    $: {
        currentLanguage = $language === "de" ? colorPickerNamesDE : colorPickerNamesEN;
        heatMapBoundColors[0].title = currentLanguage[0];
        for (let i = 0; i < heatMapBoundColors.length; i++) {
            heatMapBoundColors[i].title = currentLanguage[i];
        }
    }

    let colorInput = false;         // for recognizing a change og the color input
    let year: string = "1890";      // current year

    function fillMap(): void {
        /* TODO: Komponente für Einstellmöglichkeiten an der HEatMap schreiben,
            dann hierher die Einstellungen bringen und entsprechende Werte aus der Database herausholen.
        */

        let countries: string[] = Object.entries(new Europe()).map(country => country.at(0));
        let heatMapValues: {name: string; value: number}[] = [];
        for (const country of countries) {

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
        <div class="mb-0.5">
            <HeatMapSettings />
        </div>
    </div>




    <!-- Detailed Information to Women -->
    <div class="md:border-l p-2 border-firebrick-500 dark:border-firebrick-1000 h-full">
        Detaillierte Informationen
    </div>
</div>
