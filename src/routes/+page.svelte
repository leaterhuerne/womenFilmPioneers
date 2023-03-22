<script>
    import YearNumbers from "$lib/components/geographic-map/YearNumbers.svelte";
    import HeatMap from "$lib/components/geographic-map/HeatMap.svelte";


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
</script>

Hello women's world!

<div>
    <div class="">
        <YearNumbers responsive="md" className="bg-indigo-200"/>
    </div>
    <div>
        <HeatMap countryHeatValues={heatMapBoundColors}/>
    </div>
</div>
