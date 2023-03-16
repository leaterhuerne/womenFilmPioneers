<script lang="ts">
    import Roll from "$lib/components/roll/Roll.svelte";
    import {CircularLinkedList} from "$lib/utils/list/CircularLinkedList";

    type label = {left: number, middle: number, right: number}

    let content = new CircularLinkedList<label>();
    for(let i = 1888; i <= 1920; i++) {
        content.add({
            left: Math.random(),
            middle: i,
            right: Math.random()
        });
    }
</script>

<div class="grid grid-cols-1 lg:grid-cols-2 grow">
    <Roll labels={content} max=1 />
    <div class="bg-dark-paper-100"></div>
</div>