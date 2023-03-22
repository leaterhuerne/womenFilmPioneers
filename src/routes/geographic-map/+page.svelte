<script lang="ts">
    import {Europe} from "$lib/utils/geographic-map/Europe";
    import HeatMap from "$lib/components/geographic-map/HeatMap.svelte";
    import ColorPicker from "$lib/components/ColorPicker.svelte";
    import CheveronRight from "$lib/icons/components/CheveronRight.svelte";
    import YearNumbers from "$lib/components/geographic-map/YearNumbers.svelte";

    // create Random values between lower bound and upper bound for coloring the HeatMap
    let countryWithColors = new Europe();
    let europeCountryNames = Object.entries(countryWithColors);
    let heatMapRandomColors: {name: string; value: number}[] = [];
    for (const country of europeCountryNames) {
        let randomColor: {name: string; value: number} = {name: country.at(0), value: Math.random() * 100};
        heatMapRandomColors.push(randomColor);
    }

    let heatMapBoundColors = [              // Array with 2 entries for the colors with the minimum and maximum heat
        {
            title: "start color",
            rgb: {
                red: 0,
                green: 0,
                blue: 139
            }
        },
        {
            title: "end color",
            rgb: {
                red: 238,
                green: 30,
                blue: 29
            }
        },
    ]

    let colorInput = false;

    let year: string = "1890";

    /////////////// Styling functionality \\\\\\\\\\\\\\\

    let colorPickerVisibility: string = "-translate-x-[84%]";
    let windowWidth = 0;    // current width of the window
    const MD = 768;         // constant for windowWidth of tailwind md: property

</script>

<svelte:window bind:innerWidth={windowWidth} />
<div class="grid grid-cols-1 md:grid-cols-3 border-4 border-green-400">
    <!-- Map with ColorPicker and YearNumbers -->
    <div class="relative w-full md:col-span-2">
        <!-- Map -->
        <HeatMap
                className="absolute bg-slate-100"
                countryHeatValues={heatMapRandomColors}
                colorFrom={heatMapBoundColors[0].rgb}
                colorTo={heatMapBoundColors[1].rgb}
                upperBound=100
                lowerBound=0
                state={colorInput}
        />
        <!-- ColorPicker and Button -->
        <div
                class="mt-2 absolute flex {colorPickerVisibility}  rounded-r-md duration-500"
                on:mouseleave={() => colorPickerVisibility = "-translate-x-[84%]"}
        >
            <ColorPicker
                    className="bg-paper-100 opacity-90"
                    bind:colors={heatMapBoundColors}
                    onInput={() => colorInput = !colorInput}
            />
            <button
                    class="grid place-items-center bg-firebrick-400 rounded-r-md w-[20%] h-10 md:h-20"
                    on:mouseover={() => colorPickerVisibility = ""}
                    style="background: linear-gradient(0deg, rgba(255,0,0, 0.9) 10%,
                                                             rgba(0,255,0,0.9) 50%,
                                                             rgba(0,0,255,0.9) 90%);
                    "
            >
                <CheveronRight size={windowWidth < 768 ? 2 : 4} />
            </button>
        </div>
        <!-- Year numbers -->
        {#if windowWidth >= MD}
            <!-- Year numbers on top right side in the map -->
            <div class="mt-2 mr-2
                        absolute right-0 top-0
                        sm:scale-100
                "
            >
                <YearNumbers bind:year={year} responsive="md"/>
            </div>
        {/if}
    </div>
    <!-- Year number on bottom of the map -->
    {#if windowWidth < MD}
        <div class="m-2">
            <YearNumbers bind:year={year} className="bg-freshonion-200" />
        </div>
    {/if}
    <!-- Detailed Information to Women -->
    <div class="border-4 border-freshonion-900 h-screen">
        Detallierte Informationen
    </div>
</div>
