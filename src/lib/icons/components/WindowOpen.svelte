<script lang="ts">
    import Icon from "$lib/icons/util/Icon.svelte";

    export let size: string = "1";
    export let direction: string = "0";
    export let className: string = "";
    export let color: string = "black";
    export let darkColor: string = "white";
    export let hover: string = "";
    export let rotationSpeed: string = "0";
    export let backgroundColor: string = "inherit";

</script>

<div>
    <Icon 
        name=window-open
        size={size}
        direction={direction}
        className={className}
        color={color}
	darkColor={darkColor}
        hover={hover}
        rotationSpeed={rotationSpeed}
        backgroundColor={backgroundColor}
    />
</div>