<script lang="ts">
    import genders_by_year from "$lib/data/genders_by_year.json";

    import Roll from "$lib/components/roll/Roll.svelte";
    import {CircularLinkedList} from "$lib/utils/list/CircularLinkedList";
    import {language} from "$lib/stores/language.js";

    // Calculate the maximum on the roll
    let maxRoll = 0;
    let maxFemale = 0;
    let maxMale = 0;
    let maxUnknown = 0;

    for(const year of Object.keys(genders_by_year)) {
        maxMale = genders_by_year[year].male > maxMale ? genders_by_year[year].male : maxMale;
        maxFemale = genders_by_year[year].female > maxFemale ? genders_by_year[year].female : maxFemale;
        maxUnknown = genders_by_year[year].unknown > maxUnknown ? genders_by_year[year].unknown : maxUnknown;
    }

    type label = {left: number, middle: number, right: number}

    let content = new CircularLinkedList<label>();
    for(const year of Object.keys(genders_by_year)) {
        content.add({
            left: genders_by_year[year].male,
            middle: Number(year),
            right:genders_by_year[year].female
        });
    }
    let frontLabelOnRoll: label = {left: genders_by_year["1890"].male, middle: 1890, right: genders_by_year["1890"].female};
</script>

<div class="grid grid-cols-1 lg:grid-cols-3 grow">
    <!-- Roll -->
    <Roll className="lg:col-span-2" labels={content} max={Math.max(maxFemale, maxMale)} bind:frontLabel={frontLabelOnRoll} />
    <!-- Information -->
    <div class="lg:border-l-4 border-paper-400 p-2 flex flex-col items-center">
        <h1 class="text-3xl font-semibold">
            {$language === "de" ? "Die Filmindustrie im Jahr " : "The film industry in the year"}
            {frontLabelOnRoll.middle}
        </h1>
    </div>
</div>