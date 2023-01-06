<script lang="ts">
    import { language } from "$lib/stores/language";
</script>

<div 
    class="bg-paper-400 text-firebrick-500 font-bold aspect-square h-8 rounded-[50%] cursor-pointer grid place-items-center" 
    on:click={() => {$language = $language === "de" ? "en" : "de"; console.log("lang")}}
    on:keydown={e => console.log(e.keyCode)}
>
    <p>{$language === "de" ? "EN" : "DE"}</p>
</div>