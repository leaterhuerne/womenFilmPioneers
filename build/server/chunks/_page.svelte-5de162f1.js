import { c as create_ssr_component, a as subscribe, e as escape, v as validate_component, b as each, d as add_attribute } from './index3-11153cb5.js';
import { l as language } from './language-fc716440.js';
import { I as InformationOutline } from './InformationOutline-c82e6372.js';
import './index2-d2b5300f.js';
import './Icon-eee31a89.js';

const genders = {
  endpoint: "/api/genders",
  method: "GET",
  parameters: [],
  title: {
    en: "Genders",
    de: "Geschlechter"
  },
  description: {
    en: "Returns the genders in the database and their frequency.",
    de: "Gibt die Geschlechter in der Databank und ihre Häufigkeit zurück."
  }
};
const films = {
  endpoint: "/api/films",
  method: "GET",
  parameters: [
    {
      name: "person-list",
      en: "true",
      de: "true"
    },
    {
      name: "film-list",
      en: "true",
      de: "true"
    },
    {
      name: "film",
      en: "film title",
      de: "Filmtitel"
    },
    {
      name: "gender",
      en: "female, male or unknown",
      de: "female, male oder unknown"
    },
    {
      name: "person",
      en: "name of a person",
      de: "Personenname"
    },
    {
      name: "year",
      en: "number between 1890 and 2021",
      de: "Zahl zwischen 1890 und 2021"
    }
  ],
  title: {
    en: "Films",
    de: "Filme"
  },
  description: {
    en: "If person-list or film-list is true, it returns a list off all persons working on a filmset or a list off all films. Else it returns the film data based on the parameters above.",
    de: "Wenn person-list oder film-list mit true angefragt werden, wird eine Liste aller Personen, die an einem Film beteiligt waren, bzw. eine Liste aller Filme zurückgegeben. Ansonsten werden die Filmdaten basierend auf den obigen Parametern zurückgegeben."
  }
};
const api = {
  genders,
  "working-period": {
    endpoint: "/api/working-period",
    method: "GET",
    parameters: [
      {
        name: "first",
        en: " first working year",
        de: "erstes Tätigkeitsjahr"
      },
      {
        name: "last",
        en: " last working year",
        de: "letztes Tätigkeitsjahr"
      }
    ],
    title: {
      en: "Working period of all persons",
      de: "Tätigkeitszeitraum aller Personen"
    },
    description: {
      en: "Returns the first and last year a person worked in the filmindustry.",
      de: "Gibt das erste und das letzte Tätigkeitsjahr in der Filmindustrie aller Personen zurück."
    }
  },
  films,
  "genders-by-year-profession-location": {
    endpoint: "/api/genders-by-year-profession-location",
    method: "GET",
    parameters: [
      {
        name: "profession-list",
        en: "true",
        de: "true"
      },
      {
        name: "location-list",
        en: "true",
        de: "true"
      },
      {
        name: "location",
        en: "filmset location",
        de: "Ort des Filmdrehs"
      },
      {
        name: "gender",
        en: "female, male or unknown",
        de: "female, male oder unknown"
      },
      {
        name: "profession",
        en: "profession on the filmset",
        de: "Tätigkeit am Filmset"
      },
      {
        name: "year",
        en: "number between 1890 and 2021",
        de: "Zahl zwischen 1890 und 2021"
      }
    ],
    title: {
      en: "Genders by year, profession and location",
      de: "Geschlechter nach Jahr, Beruf und Ort"
    },
    description: {
      en: "If profession-list/location-list is true, then it returns a list of professions/locations. Else it returns the film data based on the parameters above.",
      de: "Wenn profession-list/location-list mit true angefragt wird, dann wird eine Liste mit allen Berufen bzw. Orten zurückgegeben. Ansonsten werden  die Filmdaten basierend auf den obigen Parametern zurückgegeben."
    }
  }
};
const ExternalLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $language, $$unsubscribe_language;
  $$unsubscribe_language = subscribe(language, (value) => $language = value);
  let { en = "/" } = $$props;
  let { de = "/" } = $$props;
  let { className } = $$props;
  let { style } = $$props;
  if ($$props.en === void 0 && $$bindings.en && en !== void 0)
    $$bindings.en(en);
  if ($$props.de === void 0 && $$bindings.de && de !== void 0)
    $$bindings.de(de);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  $$unsubscribe_language();
  return `<a${add_attribute("href", $language === "de" ? de : en, 0)} target="_blank" rel="noreferrer"${add_attribute("class", className, 0)}${add_attribute("style", style, 0)}>${slots.default ? slots.default({}) : ``}</a>`;
});
const APIDocEntry = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $language, $$unsubscribe_language;
  $$unsubscribe_language = subscribe(language, (value) => $language = value);
  let { name = "amount-of-women" } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  $$unsubscribe_language();
  return `<div class="my-2 border border-dark-paper-200 dark:border-warm-gray-700 bg-paper-200 dark:bg-warm-gray-800 rounded shadow-2xl dark:shadow-none w-full ">
    <div class="flex justify-between items-center p-2 rounded-t bg-firebrick-500 dark:bg-firebrick-1000 "><h1 class="text-lg font-semibold">${escape(api[name].title[$language])}</h1>
        <p class="px-1 rounded font-semibold text-firebrick-500 dark:text-firebrick-1000 text-sm bg-paper-200 dark:bg-dark-paper-200 ">${escape(api[name]["method"])}</p></div>
    <div class="p-2">
        ${validate_component(ExternalLink, "ExternalLink").$$render($$result, { de: api[name].endpoint }, {}, {
    default: () => {
      return `<code>${escape(api[name].endpoint)}</code>`;
    }
  })}
        
        ${api[name]["parameters"].length > 0 ? `<h2 class="italic mt-2">${escape($language === "de" ? "Parameter: " : "Parameters: ")}</h2>
            ${each(api[name]["parameters"], (parameter) => {
    return `<div class="flex items-center"><code class="mr-2">${escape(parameter["name"])}</code>
                    <p><!-- HTML_TAG_START -->${parameter[$language]}<!-- HTML_TAG_END --></p>
                </div>`;
  })}` : ``}
        
        <h2 class="italic mt-2">Response:</h2>
        <p><!-- HTML_TAG_START -->${api[name].description[$language]}<!-- HTML_TAG_END --></p></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $language, $$unsubscribe_language;
  $$unsubscribe_language = subscribe(language, (value) => $language = value);
  $$unsubscribe_language();
  return `<div class="flex justify-center"><div class="p-2 flex flex-col place-items-center w-full lg:w-2/3 2xl:w-[1200px]"><div class="flex items-center"><h1 class="my-2 text-2xl sm:text-2xl font-semibold">${escape($language === "de" ? "API - Verfügbare Endpoints" : "API - List of Provided Endpoints")}</h1>
            ${validate_component(ExternalLink, "ExternalLink").$$render(
    $$result,
    {
      className: "ml-2",
      de: "https://de.wikipedia.org/wiki/Programmierschnittstelle",
      en: "https://en.wikipedia.org/wiki/API"
    },
    {},
    {
      default: () => {
        return `${validate_component(InformationOutline, "InformationOutline").$$render($$result, { darkColor: "#D2CAB3" }, {}, {})}`;
      }
    }
  )}</div>
        ${each(Object.keys(api), (endpoint) => {
    return `${validate_component(APIDocEntry, "ApiDocEntry").$$render($$result, { name: endpoint }, {}, {})}`;
  })}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-5de162f1.js.map
