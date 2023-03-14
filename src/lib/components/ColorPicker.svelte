<script lang="ts">
    type rgb = {red: number, green: number, blue: number};
    export let colors: {title:string, rgb: rgb}[] = [
        {
            title: "Color",
            rgb: {
                red: 204,
                green: 178,
                blue: 103
            }
        }
    ];
    let activeColorField = 0;

    let hex: string;

    function setHex() {
        hex = "#";
        hex += colors[activeColorField].rgb.red.toString(16).padStart(2, "0");
        hex += colors[activeColorField].rgb.green.toString(16).padStart(2, "0");
        hex += colors[activeColorField].rgb.blue.toString(16).padStart(2, "0");
    }
    setHex();

    function setRgb() {
        colors[activeColorField].rgb.red = parseInt(hex.slice(1, 3), 16);
        colors[activeColorField].rgb.green = parseInt(hex.slice(3, 5), 16);
        colors[activeColorField].rgb.blue = parseInt(hex.slice(5, 7), 16);
        setColour(activeColorField);
    }

    let backgroundColorStyle = new Array(colors.length);

    function setColour(index: number) {
        backgroundColorStyle[index] = "background: rgb(" + colors[index].rgb.red + ", " + colors[index].rgb.green + ", " +colors[index].rgb.blue + ");";
        setHex();
    }

    for(let i = 0; i < colors.length; i++) {
        setColour(i);
    }


    let highlightColorField: string[] = new Array(colors.length);
    highlightColorField[activeColorField] = "border-2 border-black";
    function activateColorField(colorIndex: number): void {
        activeColorField = colorIndex;
        highlightColorField = new Array(colors.length).fill("");
        highlightColorField[activeColorField] = "border-2 border-black";

        
    }

    const generateSliderBackground = (value: number, rgb: string) => {
        let str = "background: linear-gradient(90deg, rgb(" + rgb + ") " + (value / 255) * 100 + "%, rgb(255, 255, 255) " + (value / 255) * 100 +"%";
        console.log(str);
        return str;
    }

</script>

<div class="p-2 grid grid-cols-2 gap-2 w-96">
    <div class="flex flex-col justify-between border-2 border-red-500">
        {#each colors as color, colorIndex}
            <div class="flex justify-between">
                <h1>{color.title}</h1>
                <div
                        class="w-10 aspect-square border-black {highlightColorField[colorIndex]}"
                        style={backgroundColorStyle[colorIndex]}
                        on:click={() => {activateColorField(colorIndex)}}
                ></div>
            </div>
        {/each}
    </div>
    <div class="w-60 flex flex-col justify-between">
        <div class="flex justify-between">
            <h1>HEX</h1>
            <input class="w-4/5" type="text" bind:value={hex} on:change={setRgb}>
        </div>
        <div class="flex justify-between">
            <h1>R</h1>
            <input
                    class="w-4/5"
                    type="range"
                    bind:value={colors[activeColorField].rgb.red}
                    min="0"
                    max="255"
                    on:input={() => setColour(activeColorField)}
            />
        </div>
        <div class="flex justify-between">
            <h1>G</h1>
            <input
                    class="w-4/5"
                    type="range"
                    bind:value={colors[activeColorField].rgb.green}
                    min="0"
                    max="255"
                    on:input={() => setColour(activeColorField)}
            />
        </div>
        <div class="flex justify-between">
            <h1>B</h1>
            <input
                    class="w-4/5 bg-blue"
                    type="range"
                    bind:value={colors[activeColorField].rgb.blue}
                    min="0"
                    max="255"
                    on:input={() => setColour(activeColorField)}
            />
        </div>
    </div>
</div>