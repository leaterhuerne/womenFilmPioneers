<script lang="ts">
    import * as database from "$lib/utils/rolldata/database.js";
    let state = false;
    let buttonText = "Location";
    let list = []<string>;
    const click = () => {
        const fillList = array => list = array;
        state ? database.getProfessionList(fillList) : database.getLocationList(fillList);
        buttonText = state ? "Profession" : "Location";
        state = !state;
    }
</script>

<div>
    <button
            class="w-24 h-10 bg-amber-700"
            on:click={click}
    >
        {buttonText}
    </button>
    {#each list as element}
        <p>{element}</p>
    {/each}
</div>