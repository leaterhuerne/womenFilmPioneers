<script lang="ts">

    import CheveronOutlineUp from "$lib/icons/components/CheveronOutlineUp.svelte";
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
            handleInvalidInput();
        }
    }

    function decrementYear(): void {
        let yearNumber: number = parseInt(year);
        if (yearNumber > minYear) {
            yearNumber -= 1;
            year = yearNumber.toString();
        } else {
            handleInvalidInput();
        }
    }

    function handleInvalidInput() {
        invalidInput = true;
        setTimeout(() => invalidInput = false, 2000);
    }

    function checkInput() {
        const checker = year.match("[A-Za-z.:,;]");
        if (checker != null) {
            handleInvalidInput();
        }
    }

    function handleKey(keyboard: KeyboardEvent) {
        if (keyboard.key == "ArrowUp") {
            incrementYear();
            keyboard.preventDefault();
        } else if (keyboard.key == "ArrowDown") {
            decrementYear();
            keyboard.preventDefault();
        }
    }

    function handleWheel(wheel: WheelEvent) {
        if (wheel.deltaY > 2) {
            incrementYear();
        } else if (wheel.deltaY < -2) {
            decrementYear();
        }
    }
</script>

<svelte:window on:keydown={handleKey} />
<div class="{className} border-2 border-black p-0.5 w-min"
     on:wheel|preventDefault={handleWheel}
>
    <!-- Year number with buttons -->
    <div class="flex">
        <!-- Year number -->
        <input
                type="text" bind:value={year} maxlength="4" size="4"
                class="bg-inherit
                    font-bold text-center text-xl
                    border-none
                    outline-none"
                on:input={() => checkInput()}
        />
        <!-- Up and Down Buttons -->
        <div class="grid grid-col-1 gap-y-0.5">
            <button on:click={() => incrementYear()}>
                <CheveronOutlineUp size="1.5" hover="firebrick"/>
            </button>
            <button on:click={() => decrementYear()}>
                <CheveronOutlineDown size="1.5" hover="firebrick"/>
            </button>
        </div>
    </div>
    <!-- Error popup for wrong input -->
    {#if invalidInput}
        <div class="bg-red-300 opacity-75 text-xs w-fit">
            Input takes only digits. The number must be between {minYear} and {maxYear}.
        </div>
    {/if}
</div>

