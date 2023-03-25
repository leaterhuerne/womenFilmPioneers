<script lang="ts">
    import { language } from "$lib/stores/language.js";
    import  api  from "$lib/api/api.json";
    import ExternalLink from "$lib/components/ExternalLink.svelte";
    type apikey = keyof typeof api;
    

    export let name: apikey = "amount-of-women";

</script>

<div
        class="
            my-2
            border border-dark-paper-200 dark:border-warm-gray-700
            bg-paper-200 dark:bg-warm-gray-800
            rounded
            shadow-2xl dark:shadow-none
            w-full
        "
>
    <!-- Title and method -->
    <div
            class="
                flex justify-between items-center
                p-2
                rounded-t
                bg-firebrick-500 dark:bg-firebrick-1000
            "
    >
        <h1 class="text-lg font-semibold">
            {api[name].title[$language]}
        </h1>
        <p
                class="
                    px-1
                    rounded
                    font-semibold
                    text-firebrick-500 dark:text-firebrick-1000 text-sm
                    bg-paper-200 dark:bg-dark-paper-200
                "
        >
            {api[name]["method"]}
        </p>
    </div>
    <div class="p-2">
        <!-- Endpoint -->
        <ExternalLink de={api[name].endpoint}>
            <code>{api[name].endpoint}</code>
        </ExternalLink>
        <!-- Url Parameter -->
        {#if api[name]["parameters"].length > 0}
            <h2 class="italic mt-2">{$language === "de" ? "Parameter: " : "Parameters: "}</h2>
            {#each api[name]["parameters"] as parameter}
                <div class="flex items-center">
                    <code class="mr-2">{parameter["name"]}</code>
                    <p>{@html parameter[$language]}</p>
                </div>
            {/each}
        {/if}
        <!-- Response -->
        <h2 class="italic mt-2">Response:</h2>
        <p>{@html api[name].description[$language]}</p>
    </div>
</div>