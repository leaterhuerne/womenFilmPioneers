import { d as domainString } from './domain-cac5b11b.js';
import './index2-d2b5300f.js';
import './index3-11153cb5.js';

function load({ fetch }) {
  function getPersonData(consumer, year, gender, profession, location) {
    let url = domainString + "/api/genders-by-year-profession-location?";
    if (year != void 0) {
      url += "year=" + year + "&";
    }
    if (gender != void 0) {
      url += "gender=" + gender + "&";
    }
    if (profession != void 0) {
      url += "profession=" + profession + "&";
    }
    if (location != void 0) {
      url += "location=" + profession;
    }
    fetch(url).then((e) => e.json()).then(consumer);
  }
  function getFilmsPerYear(consumer, year, location = "", genders = ["male", "female", "unknown"]) {
    let loc = location == "" ? "" : "&location=" + location;
    fetch("/api/films?random=1&year=" + year + "&genders=" + JSON.stringify(genders) + loc).then((response) => response.json()).then((json) => {
      consumer(json);
    });
  }
  function getDataProfession(consumer, profession) {
    getPersonData(consumer, void 0, void 0, profession.length > 0 ? profession : void 0);
  }
  function getDataSpecificYearAndProfession(consumer, year, profession) {
    getPersonData(consumer, year, void 0, profession);
  }
  function getProfessionList(consumer) {
    fetch(domainString + "/api/genders-by-year-profession-location?profession-list=true").then((e) => e.json()).then(consumer);
  }
  function getLocationList(consumer) {
    fetch(domainString + "/api/genders-by-year-profession-location?location-list=true").then((e) => e.json()).then(consumer);
  }
  return {
    getPersonData,
    getFilmsPerYear,
    getDataProfession,
    getDataSpecificYearAndProfession,
    getProfessionList,
    getLocationList
  };
}

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
const component = async () => (await import('./_page.svelte-8d657544.js')).default;
const universal_id = "src/routes/geographic-map/+page.ts";
const imports = ["_app/immutable/entry/geographic-map-page.svelte.72607acb.js","_app/immutable/chunks/index.9c0150a3.js","_app/immutable/chunks/language.76248b11.js","_app/immutable/chunks/index.1ac1a48e.js","_app/immutable/chunks/Refresh.1009957e.js","_app/immutable/chunks/Icon.c1327b70.js","_app/immutable/chunks/T.d26ede2c.js","_app/immutable/entry/geographic-map-page.ts.fa539d94.js","_app/immutable/chunks/domain.e27cd574.js","_app/immutable/chunks/index.1ac1a48e.js","_app/immutable/chunks/index.9c0150a3.js","_app/immutable/chunks/_page.89620e2c.js"];
const stylesheets = ["_app/immutable/assets/Refresh.8439df54.css","_app/immutable/assets/Icon.fa4bc524.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=4-eafcd0d1.js.map
