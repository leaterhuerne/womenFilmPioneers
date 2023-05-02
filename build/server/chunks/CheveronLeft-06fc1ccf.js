import { c as create_ssr_component, e as escape, b as each, d as add_attribute, v as validate_component } from './index3-11153cb5.js';
import { a as Icon } from './InformationOutline-45dd4ddc.js';

const css = {
  code: ":root{--trackColor:red;--thumbColor:rgb(100, 100, 100);--thumbDiameter:10px}input[type=range].svelte-15pimd8{background-color:inherit;-webkit-appearance:none;width:100%}input[type=range].svelte-15pimd8:focus{outline:none}input[type=range].svelte-15pimd8::-webkit-slider-runnable-track{width:100%;height:5px;cursor:pointer;animate:0.2s;background:var(--trackColor);border-radius:1px;border:0 solid #000000}input[type=range].svelte-15pimd8::-webkit-slider-thumb{height:var(--thumbDiameter);width:var(--thumbDiameter);border-radius:25px;background:var(--thumbColor);cursor:pointer;-webkit-appearance:none;margin-top:-7px}input[type=range].svelte-15pimd8:focus::-webkit-slider-runnable-track{background:var(--trackColor)}input[type=range].svelte-15pimd8::-moz-range-track{width:100%;height:5px;cursor:pointer;animate:0.2s;background:var(--trackColor);border-radius:1px;border:0 solid #000000}input[type=range].svelte-15pimd8::-moz-range-thumb{height:var(--thumbDiameter);width:var(--thumbDiameter);border-radius:25px;border-color:rgba(0,0,0,0);background:var(--thumbColor);cursor:pointer}input[type=range].svelte-15pimd8::-ms-track{width:100%;height:5px;cursor:pointer;animate:0.2s;background:transparent;border-color:transparent;color:transparent}input[type=range].svelte-15pimd8::-ms-fill-lower{background:var(--trackColor);border:0 solid #000000;border-radius:2px}input[type=range].svelte-15pimd8::-ms-fill-upper{background:var(--trackColor);border:0 solid #000000;border-radius:2px}input[type=range].svelte-15pimd8::-ms-thumb{margin-top:1px;height:var(--thumbDiameter);width:var(--thumbDiameter);border-radius:25px;background:var(--thumbColor);cursor:pointer}input[type=range].svelte-15pimd8:focus::-ms-fill-lower{background:var(--trackColor)}input[type=range].svelte-15pimd8:focus::-ms-fill-upper{background:var(--trackColor)}",
  map: null
};
const ColorPicker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { colors = [
    {
      title: "Color",
      rgb: { red: 204, green: 178, blue: 103 }
    }
  ] } = $$props;
  let { onInput = () => console.log("ColorPicker registered input.") } = $$props;
  let { className = "" } = $$props;
  let activeColorField = 0;
  let hex;
  let backgroundColorStyle = new Array(colors.length);
  let highlightColorField = new Array(colors.length).fill("scale-75");
  function setHex() {
    hex = "#";
    hex += colors[activeColorField].rgb.red.toString(16).padStart(2, "0");
    hex += colors[activeColorField].rgb.green.toString(16).padStart(2, "0");
    hex += colors[activeColorField].rgb.blue.toString(16).padStart(2, "0");
  }
  function setColour(colourFieldIndex) {
    backgroundColorStyle[colourFieldIndex] = "background: rgb(" + colors[colourFieldIndex].rgb.red + ", " + colors[colourFieldIndex].rgb.green + ", " + colors[colourFieldIndex].rgb.blue + ");";
    setHex();
    onInput();
  }
  if ($$props.colors === void 0 && $$bindings.colors && colors !== void 0)
    $$bindings.colors(colors);
  if ($$props.onInput === void 0 && $$bindings.onInput && onInput !== void 0)
    $$bindings.onInput(onInput);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  $$result.css.add(css);
  {
    {
      setHex();
      for (let i = 0; i < colors.length; i++) {
        setColour(i);
      }
      highlightColorField[activeColorField] = "scale-100";
    }
  }
  return `<div class="${"p-2 grid grid-cols-1 gap-2 w-full max-w-[30rem] " + escape(className, true)}">
    <div class="${"grid grid-cols-2 " + escape("grid-cols-" + colors.length, true) + " gap-2"}">${each(colors, (color, colorIndex) => {
    return `<div class="flex flex-col justify-between place-items-center"><h1>${escape(color.title)}</h1>
                <button class="${"w-full h-12 mt-2 border-black " + escape(highlightColorField[colorIndex], true)}"${add_attribute("style", backgroundColorStyle[colorIndex], 0)}></button>
            </div>`;
  })}</div>
    
    <div class="w-full flex flex-col justify-between"><div class="flex justify-between gap-2"><h1>HEX</h1>
            <input class="w-full bg-inherit border-2 border-firebrick-1000 focus:outline-none pl-1" type="text"${add_attribute("value", hex, 0)}></div>
        
        <div class="flex justify-between"><input style="--trackColor: red" type="range" min="0" max="255" class="svelte-15pimd8"${add_attribute("value", colors[activeColorField].rgb.red, 0)}></div>
        
        <div class="flex justify-between"><input style="--trackColor: #00ff00" type="range" min="0" max="255" class="svelte-15pimd8"${add_attribute("value", colors[activeColorField].rgb.green, 0)}></div>
        
        <div class="flex justify-between"><input style="--trackColor: blue" type="range" min="0" max="255" class="svelte-15pimd8"${add_attribute("value", colors[activeColorField].rgb.blue, 0)}></div></div></div>`;
});
const CheveronRight = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "1" } = $$props;
  let { direction = "0" } = $$props;
  let { className = "" } = $$props;
  let { color = "black" } = $$props;
  let { darkColor = "white" } = $$props;
  let { hover = "" } = $$props;
  let { rotationSpeed = "0" } = $$props;
  let { backgroundColor = "inherit" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0)
    $$bindings.direction(direction);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.darkColor === void 0 && $$bindings.darkColor && darkColor !== void 0)
    $$bindings.darkColor(darkColor);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.rotationSpeed === void 0 && $$bindings.rotationSpeed && rotationSpeed !== void 0)
    $$bindings.rotationSpeed(rotationSpeed);
  if ($$props.backgroundColor === void 0 && $$bindings.backgroundColor && backgroundColor !== void 0)
    $$bindings.backgroundColor(backgroundColor);
  return `<div>${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      name: "cheveron-right",
      size,
      direction,
      className,
      color,
      darkColor,
      hover,
      rotationSpeed,
      backgroundColor
    },
    {},
    {}
  )}</div>`;
});
const CheveronLeft = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "1" } = $$props;
  let { direction = "0" } = $$props;
  let { className = "" } = $$props;
  let { color = "black" } = $$props;
  let { darkColor = "white" } = $$props;
  let { hover = "" } = $$props;
  let { rotationSpeed = "0" } = $$props;
  let { backgroundColor = "inherit" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0)
    $$bindings.direction(direction);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.darkColor === void 0 && $$bindings.darkColor && darkColor !== void 0)
    $$bindings.darkColor(darkColor);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.rotationSpeed === void 0 && $$bindings.rotationSpeed && rotationSpeed !== void 0)
    $$bindings.rotationSpeed(rotationSpeed);
  if ($$props.backgroundColor === void 0 && $$bindings.backgroundColor && backgroundColor !== void 0)
    $$bindings.backgroundColor(backgroundColor);
  return `<div>${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      name: "cheveron-left",
      size,
      direction,
      className,
      color,
      darkColor,
      hover,
      rotationSpeed,
      backgroundColor
    },
    {},
    {}
  )}</div>`;
});

export { ColorPicker as C, CheveronRight as a, CheveronLeft as b };
//# sourceMappingURL=CheveronLeft-06fc1ccf.js.map
