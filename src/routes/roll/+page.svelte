<script lang="ts">
    import data from "$lib/data/genders_by_year_profession_location.json";
    import genders_by_year from "$lib/data/genders_by_year.json";
    import Roll from "$lib/components/roll/Roll.svelte";
    import {CircularLinkedList} from "$lib/utils/list/CircularLinkedList";
    import ColorPicker from "$lib/components/ColorPicker.svelte";
    import CheveronRight from "$lib/icons/components/CheveronRight.svelte";
    import CheveronLeft from "$lib/icons/components/CheveronLeft.svelte";
    import T from "$lib/components/T.svelte";
    import RollOptions from "$lib/components/roll/RollOptions.svelte";
    import {CircularIterator} from "$lib/utils/list/CircularIterator";

    // =================================================================================================================
    //                                              Type definitions
    // =================================================================================================================
    type label = {left: number, middle: number, right: number}
    type rgb = {red: number, green: number, blue: number}

    // =================================================================================================================
    //                                                 Variables
    // =================================================================================================================

    //gender string map
    const genderMap = {
        male: {
            de: "Männlich",
            en: "Male"
        },
        female: {
            de: "Weiblich",
            en: "Female"
        },
        unknown: {
            de: "Divers/Unbekannt",
            en: "Queer/Unknown"
        }
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
    let coloursOnRoll: {title: string, rgb: {red: number, green: number, blue: number}}[]

    // content list and front side for the roll
    let content: CircularLinkedList<label>;
    let frontLabelOnRoll: label;

    // roll options
    let professionList = new CircularLinkedList()<string>;
    let professionIterator = professionList.iterator() as CircularIterator<string>;
    let countryList= new CircularLinkedList<string>();
    let countryIterator = countryList.iterator();

    let profession: string;
    let country: string;

    // =================================================================================================================
    //                                                  Functions
    // =================================================================================================================


    /**
     * Gets the value from the database for specific year and gender.
     * @param year working year
     * @param gender female, male, unknown
     * @return number representing the datapoint
     */
    const getValue = (year: string, gender: string) => {
        let locations = data[year][gender]["locations"];
        let value = 0
        if (locations != undefined) {
            // all countries, specific profession
            if (country == "alle" && data[year][gender]["professions"][profession] != undefined) {
                value = data[year][gender]["professions"][profession];
            } else if (locations[country] != undefined) {
                // specific country, all professions
                if (profession == "alle") {
                    value = locations[country]["occurences"];
                    // specific country, specific profession
                } else if (data[year][gender]["professions"][profession] != undefined) {
                    value = data[year][gender]["professions"][profession];
                }
            }
        }
        return value;
    }

    /**
     * Calculates the max amounts of genders
     */
    const calculateMaximumBarValue = () => {
        max = 0;
        let left = "";
        let right = "";
        for(const year of Object.keys(genders_by_year)) {
            if((profession == "alle" | profession == undefined) && (country == "alle" | country == undefined)) {
                max = Math.max(max, genders_by_year[year][leftGender], genders_by_year[year][rightGender]);
            } else {
                max = Number(Math.max(max, getValue(year, leftGender), getValue(year, rightGender)));
            }
        }
    };

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
        fillRoll();
    }

    /**
     * Fills the circular list with data for the roll.
     */
    const fillRoll = () => {
        calculateMaximumBarValue();
        content = new CircularLinkedList<label>();
        for (const year of Object.keys(genders_by_year)) {
            let item: label;
            const mode = (profession == "alle" | profession == undefined) && (country == "alle" | country == undefined);
            item = {
                left: mode ? genders_by_year[year][leftGender] : getValue(year, leftGender),
                middle: Number(year),
                right: mode ? genders_by_year[year][rightGender] : getValue(year, rightGender)
            };
            if (item.middle < 1946) {
                content.add(item);
            }
        }
    }

    const addProfessionsAndCountriesToOptionMenu = () => {
        let professionSet = new Set<string>;
        let countrySet = new Set<string>;
        for(const year of Object.keys(data)) {
            for(const gender of Object.keys(data[year])) {
                for(const profession of Object.keys(data[year][gender]["professions"])) {
                    professionSet.add(profession);
                }
                for(let location of Object.keys(data[year][gender]["locations"])) {
                    countrySet.add(location);
                }
            }
        }
        let professionArray = Array.from(professionSet).sort();
        professionArray.forEach(e => professionList.add(e));
        professionList.add("alle");
        professionIterator = professionList.iterator() as CircularIterator<string>;
        let countryArray = Array.from(countrySet).sort();
        countryArray.forEach(e => countryList.add(e));
        countryList.add("alle");
        countryIterator = countryList.iterator() as CircularIterator<string>;
    }

    // =================================================================================================================
    //                                      Initialization of component
    // =================================================================================================================
    addProfessionsAndCountriesToOptionMenu();
    $: {
        country = country;
        profession = profession;
        fillRoll();
    }
    //Set colours on the roll
    coloursOnRoll = [{title: "", rgb: randomRgb()}, {title: "", rgb: randomRgb()}]
    frontLabelOnRoll = {
        left: genders_by_year["1890"][leftGender],
        middle: 1890,
        right: genders_by_year["1890"][rightGender]
    };

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
        <Roll
                className="pb-2"
                bind:labels={content}
                barNames={genderPairs[genderPairPosition]}
                bind:max={max}
                bind:frontLabel={frontLabelOnRoll}
                bind:leftColour={coloursOnRoll[0].rgb}
                bind:rightColour={coloursOnRoll[1].rgb}
        />
        <!-- Customization of the roll -->
        <div class="flex flex-col justify-between grow p-2 border-t border-firebrick-500 dark:border-firebrick-1000">
            <div>
                <h1 class="text-center text-xl font-semibold">
                    <T de="Anpassung der Daten auf der Rolle" en="Customization of data on the roll"/>
                </h1>
                <RollOptions
                        className="w-full py-2"
                        professions={professionIterator}
                        bind:professionLabel={profession}
                        countries={countryIterator}
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
                    <div class="absolute left-2 ">
                        <CheveronLeft size=2 darkColor="#D2CAB3" />
                    </div>
                    <div class="font-semibold w-full text-end">
                        <T
                                de={leftGender === "male" ? "Männlich" : (leftGender === "female" ? "Weiblich" : "Divers/Unbekannt")}
                                en={leftGender === "male" ? "Male" : (leftGender === "female" ? "Female" : "Queer/Unknown")}
                        />
                    </div>
                </button>
                <p class="font-semibold text-xl mx-2">|</p>
                <button class="flex grow w-1/2" on:click={() => handleGenderChangeButton("right")}>
                    <div class="font-semibold w-full text-start">
                        <T
                                de={rightGender === "male" ? "Männlich" : (rightGender === "female" ? "Weiblich" : "Divers/Unbekannt")}
                                en={rightGender === "male" ? "Male" : (rightGender === "female" ? "Female" : "Queer/Unknown")}
                        />
                    </div>
                    <div class="absolute right-2">
                        <CheveronRight size=2 darkColor="#D2CAB3" />
                    </div>
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
    <div
            class="
                grow
                lg:w-1/3
                border-t lg:border-t-0 lg:border-l  border-firebrick-500 dark:border-firebrick-1000
                p-2
                flex flex-col gap-2
            "
    >
        <h1 class="text-3xl font-semibold text-center">
            <T de="Die Filmindustrie im Jahr" en="The film industry in the year"/> {frontLabelOnRoll.middle}
        </h1>
        <div>
            <h2 class="text-lg font-semibold"><T de="Geschlechterverteilung" en="Gender distribution" /></h2>
            <p><T de={genderMap[leftGender].de} en={genderMap[leftGender].en} />: {frontLabelOnRoll.left}</p>
            <p><T de={genderMap[rightGender].de} en={genderMap[rightGender].en} />: {frontLabelOnRoll.right}</p>
        </div>
        <div>
            <h2 class="text-lg font-semibold"><T de="Berufe" en="Professions" /></h2>
            {"TODO: Hier ausgeübte Berufe einfügen"}
        </div>
        <div>
            <h2 class="text-lg font-semibold"><T de="Filme des Jahres" en="Professions" /></h2>
            {"TODO: Hier Filme einfügen"}
        </div>
    </div>
</div>