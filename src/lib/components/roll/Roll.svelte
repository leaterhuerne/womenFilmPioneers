<script lang="ts">
    export let items = [1,2,3];
    const rotationAngle = 360 / items.length;
    let currdeg  = 0;
    let rotation = "";
    const panelheight = "50";

    function rotate(e){
        if(e == "n"){
            currdeg = currdeg - rotationAngle;
        }
        if(e == "p"){
            currdeg = currdeg + rotationAngle;
        }
        rotation = "transform: rotateX(" + currdeg +"deg)";
    }
</script>

<style>
    .item {
        display: block;
        position: absolute;
        background: #000;
        width: 250px;
        height: 50px;
        text-align: center;
        color: #FFF;
        opacity: 0.95;
        border-radius: 10px;
    }



    .next, .prev {
        color: #444;
        position: absolute;
        top: 100px;
        padding: 1em 2em;
        cursor: pointer;
        background: #CCC;
        border-radius: 5px;
        border-top: 1px solid #FFF;
        box-shadow: 0 5px 0 #999;
        transition: box-shadow 0.1s, top 0.1s;
    }
    .next:hover, .prev:hover { color: #000; }
    .next:active, .prev:active {
        top: 104px;
        box-shadow: 0 1px 0 #999;
    }
    .next { right: 5em; }
    .prev { left: 5em; }
</style>

<!-- Container -->
<div class=" relative h-[{panelheight}px]  w-[250px] m-auto translate-y-[60px] perspective-1000">
    <div class="h-full w-full absolute preserve-3d duration-500" style="{rotation}">
        {#each items as item, itemIndex}
            <div class="item" style="transform: rotateX({rotationAngle * itemIndex}deg) translateZ(20px);">{item}</div>
        {/each}
    </div>
</div>
<div class="next" on:click={() => rotate("n")}>Next</div>
<div class="prev"  on:click={() => rotate("p")}>Prev</div>