<script lang="ts">
    import {CircularLinkedList} from "$lib/utils/list/CircularLinkedList";
    import {onDestroy, onMount} from "svelte";

    const list = new CircularLinkedList<number>;
    list.add(1,2,3,4,5);
    const iterator = list.iterator();
    let curr: string;

    $:{
        const interval = setInterval(() => {
            curr = iterator.next().toString();
        }, 500);
        onDestroy(() => clearInterval(interval))
    }
</script>

<div>
    <h1 class="text-center text-firebrick-300>">{curr}</h1>
</div>