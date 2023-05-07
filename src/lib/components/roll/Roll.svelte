<script lang="ts">
    import T from "$lib/components/T.svelte";
    import InformationOutline from "$lib/icons/components/InformationOutline.svelte";
    import {CircularArrayIterator} from "$lib/utils/list/CircularArrayIterator";
    import {CircularArrayList} from "$lib/utils/list/CircularArrayList";
    import {currentYear} from "$lib/components/roll/currentYear.js";
    import CheveronUp from "$lib/icons/components/CheveronUp.svelte";
    import CheveronDown from "$lib/icons/components/CheveronDown.svelte";

    //==================================================================================================================
    //                                              type definitions
    //==================================================================================================================
    type label = {left: number, year: number, right: number}
    type rgb = {red: number, green: number, blue: number};

    //==================================================================================================================
    //                                              variable definitions
    //==================================================================================================================
    export let className: string;
    export let leftColour: rgb = {red: 255, green: 0, blue: 0};
    export let rightColour: rgb = {red: 0, green: 0, blue: 255};
    export let max = 100;
    export let barNames= {left: "left", right: "right"};
    export let frontLabel: label;

    // create default content for the roll
    let defaultList: CircularArrayList<label> = new CircularArrayList();
    let itemList: CircularArrayList<label> = new CircularArrayList<label>();
    for(let i = 0; i < 30; i++) {
        defaultList.add({left: 50, year: i, right: 50});
        if(i < 20) {
            itemList.add({left: 100, year: -1, right: 100})
        }
    }
    export let labels: CircularArrayIterator<label> = new CircularArrayIterator(defaultList);

    // define how many sides the roll has.
    const SIDES_ON_ROLL = 20;
    let items: CircularArrayIterator<label> = new CircularArrayIterator<label>(itemList);

    // define constants
    const UP = true;
    const DOWN = false;

    //define front label of the roll
    let currentLabel: label;

    // calculate the inner radius of the regular n-polygon and set rotation angle
    const innerRadiusofRoll = (50 / 2) * (1 / Math.tan(Math.PI / items.circle.size));
    const rotationAngle = 360 / SIDES_ON_ROLL;

    // roll state
    let currdeg  = 0;                       // rotation degree
    let rotation = "";                      // rotation style string

    let windowWidth: number;

    //==================================================================================================================
    //                                              functions
    //==================================================================================================================
    /**
     * Fills the sides which are visible at mount.
     */
    const populateRoll = () => {
        /**
         * Turns the given iterator to a given year.
         * @param iterator Iterator to turn.
         */
        const goToStartYear = (iterator: CircularArrayIterator<label>) => {
            while(iterator.current.year != $currentYear) {
                iterator.next()
            }
        }
        goToStartYear(labels);
        for (let i = 0; i < 5; i++) {
            items.setCurrent(labels.current);
            items.next();
            labels.next();
        }
        goToStartYear(items);
        items.previous();
        goToStartYear(labels);
        labels.previous();
        for (let i = 0; i < 5; i++) {
            items.setCurrent(labels.current);
            items.previous();
            labels.previous();
        }
        goToStartYear(items);
        goToStartYear(labels);
    }

    /**
     * Handles one-step rotation of the roll.
     * @param direction of rotation
     */
    const rotate = (direction) => {
        if(direction == UP){
            //calculate up rotation
            currdeg = currdeg - rotationAngle;

            // calculate displayed values when rotating up
            items.setNext(5, labels.peekNext(5));
            items.next();
            labels.next();
        }
        else {
            //calculate down rotation
            currdeg = currdeg + rotationAngle;

            //calculate displayed values when rotating down
            items.setPrevious(5, labels.peekPrevious(5));
            items.previous();
            labels.previous();
        }
        rotation = "transform: rotateX(" + currdeg +"deg)"; // now rotate the roll
        frontLabel = items.current;
        $currentYear = items.current.year;
        items = items; // trigger re-rendering of roll
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
        if(mousewheel.deltaY > 0) {
            rotate(UP);
        } else {
            rotate(DOWN);
        }
    }

    /**
     * Ensures the visibility of a small value on the bar
     * @param value data point to display
     */
    const display = (value: number) => {
        return value == 0 ? 0 : Math.max(value, 0.4);
    };


    //==================================================================================================================
    //                                       Initialization of the component
    //==================================================================================================================

    currentLabel = labels.current;
    populateRoll();
    frontLabel = items.current;
</script>

<svelte:window bind:innerWidth={windowWidth} on:keydown={rollByKey}/>
<div class="{className} flex flex-col w-full">
    <!-- Bar names -->
    <div class="grid grid-cols-2 place-items-center gap-2 p-2 text-xl font-semibold">
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
                    {#each items.circle.data as {left, year, right}, itemIndex}
                        <div
                                class="
                                    preserve-3d block absolute
                                    w-full
                                    h-[50px]
                                    border-2 border-paper-200 dark:border-warm-gray-800
                                    bg-paper-400 dark:bg-warm-gray-600
                                    p-1
                                    rounded-lg
                                    opacity-[0.99] f
                                    flex justify-center place-items-center gap-2
                                "
                                style="transform: {'rotateX(' + rotationAngle * itemIndex + 'deg)'} translateZ({innerRadiusofRoll}px)"
                        >
                            <!-- left bar -->
                            <div
                                    class="h-full grow"
                                    style="background: {'linear-gradient(\n' +
                                    '270deg, ' +
                                    'rgba(' + leftColour.red + ', ' + leftColour.green + ', ' + leftColour.blue + ', 1)'}
                                    {display((left / max) * 100)}%,
                                    rgba(255,255,255,0) {display((left / max) * 100)}%);"
                            >
                            </div>
                            <!-- bar label -->
                            <h1>{year}</h1>
                            <!-- right bar -->
                            <div
                                    class="h-full grow"
                                    style="background: {'linear-gradient(\n' +
                                    '90deg, ' +
                                    'rgba(' + rightColour.red + ', ' + rightColour.green + ', ' + rightColour.blue + ', 1)'}
                                    {display((right / max) * 100)}%,
                                    rgba(255,255,255,0) {display((right / max) * 100)}%);"
                            >
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
    {#if windowWidth < 768}
        <div class="grid grid-cols-2 gap-2 place-items-center text-2xl p-2 ">
            <button
                    class="rounded-xl border-2 border-firebrick-500 dark:border-firebrick-1000 w-full grid place-items-center"
                    on:click={() => rotate(UP)}
            >
                <CheveronUp size=3 />
            </button>
            <button
                    class="rounded-xl border-2 border-firebrick-500 dark:border-firebrick-1000 w-full grid place-items-center"
                    on:click={() => rotate(DOWN)}
            >
                <CheveronDown size=3 />
            </button>
        </div>
    {/if}
    <!-- Roll information -->
    <div class="flex items-center gap-2 text-sm pl-2">
        <InformationOutline darkColor="#D2CAB3" />
        <p>
            <T
                de="Die auf der Rolle abgebildeten Ergebnisse basieren auf den durch das"
                en="The results shown on the roll are based on the data collected by the"
            />
            <a class="italic hover:text-firebrick-500" href="https://www.dff.film/">DFF</a>
            <T
                de="erfassten Daten zu insgesamt {max} Personen im Zeitraum von 1895 bis 1950."
                en="total {max} people in the period 1895-1950."
            />
        </p>
    </div>
</div>

