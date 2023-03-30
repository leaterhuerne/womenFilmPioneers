<script lang="ts">
    import {CircularArrayList} from "$lib/utils/list/CircularArrayList";

    const circle = new CircularArrayList(0,1,2,3,4,5,6,7,8,9).iterator();
    let display = circle.current;
</script>

<div class="flex flex-col place-items-center text-3xl">
    <p>{display}</p>
    <div>
        <button on:click={() => display = circle.next()}>[+]</button>
        <button on:click={() => display = circle.previous()}>[-]</button>
    </div>
</div>