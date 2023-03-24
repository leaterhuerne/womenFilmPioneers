<script lang="ts">
    
    import {CircularLinkedList} from "$lib/utils/list/CircularLinkedList";
    import {language} from "$lib/stores/language.js";
    import T from "$lib/components/T.svelte";
    import {responsive} from "$lib/stores/responsive.js";
    type label = {left: number, year: number, right: number}
    type rgb = {red: number, green: number, blue: number};

    export let className: string;
    export let leftColour: rgb = {red: 255, green: 0, blue: 0};
    export let rightColour: rgb = {red: 0, green: 0, blue: 255};
    export let max = 100;

    export let barNames= {left: "left", right: "right"};

    export const rollControlInformation = {
        de: "Um die Rolle zu drehen die Cursortasten hoch und runter, sowie das Mausrad verwendet werden.",
        en: "You can use the cursor keys up and down and the mousewheel to rotate the roll."
    };
    export let labels = new CircularLinkedList<label>;
    // define how many sides the roll has.

    const SIDES_ON_ROLL = 20;
    let items: label[] = new Array(SIDES_ON_ROLL).fill({left: 50, middle: 0, right: 50});

    // define constants
    const UP = true;
    const DOWN = false;

    let currentLabel = labels.iterator();
    let labelIndex = 0;
    let frontItemIndex = 0;               // index of the front facing side of the roll

    /**
     * Fills the sides which are visible at mount.
     */
    const fillRoll = () => {
        for (let i = 0; i < 5; i++) {
            items[frontItemIndex + i] = currentLabel.peekNext(i).content;
            items[(frontItemIndex - i - 1 + items.length) % items.length] = currentLabel.peekPrevious(i + 1).content;
        }
    }

    // if data for the roll changed, rerender roll
    $: {
        labels = labels;
        currentLabel = labels.iterator();
        //TODO
        //currentLabel.jumpTo(labelIndex);
        fillRoll();
    }

    // calculate the inner radius of the regular n-polygon
    const innerRadiusofRoll = (50 / 2) * (1 / Math.tan(Math.PI / items.length));

    const rotationAngle = 360 / SIDES_ON_ROLL;
    // roll state
    let currdeg  = 0;                       // rotation degree
    let rotation = "";                      // rotation style string

    export let frontLabel = items[frontItemIndex];

    /**
     * Handles one-step rotation of the roll.
     * @param direction of rotation
     */
    const rotate = (direction) => {
        if(direction == UP){
            //calculate up rotation
            currdeg = currdeg - rotationAngle;

            // calculate displayed values when rotating up
            items[(frontItemIndex + 5) % items.length] = currentLabel.peekNext(5).content;
            currentLabel.next();
            frontItemIndex = (frontItemIndex + 1) % items.length;
        }
        else {
            //calculate down rotation
            currdeg = currdeg + rotationAngle;

            //calculate displayed values when rotating down
            items[(frontItemIndex - 5 + items.length) % items.length] = currentLabel.peekPrevious(5).content;
            currentLabel.previous();
            frontItemIndex = (frontItemIndex - 1 + items.length) % items.length;
        }
        if (currentLabel.current) {
            labelIndex = currentLabel.current.index;
        }
        rotation = "transform: rotateX(" + currdeg +"deg)"; // now rotate the roll
        frontLabel = items[frontItemIndex];
    }

    /**
     * Rotates the roll up or down with the cursor key
     * @param event KeyboardEvent detecting whether cursor up oder down is pressed.
     */
    const rollByKey = (event: KeyboardEvent) => {
        if(event.key == "ArrowUp") {
            rotate(DOWN);
            event.preventDefault();
        } else if(event.key == "ArrowDown") {
            rotate(UP);
            event.preventDefault();
        }
    }

    /**
     * Rotates the roll when mouse wheel ist rotated.
     * @param mousewheel WheelEvent detecting whether mousewheel is rotated up or dowm.
     */
    const handleWheel = (mousewheel: WheelEvent) => {
        let pos = 0;
        if(mousewheel.deltaY > pos) {
            rotate(UP);
        } else {
            rotate(DOWN);
        }
    }

    let windowWidth: number;
</script>

<svelte:window bind:innerWidth={windowWidth} on:keydown={rollByKey}/>
<div class="{className} flex flex-col w-full">
    <!-- Bar names -->
    <div class="grid grid-cols-2 place-items-center gap-2 p-2 text-xl font-semibold">
        <!-- TODO -->
        <p>
            <T
                    de={barNames.left  === "male" ? "Männlich" : (barNames.left  === "female" ? "Weiblich" : "Divers/Unbekannt")}
                    en={barNames.left  === "male" ? "Male" : (barNames.left  === "female" ? "Female" : "Queer/Unknown")}
            />
        </p>
        <p>
            <T
                    de={barNames.right  === "male" ? "Männlich" : (barNames.right  === "female" ? "Weiblich" : "Divers/Unbekannt")}
                    en={barNames.right  === "male" ? "Male" : (barNames.right  === "female" ? "Female" : "Queer/Unknown")}
            />
        </p>
    </div>
    <!-- Roll -->
    <div class="relative p-2 grid grid-cols-1 min-h-[24rem]">
        <div class="absolute lg:relative h-64 w-full flex justify-center" on:wheel|preventDefault={handleWheel}>
            <!-- Container -->
            <div class="relative h-[50px] w-2/3 max-w-2xl translate-y-40 perspective-1000">
                <!-- Roll -->
                <div class="h-full w-full absolute preserve-3d duration-500" style="{rotation}">
                    <!-- Items on the roll -->
                    {#each items as {left, middle: year, right}, itemIndex}
                        <div
                                class="
                                    preserve-3d block absolute
                                    w-full
                                    h-[50px]
                                    border-2 border-paper-900 dark:border-warm-gray-800
                                    bg-paper-500 dark:bg-warm-gray-600
                                    p-1
                                    rounded-xl
                                    opacity-[0.99] f
                                    flex justify-center place-items-center gap-2
                                "
                                style="transform: rotateX({rotationAngle * itemIndex}deg) translateZ({innerRadiusofRoll}px)"
                        >
                            <!-- left bar -->
                            <div
                                    class="h-full grow"
                                    style="background: linear-gradient(
                                    270deg,
                                    rgba({leftColour.red},{leftColour.green},{leftColour.blue}, 1){(left / max) * 100}%,
                                    rgba(255,255,255,0) {(left / max) * 100}%);"
                            >
                            </div>
                            <!-- bar label -->
                            <h1>{year}</h1>
                            <!-- right bar -->
                            <div
                                    class="h-full grow"
                                    style="background: linear-gradient(
                                    90deg,
                                    rgba({rightColour.red},{rightColour.green},{rightColour.blue}, 1) {(right / max) * 100}%,
                                    rgba(255,255,255,0) {(right / max) * 100}%);"
                            ></div>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</div>

