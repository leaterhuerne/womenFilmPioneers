<script lang="ts">
    import professions from "$lib/data/professions.json";
    import T from "$lib/components/T.svelte";
    import InformationOutline from "$lib/icons/components/InformationOutline.svelte";

    export let genders: {female: boolean, male: boolean, unknown: boolean} = {female: false, male: false, unknown: false};
    export let profession: string = "";
    let initialGenderButtonStyle: string = "text-md font-bold " +
        "border border-amber-400 rounded " +
        "bg-amber-300 " +
        "p-2 h-12";

    export let className: string = "";

    let genderButtonStyles: {female: string, male: string, unknown: string} = {
        female: initialGenderButtonStyle,
        male: initialGenderButtonStyle,
        unknown: initialGenderButtonStyle
    }

    function activateGenderButton(gender: string) {
        let activatedButtonStyle: string = "text-lg font-bold ring-2 ring-amber-500 rounded bg-amber-400 p-2 h-12";
        genderButtonStyles[gender] = genders[gender] ? initialGenderButtonStyle : activatedButtonStyle;
        genders[gender] = !genders[gender];
    }

    $: genderButtonStyles = genderButtonStyles;

</script>

<div class={className}>
    <!-- Gender Buttons -->
    <div class="grid grid-cols-3 gap-2 border border-red-600">
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
        <label><T en="Profession:" de="Beruf:"/></label>
        <input class="mx-2" type="text">
        <InformationOutline />
    </div>
</div>