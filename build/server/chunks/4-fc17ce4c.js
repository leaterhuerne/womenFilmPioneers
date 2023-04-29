import { d as domainString } from './domain-17bc1b7a.js';
import './index3-70ce0d26.js';
import './index-64ea2edd.js';

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
const component = async () => (await import('./_page.svelte-57637bd6.js')).default;
const file = '_app/immutable/components/pages/geographic-map/_page.svelte-5a342357.js';
const imports = ["_app/immutable/components/pages/geographic-map/_page.svelte-5a342357.js","_app/immutable/chunks/index-397f77fd.js","_app/immutable/chunks/language-98dabaea.js","_app/immutable/chunks/index-0845eeea.js","_app/immutable/chunks/CheveronLeft-2c98b883.js","_app/immutable/chunks/InformationOutline-82066914.js","_app/immutable/chunks/T-fdec9a04.js","_app/immutable/modules/pages/geographic-map/_page.ts-130a8e9d.js","_app/immutable/chunks/domain-554af54d.js","_app/immutable/chunks/index-0845eeea.js","_app/immutable/chunks/index-397f77fd.js","_app/immutable/chunks/_page-c6053520.js"];
const stylesheets = ["_app/immutable/assets/CheveronLeft-8439df54.css","_app/immutable/assets/InformationOutline-fa4bc524.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page_ts as universal };
//# sourceMappingURL=4-fc17ce4c.js.map
