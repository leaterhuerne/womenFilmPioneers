<script>
    import {CircularLinkedList} from "$lib/utils/list/CircularLinkedList.ts";

    let nums = new CircularLinkedList();
    nums.add(0,1,2,3,4,5,6,7,8,9,10,11,12);
    let iterator = nums.iterator();
    let current = iterator.next();
    let peekNum = 1;
    let prev5 = iterator.peekPrevious(peekNum);
    let next5 = iterator.peekNext(peekNum);

    const handleClick = () => {
        current = iterator.next();
        next5 = iterator.peekNext(peekNum);
        prev5 = iterator.peekPrevious(peekNum);
    }
</script>

<div class="grid place-items-center text-2xl">
    <h1>{prev5}</h1>
    <h1>{current}</h1>
    <h1>{next5}</h1>
    <button on:click={handleClick}>
        +
    </button>
</div>