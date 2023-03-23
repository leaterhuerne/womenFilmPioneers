<script lang="ts">
    import genders_by_year from "$lib/data/genders_by_year.json";

    import Roll from "$lib/components/roll/Roll.svelte";
    import {CircularLinkedList} from "$lib/utils/list/CircularLinkedList";
    import ColorPicker from "$lib/components/ColorPicker.svelte";
    import CheveronRight from "$lib/icons/components/CheveronRight.svelte";
    import CheveronLeft from "$lib/icons/components/CheveronLeft.svelte";
    import T from "$lib/components/T.svelte";

    // =================================================================================================================
    //                                              Type definitions
    // =================================================================================================================
    type label = {left: number, middle: number, right: number}
    type rgb = {red: number, grenn: number, blue: number}

    // =================================================================================================================
    //                                                 Variables
    // =================================================================================================================

    // Calculate the maximum on the roll
    let maxFemale = 0;
    let maxMale = 0;
    let maxUnknown = 0;

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

    // =================================================================================================================
    //                                                  Functions
    // =================================================================================================================

    /**
     * Calculates the max amounts of genders
     */
    const calculateMaxima = () => {
        for (const year of Object.keys(genders_by_year)) {
            const max = (maxValue: number) => genders_by_year[year].male > maxValue ? genders_by_year[year].male : maxValue;
            maxMale = max(maxMale);
            maxFemale = max(maxFemale);
            maxUnknown = max(maxUnknown);
        }
    };

    /**
     * Creates a rgb object with random values.
     */
    const randomRgb: () => {red: number, green: number, blue: number} = () => {
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

    let content: CircularLinkedList<label>;
    let frontLabelOnRoll: label;

    /**
     * Fills the circular list with data for the roll.
     */
     const fillRoll = () => {
        const visibilyEnsurance = 15;
        content = new CircularLinkedList<label>();
        let itemString = "+page: ";
        for (const year of Object.keys(genders_by_year)) {
            const item = {
                left: genders_by_year[year][leftGender] == 0 ? 0 : Math.max(genders_by_year[year][leftGender], visibilyEnsurance),
                middle: Number(year),
                right: genders_by_year[year][rightGender] == 0 ? 0 : Math.max(genders_by_year[year][rightGender], visibilyEnsurance)
            };
            itemString += item.left + " ";
            if(item.middle < 1946) {
                content.add(item);
            }
        }
        console.log(itemString);
        frontLabelOnRoll = {
            left: genders_by_year["1890"][leftGender],
            middle: 1890,
            right: genders_by_year["1890"][rightGender]
        };
    }

    // =================================================================================================================
    //                                      Initialization of component
    // =================================================================================================================
    fillRoll();
    calculateMaxima();
    //Set colours on the roll
    coloursOnRoll = [
        {
            title: "",
            rgb: randomRgb()
        },
        {
            title: "",
            rgb: randomRgb()
        }
    ]
</script>

<div
        class="
            relative
            flex flex-col lg:flex-row
            grow
        "
>
    <div class="flex flex-col lg:w-2/3">
        <!-- Roll -->
        <Roll
                className="border-4 border-green-300"
                bind:labels={content}
                barNames={genderPairs[genderPairPosition]}
                max={Math.max(maxFemale, maxMale)}
                bind:frontLabel={frontLabelOnRoll}
                bind:leftColour={coloursOnRoll[0].rgb}
                bind:rightColour={coloursOnRoll[1].rgb}
        />
        <!-- Customization of the roll -->
        <div class="grow p-2 border-4 border-pink-500">
            <h1 class="text-center text-lg font-semibold">
                <T de="Anpassung der Daten auf der Rolle" en="Customization of data on the roll"/>
            </h1>
            <p class="italic">
                <T de="Um die Rolle zu drehen die Cursortasten hoch und runter, sowie das Mausrad verwendet werden."
                   en="You can use the cursor keys up and down and the mousewheel to rotate the roll." />
            </p>
        </div>
    </div>
    <!-- Options -->
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
        <div class="bg-paper-100 opactity-90 rounded-br-xl shadow-lg w-[95%]">
            <div class="relative flex justify-between p-2 pr-2 border-t-2">
                <button class="flex grow w-1/2" on:click={() => handleGenderChangeButton("left")}>
                    <div class="absolute left-2 ">
                        <CheveronLeft size=2 />
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
                        <CheveronRight size=2 />
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
                    bg-firebrick-500
                    grid place-items-center
                    {buttonRotation}
                    rounded-r-xl
                "
                on:mouseenter={() => optionsVisible = "translate-x-0"}
        >
            <CheveronRight size=1 />
        </button>
    </div>
    <!-- Information -->
    <div
            class="
                grow
                lg:w-1/3
                lg:border-l-4  border-paper-400 p-2
                flex flex-col items-center
                border-4 border-yellow-300
            "
    >
        <h1 class="text-3xl font-semibold">
            <T de="Die Filmindustrie im Jahr" en="The film industry in the year"/> {frontLabelOnRoll.middle}
        </h1>
        <p><T de="Anzahl Frauen:" en="Amount of women:"/> {genders_by_year[frontLabelOnRoll.middle].female}</p>
        <p><T de="Anzahl Männer:" en="Amount of men:" /> {genders_by_year[frontLabelOnRoll.middle].male}</p>
        <p><T de="Anzahl Divers/Unbekannt:" en="Queer/Unknown:" /> {genders_by_year[frontLabelOnRoll.middle].unknown}</p>
    </div>
</div>