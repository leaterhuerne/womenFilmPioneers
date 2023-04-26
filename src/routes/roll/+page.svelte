<script lang="ts">
    import ColorPicker from "$lib/components/ColorPicker.svelte";
    import CheveronRight from "$lib/icons/components/CheveronRight.svelte";
    import CheveronLeft from "$lib/icons/components/CheveronLeft.svelte";
    import T from "$lib/components/T.svelte";
    import RollOptions from "$lib/components/roll/RollOptions.svelte";
    import {CircularArrayList} from "$lib/utils/list/CircularArrayList";
    import {CircularArrayIterator} from "$lib/utils/list/CircularArrayIterator.js";
    import Roll from "$lib/components/roll/Roll.svelte";
    import Reload from "$lib/icons/components/Reload.svelte";
    import Refresh from "$lib/icons/components/Refresh.svelte";
    import SidePanel from "$lib/components/roll/SidePanel.svelte";

    // =================================================================================================================
    //                                              Type definitions
    // =================================================================================================================
    type label = {left: number, year: number, right: number}
    type rgb = {red: number, green: number, blue: number}

    // =================================================================================================================
    //                                                 Variables
    // =================================================================================================================

    // define constants
    const ALL = undefined;
    const yearSpan = {first: 1895, last: 1950};

    /** @type {import('./$types').PageData} */
    export let data;

    //gender string map
    const genderMap = {
        male: {de: "Männlich", en: "Male"},
        female: {de: "Weiblich", en: "Female"},
        unknown: {de: "Divers/Unbekannt", en: "Queer/Unknown"}
    }

    // Calculate the maximum on the roll
    let max = 0;

    // Genders visible on roll
    const genderPairs = [
        {left: "male", right: "female"},
        {left: "male", right: "unknown"},
        {left: "female", right: "unknown"},
        {left: "female", right: "male"},
        {left: "unknown", right: "male"},
        {left: "unknown", right: "female"}
    ];
    let leftGender = genderPairs[0].left;
    let rightGender = genderPairs[0].right;
    let genderPairPosition = 0;

    // option visibility
    let optionsVisible = "-translate-x-[95%]";
    let buttonRotation: string;

    // colours on the roll
    let coloursOnRoll: {title: string, rgb: {red: number, green: number, blue: number}}[];

    // content list and front side for the roll
    let content:  CircularArrayIterator<label>;
    let frontLabelOnRoll: label =  {left: 0, year: 1895, right: 0};

    // roll options
    let professionList;
    let countryList;
    let profession = "alle";
    let country = "alle";

    //side panel
    let professions: string[] = []

    // =================================================================================================================
    //                                                  Functions
    // =================================================================================================================
    /**
     * Creates a rgb object with random values.
     */
    const randomRgb: () => rgb = () => {
        const random = () => Math.round(Math.random() * 255);
        return {red: random(), green: random(), blue: random()}
    }

    /**
     * Shifts the gender labels on the coloour picker anf the roll.
     * @param direction
     */
    const handleGenderChangeButton = (direction: string) => {
        genderPairPosition = (genderPairPosition + (direction === "left" ? -1 : 1) + genderPairs.length) % genderPairs.length;
        leftGender = genderPairs[genderPairPosition].left;
        rightGender = genderPairs[genderPairPosition].right;
        coloursOnRoll[0].rgb = randomRgb();
        coloursOnRoll[1].rgb = randomRgb();
    }

    /**
     * Resets the roll labels to 0.
     */
    function resetRoll() {
        max = 0;
        let contentList = new CircularArrayList<label>();
        for (let year = yearSpan.first; year <= yearSpan.last; year++) {
            contentList.add({left: 0, year: Number(year), right: 0});
        }
        content = contentList.iterator();
    }

    /**
     * Fills the circular list with data for the roll.
     */
    const populateRoll = () => {
        // define types
        type bar = {left: number, right: number}
        // define constants
        /**
         * Iterates over the json coming from endpoint api/genders-by-year-profession-location?<params>
         * @param json JSON
         * @param consumer function caluclating label values from json.
         */
        const iterateOver = (json: JSON,  consumer: (json: JSON, year: string, gender: string, bars: bar) => void) => {
            for (const year in json) {
                let bars = {left: 0, right: 0}
                for (const gender in json[year]) {
                    consumer(json, year, gender, bars);
                }
                if (Number(year) >= yearSpan.first && Number(year) <= yearSpan.last) {
                    list.add({left: bars.left, year: Number(year), right: bars.right});
                }
                max = Math.max(max, bars.left, bars.right);
            }
            content = list.iterator();
        };

        /**
         * Handles all professions and locations.
         * @param json json from endpoint.
         * @param year current year
         * @param gender current gender
         * @param bars bar values
         */
        const allProfessionsAllLocations = (json: JSON, year: string, gender: string, bars: bar) => {
            for (const location in json[year][gender]) {
                if (gender == leftGender) {
                    bars.left += json[year][gender][location] ?? 0;
                }
                if (gender == rightGender) {
                    bars.right += json[year][gender][location] ?? 0;
                }
            }
        };

        /**
         * Handles all professions and a specific location.
         * @param json json from endpoint.
         * @param year current year
         * @param gender current gender
         * @param bars bar values
         */
        const allProfessionsSpecificLocation = (json: JSON, year: string, gender: string, bars: bar) => {
            if (gender == leftGender) {
                bars.left += json[year][gender][country] ?? 0;
            }
            if (gender == rightGender) {
                bars.right += json[year][gender][country] ?? 0;
            }
        };

        /**
         * Handles a specific profession and all locations.
         * @param json json from endpoint.
         * @param year current year
         * @param gender current gender
         * @param bars bar values
         */
        const specificProfessionAllLocations = (json: JSON, year: string, gender: string, bars: bar) => {
            for(const location in json[year][gender]) {
                if (gender == leftGender) {
                    bars.left += json[year][gender][location][profession] ?? 0;
                }
                if (gender == rightGender) {
                    bars.right += json[year][gender][location][profession] ?? 0;
                }
            }
        };

        /**
         * Handles a specific professions and a specific location.
         * @param json json from endpoint.
         * @param year current year
         * @param gender current gender
         * @param bars bar values
         */
        const specificProfessionSpecificLocation = (json: JSON, year: string, gender: string, bars: bar) => {
            console.log(year + ", " + gender + ", " + country + ", " + profession);
            if (gender == leftGender && json[year][gender][country] != undefined) {
                bars.left += json[year][gender][country][profession] ?? 0;
            }
            if (gender == rightGender  && json[year][gender][country] != undefined) {
                bars.right += json[year][gender][country][profession] ?? 0;
            }
        };

        //populate roll
        resetRoll();
        let list = new CircularArrayList<label>();
        if (profession == "alle" && country == "alle") {
            data.getProfessionLocation(ALL, ALL, (json: JSON) => iterateOver(json, allProfessionsAllLocations));
        } else if (profession == "alle" && country != "alle") {
            data.getProfessionLocation(ALL, country, (json: JSON) => iterateOver(json, allProfessionsSpecificLocation));
        } else if (profession != "alle" && country == "alle") {
            data.getProfessionLocation(profession, ALL, (json: JSON) => iterateOver(json, specificProfessionAllLocations));
        } else {
            data.getProfessionLocation(profession, country, (json: JSON) => iterateOver(json, specificProfessionSpecificLocation));
        }
    }

    /**
     * Populates the Roll Options.
     */
    const populateOptions = () => {
        /**
         * Populates the profession menu.
         * @param json contains list of professions
         */
        const addProfessionsToOptionMenu = (json: JSON) => {
            let list = new CircularArrayList("alle");
            for(const profession in json) {
                list.add(json[profession]);
            }
            professionList = list.iterator();
        }

        /**
         * Populates the location menu.
         * @param json contains list of locations.
         */
        const addLocationsToOptionMenu = (json: JSON) => {
            let list = new CircularArrayList("alle");
            for(const country in json) {
                list.add(json[country]);
            }
            countryList = list.iterator();
        }

        // populate Roll Options
        data.getProfessionList(addProfessionsToOptionMenu);
        data.getLocationList(addLocationsToOptionMenu);

    }

    const getProfessionsOfYear = (amount: number) => {
        data.getProfessionForYear(frontLabelOnRoll.year, json => {
            professions = Object.keys(json).sort(() => 0.5 - Math.random()).slice(0, amount);
        });
    }

    // =================================================================================================================
    //                                      Initialization of component
    // =================================================================================================================
    resetRoll();
    populateOptions();
    $: {
        // trigger re-rendering
        leftGender = leftGender;
        rightGender = rightGender;
        profession = profession;
        country = country;

        populateRoll();
    }
    //Set colours on the roll
    coloursOnRoll = [{title: "", rgb: randomRgb()}, {title: "", rgb: randomRgb()}];

    $: {
        frontLabelOnRoll.year = frontLabelOnRoll.year;
        getProfessionsOfYear(5)
    }

</script>

<div
        class="
            relative
            flex flex-col lg:flex-row
            grow
        "
>
    <!-- Roll and Customizations -->
    <div class="flex flex-col lg:w-2/3">
        <!-- Roll -->
        {#key content}
            <Roll
                    className="pb-2"
                    labels={content}
                    barNames={genderPairs[genderPairPosition]}
                    bind:max={max}
                    bind:frontLabel={frontLabelOnRoll}
                    bind:leftColour={coloursOnRoll[0].rgb}
                    bind:rightColour={coloursOnRoll[1].rgb}
            />
        {/key}
        <!-- Customization of the roll -->
        <div class="flex flex-col justify-between grow p-2 border-t border-firebrick-500 dark:border-firebrick-1000">
            <div>
                <h1 class="text-center text-xl font-semibold">
                    <T de="Anpassung der Daten auf der Rolle" en="Customization of data on the roll"/>
                </h1>
                <RollOptions
                        className="w-full py-2"
                        professions={professionList}
                        bind:professionLabel={profession}
                        countries={countryList}
                        bind:countryLabel={country}
                />
            </div>
            <p class="text-sm italic">
                <T
                    de="Hinweis: Werden alle Berufe und Länder ausgewählt, so werden hier die alle Personen gezählt, die
                        laut Datenbank in diesem Zeitraum tätig waren. Hier tritt eine Abweichung von den Daten zu
                        speziellen Berufen bei den Filmen auf (Data Bias): In manchen Jahren sind Personen tätig gewesen,
                        obwohl sie in diesem Jahr laut Datenbank an keinem Film beteiligt waren."
                    en="Notice: If all professions and countries are selected, all persons are counted, which were -
                        according to the database - working in this year. Here we see a deviation from the data for
                        single professions and countries (so called data bias): According to the database, in some years
                        people were working in the film industry without being associated to a film."
                />
            </p>
        </div>
    </div>
    <!-- Option Slider -->
    <div
            class="
                absolute
                w-full max-w-[30rem]
                mt-2
                flex
                duration-500
                {optionsVisible}
            "
            on:mouseleave={() => optionsVisible = "-translate-x-[95%]"}
    >
        <div
                class="
                    bg-paper-100 dark:bg-warm-gray-900
                    opactity-90
                    rounded-br-xl
                    dark:border dark:border-warm-gray-700
                    shadow-lg dark:shadow-none
                    w-[95%]
                "
        >
            <div class="relative flex justify-between px-2">
                <button class="flex grow w-1/2" on:click={() => handleGenderChangeButton("left")}>
                    <span class="absolute left-2 ">
                        <CheveronLeft size=2 darkColor="#D2CAB3" />
                    </span>
                    <span class="font-semibold w-full text-end">
                        <T
                                de={leftGender === "male" ? "Männlich" : (leftGender === "female" ? "Weiblich" : "Divers/Unbekannt")}
                                en={leftGender === "male" ? "Male" : (leftGender === "female" ? "Female" : "Queer/Unknown")}
                        />
                    </span>
                </button>
                <p class="font-semibold text-xl mx-2">|</p>
                <button class="flex grow w-1/2" on:click={() => handleGenderChangeButton("right")}>
                    <span class="font-semibold w-full text-start">
                        <T
                                de={rightGender === "male" ? "Männlich" : (rightGender === "female" ? "Weiblich" : "Divers/Unbekannt")}
                                en={rightGender === "male" ? "Male" : (rightGender === "female" ? "Female" : "Queer/Unknown")}
                        />
                    </span>
                    <span class="absolute right-2">
                        <CheveronRight size=2 darkColor="#D2CAB3" />
                    </span>
                </button>
            </div>
            <ColorPicker
                    className=""
                    bind:colors={coloursOnRoll}
            />
            <div class="p-2">

            </div>
        </div>
        <button
                class="
                    duration-500
                    w-[5%] h-10
                    bg-firebrick-500 dark:bg-firebrick-1000
                    grid place-items-center
                    {buttonRotation}
                    rounded-r-xl
                "
                on:mouseenter={() => optionsVisible = "translate-x-0"}
        >
            <CheveronRight color="#D2CAB3" />
        </button>
    </div>
    <!-- Information -->
    <SidePanel
            leftGender={{de: genderMap[leftGender].de, en: genderMap[leftGender].en, value: frontLabelOnRoll.left}}
            rightGender={{de: genderMap[rightGender].de, en: genderMap[rightGender].en, value: frontLabelOnRoll.right}}
            professions={professions}
            year={frontLabelOnRoll.year}
    />
</div>