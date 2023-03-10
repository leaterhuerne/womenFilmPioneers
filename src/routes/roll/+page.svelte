<script lang="ts">
    import Roll from "$lib/components/roll/Roll.svelte";
    import {CircularLinkedList} from "$lib/utils/list/CircularLinkedList";
    let content = new CircularLinkedList<number>();
    for(let i = 1888; i <= 1920; i++) {
        content.add(i);
    }
</script>

<div>
    <Roll labels={content}/>
</div>