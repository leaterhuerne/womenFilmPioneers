<script lang="ts">
    import {Europe} from "$lib/utils/geographic-map/Europe";
    import HeatMap from "$lib/components/geographic-map/HeatMap.svelte";
    import ColorPicker from "$lib/components/ColorPicker.svelte";
    import CheveronRight from "$lib/icons/components/CheveronRight.svelte";

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

    /////////////// Styling functionality \\\\\\\\\\\\\\\

    let colorPickerVisibility: string = "-translate-x-[84%]";

</script>

<div class="relative w-full">
    <!-- Map -->
    <HeatMap
            className="absolute"
            countryHeatValues={heatMapRandomColors}
            colorFrom={heatMapBoundColors[0].rgb}
            colorTo={heatMapBoundColors[1].rgb}
            upperBound=100
            lowerBound=0
            state={colorInput}
    />
    <!-- ColorPicker and Button -->
    <div
            class="mt-2 absolute flex {colorPickerVisibility} bg-paper-100 opacity-90 rounded-r-md duration-500"
            on:mouseleave={() => colorPickerVisibility = "-translate-x-[84%]"}
    >
        <ColorPicker
                bind:colors={heatMapBoundColors}
                onInput={() => colorInput = !colorInput}
        />
        <button
                class="bg-firebrick-400 rounded-r-md w-[20%]"
                on:mouseover={() => colorPickerVisibility = ""}
                style="background: linear-gradient(0deg, rgba(255,0,0, 0.9) 10%, rgba(0,255,0,0.9) 50%, rgba(0,0,255,0.9) 90%);"
        >
            <CheveronRight size=4 />
        </button>
    </div>
    <!-- Year numbers -->
    <div class="mt-2 absolut right-0">
        <!-- TODO component for choosing year -->
    </div>
</div>
