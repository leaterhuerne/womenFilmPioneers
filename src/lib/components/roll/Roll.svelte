<script lang="ts">
    import {CircularLinkedList} from "$lib/utils/list/CircularLinkedList";

    export let items = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
    export let content = new CircularLinkedList();
    // calculate the inner radius of the regular polygon
    const innerRadius = (50 / 2) * (1 / Math.tan(Math.PI / items.length));
    const rotationAngle = 360 / items.length;
    let currdeg  = 0;
    let rotation = "";

    let currentIndex = 0;

    function rotate(e){
        if(e == "up"){
            currdeg = currdeg - rotationAngle;
            items[(currentIndex + 5) % items.length] = 1111111111;
            currentIndex = (currentIndex + 1) % items.length;
        }
        if(e == "down"){
            currdeg = currdeg + rotationAngle;
            let i = (currentIndex - 5 + items.length) % items.length;
            console.log(i);
            items[i] = 22222222222;
            currentIndex = (currentIndex - 1 + items.length) % items.length;
        }
        rotation = "transform: rotateX(" + currdeg +"deg)";

    }
</script>

<div>
    <!-- Container -->
    <div class="relative h-[50px] w-[400px] m-auto translate-y-48 perspective-1000">
        <!-- Roll -->
        <div class="h-full w-full absolute preserve-3d duration-500" style="{rotation}">
            <!-- Items on the roll -->
            {#each items as item, itemIndex}
                <div
                        class="preserve-3d block absolute w-[400px] border-2 border-paper-900 bg-paper-500 h-[50px] text-center text-firebrick-500 rounded-xl opacity-[0.99]"
                        style="transform: rotateX({rotationAngle * itemIndex}deg) translateZ({innerRadius}px)">{item}
                </div>
            {/each}
        </div>
    </div>
    <div class="rounded bg-firebrick-300 text-center text-white select-none w-10 h-10 ml-2 mb-2" on:click={() => rotate("up")}>∧</div>
    <div class="rounded bg-firebrick-300 text-center text-white select-none w-10 h-10 ml-2" on:click={() => rotate("down")}>∨</div>
</div>
