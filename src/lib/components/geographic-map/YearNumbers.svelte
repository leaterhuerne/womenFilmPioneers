<script lang="ts">

    import CheveronOutlineUp from "$lib/icons/components/CheveronOutlineUp.svelte";
    import CheveronOutlineDown from "$lib/icons/components/CheveronOutlineDown.svelte";

    export let year: string = "1892";           // default year for rendering
    export let minYear: number = 1890;          // oldest data in database is from 1890
    export let maxYear: number = 2021;          // youngest data in database is from 2021
    export let className: string = "";          // styling of the outer div

    let invalidInput: boolean = false;

    /**
     * year number is incremented by 1 if year number is still between min- and maxYear.
     */
    function incrementYear(): void {
        let yearNumber: number = parseInt(year);
        if (yearNumber < maxYear) {
            yearNumber += 1;
            year = yearNumber.toString();
        } else {
            handleInvalidInput();
        }
    }

    /**
     * year number is decremented by 1 if year number is still between min- and maxYear.
     */
    function decrementYear(): void {
        let yearNumber: number = parseInt(year);
        if (yearNumber > minYear) {
            yearNumber -= 1;
            year = yearNumber.toString();
        } else {
            handleInvalidInput();
        }
    }

    //////////////// handle events (keyboard, mousewheel, input) \\\\\\\\\\\\\\\\

    /**
     * Sets the boolean variable 'invalidInput' to true and 2 seconds later to false.
     * An error message can be shown for this two seconds.
     */
    function handleInvalidInput() {
        invalidInput = true;
        setTimeout(() => invalidInput = false, 2000);
    }

    /**
     * The function handles an invalid input for characters that are no digits.
     */
    function checkInput() {
        const checker = year.match("[A-Za-z.:,;]");
        if (checker != null) {
            handleInvalidInput();
        }
    }

    /**
     * Handles the key-up and key-down keys for incrementing and decrementing the year.
     * @param keyboard the pressed key
     */
    function handleKey(keyboard: KeyboardEvent) {
        if (keyboard.key == "ArrowUp") {
            incrementYear();
            keyboard.preventDefault();
        } else if (keyboard.key == "ArrowDown") {
            decrementYear();
            keyboard.preventDefault();
        }
    }

    /**
     * Handles the mousewheel event for incrementing and decrementing the the year.
     * @param wheel the wheel event
     */
    function handleWheel(wheel: WheelEvent) {
        if (wheel.deltaY > 2) {
            incrementYear();
        } else if (wheel.deltaY < -2) {
            decrementYear();
        }
    }

    //////////////// styling functionality \\\\\\\\\\\\\\\\

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

