<script lang="ts">
    import T from "$lib/components/T.svelte";

    export let year: number = 1926;
    export let location = {de: "Europa", en: "Europe"};
    export let genders = new Array(3).fill("bla");
    export let state = false;               // for responsive behavior, if state changes, then SidePanel is rerendered
    export let className: string = "";

    const displayGenders = {
        female: {de: "Weiblich", en: "Female"},
        male: {de: "Männlich", en: "Male"},
        unknown: {de: "Divers/Unbekannt", en: "Queer/Unknown"}
    };

    $: {
        state = state;
        genders = genders;
    }
    Object.keys(genders).forEach(e => console.log(e));

</script>

<div class="{className}">
    <h1 class="text-3xl font-semibold text-center">
        <T de="Die Filmindustrie in {location.de} im Jahr {year}"
           en="The film industry of {location.en} in {year}"
        />
    </h1>
    <h2 class="text-lg font-semibold">
        Geschlechterverteilung
    </h2>
    {#each genders as gender}
        <p>{gender}</p>
    {/each}
</div>