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
const component = async () => (await import('./_page.svelte-8d675485.js')).default;
const universal_id = "src/routes/roll/+page.ts";
const imports = ["_app/immutable/entry/roll-page.svelte.16447d51.js","_app/immutable/chunks/index.5444f0bf.js","_app/immutable/chunks/Refresh.8a7c8c93.js","_app/immutable/chunks/Icon.2acd57e4.js","_app/immutable/chunks/T.5e6aa958.js","_app/immutable/chunks/language.821418bb.js","_app/immutable/chunks/index.f1eaaf28.js","_app/immutable/chunks/InformationOutline.b104acf4.js","_app/immutable/entry/roll-page.ts.8956838f.js","_app/immutable/chunks/domain.bd58ebf2.js","_app/immutable/chunks/index.f1eaaf28.js","_app/immutable/chunks/index.5444f0bf.js","_app/immutable/chunks/_page.ceef47f4.js"];
const stylesheets = ["_app/immutable/assets/Refresh.8439df54.css","_app/immutable/assets/Icon.fa4bc524.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=5-038125f5.js.map
