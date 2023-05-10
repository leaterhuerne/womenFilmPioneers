<script lang="ts">
    import T from "$lib/components/T.svelte";
    import CheveronLeft from "$lib/icons/components/CheveronLeft.svelte";
    import CheveronRight from "$lib/icons/components/CheveronRight.svelte";
    import Cog from "$lib/icons/components/Cog.svelte";

    // data from load function in +page.ts, data of endpoint genders-by-year-profession-location
    export let data: {getData, getProfessionList, getLocationList} = {};
    export let genders: {female: boolean, male: boolean, unknown: boolean} = {female: false, male: false, unknown: false};

    const ALL_YEARS = false;
    const PER_YEAR = true;
    export let maxPerYear: boolean = ALL_YEARS;
    export let profession: string | undefined = profession ?? "";
    export let className: string = "";

    // get data with profession list over load function in +page.ts
    let professionList: string[] = [];
    data.getProfessionList(json => professionList = json);

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
            if (profession != null) {
                profession = professionList.at(professionList.indexOf(profession) + 1);
            }
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
            if (profession != null) {
                profession = professionList.at(professionList.indexOf(profession) - 1);
            }
        }
    }

    //////////////// styling functionality \\\\\\\\\\\\\\\\

    let informationButtonStyle: string = "";     // rotation styling of button that expands a list of all professions
    let professionVisibility: string = "hidden"; // styling for a hidden or visible list of professions
    let chevronButtonStyle: string = "rounded-[50%]" +
        " bg-amber-400 dark:bg-firebrick-800" +
        " hover:bg-firebrick-500 hover:dark:bg-firebrick-800 dark:hover:border border-firebrick-700";

    // initial styling of all gender buttons
    let initialButtonStyle: string = "text-sm sm:text-md font-bold" +
        " border border-amber-500 dark:border-none rounded" +
        " bg-amber-400 dark:bg-firebrick-800" +
        " h-8";

    // style of an activated button
    let activatedButtonStyle: string = "text-md sm:text-lg font-bold" +
        " ring-2 ring-amber-500 rounded dark:bg-firebrick-700 dark:ring-firebrick-600" +
        " bg-amber-400 dark:bg-firebrick-800" +
        " h-8";

    // current styling of all gender buttons
    let currentButtonStyles: {female: string, male: string, unknown: string, absolute: string, relative: string} = {
        female: initialButtonStyle,
        male: initialButtonStyle,
        unknown: initialButtonStyle,
        absolute: activatedButtonStyle,
        relative: initialButtonStyle
    }

    /**
     * Activates and deactivates a gender button. The activation status of the button is saved in the
     * 'gender' export variable. This function manages also the styling of the button.
     * @param gender the name of the button to be activated or deactivated
     */
    function activateGenderButton(gender: string): void {
        currentButtonStyles[gender] = genders[gender] ? initialButtonStyle : activatedButtonStyle;
        genders[gender] = !genders[gender];
    }

    /**
     * Activates the 'relative' button and deactivates the 'absolute' button or vice versa.
     */
    function toggleAbsoluteRelativeButtons(): void {
        if (maxPerYear === PER_YEAR) {
            currentButtonStyles.absolute = activatedButtonStyle;
            currentButtonStyles.relative = initialButtonStyle;
        } else {
            currentButtonStyles.absolute = initialButtonStyle;
            currentButtonStyles.relative = activatedButtonStyle;
        }
        maxPerYear = !maxPerYear;
    }

    /**
     * Shows and hides the list with all professions
     */
    function showProfessions(): void {
        professionVisibility = professionVisibility === "" ? "hidden" : "";
        informationButtonStyle = informationButtonStyle === "" ? "rotate-45" : "";

    }

</script>

<div class={className}>
    <!-- Grid layout: 1.Row: Gender Buttons, 2.Row: Professions 3.Row: Profession list (hidden) -->
    <div class="grid grid-cols-9 place-items-center gap-2">
        <!-- Buttons for 'absolute' or 'relative' Map -->
        <div class="col-span-9 grid grid-cols-2 gap-2 w-full border-blue-500">
            <button class="w-full {currentButtonStyles.absolute}"
                on:click={toggleAbsoluteRelativeButtons}
            >
                <T en="Maximum all years" de="Maximum alle Jahre" />
            </button>
            <button class="w-full {currentButtonStyles.relative}"
                on:click={toggleAbsoluteRelativeButtons}
            >
                <T en="Maximum per year" de="Maximum pro Jahr" />
            </button>
        </div>
        <!-- Gender Button: female -->
        <button class="col-span-3 w-full {currentButtonStyles.female}"
            on:click={() => activateGenderButton("female")}
        >
            <T en="Female" de="Weiblich" />
        </button>
        <!-- Gender Button: male -->
        <button class="col-span-3 w-full {currentButtonStyles.male}"
            on:click={() => activateGenderButton("male")}
        >
            <T en="Male" de="Männlich" />
        </button>
        <!-- Gender Button: unknown -->
        <button class="col-span-3 w-full {currentButtonStyles.unknown}"
            on:click={() => activateGenderButton("unknown")}
        >
            <T en="Queer/Unknown" de="Divers/Unbekannt" />
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
            <Cog darkColor="#D2CAB3" />
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