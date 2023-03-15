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
    export let onInput: () => void;                                     // listener for changed colors
    export let className: string = "";                                  // css styling attributes can be placed here

    let activeColorField = 0;                                           // index of active colour field
    let hex: string;                                                    // hex representation of active colour
    let backgroundColorStyle = new Array(colors.length);                // backGroundColors of all fields
    let highlightColorField: string[] = new Array(colors.length);       // highlighting of active field

    /**
     * Sets the hex value based on the active colour.
     */
    function setHex() {
        hex = "#";
        hex += colors[activeColorField].rgb.red.toString(16).padStart(2, "0");
        hex += colors[activeColorField].rgb.green.toString(16).padStart(2, "0");
        hex += colors[activeColorField].rgb.blue.toString(16).padStart(2, "0");
    }

    /**
     * Sets the rgb value of the active colours based on the hex value
     */
    function setRgb() {
        colors[activeColorField].rgb.red = parseInt(hex.slice(1, 3), 16);
        colors[activeColorField].rgb.green = parseInt(hex.slice(3, 5), 16);
        colors[activeColorField].rgb.blue = parseInt(hex.slice(5, 7), 16);
        setColour(activeColorField);
        onInput();
    }

    /**
     * Sets the background-colour of the given color field.
     * @param colourFieldIndex index of color field
     */
    function setColour(colourFieldIndex: number) {
        backgroundColorStyle[colourFieldIndex] = "background: rgb(" + colors[colourFieldIndex].rgb.red + ", " + colors[colourFieldIndex].rgb.green + ", " +colors[colourFieldIndex].rgb.blue + ");";
        setHex();
        onInput();
    }

    /**
     * Activates the given color field. All changes of sliders or the hex value only effect this field from now on.
     * @param colorFieldIndex index of colour field
     */
    function activateColorField(colorFieldIndex: number): void {
        activeColorField = colorFieldIndex;
        highlightColorField = new Array(colors.length).fill("");
        highlightColorField[activeColorField] = "border-2 border-black";
        setHex();
    }

    // Initialization of the component
    setHex();
    for(let i = 0; i < colors.length; i++) {
        setColour(i);
    }
    highlightColorField[activeColorField] = colors.length > 1 ? "border-2 border-black" : "";
</script>

<style>
    :root {
        --trackColor: red;
        --thumbColor: rgb(100, 100, 100);
        --thumbDiameter: 10px;
    }

    input[type=range] {
        background-color: inherit;
        -webkit-appearance: none;
        width: 100%;
    }
    input[type=range]:focus {
        outline: none;
    }
    input[type=range]::-webkit-slider-runnable-track {
        width: 100%;
        height: 5px;
        cursor: pointer;
        animate: 0.2s;
        background: var(--trackColor);
        border-radius: 1px;
        border: 0 solid #000000;
    }
    input[type=range]::-webkit-slider-thumb {
        height: var(--thumbDiameter);
        width: var(--thumbDiameter);
        border-radius: 25px;
        background: var(--thumbColor);
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -7px;
    }
    input[type=range]:focus::-webkit-slider-runnable-track {
        background: var(--trackColor);
    }
    input[type=range]::-moz-range-track {
        width: 100%;
        height: 5px;
        cursor: pointer;
        animate: 0.2s;
        background: var(--trackColor);
        border-radius: 1px;
        border: 0 solid #000000;
    }
    input[type=range]::-moz-range-thumb {
        height: var(--thumbDiameter);
        width: var(--thumbDiameter);
        border-radius: 25px;
        border-color: rgba(0,0,0,0);
        background: var(--thumbColor);
        cursor: pointer;
    }
    input[type=range]::-ms-track {
        width: 100%;
        height: 5px;
        cursor: pointer;
        animate: 0.2s;
        background: transparent;
        border-color: transparent;
        color: transparent;
    }
    input[type=range]::-ms-fill-lower {
        background: var(--trackColor);
        border: 0 solid #000000;
        border-radius: 2px;
    }
    input[type=range]::-ms-fill-upper {
        background: var(--trackColor);
        border: 0 solid #000000;
        border-radius: 2px;
    }
    input[type=range]::-ms-thumb {
        margin-top: 1px;
        height: var(--thumbDiameter);
        width: var(--thumbDiameter);
        border-radius: 25px;
        background: var(--thumbColor);
        cursor: pointer;
    }
    input[type=range]:focus::-ms-fill-lower {
        background: var(--trackColor);
    }
    input[type=range]:focus::-ms-fill-upper {
        background: var(--trackColor);
    }

</style>

<div class="p-2 grid grid-cols-1 gap-2 w-full max-w-[30rem] {className}">
    <div class="grid grid-cols-{colors.length} gap-2">
        {#each colors as color, colorIndex}
            <div class="flex flex-col justify-between place-items-center">
                <h1>{color.title}</h1>
                <button
                        class="w-full h-12 mt-2 border-black {highlightColorField[colorIndex]}"
                        style={backgroundColorStyle[colorIndex]}
                        on:click={() => {activateColorField(colorIndex)}}>
                </button>
            </div>
        {/each}
    </div>
    <div class="w-full flex flex-col justify-between">
        <div class="flex justify-between gap-2">
            <h1>HEX</h1>
            <input class="w-full" type="text" bind:value={hex} on:change={setRgb}>
        </div>
        <div class="flex justify-between">
            <input
                    style="--trackColor: red"
                    type="range"
                    bind:value={colors[activeColorField].rgb.red}
                    min="0"
                    max="255"
                    on:input={() => setColour(activeColorField)}
            />
        </div>
        <div class="flex justify-between">
            <input
                    style="--trackColor: #00ff00"
                    type="range"
                    bind:value={colors[activeColorField].rgb.green}
                    min="0"
                    max="255"
                    on:input={() => setColour(activeColorField)}
            />
        </div>
        <div class="flex justify-between">
            <input
                    style="--trackColor: blue"
                    type="range"
                    bind:value={colors[activeColorField].rgb.blue}
                    min="0"
                    max="255"
                    on:input={() => setColour(activeColorField)}
            />
        </div>
    </div>
</div>