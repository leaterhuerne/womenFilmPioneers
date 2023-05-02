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
  function getPersonPerYear(consumer, year) {
    fetch("/api/films?year=" + year).then((response) => response.json()).then(consumer);
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
    getPersonPerYear,
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
const component = async () => (await import('./_page.svelte-c95c8f60.js')).default;
const universal_id = "src/routes/geographic-map/+page.ts";
const imports = ["_app/immutable/entry/geographic-map-page.svelte.bc4e7e50.js","_app/immutable/chunks/index.9c0150a3.js","_app/immutable/chunks/language.76248b11.js","_app/immutable/chunks/index.1ac1a48e.js","_app/immutable/chunks/CheveronLeft.ba058ee8.js","_app/immutable/chunks/InformationOutline.68a23388.js","_app/immutable/chunks/T.d26ede2c.js","_app/immutable/entry/geographic-map-page.ts.b7badbd7.js","_app/immutable/chunks/domain.e27cd574.js","_app/immutable/chunks/index.1ac1a48e.js","_app/immutable/chunks/index.9c0150a3.js","_app/immutable/chunks/_page.a2bb1669.js"];
const stylesheets = ["_app/immutable/assets/CheveronLeft.8439df54.css","_app/immutable/assets/InformationOutline.fa4bc524.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=4-46fb0f7c.js.map