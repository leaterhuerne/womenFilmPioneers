import { c as create_ssr_component, a as subscribe, e as escape } from './index3-11153cb5.js';
import { l as language } from './language-fc716440.js';

const T = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $language, $$unsubscribe_language;
  $$unsubscribe_language = subscribe(language, (value) => $language = value);
  let { de } = $$props;
  let { en } = $$props;
  let display;
  if ($$props.de === void 0 && $$bindings.de && de !== void 0)
    $$bindings.de(de);
  if ($$props.en === void 0 && $$bindings.en && en !== void 0)
    $$bindings.en(en);
  display = $language === "de" ? de : en;
  $$unsubscribe_language();
  return `${escape(display)}`;
});

export { T };
//# sourceMappingURL=T-1170b724.js.map
