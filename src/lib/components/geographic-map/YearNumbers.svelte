<script lang="ts">

    import CheveronOutlineUp from "$lib/icons/components/CheveronOutlineUp.svelte";
    import CheveronUp from "$lib/icons/components/CheveronUp.svelte";
    import CheveronDown from "$lib/icons/components/CheveronDown.svelte";
    import CheveronOutlineDown from "$lib/icons/components/CheveronOutlineDown.svelte";

    export let year: string = "1892";           // default year for rendering
    export let minYear: number = 1890;          // oldest data in database is from 1890
    export let maxYear: number = 2021;          // youngest data in database is from 2021
    export let className: string = "";

    let invalidInput: boolean = false;
    function incrementYear(): void {
        let yearNumber: number = parseInt(year);
        if (yearNumber < maxYear) {
            yearNumber += 1;
            year = yearNumber.toString();
        } else {
            setInvalidInput();
        }
    }

    function decrementYear(): void {
        let yearNumber: number = parseInt(year);
        if (yearNumber > minYear) {
            yearNumber -= 1;
            year = yearNumber.toString();
        } else {
            setInvalidInput();
        }
    }

    function setInvalidInput() {
        invalidInput = true;
        setTimeout(() => invalidInput = false, 2000)
    }

    function checkCorrectInput() {
        const checker = year.match("[A-Za-z.:,;]");
        if (checker != null) {
            setInvalidInput();
        }
    }

    function handleKey(event: KeyboardEvent) {
        console.log(event.key);
        if (event.key == "ArrowUp") {
            incrementYear();
        } else if (event.key == "ArrowDown") {
            decrementYear();
        }
    }
</script>

<svelte:window on:keypress={handleKey} />
<div class="{className} border-2 border-black p-0.5 w-min">
    <!-- Year number with buttons -->
    <div class="flex">
        <!-- Year number -->
        <input
                type="text" bind:value={year} maxlength="4" size="4"
                class="bg-inherit w-min max-w-min font-bold"
                style="border:none; background: transparent; outline: 0; text-align: center; font-size: x-large"
                on:input={() => checkCorrectInput()}
        />
        <!-- Up and Down Buttons -->
        <div class="grid grid-col-1 gap-y-0.5">
            <button
                    on:click={() => incrementYear()}

            >
                <CheveronOutlineUp size="1.5" hover="firebrick"/>
            </button>
            <button
                    on:click={() => decrementYear()}
            >
                <CheveronOutlineDown size="1.5" hover="firebrick"/>
            </button>
        </div>
    </div>
    <!-- Error popup for wrong input -->
    <div>
        {#if invalidInput}
            <div class="bg-red-300 opacity-75 rounded-md text-xs w-fit">
                Input takes only digits. The number must be between {minYear} and {maxYear}.
            </div>
        {/if}
    </div>

</div>

<style>
    input:invalid {
        animation: shake 300ms;
        color: firebrick;
    }

    @keyframes shake {
        25% {
            transform: translateX(4px);
        }
        50% {
            transform: translateX(-4px);
        }
        75% {
            transform: translateX(4px);
        }
    }
</style>