<script lang="ts">
    
    import {CircularLinkedList} from "$lib/utils/list/CircularLinkedList";

    export let labels = new  CircularLinkedList<never>;
    let content = labels.toArray();

    // define how many sides the roll has.
    const SIDES_ON_ROLL = 20;
    let items = new Array(SIDES_ON_ROLL);

    const UP = true;
    const DOWN = false;

    // fill the sides which are visible at mount
    for(let i = 0; i < 5; i++) {
        items[i] = content[i];
        items[items.length - 1  - i] = content[content.length - 1 - i];
    }

    // calculate the inner radius of the regular n-polygon
    const innerRadiusofRoll = (50 / 2) * (1 / Math.tan(Math.PI / items.length));
    const rotationAngle = 360 / SIDES_ON_ROLL;

    // roll state
    let currdeg  = 0;                       // rotation degree
    let rotation = "";                      // rotation style string
    let frontItemIndex = 0;               // index of the front facing side of the roll
    let frontContentIndex = 0;            // index of the value displayed on the front-side of the roll
    let contentDown = content.length - 5;   // index of next value when rotating down
    let contentUp = 5;                      // index of next value when rotating up

    /**
     * Handles one-step rotation of the roll.
     * @param direction of rotation
     */
    function rotate(direction){
        if(direction == UP){
            //calculate up rotation
            currdeg = currdeg - rotationAngle;

            // calculate displayed values when rotating up
            items[(frontItemIndex + 5) % items.length] = content[contentUp]; // set item becoming visible
            contentUp = (contentUp + 1) % content.length;   // increasing indexes
            contentDown = (contentDown + 1) % content.length;
            frontItemIndex = (frontItemIndex + 1) % items.length;
            frontContentIndex = (frontContentIndex + 1) % content.length;
        }
        else {
            //calculate down rotation
            currdeg = currdeg + rotationAngle;

            //calculate displayed values when rotating down
            items[(frontItemIndex - 5 + items.length) % items.length] = content[contentDown]; // set item becoming visible
            contentUp = (contentUp - 1 + content.length) % content.length; // decreasing indexes
            contentDown = (contentDown - 1 + content.length) % content.length;
            frontItemIndex = (frontItemIndex - 1 + items.length) % items.length;
            frontContentIndex = (frontContentIndex - 1 + content.length) % content.length;
        }
        rotation = "transform: rotateX(" + currdeg +"deg)"; // now rotate the roll

    }

    /**
     * Rotates the roll up or down with the cursor key
     * @param event KeyboardEvent detecting whether cursor up oder down is pressed.
     */
    function rollByKey(event: KeyboardEvent) {
        if(event.key == "ArrowUp") {
            rotate(DOWN);
        } else if(event.key == "ArrowDown") {
            rotate(UP);
        }
    }

    /**
     * Rotates the roll when mouse wheel ist rotated.
     * @param mousewheel WheelEvent detecting whether mousewheel is rotated up or dowm.
     */
    function handleWheel(mousewheel: WheelEvent) {
        let pos = 0;
        if(mousewheel.deltaY > pos) {
            rotate(UP);
        } else {
            rotate(DOWN);
        }
    }
</script>

<svelte:window on:keydown|preventDefault={rollByKey}/>
<div class="border-4 h-112 flex justify-center" on:wheel={handleWheel}>
    <!-- Container -->
    <div class="relative h-[50px] w-2/3 max-w-2xl translate-y-48 perspective-1000">
        <!-- Roll -->
        <div class="h-full w-full absolute preserve-3d duration-500" style="{rotation}">
            <!-- Items on the roll -->
            {#each items as item, itemIndex}
                <div
                        class="preserve-3d block absolute w-full border-2 border-paper-900 bg-paper-500 h-[50px] text-center text-firebrick-500 rounded-xl opacity-[0.99]"
                        style="transform: rotateX({rotationAngle * itemIndex}deg) translateZ({innerRadiusofRoll}px)">{item}
                </div>
            {/each}
        </div>
    </div>
</div>
<div class="rounded bg-firebrick-300 text-center text-white select-none w-10 h-10 ml-2 mb-2" on:click={() => rotate(UP)}>∧</div>
<div class="rounded bg-firebrick-300 text-center text-white select-none w-10 h-10 ml-2" on:click={() => rotate(DOWN)}>∨</div>
