<script lang="ts">
    import "../app.css";
    import Header from "$lib/components/Header.svelte"; 
    import Footer from "$lib/components/Footer.svelte"; 
</script>
 
<div class="h-screen flex flex-col bg-paper-100">
    <Header />
    <div class="grow">
        <slot />
    </div>
    <Footer />   
</div>

