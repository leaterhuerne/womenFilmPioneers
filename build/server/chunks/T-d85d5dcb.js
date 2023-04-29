import { c as create_ssr_component, b as subscribe, e as escape } from './index-64ea2edd.js';
import { l as language } from './language-c6711ffc.js';

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
//# sourceMappingURL=T-d85d5dcb.js.map
