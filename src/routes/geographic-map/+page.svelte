<script lang="ts">
    import {Europe} from "$lib/utils/geographic-map/Europe";
    import HeatMap from "$lib/components/geographic-map/HeatMap.svelte";
    import ColorPicker from "$lib/components/ColorPicker.svelte";

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
</script>

<div>
    <ColorPicker
            bind:colors={heatMapBoundColors}
            onInput={() => colorInput = !colorInput}
    />
    <HeatMap
            countryHeatValues={heatMapRandomColors}
            colorFrom={heatMapBoundColors[0].rgb}
            colorTo={heatMapBoundColors[1].rgb}
            upperBound=100
            lowerBound=0
            state={colorInput}
    />
</div>