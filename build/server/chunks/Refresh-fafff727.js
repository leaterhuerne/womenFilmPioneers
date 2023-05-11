import { c as create_ssr_component, v as validate_component } from './index3-11153cb5.js';
import { I as Icon } from './Icon-eee31a89.js';

const Refresh = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
      name: "refresh",
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

export { Refresh as R };
//# sourceMappingURL=Refresh-fafff727.js.map
