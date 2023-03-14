<script>
    import ColorPicker from "$lib/components/ColorPicker.svelte";
    let colors = [
        {
        title: "Wenige Frauen",
            rgb: {
                red: 204,
                green: 178,
                blue: 103
            }
        },
        {
            title: "Viele Frauen",
            rgb: {
                red: 122,
                green: 178,
                blue: 13
            }
        }
    ]

</script>

<ColorPicker bind:colors={colors} />
{colors[0].rgb.red}