<script lang="ts">
    import SVGEurope from "$lib/components/geographic-map/SVGEurope.svelte";
    type rgb = {red: number, green: number, blue: number};
    let colorFrom: rgb = {red: 0, green: 0, blue: 255};
    let colorTo: rgb = {red: 255, green: 0, blue: 0};

    let divBack: rgb = {red: 255, green: 255, blue: 0};

    function mapColor(value: number, lowerBound: number, upperBOund: number): void {

        return;
    }
</script>

<div>
    <input type="range">
    <div class="w-48 h-8" style="background-color: rgb({divBack.red}, {divBack.green}, {divBack.blue})"></div>
</div>