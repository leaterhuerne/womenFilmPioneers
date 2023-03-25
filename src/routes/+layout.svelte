<script lang="ts">
    import "../app.css";
    import Header from "$lib/components/Header.svelte"; 
    import Footer from "$lib/components/Footer.svelte"; 
</script>

<div
        class="
            flex flex-col
            min-h-screen
            bg-paper-200 dark:bg-warm-gray-900
            dark:text-dark-paper-200
        "
>
    <Header />
    <div class="grow w-full">
        <slot />
    </div>
    <Footer />
</div>


