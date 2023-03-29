<script lang="ts">
    //import data from "$lib/data/genders_by_year_profession_location.json"
    import T from "$lib/components/T.svelte";
    import InformationOutline from "$lib/icons/components/InformationOutline.svelte";
    import CheveronLeft from "$lib/icons/components/CheveronLeft.svelte";
    import CheveronRight from "$lib/icons/components/CheveronRight.svelte";
    import {domain} from "$lib/stores/domain";

    export let genders: {female: boolean, male: boolean, unknown: boolean} = {female: false, male: false, unknown: false};
    export let profession: string = "";
    export let className: string = "";

    let professionList = []<string>;

    /**
     * Creates an array containing all profession names.
     */
    function createProfessionList() {
        /*
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

         */
    }

    // create profession list
    //professionList = createProfessionList();

    /**
     * Sets the profession variable to the next profession of the profession list.
     * Variable profession is set to no chosen profession between end and start of the list.
     */
    function setNextProfession(): void {
        // all professions are chosen
        if (profession === "") {
            profession = professionList.at(0);
            // last profession in professionList is chosen
        } else if (profession === professionList.at(professionList.length - 1)) {
            profession = "";
        } else {
            profession = professionList.at(professionList.indexOf(profession) + 1);
        }
    }

    /**
     * Sets the profession variable to the previous profession of the profession list.
     * Variable profession is set to no chosen profession between end and start of the list.
     */
    function setPreviousProfession(): void {
        // all professions are chosen
        if (profession === "") {
            profession = professionList.at(professionList.length - 1);
            // first profession in professionList is chosen
        } else if (profession === professionList.at(0)) {
            profession = "";
        } else {
            profession = professionList.at(professionList.indexOf(profession) - 1);
        }
    }

    //////////////// styling functionality \\\\\\\\\\\\\\\\

    let informationButtonStyle: string = "";     // rotation styling of button that expands a list of all professions
    let professionVisibility: string = "hidden"; // styling for a hidden or visible list of professions
    let chevronButtonStyle: string = "rounded-[50%]" +
        " bg-amber-400 dark:bg-firebrick-800" +
        " hover:bg-firebrick-500 hover:dark:bg-firebrick-800 dark:hover:border border-firebrick-700";

    // initial styling of all gender buttons
    let initialGenderButtonStyle: string = "text-md font-bold" +
        " border border-amber-500 dark:border-none rounded" +
        " bg-amber-400 dark:bg-firebrick-800" +
        " h-8";

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
            " ring-2 ring-amber-500 rounded dark:ring-firebrick-700" +
            " bg-amber-400 dark:bg-firebrick-800" +
            " h-8";
        genderButtonStyles[gender] = genders[gender] ? initialGenderButtonStyle : activatedButtonStyle;
        genders[gender] = !genders[gender];

    }

    /**
     * Shows and hides the list with all professions
     */
    function showProfessions(): void {
        professionVisibility = professionVisibility === "" ? "hidden" : "";
        informationButtonStyle = informationButtonStyle === "" ? "rotate-180" : "";

    }

</script>

<div class={className}>
    <!-- Grid layout: 1.Row: Gender Buttons, 2.Row: Professions 3.Row: Profession list (hidden) -->
    <div class="grid grid-cols-9 place-items-center gap-2">
        <!-- Gender Button: female -->
        <button class="col-span-3 w-full {genderButtonStyles.female}"
                on:click={() => activateGenderButton("female")}
        >
            <T en="female" de="weiblich" />
        </button>
        <!-- Gender Button: male -->
        <button class="col-span-3 w-full {genderButtonStyles.male}"
                on:click={() => activateGenderButton("male")}
        >
            <T en="male" de="männlich" />
        </button>
        <!-- Gender Button: unknown -->
        <button class="col-span-3 w-full {genderButtonStyles.unknown}"
                on:click={() => activateGenderButton("unknown")}
        >
            <T en="unknown" de="unbekannt" />
        </button>
        <!-- PROFESSIONS -->
        <!-- previous profession button -->
        <button class="{chevronButtonStyle}"
                on:click={setPreviousProfession}
        >
            <CheveronLeft size=1.2 />
        </button>
        <!-- Label for profession -->
        <h1 class="text-sm">
            <T en="Job:" de="Beruf:" />
        </h1>
        <!-- Profession name -->
        <h1
            class="
                col-span-5 w-full rounded
                text-md text-center
                bg-amber-400 dark:bg-firebrick-800

            "
        >
            {#if profession === ""}
                <T en="all" de="alle" />
            {:else}
                {profession}
            {/if}
        </h1>
        <!-- Information Button -->
        <button
                class="
                        rounded-[50%]
                        duration-500 {informationButtonStyle}
                    "
                on:click={showProfessions}
        >
            <InformationOutline darkColor="#D2CAB3" />
        </button>

        <!-- next profession button -->
        <button class="{chevronButtonStyle}"
                on:click={setNextProfession}
        >
            <CheveronRight size=1.2 />
        </button>

        <!-- Profession list -->
        <div
                class="
                col-span-full
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

</div>