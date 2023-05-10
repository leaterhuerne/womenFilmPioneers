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
  const getProfessionForYear = (year, consumer) => {
    return fetch("/api/professions?year=" + year).then((res) => res.json()).then(consumer);
  };
  const getFilmsForYear = (year, country, consumer) => {
    const location = country == "alle" ? "" : "&location=" + country;
    console.log(location);
    return fetch("/api/films?title-only=true&random=5&year=" + year + location).then((response) => response.json()).then(consumer);
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
const component = async () => (await import('./_page.svelte-3b897ee9.js')).default;
const universal_id = "src/routes/roll/+page.ts";
const imports = ["_app/immutable/entry/roll-page.svelte.2630d0f3.js","_app/immutable/chunks/index.9c0150a3.js","_app/immutable/chunks/Refresh.1009957e.js","_app/immutable/chunks/Icon.c1327b70.js","_app/immutable/chunks/T.d26ede2c.js","_app/immutable/chunks/language.76248b11.js","_app/immutable/chunks/index.1ac1a48e.js","_app/immutable/chunks/InformationOutline.29a2d698.js","_app/immutable/entry/roll-page.ts.4da31890.js","_app/immutable/chunks/domain.e27cd574.js","_app/immutable/chunks/index.1ac1a48e.js","_app/immutable/chunks/index.9c0150a3.js","_app/immutable/chunks/_page.847f5b05.js"];
const stylesheets = ["_app/immutable/assets/Refresh.8439df54.css","_app/immutable/assets/Icon.fa4bc524.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=5-7dc16c2d.js.map
