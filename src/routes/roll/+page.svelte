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
    import Cog from "$lib/icons/components/Cog.svelte";
    import InformationOutline from "$lib/icons/components/InformationOutline.svelte";

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
    let locations: string[] = []

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
    let width;
</script>

<svelte:window bind:innerWidth={width} />
<div
        class="
            relative
            flex flex-col lg:flex-row 3xl:flex-col 2xl:gap-4
            grow
        "
>
    <!-- Roll and Customizations -->
    <div class="flex flex-col lg:w-2/3 3xl:w-full">
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
        <div class="flex flex-col justify-start grow p-2 border-t border-firebrick-500 dark:border-firebrick-1000">
            <div>
                <h1 class="text-center text-xl font-semibold">
                    <T de="Anpassung der Daten auf der Walze" en="Customization of data on the roll"/>
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
                    de="In der zentralen Datenbank des DFF sind sowohl film- als auch personenbezogene Daten erfasst,
                    welche für die Erstellung von Visualisierungen zusammengeführt wurden. Die personenbezogenen Daten
                    enthalten Tätigkeitszeiträume der einzelnen Personen, während die filmwerksbezogenen Daten die
                    jeweiligen Berufe aufzeigen, welche die einzelnen Personen je nach Filmproduktion ausgeübt haben.
                    Dabei kann es jedoch vorkommen, dass in manchen Jahren berufstätige Personen angezeigt werden,
                    obwohl die spezifische Tätigkeit nicht in den filmwerksbezogenen Daten erfasst wurde, was zu einer
                    Datenabweichung (Data Bias) führt."
                    en="Both film and personal data are recorded in the central database of the DFF.
                    which were brought together to create visualizations. The personal data
                    contain periods of activity of the individual persons, while the film work-related data
                    show the respective professions that the individual people have practiced depending on the film production.
                    However, it can happen that in some years working people are reported,
                    although the specific activity was not recorded in the film work-related data, resulting in a
                    data bias."
                />
            </p>
        </div>
    </div>
    <!-- Option Slider -->
    {#if width < 1538}
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
            <div class="p-2 text-sm">
                <p>
                    <T
                        de="Die Walze kann durch Scrollen und durch die Pfeiltasten nach oben bzw. unten rotiert werden."
                        en="The roll kann be rotated by scrolling oder using the arrow keys up and down."
                    />
                </p>
                <p>
                    <T
                            de="Die Auswahl der angezeigten Geschlechter erfolgt oben durch klicken, alle Kombinationen sind möglich."
                            en="The shown genders kann be adjusted by clicking above, all combinations are possible."
                    />
                </p>
                <p>
                    <T
                            de="Die Farben der Balken sind durch Verschieben der Slider frei einstellbar, die Anfangsfarbe ist zufällig."
                            en="The bar colours can be adjusted by moving the sliders, the default colours are random."
                    />
                </p>
            </div>
        </div>
        <button
                class="
                    duration-500
                    w-[5%] h-full
                    bg-firebrick-500 dark:bg-firebrick-1000
                    grid place-items-center grid-cols-1 gap-2
                    {buttonRotation}
                    rounded-r-xl
                    py-2
                "
                on:mouseenter={() => optionsVisible = "translate-x-0"}
        >
            <Cog darkColor="#D2CAB3" />
            <InformationOutline darkColor="#D2CAB3" />
        </button>
    </div>
    {/if}
    <!-- Information and 2xl Options-->
    <div class="lg:w-1/3 3xl:w-full flex justify-between">
        <SidePanel
                data={data}
                leftGender={{de: genderMap[leftGender].de, en: genderMap[leftGender].en, value: frontLabelOnRoll.left}}
                rightGender={{de: genderMap[rightGender].de, en: genderMap[rightGender].en, value: frontLabelOnRoll.right}}
                year={frontLabelOnRoll.year}
                country={country}
        />
        {#if width >= 1538}
            <div
                    class="
                w-full max-w-[30rem]
                flex
                h-min
                rounded
                border-2
                dark:border-warm-gray-700
                shadow-lg dark:shadow-none
                mr-2
            "
            >
                <div class="bg-paper-100 dark:bg-warm-gray-900 p-2">
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
                    <div class="p-2 text-sm">
                        <p>
                            <T
                                    de="Die Walze kann durch Scrollen und durch die Pfeiltasten nach oben bzw. unten rotiert werden."
                                    en="The roll kann be rotated by scrolling oder using the arrow keys up and down."
                            />
                        </p>
                        <p>
                            <T
                                    de="Die Auswahl der angezeigten Geschlechter erfolgt oben durch klicken, alle Kombinationen sind möglich."
                                    en="The shown genders kann be adjusted by clicking above, all combinations are possible."
                            />
                        </p>
                        <p>
                            <T
                                    de="Die Farben der Balken sind durch Verschieben der Slider frei einstellbar, die Anfangsfarbe ist zufällig."
                                    en="The bar colours can be adjusted by moving the sliders, the default colours are random."
                            />
                        </p>
                    </div>
                </div>
            </div>
        {/if}
    </div>
</div>