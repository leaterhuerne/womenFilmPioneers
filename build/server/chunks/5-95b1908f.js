import { d as domainString } from './domain-cac5b11b.js';
import './index2-d2b5300f.js';
import './index3-11153cb5.js';

const ALL = void 0;
function load({ fetch }) {
  const getData = (professionList, locationList, year, gender, location, profession) => {
    const queryValues = {
      "profession-list": professionList,
      "location-list": locationList,
      year,
      gender,
      location,
      profession
    };
    let url = domainString + "/api/genders-by-year-profession-location?";
    for (const entry in queryValues) {
      if (queryValues[entry] != void 0) {
        url += entry + "=" + queryValues[entry] + "&";
      }
    }
    return fetch(url).then((response) => response.json());
  };
  const getProfessionList = (consumer) => {
    getData(true).then(consumer);
  };
  const getLocationList = (consumer) => {
    getData(void 0, true).then(consumer);
  };
  const getProfessionLocation = (profession, location, consumer) => {
    getData(ALL, ALL, ALL, ALL, location, profession).then(consumer);
  };
  const getProfessionForYear = (year, country, genders, consumer) => {
    const location = country == "alle" ? "" : "&location=" + country;
    const url = "/api/professions?random=5&year=" + year + location + "&genders=" + JSON.stringify(genders);
    return fetch(url).then((res) => res.json()).then(consumer);
  };
  const getFilmsForYear = (year, country, genders, consumer) => {
    const location = country == "alle" ? "" : "&location=" + country;
    return fetch("/api/films?title-only=true&random=5&year=" + year + location + "&genders=" + JSON.stringify(genders)).then((response) => response.json()).then(consumer);
  };
  return {
    getFilmsForYear,
    getProfessionForYear,
    getProfessionList,
    getLocationList,
    getProfessionLocation,
    years: {
      first: 1890,
      last: 2021
    }
  };
}

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 5;
const component = async () => (await import('./_page.svelte-39b52296.js')).default;
const universal_id = "src/routes/roll/+page.ts";
const imports = ["_app/immutable/entry/roll-page.svelte.89a7390e.js","_app/immutable/chunks/index.d52b6858.js","_app/immutable/chunks/Refresh.950b0714.js","_app/immutable/chunks/Icon.35f7eb2e.js","_app/immutable/chunks/T.b50d42b1.js","_app/immutable/chunks/language.20ff4dcc.js","_app/immutable/chunks/index.7daa39cf.js","_app/immutable/chunks/InformationOutline.09d6e5cf.js","_app/immutable/entry/roll-page.ts.6d7fb529.js","_app/immutable/chunks/domain.279fc74e.js","_app/immutable/chunks/index.7daa39cf.js","_app/immutable/chunks/index.d52b6858.js","_app/immutable/chunks/_page.60a9a021.js"];
const stylesheets = ["_app/immutable/assets/Refresh.8439df54.css","_app/immutable/assets/Icon.fa4bc524.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=5-95b1908f.js.map
