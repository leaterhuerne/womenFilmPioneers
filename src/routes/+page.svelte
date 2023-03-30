<script lang="ts">
    /** @type {import('./$types').PageData} */
    export let data;

    let display = "";
    data.getData(json => display = JSON.stringify(json), 1917);
</script>

{display}


Hello women's world!

