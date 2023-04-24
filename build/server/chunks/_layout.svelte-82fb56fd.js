import { c as create_ssr_component, v as validate_component, b as subscribe, e as escape } from './index-64ea2edd.js';
import { l as language } from './language-c6711ffc.js';
import { T } from './T-d85d5dcb.js';
import './index3-70ce0d26.js';

const Language = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $language, $$unsubscribe_language;
  $$unsubscribe_language = subscribe(language, (value) => $language = value);
  $$unsubscribe_language();
  return `<div class="${"bg-paper-400 dark:bg-dark-paper-400 text-firebrick-500 dark:text-firebrick-1000 font-bold aspect-square h-8 rounded-[50%] cursor-pointer grid place-items-center "}"><p>${escape($language === "de" ? "EN" : "DE")}</p></div>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"z-50 flex justify-between w-full p-2 text-center text-paper-200 dark:text-dark-paper-200 bg-firebrick-500 dark:bg-firebrick-1000 "}"><span></span>
    <h1 class="${"text-lg"}">${validate_component(T, "T").$$render(
    $$result,
    {
      de: "Frauen in der frühen Filmgeschichte",
      en: "Women in Early Film History"
    },
    {},
    {}
  )}</h1>
    ${validate_component(Language, "Language").$$render($$result, {}, {}, {})}</div>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"w-full p-2 text-sm text-right text-paper-200 bg-firebrick-500 dark:bg-firebrick-1000 text-paper-200 dark:text-dark-paper-200 "}"><p>© Lea Terhürne | Patrick Fock 2023</p></div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"flex flex-col place-items-center min-h-screen bg-paper-200 dark:bg-warm-gray-900 dark:text-dark-paper-200 "}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
    <div class="${"flex flex-col grow w-full max-w-screen-2xl 2xl:border-x border-firebrick-500 dark:border-firebrick-1000"}">${slots.default ? slots.default({}) : ``}</div>
    ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-82fb56fd.js.map
