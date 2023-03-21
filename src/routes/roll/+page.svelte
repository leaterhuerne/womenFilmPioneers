<script lang="ts">
    import genders_by_year from "$lib/data/genders_by_year.json";

    import Roll from "$lib/components/roll/Roll.svelte";
    import {CircularLinkedList} from "$lib/utils/list/CircularLinkedList";
    import {language} from "$lib/stores/language.js";
    import ColorPicker from "$lib/components/ColorPicker.svelte";
    import CheveronRight from "$lib/icons/components/CheveronRight.svelte";
    import CheveronLeft from "$lib/icons/components/CheveronLeft.svelte";

    // Calculate the maximum on the roll
    let maxRoll = 0;
    let maxFemale = 0;
    let maxMale = 0;
    let maxUnknown = 0;

    for(const year of Object.keys(genders_by_year)) {
        const max = (maxValue: number) => genders_by_year[year].male > maxValue ? genders_by_year[year].male : maxValue;
        maxMale = max(maxMale);
        maxFemale = max(maxFemale);
        maxUnknown = max(maxUnknown);
    }

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

    const handleGenderChangeButton = (direction: string) => {
        genderPairPosition = (genderPairPosition + (direction === "left" ? -1 : 1) + genderPairs.length) % genderPairs.length;
        leftGender = genderPairs[genderPairPosition].left;
        rightGender = genderPairs[genderPairPosition].right;
        fillRoll();
    }
    /**
     * Creates a rgb object with random values.
     */
    const randomRgb: () => {red: number, green: number, blue: number} = () => {
        const random = () => Math.round(Math.random() * 255);
        return {red: random(), green: random(), blue: random()}
    }

    //Set colours on the roll
    let leftRollBarColor = randomRgb();
    let rightRollBarColor = randomRgb();

    let coloursOnRoll = [
            {title: "", rgb: leftRollBarColor},
            {title: "", rgb: rightRollBarColor}
    ]

    type label = {left: number, middle: number, right: number}
    const visibilyEnsurance = 10;
    let content: CircularLinkedList<label>;
    let frontLabelOnRoll: label;
    const fillRoll = () => {
        console.log("Filling roll with " + leftGender + " - " + rightGender);
        content = new CircularLinkedList<label>();
        for (const year of Object.keys(genders_by_year)) {
            content.add({
                left: genders_by_year[year][leftGender] == 0 ? 0 : Math.max(genders_by_year[year][leftGender], visibilyEnsurance),
                middle: Number(year),
                right: genders_by_year[year][rightGender] == 0 ? 0 : Math.max(genders_by_year[year][rightGender], visibilyEnsurance)
            });
        }
        frontLabelOnRoll = {
            left: genders_by_year["1890"][leftGender],
            middle: 1890,
            right: genders_by_year["1890"][rightGender]
        };
    }
    fillRoll();

    let optionsVisible = "-translate-x-[95%]";
    let buttonRotation: string;
</script>

<div
        class="
            relative
            flex flex-col lg:flex-row
            grow
        "
>
    <!-- Roll -->
    <Roll
            className="
                absolute
                border-4 border-green-300
                lg:w-2/3
            "
            bind:labels={content}
            max={Math.max(maxFemale, maxMale)}
            bind:frontLabel={frontLabelOnRoll}
            bind:leftColour={coloursOnRoll[0].rgb}
            bind:rightColour={coloursOnRoll[1].rgb}
    />
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
            <div class="grid grid-cols-6 pl-2 pr-2">
                <button on:click={() => handleGenderChangeButton("left")} >
                    <CheveronLeft />
                </button>
                <h1 class="font-semibold col-span-2 text-start">{leftGender}</h1>
                <h1 class="font-semibold col-span-2 text-end">{rightGender}</h1>
                <button on:click={() => handleGenderChangeButton("right")}>
                    <CheveronRight />
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
            {$language === "de" ? "Die Filmindustrie im Jahr " : "The film industry in the year"}
            {frontLabelOnRoll.middle}
        </h1>
        <p>Anzahl Frauen: {genders_by_year[frontLabelOnRoll.middle].female}</p>
        <p>Anzahl Männer: {genders_by_year[frontLabelOnRoll.middle].male}</p>
        <p>Anzahl Divers/Unbekannt: {genders_by_year[frontLabelOnRoll.middle].unknown}</p>
    </div>
</div>