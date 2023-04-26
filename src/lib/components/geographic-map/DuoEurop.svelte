<script lang="ts">

    export let onClick;
    let colA: string = "bg-blue-500";
    let colB: string = "bg-blue-500";
    let info: string = "Klicken Sie ein Land an.";
</script>

<div>
    <div class="h-24 aspect-square cursor-pointer {colA}" on:click={() => {info = onClick("A")}}>
    </div>
    <div class="h-24 aspect-square cursor-pointer mt-2 {colB}" on:click={() => {info = onClick("B")}}>

    </div>
    <div>
        <h1>Länderinfo</h1>
        <p>{info}</p>
    </div>
</div>