<script lang="ts">
    import data from "$lib/data/genders_by_year_profession_location.json"
    import T from "$lib/components/T.svelte";
    import CheveronDown from "$lib/icons/components/CheveronDown.svelte";

    export let genders: {female: boolean, male: boolean, unknown: boolean} = {female: false, male: false, unknown: false};
    export let profession: string = "";
    export let className: string = "";

    let professionList: string[];

    /**
     * Creates an array containing all profession names.
     */
    function createProfessionList(): string[] {
        let professionList: string[] = [];
        for (const year of Object.keys(data)) {
            for (const gender of Object.keys(data[year])) {
                for (const profession of Object.keys(data[year][gender]["professions"])) {
                    if (!professionList.includes(profession)) {
                        professionList.push(profession);
                    }
                }
            }
        }
        professionList.sort();
        return professionList;
    }

    professionList = createProfessionList();

    //////////////// styling functionality \\\\\\\\\\\\\\\\

    let chevronButton: string = "";     // rotation styling of button that expands a list of all professions
    let professionVisibility: string = "hidden"; // styling for a hidden or visible list of professions

    // initial styling of all gender buttons
    let initialGenderButtonStyle: string = "text-md font-bold" +
        " border border-amber-400 dark:border-firebrick-700 rounded" +
        " bg-amber-300 dark:bg-firebrick-800" +
        " p-2 h-12";

    // current styling of all gender buttons
    let genderButtonStyles: {female: string, male: string, unknown: string} = {
        female: initialGenderButtonStyle,
        male: initialGenderButtonStyle,
        unknown: initialGenderButtonStyle
    }

    /**
     * Activates and deactivates a gender button. The activation status of the button is saved in the
     * 'gender' export variable. This function manages also the styling of the button.
     * @param gender the name of the button to be activated or deactivated
     */
    function activateGenderButton(gender: string): void {
        let activatedButtonStyle: string = "text-lg font-bold" +
            " ring-2 ring-amber-500 rounded dark:ring-firebrick-600" +
            " bg-amber-400 dark:bg-firebrick-700" +
            " p-2 h-12";
        genderButtonStyles[gender] = genders[gender] ? initialGenderButtonStyle : activatedButtonStyle;
        genders[gender] = !genders[gender];

    }

    /**
     * Shows and hides the list with all professions
     */
    function showProfessions(): void {
        professionVisibility = professionVisibility === "" ? "hidden" : "";
        chevronButton = chevronButton === "" ? "rotate-180" : "";

    }
</script>

<div class={className}>
    <!-- Gender Buttons -->
    <div class="grid grid-cols-3 gap-2 px-2">
        <button class="{genderButtonStyles.female}"
                on:click={() => activateGenderButton("female")}
        >
            <T en="female" de="weiblich" />
        </button>
        <button class={genderButtonStyles.male}
                on:click={() => activateGenderButton("male")}
        >
            <T en="male" de="männlich" />
        </button>
        <button class={genderButtonStyles.unknown}
                on:click={() => activateGenderButton("unknown")}
        >
            <T en="unknown" de="unbekannt" />
        </button>
    </div>
    <!-- Professions -->
    <div class="flex place-items-center justify-center mt-2">
        <h1 class="text-lg">
            <T en="Profession:" de="Beruf:" />
        </h1>
        <h1 class="text-lg mx-2">
            {#if profession === ""}
                alle
            {:else}
                {profession}
            {/if}
        </h1>
        <button
                class="
                    rounded-[50%]
                    hover:bg-amber-400 dark:hover:bg-firebrick-700
                    duration-500 {chevronButton}
                "
                on:click={showProfessions}
        >
            <CheveronDown size=1.2 darkColor="#D2CAB3" />
        </button>
    </div>
    <!-- Profession list -->
    <div
            class="
                grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl-grid-cols-5
                p-2
                duration-1000
                {professionVisibility}
            "
    >
        <button class="text-sm text-start italic hover:text-firebrick-400"
                on:click={() => profession = ""}
        >
            <T en="-- all --" de="-- alle --" />
        </button>
        {#each professionList as prof}
            <button class="text-sm text-start hover:text-firebrick-300"
                    on:click={() => profession = prof}
            >
                {prof}
            </button>
        {/each}
    </div>
</div>