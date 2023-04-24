import { c as create_ssr_component, b as subscribe, e as escape, v as validate_component, d as each, f as add_attribute } from './index-64ea2edd.js';
import { l as language } from './language-c6711ffc.js';
import { I as InformationOutline } from './InformationOutline-04ca22a6.js';
import './index3-70ce0d26.js';

const template = {
  endpoint: "/api/",
  method: "GET",
  parameters: [
    {
      name: "number",
      en: " natural number",
      de: "natürliche Zahl"
    },
    {
      name: "colour",
      en: " hexcode of an colour",
      de: "Hexcode einer Farbe"
    }
  ],
  title: {
    en: "Template",
    de: "Template"
  },
  description: {
    en: "Here has to be a description of the endpoint.",
    de: "Hier muss eine Beschreibung des Endpoints stehen."
  }
};
const sexes = {
  endpoint: "/api/genders",
  method: "GET",
  parameters: [],
  title: {
    en: "Gender distribution",
    de: "Geschlechterverteilung"
  },
  description: {
    en: "Returns a JSON containing all genders and their frequency in the database.",
    de: "Es wird eine JSON zurückgegeben, die alle Geschlechter und ihre Häufigkeiten im Datensatz enthält."
  }
};
const professionlist = {
  endpoint: "/api/professions/list",
  method: "GET",
  parameters: [],
  title: {
    en: "Complete list of professions",
    de: "Vollständige Liste aller Berufe"
  },
  description: {
    en: "Returns a json-like list containing all professions.",
    de: "Es wird eine Json-Liste zurückgegeben, die alle Berufe enthält."
  }
};
const professions = {
  endpoint: "/api/professions",
  method: "GET",
  parameters: [
    {
      name: "gender",
      en: "Possible arguments are male, female or unknown.",
      de: "Mögliche Argumente sind male, female oder unknown."
    },
    {
      name: "name",
      en: "Profession title. You can get a list of all professions by calling <a href='/api/professions/list' target='_blank' rel='noreferrer'><code>/api/professions/list</code></a>.",
      de: "Berufsbezeichnung. Eine Liste aller Berufe ist verfügbar an <a href='/api/professions/list' target='_blank' rel='noreferrer'><code>/api/professions/list</code></a>."
    }
  ],
  title: {
    en: "Gender distributions of professsions",
    de: "Geschlechterverteilung der Berufe"
  },
  description: {
    en: "Returns a json containing the professions as key and the frequency of genders as value. <br>If <code>gender</code> is given as a parameter, then the value of the json only contains the frequencies of the specified gender. <br>If <code>name</code> is given as a parameter, then the json contains only the specified profession with all gender frequencies. <br> If both parameters are given, then the response contains a number of the amount of persons of the specified gender that worked in the specified profession.",
    de: "Zurückgegeben wird eine Json, die alle Berufe als key enthält und die Geschlechterverteilung aller Geschlechter als value. <br>Wird als Parameter <code>gender</code> übergeben, dann enthält der value nur die Häufigkeit des spezifizierten Geschlechts. <br>Wird als Parameter <code>name</code> übergeben, dann wird eine Json zurückgegeben, die nur den spezifizierten Beruf und die Geschlechterverteilung enthält. <br>Werden beide Parameter angegeben, wird eine Zahl zurückgegeben, die angibt, wie viele Personen des spezifizierten Geschlechts in dem Beruf gearbeitet haben. "
  }
};
const api = {
  template,
  "amount-of-women": {
    endpoint: "/api/amount-of-women",
    method: "GET",
    parameters: [],
    title: {
      en: "Total amount of women",
      de: "Gesamtanzahl der Frauen"
    },
    description: {
      en: "Returns integer representing the total amount of women in the database.",
      de: "Es wird eine Ganzzahl zurückgegeben, die die Gesamtzahl aller Frauen im Datensatz angibt."
    }
  },
  sexes,
  professionlist,
  professions,
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
  "genders-by-year": {
    endpoint: "/api/genders-by-year",
    method: "GET",
    parameters: [
      {
        name: "year",
        en: "number between 1890 and 2021",
        de: "Zahl zwischen 1890 und 2021"
      },
      {
        name: "gender",
        en: "female, male or unknown",
        de: "female, male or unknown"
      }
    ],
    title: {
      en: "Gender distribution per year",
      de: "Geschlechterverhältnisse nach Jahr"
    },
    description: {
      en: "Returns the gender distribution by year as a JSON.<br>If you pass parameter <code>year</code>, you will get the gender distribution of this year.<br>If you pass <code>gender</code>, you will get all years with the specified gender.<br>Passing both returns only a number.<br>If you pass no argument at all, all years with all genders are returned.",
      de: "Gibt die Geschlechterverteilung nach Jahr als JSON zurück.<br>Wenn <code>year</code> übergeben wird, dann wird die Geschlechterverteilung dieses Jahres zurückgegeben.<br>Wird <code>gender</code> übergeben, werden all Jahre mit den Zahlen des entsprechenden Geschlechts zurückgegeben.<br>Werden beide Parameter angegeben, so wird nur eine Zahl zurückgegeben.<br>Enthält die Anfrage keine Parameter, so werden alle Jahre für alle Geschlchter zurückgegeben."
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
  return `<a${add_attribute("href", $language === "de" ? de : en, 0)} target="${"_blank"}" rel="${"noreferrer"}"${add_attribute("class", className, 0)}${add_attribute("style", style, 0)}>${slots.default ? slots.default({}) : ``}</a>`;
});
const APIDocEntry = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $language, $$unsubscribe_language;
  $$unsubscribe_language = subscribe(language, (value) => $language = value);
  let { name = "amount-of-women" } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  $$unsubscribe_language();
  return `<div class="${"my-2 border border-dark-paper-200 dark:border-warm-gray-700 bg-paper-200 dark:bg-warm-gray-800 rounded shadow-2xl dark:shadow-none w-full "}">
    <div class="${"flex justify-between items-center p-2 rounded-t bg-firebrick-500 dark:bg-firebrick-1000 "}"><h1 class="${"text-lg font-semibold"}">${escape(api[name].title[$language])}</h1>
        <p class="${"px-1 rounded font-semibold text-firebrick-500 dark:text-firebrick-1000 text-sm bg-paper-200 dark:bg-dark-paper-200 "}">${escape(api[name]["method"])}</p></div>
    <div class="${"p-2"}">
        ${validate_component(ExternalLink, "ExternalLink").$$render($$result, { de: api[name].endpoint }, {}, {
    default: () => {
      return `<code>${escape(api[name].endpoint)}</code>`;
    }
  })}
        
        ${api[name]["parameters"].length > 0 ? `<h2 class="${"italic mt-2"}">${escape($language === "de" ? "Parameter: " : "Parameters: ")}</h2>
            ${each(api[name]["parameters"], (parameter) => {
    return `<div class="${"flex items-center"}"><code class="${"mr-2"}">${escape(parameter["name"])}</code>
                    <p><!-- HTML_TAG_START -->${parameter[$language]}<!-- HTML_TAG_END --></p>
                </div>`;
  })}` : ``}
        
        <h2 class="${"italic mt-2"}">Response:</h2>
        <p><!-- HTML_TAG_START -->${api[name].description[$language]}<!-- HTML_TAG_END --></p></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $language, $$unsubscribe_language;
  $$unsubscribe_language = subscribe(language, (value) => $language = value);
  $$unsubscribe_language();
  return `<div class="${"flex justify-center"}"><div class="${"p-2 flex flex-col place-items-center w-full lg:w-2/3 2xl:w-[1200px]"}"><div class="${"flex items-center"}"><h1 class="${"my-2 text-2xl sm:text-2xl font-semibold"}">${escape($language === "de" ? "API - Verfügbare Endpoints" : "API - List of Provided Endpoints")}</h1>
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
//# sourceMappingURL=_page.svelte-67501906.js.map
