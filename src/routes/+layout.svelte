<script lang="ts">
    import "../app.css";
    import Header from "$lib/components/Header.svelte"; 
    import Footer from "$lib/components/Footer.svelte"; 
</script>

<div
        class="
            flex flex-col place-items-center
            min-h-screen
            bg-paper-200 dark:bg-warm-gray-900
            dark:text-dark-paper-200
        "
>
    <Header />
    <div
            class="
                flex flex-col
                grow
                w-full max-w-screen-2xl
                2xl:border-x border-firebrick-500 dark:border-firebrick-1000">
        <slot />
    </div>
    <Footer />
</div>


