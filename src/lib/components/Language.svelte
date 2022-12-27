<script lang="ts">
    import { language } from "$lib/stores/language";
</script>

<div 
    class="bg-paper-400 text-firebrick-500 font-bold aspect-square h-8 rounded-[50%] cursor-pointer grid place-items-center" 
    on:click={() => $language = $language == "de" ? "en" : "de"}
    on:keypress= {() => {}}
>
    <p>{$language == "de" ? "EN" : "DE"}</p>
</div>