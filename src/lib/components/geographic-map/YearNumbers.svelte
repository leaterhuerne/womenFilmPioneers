<script lang="ts">

    import CheveronOutlineUp from "$lib/icons/components/CheveronOutlineUp.svelte";
    import CheveronOutlineDown from "$lib/icons/components/CheveronOutlineDown.svelte";
    import CheveronOutlineLeft from "$lib/icons/components/CheveronOutlineLeft.svelte";
    import CheveronOutlineRight from "$lib/icons/components/CheveronOutlineRight.svelte";
    import T from "$lib/components/T.svelte";

    export let year: string = "1892";           // default year for rendering
    export let minYear: number = 1890;          // oldest data in database is from 1890
    export let maxYear: number = 2021;          // youngest data in database is from 2021
    export let className: string = "";          // styling of the outer div
    export let responsive: string = "";         // for responsive behavior

    let invalidInput: boolean = false;  // toggle boolean to show an error message

    let wideSize: number;               // treshold for wide or small component
    let windowWidth: number;            // current width of the window

    // initializes wideSize to the pixelsWidths of sm, md, lg, xl and 2xl
    switch (responsive) {
        case "sm":
            wideSize = 640;
            break;
        case "md":
            wideSize = 768;
            break;
        case "lg":
            wideSize = 1024;
            break;
        case "xl":
            wideSize = 1280;
            break;
        case "2xl":
            wideSize = 1536;
            break;
        default:
            wideSize = 10000;
            break;
    }

    /**
     * year number is incremented by 1 if year number is still between min- and maxYear.
     */
    function incrementYear(): void {
        // check that year is between min- and maxYear. Otherwise one of the bounds.
        year = Math.min(Math.max(parseInt(year) + 1, minYear), maxYear).toString();
    }

    /**
     * year number is decremented by 1 if year number is still between min- and maxYear.
     */
    function decrementYear(): void {
        // check that year is between min- and maxYear. Otherwise one of the bounds.
        year = Math.max(Math.min(parseInt(year) - 1, maxYear), minYear).toString();
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

<svelte:window bind:innerWidth={windowWidth} on:keydown={handleKey} />
<div class="{responsive}:w-min"
     on:wheel|preventDefault={handleWheel}
>
    <!-- MOBILE: field in full wideness of Year numbers with left and right buttons -->
    {#if windowWidth < wideSize}
        <div class="{className}
                    flex justify-around place-items-center
                    p-0.5
                    w-full
                    rounded
                   "
        >
            <button on:click={decrementYear}>
                <CheveronOutlineLeft size="2" hover="firebrick"/>
            </button>
            <h1 class="text-2xl font-bold">
                {year}
            </h1>
            <button on:click={incrementYear}>
                <CheveronOutlineRight size="2" hover="firebrick"/>
            </button>
        </div>

    {:else}
        <!-- SCREEN: small field of Year number with up and down buttons -->
        <div class="{className} border-2 border-black p-0.5 w-min rounded">
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
                    <button on:click={incrementYear}>
                        <CheveronOutlineUp size="1.5" hover="firebrick"/>
                    </button>
                    <button on:click={decrementYear}>
                        <CheveronOutlineDown size="1.5" hover="firebrick"/>
                    </button>
                </div>
            </div>
            <!-- Error popup for wrong input -->
            {#if invalidInput}
                <p class="bg-red-300 opacity-75 text-xs w-full rounded">
                    <T de="Es sind nur Zahlen von {minYear} - {maxYear} erlaubt."
                       en="Input takes only number from {minYear} to {maxYear}"
                    />
                </p>
            {/if}
        </div>
    {/if}

</div>

