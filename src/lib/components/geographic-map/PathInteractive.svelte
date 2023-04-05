<script lang="ts">

    export let className: string = "";
    export let countryData: {
        key: string,
        id: string,
        color: string,
        de: string,
        en: string}
        = {key: "", id: "", color: "", de: "", en: ""};
    export let d: string = "";
    export let stroke: string ="none";
    export let listeners: {                     // listener to make a path reactive for mouse action
        onClick: (country) => void,
        onMouseEnter: (country) => void,
        onMouseLeave: (country) => void,
        onKeyDown: (country) => void
    } = {
        onClick: (country) => console.log("You clicked " + country.id),
        onMouseEnter: (country) => console.log("Mouse is over: " + country.id),
        onMouseLeave: (country) => console.log("Mouse was over: " + country.id),
        onKeyDown: (country) => {country}
    };

</script>
>
    <path class={className}
        d={d}
        fill={countryData.color}
        stroke={stroke}
        on:click={() => listeners.onClick(countryData)}
        on:mouseenter={() => listeners.onMouseEnter(countryData)}
        on:mouseleave={() => listeners.onMouseLeave(countryData)}
        on:keydown={() => listeners.onKeyDown(countryData)}
    >
    </path>