<script lang="js">

import Roll2 from "$lib/components/roll/Roll.svelte";
import {CircularArrayIterator} from "$lib/utils/list/CircularArrayIterator.ts";
import {CircularArrayList} from "$lib/utils/list/CircularArrayList.ts";
let list = new CircularArrayIterator(new CircularArrayList(0,1,2,3,4,5,6,7,8,9));
while(list.current != 5) {
  list.next();
}
let display = list.current;
let displayPlusOne = list.peekNext(1);
let displayMinusOne = list.peekPrevious(1);
</script>

 <!-- <Roll2 /> -->
 <div class="flex flex-col place-items-center text-3xl">
    <div class="flex gap-2">
        <p>{displayMinusOne}</p>
        <p>{display}</p>
        <p>{displayPlusOne}</p>
    </div>
    <div>
        <button class="" on:click={() => {display = list.previous(); displayMinusOne = list.peekPrevious(1); displayPlusOne = list.peekNext(1)}}>[-]</button>
        <button class="" on:click={() => {display = list.next(); displayMinusOne = list.peekPrevious(1); displayPlusOne = list.peekNext(1)}}>[+]</button>
       </div>
    <p>{list.circle.toString()}</p>
</div>