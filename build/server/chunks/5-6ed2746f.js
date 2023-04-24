import { d as domainString } from './domain-cf7c9e67.js';
import './index3-70ce0d26.js';
import './index-64ea2edd.js';

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
  return {
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
const component = async () => (await import('./_page.svelte-01a4b2a1.js')).default;
const file = '_app/immutable/components/pages/roll/_page.svelte-4abf7ed9.js';
const imports = ["_app/immutable/components/pages/roll/_page.svelte-4abf7ed9.js","_app/immutable/chunks/index-397f77fd.js","_app/immutable/chunks/CheveronLeft-2c98b883.js","_app/immutable/chunks/InformationOutline-82066914.js","_app/immutable/chunks/T-fdec9a04.js","_app/immutable/chunks/language-98dabaea.js","_app/immutable/chunks/index-0845eeea.js","_app/immutable/modules/pages/roll/_page.ts-f7aa9c4c.js","_app/immutable/chunks/domain-d16f546f.js","_app/immutable/chunks/index-0845eeea.js","_app/immutable/chunks/index-397f77fd.js","_app/immutable/chunks/_page-5a1c0172.js"];
const stylesheets = ["_app/immutable/assets/CheveronLeft-8439df54.css","_app/immutable/assets/InformationOutline-fa4bc524.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page_ts as universal };
//# sourceMappingURL=5-6ed2746f.js.map
