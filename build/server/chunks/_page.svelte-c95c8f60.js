import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape, d as add_attribute, b as each } from './index3-11153cb5.js';
import { l as language } from './language-fc716440.js';
import { C as ColorPicker, a as CheveronRight, b as CheveronLeft } from './CheveronLeft-06fc1ccf.js';
import { I as InformationOutline, a as Icon } from './InformationOutline-45dd4ddc.js';
import { T } from './T-1170b724.js';
import './index2-d2b5300f.js';

const PathInteractive = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "" } = $$props;
  let { countryData = {
    key: "",
    id: "",
    color: "",
    stroke: "none",
    de: "",
    en: ""
  } } = $$props;
  let { d = "" } = $$props;
  let { listeners = {
    onClick: (country) => console.log("You clicked " + country.id),
    onMouseEnter: (country) => console.log("Mouse is over: " + country.id),
    onMouseLeave: (country) => console.log("Mouse was over: " + country.id),
    onKeyDown: (country) => {
    }
  } } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.countryData === void 0 && $$bindings.countryData && countryData !== void 0)
    $$bindings.countryData(countryData);
  if ($$props.d === void 0 && $$bindings.d && d !== void 0)
    $$bindings.d(d);
  if ($$props.listeners === void 0 && $$bindings.listeners && listeners !== void 0)
    $$bindings.listeners(listeners);
  return `&gt;
    <path${add_attribute("class", className, 0)}${add_attribute("d", d, 0)}${add_attribute("fill", countryData.color, 0)}${add_attribute("stroke", countryData.stroke, 0)} stroke-width="2%"></path>`;
});
const SVGEurope = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { countries = {
    // default color for each country is blue
    DE: {
      key: "DE",
      id: "germany",
      color: "#00008b",
      stroke: "none",
      de: "Deutschland",
      en: "Germany"
    },
    UK: {
      key: "UK",
      id: "unitedKingdom",
      color: "#00008b",
      stroke: "none",
      de: "Großbritannien",
      en: "United Kingdom"
    },
    FR: {
      key: "FR",
      id: "france",
      color: "#00008b",
      stroke: "none",
      de: "Frankreich",
      en: "France"
    },
    IT: {
      key: "IT",
      id: "italy",
      color: "#00008b",
      stroke: "none",
      de: "Italien",
      en: "Italy"
    },
    ES: {
      key: "ES",
      id: "spain",
      color: "#00008b",
      stroke: "none",
      de: "Spanien",
      en: "Spain"
    },
    UA: {
      key: "UA",
      id: "ukraine",
      color: "#00008b",
      stroke: "none",
      de: "Ukraine",
      en: "Ukraine"
    },
    PL: {
      key: "PL",
      id: "poland",
      color: "#00008b",
      stroke: "none",
      de: "Polen",
      en: "Poland"
    },
    RO: {
      key: "RO",
      id: "romania",
      color: "#00008b",
      stroke: "none",
      de: "Rumänien",
      en: "Romania"
    },
    NL: {
      key: "NL",
      id: "netherlands",
      color: "#00008b",
      stroke: "none",
      de: "Niederlande",
      en: "Netherlands"
    },
    BE: {
      key: "BE",
      id: "belgium",
      color: "#00008b",
      stroke: "none",
      de: "Belgien",
      en: "Belgium"
    },
    CS: {
      key: "CS",
      id: "czechoslovakia",
      color: "#00008b",
      stroke: "none",
      de: "Tschechoslowakei",
      en: "Czechoslovakia"
    },
    EL: {
      key: "EL",
      id: "greece",
      color: "#00008b",
      stroke: "none",
      de: "Griechenland",
      en: "Greece"
    },
    PT: {
      key: "PT",
      id: "portugal",
      color: "#00008b",
      stroke: "none",
      de: "Portugal",
      en: "Portugal"
    },
    SE: {
      key: "SE",
      id: "sweden",
      color: "#00008b",
      stroke: "none",
      de: "Schweden",
      en: "Sweden"
    },
    HU: {
      key: "HU",
      id: "hungary",
      color: "#00008b",
      stroke: "none",
      de: "Ungarn",
      en: "Hungary"
    },
    BY: {
      key: "BY",
      id: "belarus",
      color: "#00008b",
      stroke: "none",
      de: "Belarus",
      en: "Belarus"
    },
    AT: {
      key: "AT",
      id: "austria",
      color: "#00008b",
      stroke: "none",
      de: "Österreich",
      en: "Austria"
    },
    CH: {
      key: "CH",
      id: "switzerland",
      color: "#00008b",
      stroke: "none",
      de: "Schweiz",
      en: "Switzerland"
    },
    BG: {
      key: "BG",
      id: "bulgaria",
      color: "#00008b",
      stroke: "none",
      de: "Bulgarien",
      en: "Bulgaria"
    },
    DK: {
      key: "DK",
      id: "denmark",
      color: "#00008b",
      stroke: "none",
      de: "Dänemark",
      en: "Denmark"
    },
    FI: {
      key: "FI",
      id: "finland",
      color: "#00008b",
      stroke: "none",
      de: "Finland",
      en: "Finland"
    },
    NO: {
      key: "NO",
      id: "norway",
      color: "#00008b",
      stroke: "none",
      de: "Norwegen",
      en: "Norway"
    },
    IE: {
      key: "IE",
      id: "ireland",
      color: "#00008b",
      stroke: "none",
      de: "Irland",
      en: "Ireland"
    },
    MD: {
      key: "MD",
      id: "moldova",
      color: "#00008b",
      stroke: "none",
      de: "Moldawien",
      en: "Moldova"
    },
    AL: {
      key: "AL",
      id: "albania",
      color: "#00008b",
      stroke: "none",
      de: "Albanien",
      en: "Albania"
    },
    LT: {
      key: "LT",
      id: "lithuania",
      color: "#00008b",
      stroke: "none",
      de: "Litauen",
      en: "Lithuania"
    },
    YU: {
      key: "YU",
      id: "yugoslavia",
      color: "#00008b",
      stroke: "none",
      de: "Jugoslawien",
      en: "Yugoslavia"
    },
    LV: {
      key: "LV",
      id: "latvia",
      color: "#00008b",
      stroke: "none",
      de: "Lettland",
      en: "Latvia"
    },
    EE: {
      key: "EE",
      id: "estonia",
      color: "#00008b",
      stroke: "none",
      de: "Estland",
      en: "Estonia"
    },
    LU: {
      key: "LU",
      id: "luxembourg",
      color: "#00008b",
      stroke: "none",
      de: "Luxemburg",
      en: "Luxembourg"
    },
    TR: {
      key: "TR",
      id: "turkey",
      color: "#00008b",
      stroke: "none",
      de: "Türkei",
      en: "Turkey"
    }
  } } = $$props;
  let { opacity = 1 } = $$props;
  let { svgPathStyling = "hover:brightness-125 cursor-pointer" } = $$props;
  let { listeners = {
    onClick: (country) => console.log("The clicked country is " + country),
    onMouseEnter: (country) => console.log("Mouse is over: " + country),
    onMouseLeave: (country) => console.log("Mouse was over: " + country)
  } } = $$props;
  if ($$props.countries === void 0 && $$bindings.countries && countries !== void 0)
    $$bindings.countries(countries);
  if ($$props.opacity === void 0 && $$bindings.opacity && opacity !== void 0)
    $$bindings.opacity(opacity);
  if ($$props.svgPathStyling === void 0 && $$bindings.svgPathStyling && svgPathStyling !== void 0)
    $$bindings.svgPathStyling(svgPathStyling);
  if ($$props.listeners === void 0 && $$bindings.listeners && listeners !== void 0)
    $$bindings.listeners(listeners);
  return `
<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1110.000000 1280.000000" preserveAspectRatio="xMidYMin meet"><metadata>Created by potrace 1.15, written by Peter Selinger 2001-2017
    </metadata><defs><linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#36413E" stop-opacity="1"></stop><stop offset="10%" stop-color="#36413E" stop-opacity="1"></stop><stop offset="10%" stop-color="#36413E" stop-opacity="1"></stop><stop offset="20%" stop-color="#36413E" stop-opacity="1"></stop><stop offset="20%" stop-color="#5D5E60" stop-opacity="1"></stop><stop offset="30%" stop-color="#5D5E60" stop-opacity="1"></stop><stop offset="30%" stop-color="#5D5E60" stop-opacity="1"></stop><stop offset="40%" stop-color="#5D5E60" stop-opacity="1"></stop><stop offset="40%" stop-color="#8D8D92" stop-opacity="1"></stop><stop offset="50%" stop-color="#8D8D92" stop-opacity="1"></stop><stop offset="50%" stop-color="#8D8D92" stop-opacity="1"></stop><stop offset="60%" stop-color="#8D8D92" stop-opacity="1"></stop><stop offset="60%" stop-color="#BEB2C8 " stop-opacity="1"></stop><stop offset="70%" stop-color="#BEB2C8" stop-opacity="1"></stop><stop offset="70%" stop-color="#BEB2C8" stop-opacity="1"></stop><stop offset="80%" stop-color="#BEB2C8" stop-opacity="1"></stop><stop offset="80%" stop-color="#7C668F" stop-opacity="1"></stop><stop offset="90%" stop-color="#7C668F" stop-opacity="1"></stop><stop offset="90%" stop-color="#7C668F" stop-opacity="1"></stop><stop offset="100%" stop-color="#7C668F" stop-opacity="1"></stop></linearGradient></defs><g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"${add_attribute("fill-opacity", opacity, 0)}>${validate_component(PathInteractive, "PathInteractive").$$render(
    $$result,
    {
      d: "M7603 12793 c-35 -7 -27 -29 17 -50 22 -10 40 -21 40 -25 0 -4 -12\r\n-16 -27 -28 -40 -32 -53 -54 -64 -117 -6 -32 -17 -68 -25 -80 -12 -20 -81 -63\r\n-100 -63 -4 0 -3 31 0 70 6 62 5 70 -13 82 -19 12 -19 12 1 41 26 36 37 117\r\n17 117 -18 0 -23 -8 -142 -230 -153 -287 -164 -301 -186 -239 -16 47 -14 73\r\n13 131 14 29 34 78 46 108 11 30 42 86 68 123 45 66 46 69 27 83 -29 21 -54\r\n17 -67 -11 -13 -30 -24 -32 -33 -6 -10 33 -46 71 -66 71 -23 0 -34 -23 -49\r\n-102 -6 -31 -18 -62 -27 -70 -29 -23 -43 -72 -33 -109 5 -18 8 -34 6 -36 -2\r\n-2 -21 7 -41 22 -21 14 -41 25 -46 25 -20 0 -61 -71 -61 -105 0 -29 -5 -38\r\n-29 -51 -32 -16 -36 -35 -15 -85 7 -19 16 -46 20 -62 6 -25 5 -27 -18 -21 -18\r\n4 -35 -1 -57 -17 -31 -22 -31 -22 -25 -1 5 14 0 27 -15 41 -13 12 -25 21 -28\r\n21 -3 0 -13 5 -21 10 -13 8 -12 11 5 24 27 19 14 29 -21 16 -22 -9 -25 -13\r\n-14 -20 15 -9 16 -9 -35 -25 -20 -6 -19 5 2 20 15 11 13 14 -22 24 -54 15 -73\r\n15 -57 -1 7 -7 12 -35 12 -64 0 -28 7 -68 15 -87 8 -20 15 -41 15 -47 0 -20\r\n-31 -10 -42 15 -11 24 -53 45 -93 45 -12 0 -43 -11 -70 -25 -28 -15 -55 -23\r\n-67 -19 -27 8 -48 -13 -48 -52 0 -44 12 -74 45 -106 33 -33 28 -35 -25 -8 -52\r\n26 -80 26 -80 0 0 -24 -29 -83 -59 -120 -26 -32 -26 -24 -1 32 35 79 64 298\r\n41 312 -15 10 -29 -17 -51 -97 -11 -43 -46 -127 -78 -186 l-57 -108 -31 34\r\nc-25 26 -39 33 -70 33 -22 0 -49 -7 -61 -15 -22 -15 -22 -15 -21 20 2 48 -18\r\n68 -32 31 -5 -15 -10 -43 -10 -62 0 -45 -16 -74 -40 -74 -26 0 -90 -57 -90\r\n-81 0 -10 9 -23 21 -29 11 -7 18 -18 15 -25 -2 -7 4 -21 15 -31 19 -17 18 -18\r\n-53 -39 -182 -53 -298 -155 -177 -155 30 0 23 -13 -21 -38 -42 -24 -51 -50\r\n-25 -72 20 -17 19 -30 -7 -57 -20 -21 -20 -24 -5 -41 46 -50 3 -80 -132 -93\r\n-109 -10 -140 -18 -160 -43 -34 -41 25 -63 72 -26 29 23 70 26 86 6 15 -18 -4\r\n-33 -49 -38 -30 -3 -35 -7 -38 -31 -4 -34 15 -43 68 -29 51 13 57 3 30 -53\r\n-24 -49 -31 -53 -50 -30 -7 8 -22 15 -33 15 -11 0 -31 9 -43 21 -14 13 -29 19\r\n-41 15 -22 -7 -109 -93 -102 -101 3 -2 43 -12 89 -21 96 -18 115 -26 131 -55\r\n16 -30 4 -34 -27 -10 -63 49 -164 49 -214 0 -16 -16 -35 -29 -42 -29 -8 0 -29\r\n-15 -47 -34 l-33 -34 29 -26 28 -26 -38 0 c-47 0 -48 -15 -2 -31 45 -17 45\r\n-29 0 -29 -40 0 -44 -9 -15 -28 26 -16 19 -28 -33 -52 -23 -11 -55 -31 -72\r\n-44 -48 -39 -26 -48 110 -44 l117 3 -53 -48 c-30 -27 -67 -55 -82 -64 -26 -13\r\n-31 -13 -46 1 -24 22 -44 20 -69 -7 -29 -31 -28 -45 9 -90 32 -39 30 -45 -11\r\n-22 -45 26 -66 19 -89 -28 -36 -74 -37 -102 -6 -148 l27 -42 -28 7 c-16 4 -36\r\n9 -45 12 -22 6 -50 -22 -42 -44 10 -30 46 -62 67 -62 12 0 38 14 59 31 20 17\r\n37 27 37 22 0 -17 -93 -114 -166 -174 -41 -33 -72 -64 -69 -69 3 -4 -21 -31\r\n-52 -59 l-58 -51 58 0 c65 0 73 -10 21 -29 -23 -8 -34 -18 -30 -26 5 -15 -29\r\n-65 -45 -65 -6 0 -22 14 -36 30 -30 36 -64 41 -60 8 1 -16 -5 -23 -30 -30 -42\r\n-11 -79 -58 -99 -124 -9 -31 -29 -71 -46 -90 l-30 -34 30 0 c41 0 48 -15 22\r\n-48 l-22 -27 21 -3 c29 -5 88 15 134 44 47 31 48 47 2 42 -19 -2 -35 -1 -35 3\r\n0 12 83 77 112 88 38 14 58 -8 58 -64 0 -33 -6 -50 -22 -65 -12 -11 -25 -20\r\n-29 -20 -16 0 -39 -33 -49 -69 -11 -43 -26 -51 -101 -51 -56 0 -64 -7 -36 -31\r\nl22 -19 -50 2 -50 3 3 41 c4 48 -14 68 -51 59 -33 -9 -78 -55 -54 -55 55 0\r\n-20 -71 -127 -121 -36 -17 -66 -33 -66 -36 0 -3 11 -14 25 -25 18 -14 25 -29\r\n25 -55 l0 -35 -34 22 c-44 26 -53 13 -21 -34 l24 -36 -87 0 c-99 0 -129 -11\r\n-97 -36 18 -14 12 -15 -80 -14 -171 3 -175 3 -175 -20 0 -17 7 -20 43 -20 46\r\n0 108 -34 128 -71 9 -17 6 -28 -17 -60 -15 -21 -31 -39 -35 -39 -5 0 -9 21 -9\r\n46 0 85 -35 106 -100 62 -48 -33 -58 -53 -37 -76 9 -10 17 -21 17 -24 0 -3\r\n-28 -3 -62 -1 -54 4 -67 2 -91 -17 -57 -45 -40 -53 146 -65 91 -6 117 -12 117\r\n-24 0 -15 -52 -31 -100 -31 -36 0 -52 -5 -58 -17 -9 -15 -14 -12 -45 20 -45\r\n49 -86 47 -129 -7 -24 -29 -22 -34 9 -38 19 -2 29 -10 31 -23 2 -11 10 -25 19\r\n-32 13 -10 10 -14 -19 -29 l-33 -18 49 -9 48 -10 -76 -29 c-114 -44 -105 -52\r\n74 -63 58 -3 109 -10 113 -15 12 -10 -40 -26 -133 -40 -41 -6 -79 -15 -84 -20\r\n-21 -21 68 -101 95 -85 15 10 39 -14 39 -39 0 -11 -7 -41 -16 -66 -16 -45 -12\r\n-104 7 -116 6 -3 28 8 50 26 22 18 43 29 46 26 11 -11 -31 -102 -62 -133 -23\r\n-23 -29 -35 -21 -42 20 -17 61 -22 89 -12 36 14 35 -2 -2 -40 -16 -16 -40 -29\r\n-53 -29 -13 0 -48 -22 -83 -51 -68 -59 -89 -85 -80 -99 15 -25 95 1 95 31 0\r\n32 106 89 166 89 33 0 30 -18 -8 -57 -30 -31 -31 -33 -10 -33 31 0 27 -15 -9\r\n-41 -21 -15 -29 -27 -26 -41 3 -12 -2 -23 -14 -31 -24 -15 -25 -30 -1 -23 9 2\r\n37 8 62 11 l45 7 -43 -31 c-26 -19 -42 -39 -42 -52 l0 -20 -26 20 c-34 27 -54\r\n27 -54 -1 l0 -21 -25 23 -25 23 0 -33 c0 -46 27 -84 119 -168 46 -41 81 -82\r\n83 -95 3 -21 7 -22 94 -22 82 0 96 3 150 31 32 17 65 29 71 27 7 -3 47 28 88\r\n69 52 52 77 83 81 106 5 23 15 37 32 43 13 5 47 30 75 55 40 36 55 44 76 39\r\n34 -7 47 3 66 48 10 25 15 65 14 125 -1 48 2 98 6 112 17 57 67 80 79 38 3\r\n-13 6 -65 6 -116 0 -51 5 -102 11 -113 5 -11 34 -30 64 -43 34 -16 59 -34 68\r\n-52 l14 -28 14 25 c9 16 14 59 14 125 1 79 5 108 19 128 9 15 14 31 11 37 -4\r\n5 13 31 37 58 69 77 89 179 64 321 -21 114 -21 116 13 128 34 12 58 44 67 89\r\n5 27 0 38 -39 80 -24 26 -52 63 -62 82 -25 50 -36 194 -36 491 0 285 6 329 56\r\n416 34 58 106 121 154 134 23 6 63 8 90 4 68 -9 96 0 111 35 17 42 4 85 -41\r\n137 -46 53 -47 44 23 203 66 152 85 235 96 423 10 170 16 188 64 188 40 0 94\r\n24 107 48 6 12 8 40 5 67 -6 38 -3 49 14 68 37 40 182 279 182 301 0 11 -14\r\n41 -30 66 -16 25 -30 52 -30 60 0 9 18 34 41 55 24 24 57 74 81 123 44 92 103\r\n162 137 162 12 0 35 -7 52 -16 63 -32 92 7 103 141 4 44 12 93 18 108 10 26\r\n15 28 47 24 20 -2 92 -29 161 -60 171 -75 164 -75 171 -2 4 33 16 82 28 108\r\n27 61 26 71 -3 143 -13 32 -22 62 -20 65 2 3 24 9 50 13 30 4 68 20 106 46 74\r\n49 129 66 160 49 26 -14 37 -27 97 -124 73 -118 138 -175 199 -175 15 0 54 16\r\n86 35 32 19 69 35 83 35 13 0 54 -18 91 -40 86 -52 109 -51 139 11 22 47 45\r\n70 102 101 l30 17 -1 98 c0 90 2 106 35 190 20 51 39 109 43 128 7 40 13 44\r\n146 90 42 14 109 46 149 71 40 25 78 43 84 40 7 -2 57 -42 111 -89 182 -155\r\n203 -219 117 -359 -38 -61 -41 -103 -9 -103 13 0 23 12 33 40 17 49 52 87 120\r\n132 62 39 72 66 47 118 -22 47 -36 52 -77 26 -19 -12 -37 -21 -41 -21 -15 0\r\n-4 33 19 55 39 40 37 59 -8 63 -20 2 -35 7 -32 12 11 18 -16 50 -74 89 -57 39\r\n-77 64 -65 82 10 17 55 9 132 -21 91 -37 91 -37 232 54 l101 66 -32 41 c-40\r\n51 -85 72 -128 59 -37 -10 -37 -8 -11 36 21 33 21 33 1 43 -30 16 -49 13 -56\r\n-9 -6 -20 -6 -20 -33 0 -15 12 -43 31 -62 43 -21 13 -39 36 -46 55 -16 51 -27\r\n56 -61 28 -19 -16 -42 -53 -58 -93 -31 -79 -66 -128 -95 -136 -31 -8 -33 7 -9\r\n63 12 28 19 54 15 57 -3 4 -27 -3 -51 -15 -25 -12 -48 -22 -50 -22 -2 0 7 17\r\n21 37 17 26 23 45 19 64 -5 22 -2 28 17 33 13 3 32 6 44 6 27 0 57 33 52 57\r\n-2 10 -18 23 -38 30 -34 11 -132 15 -177 6z m-4183 -4373 c24 -47 24 -50 6\r\n-50 -13 0 -36 48 -36 76 0 23 9 16 30 -26z",
      countryData: countries.NO,
      listeners,
      className: svgPathStyling
    },
    {},
    {}
  )}${validate_component(PathInteractive, "PathInteractive").$$render(
    $$result,
    {
      d: "M6870 12610 c0 -28 21 -70 35 -70 15 0 45 32 45 48 0 12 -50 42 -70\r\n42 -5 0 -10 -9 -10 -20z",
      countryData: countries.NO,
      listeners,
      className: svgPathStyling
    },
    {},
    {}
  )}${validate_component(PathInteractive, "PathInteractive").$$render(
    $$result,
    {
      d: "M5957 12221 c-3 -11 -17 -22 -36 -26 -17 -4 -31 -11 -31 -17 0 -12\r\n58 -68 70 -68 19 0 40 33 40 61 0 54 -32 91 -43 50z",
      countryData: countries.NO,
      listeners,
      className: svgPathStyling
    },
    {},
    {}
  )}${validate_component(PathInteractive, "PathInteractive").$$render(
    $$result,
    {
      d: "M7620 12184 c-52 -30 -113 -60 -135 -66 -22 -6 -48 -18 -57 -26 -29\r\n-24 -65 -94 -94 -178 -22 -66 -27 -95 -26 -177 l1 -98 -30 -17 c-75 -41 -109\r\n-87 -123 -164 -4 -21 -10 -38 -13 -38 -4 0 -50 25 -104 55 -53 30 -109 55\r\n-125 55 -15 0 -48 -13 -73 -29 -65 -41 -101 -46 -154 -23 -53 23 -97 75 -176\r\n202 -54 88 -60 95 -87 92 -50 -6 -77 -30 -72 -63 6 -38 -3 -43 -49 -30 -22 6\r\n-41 7 -46 2 -17 -17 84 -111 228 -214 175 -126 271 -220 315 -311 30 -60 34\r\n-79 40 -188 6 -95 11 -124 24 -133 12 -9 16 -28 16 -72 0 -44 7 -76 26 -118\r\n25 -55 26 -63 18 -144 -5 -47 -8 -133 -8 -191 0 -98 2 -110 33 -176 38 -84 85\r\n-133 161 -171 34 -17 60 -39 68 -55 16 -35 41 -174 44 -253 l3 -60 -52 0 c-46\r\n0 -56 -4 -88 -35 -20 -19 -81 -100 -135 -180 -107 -158 -145 -201 -203 -225\r\n-59 -24 -136 -144 -137 -211 0 -40 -13 -51 -79 -65 -54 -11 -62 -20 -75 -80\r\n-3 -15 -24 -51 -46 -80 -22 -30 -43 -63 -46 -74 -3 -11 4 -58 15 -105 12 -47\r\n21 -117 21 -156 0 -52 7 -87 25 -132 28 -70 31 -123 11 -202 -19 -76 -40 -273\r\n-32 -304 8 -32 32 -45 104 -54 56 -7 57 -8 57 -40 0 -51 24 -58 99 -33 34 12\r\n65 21 69 21 4 0 4 -26 1 -58 -7 -64 6 -102 34 -102 48 0 302 73 366 105 39 19\r\n97 39 127 44 30 5 96 25 147 45 57 23 121 39 172 45 62 7 90 15 120 36 46 32\r\n391 405 486 525 91 116 186 254 220 320 60 117 32 210 -88 291 -72 49 -131\r\n106 -173 168 -24 35 -27 44 -15 51 45 25 102 74 112 95 16 35 3 69 -47 125\r\n-44 50 -46 53 -44 111 2 48 -2 65 -20 87 -37 47 -44 74 -49 193 -5 137 9 218\r\n44 256 43 46 36 73 -88 386 l-91 227 39 63 c21 34 64 111 96 171 l57 108 -41\r\n67 c-51 84 -99 134 -164 171 -32 18 -55 39 -62 57 -36 92 -41 182 -15 263 13\r\n41 14 56 5 71 -17 27 -15 38 15 81 18 26 26 50 25 75 -1 26 11 59 40 111 74\r\n134 53 198 -109 332 -53 44 -101 79 -107 79 -6 -1 -54 -26 -106 -55z",
      countryData: countries.FI,
      listeners,
      className: svgPathStyling
    },
    {},
    {}
  )}${validate_component(PathInteractive, "PathInteractive").$$render(
    $$result,
    {
      d: "M5800 12060 c-6 -10 -13 -40 -16 -65 -6 -38 -4 -45 10 -45 24 0 66\r\n45 66 70 0 52 -39 79 -60 40z",
      countryData: countries.NO,
      listeners,
      className: svgPathStyling
    },
    {},
    {}
  )}${validate_component(PathInteractive, "PathInteractive").$$render(
    $$result,
    {
      d: "M5963 12054 c-32 -50 -13 -179 27 -179 28 0 51 65 48 135 -3 62 -4\r\n65 -30 68 -20 2 -31 -4 -45 -24z",
      countryData: countries.NO,
      listeners,
      className: svgPathStyling
    },
    {},
    {}
  )}${validate_component(PathInteractive, "PathInteractive").$$render(
    $$result,
    {
      d: "M5646 11909 c-27 -21 -62 -118 -52 -145 13 -34 96 9 96 50 0 13 7 29\r\n15 36 27 23 13 80 -21 80 -6 0 -23 -9 -38 -21z",
      countryData: countries.NO,
      listeners,
      className: svgPathStyling
    },
    {},
    {}
  )}${validate_component(PathInteractive, "PathInteractive").$$render(
    $$result,
    {
      d: "M6184 11659 c-3 -6 1 -37 11 -69 l18 -59 -32 -65 c-27 -56 -30 -69\r\n-19 -86 11 -16 10 -25 -4 -47 -32 -53 -46 -55 -123 -22 -38 17 -99 37 -135 44\r\n-44 10 -70 21 -79 35 -17 25 -37 26 -46 3 -3 -10 -11 -58 -16 -107 -10 -93\r\n-37 -172 -64 -182 -9 -4 -39 6 -67 21 l-50 27 -26 -19 c-26 -20 -56 -71 -113\r\n-196 -26 -57 -35 -69 -60 -74 -16 -3 -32 -10 -35 -15 -3 -4 11 -38 31 -74 25\r\n-45 35 -73 31 -88 -3 -13 -33 -65 -66 -115 -78 -120 -107 -178 -124 -251 -18\r\n-75 -25 -84 -84 -106 -82 -30 -83 -33 -98 -211 -15 -184 -27 -235 -94 -392\r\n-64 -154 -67 -163 -38 -176 13 -6 31 -30 42 -56 21 -53 17 -95 -14 -147 l-20\r\n-33 -101 7 -100 7 -53 -55 c-69 -71 -94 -136 -108 -282 -11 -119 -4 -444 13\r\n-581 11 -85 19 -102 86 -184 36 -44 41 -57 37 -84 -10 -54 -38 -101 -66 -115\r\n-33 -15 -32 -12 -12 -99 17 -74 14 -179 -7 -246 -7 -21 -30 -56 -51 -78 -28\r\n-28 -38 -48 -38 -70 0 -18 -7 -37 -15 -43 -11 -8 -18 -43 -24 -122 -13 -160\r\n-42 -204 -99 -151 l-25 22 6 -76 c13 -151 68 -312 199 -573 33 -67 75 -143 93\r\n-171 18 -28 36 -70 39 -96 8 -51 -6 -128 -25 -139 -8 -6 0 -31 31 -93 29 -58\r\n40 -92 35 -106 -8 -27 2 -58 21 -65 17 -7 172 31 192 46 6 6 12 29 12 53 0 80\r\n28 125 78 125 13 0 24 11 31 31 l11 31 105 -7 c122 -8 123 -8 165 75 35 69 56\r\n142 70 240 6 41 17 107 25 145 7 39 18 122 25 185 18 193 22 203 112 297 46\r\n48 78 90 78 102 0 24 15 28 24 6 5 -14 9 -14 35 0 37 18 61 52 61 83 0 19 3\r\n21 19 12 57 -30 88 6 41 50 -16 15 -30 32 -30 37 0 5 15 16 33 25 51 24 97 68\r\n97 91 0 70 -203 298 -290 327 -71 24 -84 60 -85 240 0 140 2 149 38 263 37\r\n118 46 180 27 192 -23 14 -7 45 46 85 37 28 61 56 73 83 43 99 229 291 381\r\n392 120 81 130 91 179 192 22 45 55 99 74 120 71 81 71 81 27 130 -52 56 -53\r\n93 -5 180 19 35 35 77 35 92 0 28 17 52 110 162 23 26 33 52 41 99 12 75 16\r\n83 36 76 9 -4 17 1 20 14 7 25 8 25 67 -5 40 -20 64 -25 128 -25 64 0 80 3 85\r\n16 3 9 -4 58 -16 108 -23 98 -27 185 -10 256 19 83 14 160 -15 220 -16 35 -26\r\n72 -26 103 0 26 -4 47 -9 47 -15 0 -21 28 -26 143 -4 62 -11 130 -17 152 -25\r\n98 -112 195 -288 323 -145 105 -198 148 -251 204 -47 49 -62 57 -75 37z",
      countryData: countries.SE,
      listeners,
      className: svgPathStyling
    },
    {},
    {}
  )}${validate_component(PathInteractive, "PathInteractive").$$render(
    $$result,
    {
      d: "M5133 11580 c-7 -10 -33 -28 -58 -39 -33 -15 -45 -26 -45 -41 0 -23\r\n17 -22 73 7 15 7 27 11 27 9 0 -3 -13 -27 -30 -53 -41 -64 -40 -77 8 -68 20 4\r\n37 8 37 8 0 1 8 23 17 49 13 36 14 56 7 90 -13 54 -21 63 -36 38z",
      countryData: countries.NO,
      listeners,
      className: svgPathStyling
    },
    {},
    {}
  )}${validate_component(PathInteractive, "PathInteractive").$$render(
    $$result,
    {
      d: "M5263 11565 c-11 -8 -25 -34 -31 -58 -6 -24 -21 -52 -32 -62 -11 -10\r\n-20 -30 -20 -45 0 -35 -17 -50 -59 -50 -68 -1 -161 -60 -148 -95 13 -31 69\r\n-15 124 37 17 17 36 27 41 24 6 -3 31 10 56 29 26 19 48 35 51 35 3 0 -1 -16\r\n-9 -35 -24 -57 3 -44 99 48 83 80 86 85 83 123 -4 52 -34 58 -71 15 -32 -38\r\n-37 -39 -37 -2 0 39 -20 55 -47 36z",
      countryData: countries.NO,
      listeners,
      className: svgPathStyling
    },
    {},
    {}
  )}${validate_component(PathInteractive, "PathInteractive").$$render(
    $$result,
    {
      d: "M6093 7623 c-19 -7 -16 -62 3 -70 21 -8 44 21 44 54 0 23 -17 29 -47 16z",
      countryData: countries.FI,
      listeners,
      className: svgPathStyling
    },
    {},
    {}
  )}${validate_component(PathInteractive, "PathInteractive").$$render(
    $$result,
    {
      d: "M6636 7569 c-29 -23 -33 -34 -12 -42 18 -7 66 29 66 49 0 20 -23 17 -54 -7z",
      countryData: countries.FI,
      listeners,
      className: svgPathStyling
    },
    {},
    {}
  )}${validate_component(PathInteractive, "PathInteractive").$$render(
    $$result,
    {
      d: "M7229 7327 c-14 -8 -62 -16 -105 -19 -83 -5 -156 -32 -168 -63 -3 -8\r\n-26 -24 -50 -35 -59 -25 -72 -49 -56 -106 7 -24 19 -49 26 -55 19 -16 17 -26\r\n-5 -32 -26 -7 -19 -31 28 -93 38 -51 76 -68 87 -40 9 23 41 20 55 -5 6 -13 8\r\n-39 5 -64 -9 -56 11 -75 57 -56 61 25 83 24 139 -5 29 -16 85 -59 124 -96 39\r\n-38 77 -68 83 -68 6 0 23 7 36 16 17 11 36 14 58 10 42 -8 91 23 118 73 17 32\r\n17 35 -3 85 -46 114 -19 272 70 422 l42 69 -123 6 c-88 4 -147 13 -212 32\r\n-123 35 -174 41 -206 24z",
      countryData: countries.EE,
      listeners,
      className: svgPathStyling
    },
    {},
    {}
  )}${validate_component(PathInteractive, "PathInteractive").$$render(
    $$result,
    {
      d: "M6621 7116 c-18 -21 3 -56 34 -56 31 0 52 35 34 56 -6 8 -22 14 -34\r\n14 -12 0 -28 -6 -34 -14z",
      countryData: countries.EE,
      listeners,
      className: svgPathStyling
    },
    {},
    {}
  )}${validate_component(PathInteractive, "PathInteractive").$$render(
    $$result,
    {
      d: "M6624 6949 c-17 -5 -38 -17 -48 -28 -22 -25 -18 -75 7 -79 22 -4 120\r\n44 144 70 17 19 17 20 -2 34 -21 16 -54 17 -101 3z",
      countryData: countries.EE,
      listeners,
      className: svgPathStyling
    },
    {},
    {}
  )}${validate_component(PathInteractive, "PathInteractive").$$render(
    $$result,
    {
      d: "M1072 6898 c-11 -29 -25 -78 -33 -108 -14 -62 -30 -86 -62 -94 -28\r\n-7 -57 -55 -57 -94 0 -52 16 -79 50 -85 l31 -7 -24 -32 c-29 -38 -76 -131 -87\r\n-170 -6 -18 -3 -33 7 -47 13 -19 12 -21 -6 -21 -54 0 -69 -37 -27 -65 37 -25\r\n69 -10 137 63 34 36 60 62 57 56 -55 -115 -68 -146 -78 -182 -8 -33 -8 -52 1\r\n-79 11 -35 12 -35 23 -14 11 19 14 20 31 6 11 -8 39 -15 63 -15 l42 0 -6 -54\r\nc-4 -35 -3 -56 5 -60 20 -13 11 -63 -24 -137 -19 -41 -35 -83 -35 -94 0 -23\r\n75 -102 82 -88 3 4 8 21 12 36 5 22 11 27 24 22 57 -24 71 -27 95 -22 24 7 33\r\n14 65 52 13 16 112 22 112 7 0 -5 -13 -21 -30 -37 -80 -77 -74 -205 10 -217\r\n14 -2 30 -14 37 -28 19 -37 16 -136 -4 -170 -15 -27 -15 -30 0 -52 51 -70 50\r\n-67 37 -84 -27 -32 -50 -37 -73 -16 -47 44 -156 35 -203 -15 -33 -36 -31 -60\r\n7 -68 22 -5 29 -11 24 -22 -3 -9 1 -24 10 -33 14 -15 14 -22 -2 -69 -24 -74\r\n-80 -135 -151 -161 -31 -12 -62 -26 -69 -32 -13 -11 -17 -67 -7 -105 l6 -21\r\n46 24 c28 15 55 23 67 19 11 -3 48 -10 83 -15 51 -7 70 -15 102 -44 37 -33 41\r\n-34 72 -24 40 13 81 40 127 82 l33 31 -15 -30 c-25 -49 -75 -113 -102 -131\r\n-14 -9 -60 -20 -102 -25 -60 -7 -87 -15 -118 -37 -65 -45 -248 -273 -232 -288\r\n4 -4 39 7 79 24 99 43 116 45 167 27 66 -23 77 -20 105 28 14 24 37 53 50 66\r\n32 30 94 38 133 17 17 -8 49 -18 72 -22 37 -6 41 -4 41 14 0 28 18 31 265 42\r\n222 10 265 17 332 56 39 22 83 67 83 84 0 4 -26 11 -57 14 -111 13 -143 44\r\n-84 78 16 9 31 26 33 39 2 15 24 38 62 64 134 94 155 246 41 296 -64 28 -149\r\n28 -180 -1 -18 -17 -30 -20 -55 -15 -42 9 -47 28 -16 68 66 86 31 164 -95 213\r\n-63 24 -66 30 -37 61 36 39 68 94 68 119 0 35 -35 69 -109 108 -39 20 -77 47\r\n-86 59 -15 20 -59 154 -85 256 -14 53 -84 132 -155 172 -42 24 -61 29 -123 29\r\n-74 0 -149 21 -138 39 4 5 23 15 44 21 103 34 180 101 96 86 -19 -4 -42 -10\r\n-50 -13 -32 -12 -11 14 38 47 67 46 119 113 173 224 54 111 76 193 54 206 -51\r\n32 -272 17 -373 -26 -110 -46 -115 -44 -70 34 14 24 28 61 30 81 2 31 16 48\r\n96 123 89 84 92 88 75 105 -15 16 -41 18 -186 21 l-169 3 -20 -53z",
      countryData: countries.UK,
      listeners,
      className: svgPathStyling
    },
    {},
    {}
  )}${validate_component(PathInteractive, "PathInteractive").$$render(
    $$result,
    {
      d: "M7116 6730 c-27 -11 -59 -29 -72 -41 -21 -19 -23 -29 -21 -108 2 -78\r\n-1 -91 -25 -133 -37 -63 -103 -96 -156 -79 -52 16 -65 29 -96 89 -36 71 -105\r\n142 -139 142 -40 0 -138 -40 -162 -66 -15 -16 -24 -43 -29 -80 -3 -30 -23 -97\r\n-43 -147 -25 -66 -37 -113 -41 -166 l-5 -75 46 28 c118 68 141 76 228 76 46 0\r\n157 -7 246 -16 162 -16 162 -16 203 5 22 11 42 21 45 21 2 0 25 -18 50 -40 25\r\n-22 53 -40 61 -40 30 0 79 -34 155 -106 43 -41 82 -74 87 -74 5 0 22 10 36 21\r\n18 14 49 24 89 28 34 4 73 14 87 24 33 23 89 95 96 124 14 55 -25 171 -65 193\r\n-18 9 -19 18 -14 99 l6 89 -42 30 c-63 46 -104 57 -156 42 -52 -14 -65 -7\r\n-155 86 -52 53 -117 94 -150 93 -8 0 -37 -9 -64 -19z",
      countryData: countries.LV,
      listeners,
      className: svgPathStyling
    },
    {},
    {}
  )}${validate_component(PathInteractive, "PathInteractive").$$render(
    $$result,
    {
      d: "M5895 6722 c-55 -34 -112 -116 -129 -185 -7 -30 9 -107 23 -107 18 0\r\n59 41 75 74 9 19 16 55 16 80 0 46 5 55 59 99 24 19 25 50 1 54 -8 2 -29 -5 -45 -15z",
      countryData: countries.SE,
      listeners,
      className: svgPathStyling
    },
    {},
    {}
  )}${validate_component(PathInteractive, "PathInteractive").$$render(
    $$result,
    {
      d: "M4135 6574 c-16 -8 -48 -32 -70 -53 -67 -63 -94 -79 -150 -91 -29 -6\r\n-72 -24 -94 -40 -65 -48 -74 -74 -79 -246 -7 -214 0 -255 48 -303 30 -30 40\r\n-48 45 -87 4 -27 9 -57 12 -67 7 -27 45 -47 99 -53 39 -4 56 -1 83 16 23 14\r\n30 24 22 29 -45 28 -39 241 8 254 11 2 21 15 23 28 2 15 12 25 28 29 21 5 26\r\n13 31 50 7 49 40 84 70 75 18 -6 69 33 69 53 0 5 -18 12 -39 16 -59 9 -81 43\r\n-81 122 0 36 9 97 20 136 23 83 25 119 8 136 -15 15 -17 15 -53 -4z",
      countryData: countries.DK,
      listeners,
      className: svgPathStyling
    },
    {},
    {}
  )}${validate_component(PathInteractive, "PathInteractive").$$render(
    $$result,
    {
      d: "M7058 6128 c-25 -20 -31 -20 -135 -9 -59 6 -181 11 -270 12 -180 0\r\n-197 -4 -252 -66 -25 -29 -31 -44 -31 -83 0 -59 24 -156 50 -197 26 -42 88\r\n-75 141 -75 57 -1 126 -32 141 -65 9 -19 9 -37 0 -75 -6 -27 -9 -55 -7 -62 3\r\n-7 25 -26 50 -41 24 -16 54 -44 66 -63 31 -50 84 -74 165 -74 61 0 68 2 95 31\r\n15 17 45 35 64 40 74 21 145 108 160 196 6 36 12 45 43 60 23 11 39 27 42 43\r\n4 16 16 28 35 35 40 12 42 15 25 25 -9 6 -14 24 -13 51 1 24 -6 57 -17 78 -43\r\n85 -154 181 -208 181 -15 0 -40 15 -64 40 -22 22 -43 40 -47 39 -3 0 -18 -9 -33 -21z",
      countryData: countries.LT,
      listeners,
      className: svgPathStyling
    },
    {},
    {}
  )}${validate_component(PathInteractive, "PathInteractive").$$render(
    $$result,
    {
      d: "M7738 6012 c-72 -67 -91 -76 -149 -68 -45 6 -49 5 -73 -27 -33 -43\r\n-43 -91 -26 -123 17 -31 3 -77 -25 -82 -50 -10 -145 -113 -145 -158 0 -12 -11\r\n-36 -25 -52 -19 -23 -24 -37 -19 -59 6 -29 4 -30 -35 -37 -67 -10 -120 -36\r\n-133 -64 -16 -33 -57 -44 -131 -38 -81 8 -97 -3 -97 -64 0 -27 7 -79 16 -117\r\n9 -37 17 -102 17 -144 1 -88 -15 -122 -60 -134 -69 -17 -71 -56 -7 -114 44\r\n-40 46 -44 40 -83 -11 -70 25 -87 92 -43 55 36 110 44 279 45 169 0 292 -18\r\n335 -50 40 -30 93 -38 323 -55 258 -18 267 -19 298 -51 28 -28 29 -28 42 51\r\n14 80 68 142 150 172 47 17 50 21 53 58 3 39 -6 88 -35 182 -8 29 -13 63 -9\r\n76 8 35 44 48 85 31 43 -18 75 -18 114 2 68 35 81 60 48 91 -11 10 -21 31 -23\r\n48 -3 28 -7 30 -58 38 -64 10 -76 18 -85 54 -3 14 -23 46 -45 70 -51 58 -131\r\n218 -132 263 0 19 3 55 7 80 12 81 -47 173 -140 216 -61 29 -80 30 -112 4 -41\r\n-32 -63 -27 -63 15 0 44 -35 71 -82 61 -24 -5 -34 -2 -45 14 -11 15 -21 18\r\n-40 14 -19 -5 -30 -2 -39 11 -12 16 -17 13 -66 -33z",
      countryData: countries.BY,
      listeners,
      className: svgPathStyling
    },
    {},
    {}
  )}${validate_component(PathInteractive, "PathInteractive").$$render(
    $$result,
    {
      d: "M4520 6016 c-59 -22 -155 -73 -170 -91 -11 -14 -11 -24 4 -65 10 -27\r\n15 -53 12 -59 -13 -20 174 -154 191 -137 3 3 -2 17 -11 30 -22 35 -20 43 14\r\n61 l30 16 -22 29 c-29 40 -17 82 27 90 28 5 30 9 29 47 -1 47 -26 93 -52 92\r\n-9 0 -33 -6 -52 -13z",
      countryData: countries.DK,
      listeners,
      className: svgPathStyling
    },
    {},
    {}
  )}${validate_component(PathInteractive, "PathInteractive").$$render(
    $$result,
    {
      d: "M522 5745 c-99 -50 -102 -53 -136 -120 -29 -57 -21 -63 67 -47 72 14 111 47 151 127 45 93 35 99 -82 40z",
      countryData: countries.IE,
      listeners,
      className: svgPathStyling
    },
    {},
    {}
  )}${validate_component(PathInteractive, "PathInteractive").$$render(
    $$result,
    {
      d: "M6299 5708 c-47 -49 -46 -54 11 -49 14 1 31 9 38 18 13 18 17 70 5 75 -5 2 -29 -18 -54 -44z",
      countryData: countries.LT,
      listeners,
      className: svgPathStyling
    },
    {},
    {}
  )}${validate_component(PathInteractive, "PathInteractive").$$render(
    $$result,
    {
      d: "M5060 5735 c0 -19 36 -55 55 -55 20 0 19 12 -6 44 -22 29 -49 35 -49 11z",
      countryData: countries.DK,
      listeners,
      className: svgPathStyling
    },
    {},
    {}
  )}${validate_component(PathInteractive, "PathInteractive").$$render(
    $$result,
    {
      d: "M742 5720 c-57 -23 -201 -146 -237 -203 -17 -27 -17 -28 9 -65 47\r\n-65 67 -86 74 -76 26 39 87 104 97 104 7 0 18 -14 25 -31 16 -39 75 -79 117\r\n-79 19 0 43 10 61 25 53 44 78 145 36 145 -17 0 -30 29 -39 84 -4 26 -18 51\r\n-40 73 -34 34 -60 40 -103 23z",
      countryData: countries.UK,
      listeners,
      className: svgPathStyling
    },
    {},
    {}
  )}${validate_component(PathInteractive, "PathInteractive").$$render(
    $$result,
    {
      d: "M3844 5604 c11 -16 31 -46 45 -68 l25 -39 -32 -27 c-37 -31 -39 -36\r\n-12 -43 11 -3 20 -13 20 -22 0 -34 125 -177 200 -229 l25 -18 -35 7 c-40 8\r\n-106 40 -115 55 -9 15 -74 46 -114 55 l-33 7 3 -57 c3 -44 0 -60 -12 -68 -23\r\n-15 -86 0 -92 22 -8 30 -135 44 -171 18 -16 -12 -16 -19 -6 -77 22 -120 -10\r\n-236 -69 -250 -37 -9 -36 -25 4 -56 32 -24 36 -32 31 -58 -10 -48 -54 -96\r\n-112 -122 l-54 -24 0 -57 c0 -32 -7 -88 -17 -124 -16 -65 -16 -67 6 -130 59\r\n-162 55 -145 33 -180 l-20 -32 29 -61 c16 -34 29 -77 29 -95 0 -57 35 -83 199\r\n-147 80 -32 147 -58 148 -59 2 -1 -11 -27 -28 -58 -36 -67 -87 -204 -99 -265\r\n-10 -56 -2 -59 104 -38 113 22 186 23 198 3 6 -11 17 -15 36 -11 19 4 51 -7\r\n111 -37 l84 -42 96 17 c53 10 143 28 201 42 127 29 169 30 220 4 47 -24 49\r\n-19 20 65 -11 33 -17 68 -14 82 4 14 47 59 100 105 l94 81 -123 127 c-130 136\r\n-188 218 -189 271 -1 26 6 39 34 63 47 40 255 149 338 175 82 27 135 62 156\r\n103 21 40 15 110 -21 258 -33 138 -61 206 -104 253 l-35 39 18 46 c43 114 40\r\n195 -10 294 -27 54 -54 72 -93 65 -17 -4 -37 1 -53 11 -116 79 -122 81 -147\r\n75 -45 -10 -184 -86 -224 -122 -34 -31 -41 -33 -83 -27 -90 12 -111 48 -49 85\r\n61 36 47 46 -79 54 -48 4 -73 10 -82 21 -6 9 -25 16 -41 16 -42 0 -48 11 -18\r\n34 49 39 5 73 -126 96 -35 6 -75 14 -89 17 l-24 6 18 -29z",
      countryData: countries.DE,
      listeners,
      className: svgPathStyling
    },
    {},
    {}
  )}${validate_component(PathInteractive, "PathInteractive").$$render(
    $$result,
    {
      d: "M5610 5564 c-107 -32 -162 -56 -225 -100 -30 -20 -116 -57 -205 -89\r\n-85 -30 -163 -63 -174 -74 -18 -19 -19 -24 -7 -91 14 -78 9 -125 -20 -182 -25\r\n-49 -24 -67 5 -97 62 -65 120 -247 136 -426 10 -109 16 -135 34 -135 6 0 30\r\n-17 53 -39 29 -26 62 -44 102 -55 32 -9 71 -26 86 -38 27 -21 27 -22 6 -29\r\n-29 -11 -27 -23 14 -64 52 -51 93 -43 78 16 -6 20 -4 21 23 15 91 -21 329\r\n-159 380 -219 37 -45 50 -50 78 -32 31 20 46 13 104 -49 24 -25 49 -46 57 -46\r\n7 0 39 14 70 30 50 26 67 30 139 30 95 0 156 -18 263 -76 39 -22 75 -36 79\r\n-31 4 4 0 23 -9 42 -37 77 -27 94 165 291 118 121 117 119 75 200 -32 62 -49\r\n134 -62 253 l-13 123 -41 42 c-23 23 -41 46 -41 52 0 5 23 32 51 59 28 28 59\r\n67 70 87 19 37 19 38 -6 155 -24 116 -77 295 -94 321 -15 24 -161 33 -447 28\r\n-154 -3 -304 -8 -334 -11 -48 -5 -62 -2 -110 22 -46 23 -57 35 -68 68 -27 84\r\n-65 92 -212 49z",
      countryData: countries.PL,
      listeners,
      className: svgPathStyling
    },
    {},
    {}
  )}${validate_component(PathInteractive, "PathInteractive").$$render(
    $$result,
    {
      d: "M4750 5520 c0 -6 7 -26 14 -45 16 -37 38 -39 56 -5 8 15 4 23 -16 39 -29 23 -54 27 -54 11z",
      countryData: countries.DE,
      listeners,
      className: svgPathStyling
    },
    {},
    {}
  )}${validate_component(PathInteractive, "PathInteractive").$$render(
    $$result,
    {
      d: "M373 5454 l5 -47 -65 7 c-60 6 -65 5 -70 -14 -5 -20 -6 -20 -29 5\r\n-27 29 -55 32 -94 9 -27 -17 -60 -62 -60 -83 0 -6 13 -11 29 -11 78 0 82 -39\r\n11 -110 -27 -28 -50 -55 -50 -60 0 -22 53 -42 134 -50 47 -5 91 -12 97 -15 18\r\n-12 6 -31 -41 -67 -34 -26 -46 -41 -48 -66 -3 -27 1 -34 23 -42 14 -6 40 -10\r\n58 -10 40 0 27 -11 -48 -39 -87 -32 -105 -46 -105 -82 0 -42 -22 -81 -72 -124\r\n-24 -20 -35 -34 -26 -31 10 3 40 8 68 12 47 6 50 5 50 -16 0 -13 8 -24 20 -27\r\n14 -4 20 -14 20 -34 0 -23 4 -29 23 -29 31 0 140 53 166 81 15 17 31 22 55 21\r\n27 -2 44 6 81 38 55 47 69 55 115 65 19 4 45 16 56 27 21 19 24 19 54 3 42\r\n-21 53 -11 81 73 57 173 24 417 -71 527 -21 25 -42 55 -46 67 -6 21 -10 19\r\n-60 -37 l-53 -59 -62 67 c-61 67 -103 97 -135 97 -14 0 -16 -8 -11 -46z",
      countryData: countries.IE,
      listeners,
      className: svgPathStyling
    },
    {},
    {}
  )}${validate_component(PathInteractive, "PathInteractive").$$render(
    $$result,
    {
      d: "M3260 5110 c-55 -13 -78 -53 -72 -123 1 -10 15 -29 31 -43 33 -28 64\r\n-97 56 -125 -11 -34 -64 -69 -104 -69 -57 0 -75 26 -79 113 -2 40 -5 78 -7 84\r\n-8 25 -33 1 -44 -40 -5 -24 -37 -97 -70 -164 l-60 -122 82 -17 81 -18 -68 -32\r\nc-38 -18 -70 -34 -72 -36 -1 -2 28 -2 67 0 66 4 72 3 137 -37 37 -22 82 -46\r\n101 -52 31 -11 36 -10 54 12 16 20 18 33 13 79 -13 108 -15 100 36 120 64 24\r\n101 52 123 94 l19 36 -32 33 c-39 40 -39 47 -6 78 39 35 84 109 84 137 0 32\r\n-48 78 -96 91 -45 12 -123 13 -174 1z",
      countryData: countries.NL,
      listeners,
      className: svgPathStyling
    },
    {},
    {}
  )}${validate_component(PathInteractive, "PathInteractive").$$render(
    $$result,
    {
      d: "M8800 4773 c-8 -3 -23 -12 -32 -21 -12 -10 -29 -13 -56 -8 -31 4 -45\r\n1 -64 -14 -30 -23 -95 -39 -159 -40 -70 0 -144 -26 -172 -60 -19 -22 -27 -46\r\n-32 -97 -12 -110 -36 -132 -74 -67 -21 36 -23 36 -69 30 -35 -5 -62 -1 -109\r\n16 -61 21 -63 21 -96 3 -28 -15 -39 -16 -69 -6 -19 6 -83 16 -142 21 -90 8\r\n-116 14 -159 39 -29 16 -75 34 -103 40 -87 18 -254 24 -344 12 -71 -9 -93 -17\r\n-136 -46 -28 -19 -56 -35 -62 -35 -20 0 -34 -41 -28 -82 4 -22 21 -67 38 -101\r\n25 -50 31 -73 30 -120 -2 -70 -3 -72 -48 -93 -37 -18 -147 -131 -196 -202\r\nl-30 -44 16 -63 c24 -97 23 -105 -18 -98 -31 5 -37 2 -55 -27 -46 -76 -31\r\n-164 35 -202 52 -30 181 -58 269 -58 88 0 140 -13 149 -36 17 -43 274 35 338\r\n103 43 47 76 57 178 57 147 -1 302 -51 378 -122 30 -28 32 -35 32 -95 0 -64 0\r\n-64 33 -73 29 -9 33 -15 43 -64 12 -61 25 -90 48 -110 10 -7 16 -28 16 -51 0\r\n-34 4 -41 28 -50 l27 -11 -30 -14 c-16 -7 -49 -13 -71 -14 -34 0 -43 4 -47 21\r\n-5 17 -9 19 -25 10 -38 -20 -182 -261 -182 -303 0 -18 4 -20 33 -14 57 10 210\r\n93 278 150 75 62 103 97 121 152 12 35 19 41 68 58 33 11 85 19 130 20 63 1\r\n80 -3 108 -22 38 -28 40 -44 7 -62 -14 -7 -25 -17 -25 -21 0 -13 60 -27 165\r\n-39 209 -25 220 -69 42 -157 l-78 -39 75 -48 c42 -26 81 -56 86 -66 6 -10 10\r\n-47 10 -82 0 -103 16 -108 146 -43 49 24 97 45 106 45 31 0 64 21 82 52 l18\r\n30 78 -7 c84 -7 133 7 142 42 12 47 -11 53 -112 26 -36 -9 -77 -13 -90 -10\r\n-14 3 -53 33 -86 67 -37 35 -70 60 -83 60 -46 0 -19 69 56 142 41 41 70 56\r\n190 103 78 30 152 55 165 55 13 0 39 11 58 24 20 13 73 36 120 51 117 39 136\r\n49 143 82 7 33 97 137 138 158 17 9 52 15 89 14 76 -2 87 8 102 88 9 51 9 67\r\n-5 102 -29 71 -17 125 44 202 l32 40 -24 25 c-51 55 -331 163 -386 149 -17 -4\r\n-29 4 -55 36 -102 127 -111 130 -191 79 -59 -37 -69 -37 -114 -2 -30 22 -46\r\n27 -87 25 -28 0 -59 3 -69 9 -23 12 -49 71 -41 92 10 25 -3 59 -37 102 -40 50\r\n-51 56 -115 59 -30 1 -60 8 -68 14 -24 20 -38 108 -25 146 14 37 3 75 -33 121\r\n-32 40 -123 79 -158 67z",
      countryData: countries.UA,
      listeners,
      className: svgPathStyling
    },
    {},
    {}
  )}${validate_component(PathInteractive, "PathInteractive").$$render(
    $$result,
    {
      d: "M2945 4454 c-91 -37 -93 -37 -191 -18 -64 12 -140 -51 -132 -109 3\r\n-20 8 -22 55 -19 51 2 53 2 72 -35 24 -47 42 -64 108 -97 60 -30 88 -65 81\r\n-101 -3 -14 -2 -28 3 -31 11 -6 45 11 82 42 34 29 47 30 47 6 0 -36 52 -123\r\n88 -147 68 -46 108 -26 99 47 -8 54 12 114 36 112 27 -3 50 39 42 75 -8 37\r\n-48 81 -73 81 -27 0 -39 17 -47 70 -9 54 -25 75 -86 105 -25 13 -51 31 -58 39\r\n-18 21 -22 21 -126 -20z",
      countryData: countries.BE,
      listeners,
      className: svgPathStyling
    },
    {},
    {}
  )}${validate_component(PathInteractive, "PathInteractive").$$render(
    $$result,
    {
      d: "M2486 4330 c-48 -24 -65 -47 -66 -86 -1 -111 -66 -198 -205 -272 -84\r\n-45 -90 -51 -93 -83 -5 -53 -16 -59 -101 -59 -102 0 -175 20 -202 54 -11 15\r\n-38 36 -60 46 -45 23 -48 18 -24 -49 8 -24 22 -82 30 -129 9 -48 19 -95 21\r\n-104 5 -15 -1 -18 -38 -18 -45 0 -147 -14 -185 -26 -17 -5 -33 5 -76 45 -58\r\n55 -68 59 -88 35 -23 -28 -72 -47 -148 -55 -44 -5 -81 -15 -90 -24 -14 -14\r\n-12 -18 23 -47 38 -31 38 -32 33 -90 l-5 -58 33 0 c18 0 71 -16 117 -36 45\r\n-20 115 -44 153 -53 65 -16 70 -19 70 -45 1 -19 14 -39 43 -66 33 -31 42 -46\r\n42 -73 0 -52 48 -115 132 -173 l73 -50 -3 -70 c-10 -238 -46 -491 -91 -634\r\n-26 -83 -26 -87 4 -94 18 -5 25 -13 25 -31 0 -54 127 -95 293 -95 182 0 282\r\n-22 346 -76 39 -32 100 -41 156 -22 42 14 58 36 75 105 13 52 59 99 140 142\r\n85 46 130 43 310 -15 80 -26 157 -49 171 -51 34 -6 69 12 155 84 39 32 85 66\r\n102 75 30 16 72 71 72 93 0 7 -14 9 -34 7 -26 -3 -41 3 -70 29 -49 42 -66 78\r\n-66 136 -1 26 -7 59 -15 73 -22 38 -18 47 26 77 45 30 45 30 8 126 -18 48 -20\r\n63 -11 78 17 27 15 49 -10 86 -29 42 -49 41 -118 -2 -30 -18 -56 -32 -58 -31\r\n-1 2 7 19 18 39 14 23 19 44 15 60 -5 20 0 30 28 51 19 15 38 38 41 51 4 14\r\n27 48 52 76 24 28 47 63 51 79 3 20 14 32 33 39 34 11 49 38 83 148 15 44 38\r\n110 52 145 36 84 44 114 36 124 -3 5 -33 19 -66 30 -33 12 -114 44 -181 72\r\n-66 27 -147 56 -180 63 -41 9 -83 30 -139 68 -89 60 -132 81 -169 81 -30 0\r\n-39 12 -46 65 -5 37 -7 40 -47 47 -56 9 -98 42 -124 95 l-21 43 -49 -6 -50 -7\r\n-16 42 c-14 36 -20 41 -47 41 -17 -1 -48 -9 -70 -20z",
      countryData: countries.FR,
      listeners,
      className: svgPathStyling
    },
    {},
    {}
  )}${validate_component(PathInteractive, "PathInteractive").$$render(
    $$result,
    {
      d: "M5000 4301 c-151 -41 -349 -138 -395 -193 -31 -36 -28 -62 13 -121\r\n67 -99 267 -299 332 -332 45 -23 57 -19 121 42 l60 57 47 -13 c26 -8 70 -20\r\n97 -28 75 -22 245 -30 259 -12 7 9 29 14 57 14 58 0 124 41 145 91 11 25 32\r\n46 74 72 76 47 79 69 14 115 -61 44 -243 137 -267 137 -11 0 -32 -11 -49 -25\r\n-16 -14 -34 -25 -39 -25 -18 0 -109 93 -115 117 -8 29 -40 46 -118 64 -44 11\r\n-60 19 -67 37 -7 19 -16 22 -56 21 -27 0 -77 -8 -113 -18z",
      countryData: countries.CS,
      listeners,
      className: svgPathStyling
    },
    {},
    {}
  )}${validate_component(PathInteractive, "PathInteractive").$$render(
    $$result,
    {
      d: "M3286 4053 c-18 -46 1 -139 30 -150 22 -8 54 31 54 66 0 55 -69 124 -84 84z",
      countryData: countries.LU,
      listeners,
      className: svgPathStyling
    },
    {},
    {}
  )}${validate_component(PathInteractive, "PathInteractive").$$render(
    $$result,
    {
      d: "M5961 3883 c-28 -22 -36 -24 -53 -14 -12 7 -32 10 -50 6 -36 -8 -98\r\n-61 -98 -84 0 -36 -119 -120 -171 -121 -28 0 -68 -40 -74 -74 -12 -64 49 -157\r\n130 -196 41 -20 49 -20 125 -9 80 11 110 26 110 55 0 18 31 31 92 39 25 3 52\r\n13 59 21 8 10 27 15 53 14 64 -3 65 -2 106 42 32 35 46 43 87 48 67 7 161 -5\r\n182 -24 28 -25 57 -19 88 19 26 32 90 172 82 178 -2 2 -35 17 -74 34 -154 67\r\n-251 69 -360 8 -81 -45 -104 -43 -122 9 -16 47 -40 76 -62 76 -9 0 -31 -12\r\n-50 -27z",
      countryData: countries.CS,
      listeners,
      className: svgPathStyling
    },
    {},
    {}
  )}${validate_component(PathInteractive, "PathInteractive").$$render(
    $$result,
    {
      d: "M5070 3665 c-63 -52 -85 -60 -124 -46 -55 21 -78 13 -164 -54 -90\r\n-71 -94 -80 -67 -155 18 -52 19 -97 3 -103 -7 -2 -29 2 -48 10 -48 20 -104 18\r\n-202 -6 -46 -11 -123 -28 -173 -36 -49 -9 -103 -19 -118 -22 -17 -3 -44 2 -67\r\n12 -55 25 -70 16 -70 -40 0 -36 6 -52 26 -72 26 -26 31 -26 106 -8 20 5 34 1\r\n54 -14 33 -26 54 -26 96 -1 33 19 158 52 207 54 18 1 33 -10 55 -41 37 -50 84\r\n-74 191 -98 119 -26 229 -24 361 7 204 48 263 91 265 193 2 82 9 98 63 123\r\nl49 24 -6 61 c-8 79 -33 163 -56 186 -11 11 -40 20 -77 24 -32 3 -86 15 -118\r\n27 -92 32 -122 28 -186 -25z",
      countryData: countries.AT,
      listeners,
      className: svgPathStyling
    },
    {},
    {}
  )}${validate_component(PathInteractive, "PathInteractive").$$render(
    $$result,
    {
      d: "M6278 3581 c-22 -5 -55 -24 -82 -49 -41 -38 -51 -42 -96 -42 -27 0\r\n-50 -4 -50 -9 0 -12 -56 -31 -90 -31 -26 0 -60 -26 -60 -47 0 -22 -66 -38\r\n-156 -38 -84 0 -94 2 -133 29 -23 16 -43 27 -44 25 -2 -2 -11 -17 -21 -32 -10\r\n-16 -33 -35 -52 -43 -27 -11 -34 -19 -29 -33 3 -10 -1 -24 -10 -31 -8 -7 -22\r\n-38 -31 -68 -22 -76 -14 -150 23 -202 37 -54 152 -130 253 -169 75 -29 83 -31\r\n108 -17 84 47 120 56 395 106 169 30 167 29 196 135 24 91 218 345 262 345 36\r\n0 32 24 -11 62 -40 36 -118 68 -164 68 -11 0 -29 9 -41 20 -24 22 -109 33\r\n-167 21z",
      countryData: countries.HU,
      listeners,
      className: svgPathStyling
    },
    {},
    {}
  )}${validate_component(PathInteractive, "PathInteractive").$$render(
    $$result,
    {
      d: "M7572 3548 c-33 -7 -42 -13 -38 -25 12 -32 170 -289 201 -328 41 -52\r\n43 -61 56 -250 5 -88 14 -164 19 -169 17 -17 58 34 110 136 28 54 59 102 70\r\n108 10 5 38 7 62 4 34 -5 48 -2 61 11 22 22 22 52 -1 59 -10 3 -30 31 -45 62\r\n-16 31 -46 78 -68 104 -45 53 -47 67 -18 104 26 33 19 55 -21 63 -17 3 -35 14\r\n-41 24 -7 14 -21 19 -48 19 -25 0 -41 5 -44 15 -8 20 -72 50 -135 64 -60 12\r\n-61 12 -120 -1z",
      countryData: countries.MD,
      listeners,
      className: svgPathStyling
    },
    {},
    {}
  )}${validate_component(PathInteractive, "PathInteractive").$$render(
    $$result,
    {
      d: "M7425 3484 c-38 -30 -160 -83 -239 -104 -76 -19 -81 -19 -104 -2 -54\r\n38 -67 42 -107 37 -22 -3 -78 2 -123 10 -46 9 -93 13 -105 9 -12 -3 -45 -24\r\n-74 -46 -29 -22 -56 -37 -62 -34 -13 8 -113 -149 -171 -269 -56 -114 -70 -131\r\n-157 -174 -35 -17 -63 -33 -63 -35 0 -1 18 -21 40 -44 22 -22 40 -48 40 -57 0\r\n-33 31 -75 70 -95 43 -22 65 -53 56 -77 -17 -43 72 -102 155 -103 77 0 137\r\n-30 94 -46 -24 -10 -18 -27 25 -69 27 -26 40 -48 40 -66 0 -28 19 -39 70 -39\r\n14 0 53 -10 85 -21 53 -19 74 -21 185 -16 147 7 177 14 290 70 77 38 92 42\r\n155 41 92 -1 182 -28 214 -65 20 -22 34 -29 63 -29 41 0 58 19 58 66 0 68 66\r\n264 89 264 5 0 17 -10 26 -22 14 -22 17 -22 42 -8 15 9 38 31 50 49 21 30 22\r\n37 9 55 -19 30 -77 33 -120 7 -47 -29 -116 -28 -143 2 -29 32 -31 42 -48 215\r\n-9 86 -21 175 -26 197 -22 80 -164 331 -220 388 -31 30 -64 34 -94 11z",
      countryData: countries.RO,
      listeners,
      className: svgPathStyling
    },
    {},
    {}
  )}${validate_component(PathInteractive, "PathInteractive").$$render(
    $$result,
    {
      d: "M3805 3319 c-114 -14 -187 -31 -235 -54 -57 -29 -143 -119 -159 -168\r\n-8 -24 -23 -43 -42 -52 -51 -27 -32 -49 41 -50 39 0 47 -4 65 -33 63 -102 57\r\n-97 112 -97 63 1 99 19 112 56 10 28 63 69 89 69 7 0 19 -15 27 -33 8 -19 21\r\n-39 29 -46 23 -19 59 7 97 69 17 28 36 50 42 50 7 0 23 -9 37 -20 14 -11 30\r\n-20 35 -20 15 0 81 56 105 90 l21 30 -45 -6 c-42 -6 -48 -4 -80 28 -33 33 -56\r\n89 -56 136 0 13 -5 32 -10 43 -12 21 -57 23 -185 8z",
      countryData: countries.CH,
      listeners,
      className: svgPathStyling
    },
    {},
    {}
  )}${validate_component(PathInteractive, "PathInteractive").$$render(
    $$result,
    {
      d: "M4392 3131 c-18 -5 -49 -20 -70 -34 -28 -19 -46 -24 -73 -20 -34 5\r\n-37 3 -44 -25 -3 -17 -17 -38 -31 -46 -13 -9 -24 -25 -24 -36 0 -26 -40 -45\r\n-75 -36 -15 4 -38 18 -53 33 l-26 26 -27 -31 c-26 -29 -49 -87 -49 -124 0 -32\r\n-25 -19 -92 47 -74 74 -98 82 -98 32 0 -49 -27 -67 -127 -89 -48 -10 -92 -23\r\n-97 -28 -7 -7 -3 -25 12 -55 12 -25 22 -52 22 -59 0 -8 -18 -29 -40 -46 -22\r\n-17 -40 -36 -40 -41 0 -5 13 -30 30 -57 l29 -47 -21 -17 -22 -16 26 -39 c25\r\n-38 79 -73 111 -73 21 0 38 -25 31 -44 -13 -34 32 -14 125 57 52 39 101 76\r\n108 80 19 12 191 -72 240 -117 42 -38 66 -94 82 -193 9 -61 27 -86 171 -242\r\n114 -124 234 -232 290 -261 19 -10 62 -23 95 -30 93 -19 128 -37 178 -90 26\r\n-27 59 -52 74 -56 52 -11 68 -25 98 -82 24 -46 39 -61 80 -82 36 -18 56 -37\r\n74 -69 29 -52 69 -168 82 -235 8 -45 7 -53 -17 -87 -29 -43 -53 -103 -54 -137\r\n0 -27 37 -46 58 -29 27 22 74 100 90 149 14 44 24 56 62 78 39 23 45 31 48 64\r\n3 35 -1 43 -58 96 l-61 59 16 36 c8 20 38 66 66 101 60 75 77 79 155 35 48\r\n-28 106 -84 117 -113 3 -10 10 -8 27 8 21 20 21 23 6 52 -23 45 -119 119 -270\r\n208 -157 93 -213 131 -221 152 -3 8 4 25 17 39 35 37 13 48 -100 48 -94 0\r\n-100 1 -156 35 -76 45 -137 123 -176 225 -68 176 -98 215 -203 266 -45 22 -47\r\n22 -61 4 -25 -34 -43 -12 -50 62 -18 180 -18 200 -7 207 14 9 14 58 -1 107\r\n-18 62 -4 80 102 124 51 21 99 45 106 53 18 18 18 112 0 156 -12 29 -22 36\r\n-82 55 -65 19 -83 29 -146 74 -30 21 -109 30 -156 18z",
      countryData: countries.IT,
      listeners,
      className: svgPathStyling
    },
    {},
    {}
  )}${validate_component(PathInteractive, "PathInteractive").$$render(
    $$result,
    {
      d: "M5241 3055 c-68 -22 -184 -45 -310 -60 -96 -13 -113 -58 -60 -163 47\r\n-94 96 -124 134 -82 23 25 46 25 96 -1 51 -25 63 -21 63 22 1 29 6 36 39 51\r\n20 10 37 24 38 31 0 6 1 27 2 46 2 30 10 41 60 79 122 93 95 127 -62 77z",
      countryData: countries.YU,
      listeners,
      className: svgPathStyling
    },
    {},
    {}
  )}${validate_component(PathInteractive, "PathInteractive").$$render(
    $$result,
    {
      d: "M5323 2956 c-39 -18 -57 -49 -49 -87 7 -34 -1 -59 -19 -59 -7 0 -25\r\n-20 -40 -46 -40 -68 -107 -82 -147 -31 -14 18 -19 19 -32 8 -25 -21 -19 -56\r\n19 -102 44 -52 51 -64 59 -110 4 -22 23 -55 47 -83 36 -41 40 -50 35 -81 -6\r\n-31 -3 -39 37 -78 65 -66 124 -96 203 -106 38 -5 70 -8 70 -7 1 0 -39 60 -90\r\n132 -96 137 -156 246 -156 283 0 12 5 31 10 42 10 17 22 19 118 19 178 0 426\r\n-27 485 -52 28 -12 52 -18 54 -13 16 50 40 80 63 80 35 0 39 -32 5 -45 -22 -8\r\n-24 -13 -15 -29 5 -11 15 -23 20 -26 15 -9 11 -67 -5 -89 -26 -34 -18 -67 28\r\n-114 l42 -43 -35 -29 -35 -28 28 -26 c23 -21 26 -29 17 -46 -6 -12 -21 -20\r\n-35 -20 -16 0 -33 -12 -51 -35 -18 -24 -34 -35 -47 -33 -16 2 -23 -5 -29 -31\r\n-6 -21 -17 -35 -30 -39 -17 -4 -19 -10 -14 -45 8 -46 73 -150 97 -155 10 -2\r\n36 17 60 44 24 25 54 50 66 55 51 19 169 -47 180 -102 3 -17 12 -33 20 -36 8\r\n-3 44 8 81 25 49 23 93 34 162 42 113 12 131 26 123 90 -5 37 -2 43 41 85 49\r\n49 55 62 31 71 -24 9 -72 91 -85 143 -10 41 -9 54 4 80 18 34 21 118 6 141 -9\r\n13 -14 11 -33 -12 -13 -16 -26 -28 -29 -28 -4 0 -36 20 -71 45 -44 30 -68 55\r\n-76 77 -25 66 -43 94 -84 124 -30 23 -47 45 -59 80 -10 29 -34 65 -58 89 -36\r\n35 -46 40 -88 39 -60 0 -154 -21 -178 -39 -18 -13 -18 -15 -1 -81 15 -58 15\r\n-70 4 -82 -24 -24 -47 11 -47 72 0 51 -12 76 -36 76 -6 0 -14 -9 -17 -20 -12\r\n-46 -134 -12 -307 85 -130 72 -168 83 -217 61z",
      countryData: countries.YU,
      listeners,
      className: svgPathStyling
    },
    {},
    {}
  )}${validate_component(PathInteractive, "PathInteractive").$$render(
    $$result,
    {
      d: "M5287 2633 c-14 -14 -6 -56 22 -112 50 -98 166 -263 225 -319 31 -30\r\n56 -62 56 -71 0 -33 58 -99 131 -151 40 -27 78 -50 84 -50 9 0 11 13 8 44 -8\r\n72 56 167 101 150 13 -5 15 1 13 33 -2 36 0 38 28 41 56 5 59 9 35 46 -14 24\r\n-20 48 -18 76 1 30 -3 45 -14 51 -34 19 -29 109 7 109 16 0 31 42 20 59 -4 7\r\n-22 9 -44 5 -28 -4 -49 0 -79 15 -53 27 -104 37 -275 56 -183 20 -176 20 -188\r\n-15 -6 -16 -13 -30 -15 -30 -3 0 -18 16 -35 35 -30 34 -48 42 -62 28z",
      countryData: countries.YU,
      listeners,
      className: svgPathStyling
    },
    {},
    {}
  )}${validate_component(PathInteractive, "PathInteractive").$$render(
    $$result,
    {
      d: "M6656 2329 c-18 -14 -26 -30 -26 -52 0 -42 54 -135 91 -155 47 -27\r\n36 -92 -17 -92 -31 0 -41 -17 -48 -90 -8 -81 4 -121 49 -171 35 -39 39 -50 35\r\n-101 -1 -21 5 -31 24 -39 21 -10 42 -8 111 9 110 28 148 28 230 -3 86 -33 174\r\n-35 238 -7 35 15 51 31 72 70 45 82 144 117 215 76 33 -20 56 -14 71 20 16 34\r\n-8 81 -41 81 -30 1 -30 26 1 65 18 22 43 72 84 168 10 22 29 39 59 54 64 31\r\n70 67 12 68 -11 0 -65 21 -120 48 -93 43 -107 47 -176 47 -71 0 -79 -2 -165\r\n-50 l-90 -50 -175 1 c-260 1 -373 24 -377 74 0 14 -1 31 -2 38 -1 18 -25 15\r\n-55 -9z",
      countryData: countries.BG,
      listeners,
      className: svgPathStyling
    },
    {},
    {}
  )}${validate_component(PathInteractive, "PathInteractive").$$render(
    $$result,
    {
      d: "M450 2202 c-22 -10 -36 -26 -38 -39 -5 -36 -48 -63 -102 -63 -47 0\r\n-69 -14 -83 -52 -3 -10 7 -42 25 -75 18 -32 37 -85 43 -118 l11 -60 60 0 c47\r\n0 63 -4 81 -22 33 -33 98 -39 153 -14 55 25 142 28 164 5 9 -8 16 -26 16 -39\r\n0 -12 9 -33 19 -46 22 -28 18 -44 -35 -124 -32 -47 -38 -66 -44 -133 -4 -48\r\n-14 -88 -25 -105 -11 -17 -15 -37 -12 -55 6 -31 -20 -99 -46 -121 -23 -19 -21\r\n-45 6 -89 38 -61 39 -69 6 -131 l-31 -59 21 -47 c27 -60 26 -67 -3 -94 -14\r\n-13 -32 -39 -41 -58 -15 -31 -15 -36 -1 -59 9 -13 42 -37 74 -53 71 -36 97\r\n-64 161 -173 51 -87 99 -135 126 -124 8 3 21 20 31 38 26 52 53 76 103 92 72\r\n24 223 45 371 52 159 8 183 16 245 89 53 62 108 102 159 116 27 7 37 17 42 37\r\n12 48 42 99 100 167 65 77 66 88 14 200 l-32 70 97 140 c54 77 111 164 127\r\n193 36 62 71 85 215 137 111 40 208 101 248 155 35 47 35 150 -1 150 -7 0 -18\r\n-9 -24 -20 -9 -17 -21 -20 -78 -20 -40 0 -79 6 -96 15 -16 9 -45 14 -65 13\r\n-31 -3 -36 0 -45 27 -6 17 -15 33 -21 37 -5 4 -57 8 -115 8 -217 0 -365 33\r\n-439 97 -60 50 -111 60 -410 73 -239 11 -350 23 -446 49 -22 6 -97 10 -166 10\r\n-108 0 -134 3 -172 20 -56 26 -101 27 -147 3z",
      countryData: countries.ES,
      listeners,
      className: svgPathStyling
    },
    {},
    {}
  )}${validate_component(PathInteractive, "PathInteractive").$$render(
    $$result,
    {
      d: "M3878 1909 c-21 -15 -28 -29 -28 -54 0 -64 22 -190 36 -204 12 -13\r\n17 -12 40 10 60 56 95 173 70 233 -14 32 -19 36 -53 36 -22 -1 -49 -9 -65 -21z",
      countryData: countries.FR,
      listeners,
      className: svgPathStyling
    },
    {},
    {}
  )}${validate_component(PathInteractive, "PathInteractive").$$render(
    $$result,
    {
      d: "M6049 1898 c-42 -14 -54 -55 -35 -119 20 -65 21 -248 2 -301 -11 -30\r\n-11 -43 0 -75 8 -21 14 -50 14 -65 0 -19 10 -33 33 -49 44 -30 67 -60 67 -86\r\n0 -13 4 -23 9 -23 16 0 77 78 111 141 17 33 38 63 46 66 22 8 17 27 -28 114\r\n-42 79 -43 84 -43 177 0 70 -5 105 -17 127 -35 65 -111 110 -159 93z",
      countryData: countries.AL,
      listeners,
      className: svgPathStyling
    },
    {},
    {}
  )}${validate_component(PathInteractive, "PathInteractive").$$render(
    $$result,
    {
      d: "M6392 1809 c-12 -12 -25 -20 -28 -16 -15 14 -62 -25 -88 -73 -33 -61\r\n-36 -104 -12 -157 20 -45 56 -70 106 -73 66 -5 87 0 134 32 29 18 69 35 100\r\n39 92 15 124 94 73 183 -33 60 -75 79 -177 84 -81 4 -89 3 -108 -19z",
      countryData: countries.YU,
      listeners,
      className: svgPathStyling
    },
    {},
    {}
  )}${validate_component(PathInteractive, "PathInteractive").$$render(
    $$result,
    {
      d: "M342 1758 c-18 -5 -36 -16 -39 -24 -3 -8 2 -45 12 -81 38 -140 -7\r\n-418 -96 -585 -23 -44 -29 -68 -27 -100 2 -30 7 -42 17 -40 25 5 77 -18 104\r\n-46 25 -26 27 -32 18 -78 -16 -89 -23 -218 -12 -245 7 -21 20 -29 60 -39 86\r\n-20 117 -17 151 15 24 23 30 37 30 70 0 28 10 62 30 98 35 65 37 87 13 128\r\n-17 29 -17 31 10 78 36 65 34 90 -12 169 -21 37 -40 71 -40 76 -1 5 20 16 46\r\n25 l48 16 0 55 c0 36 6 64 18 80 11 16 17 44 17 85 0 59 9 84 61 175 25 44 20\r\n102 -12 136 -30 32 -95 33 -130 3 -21 -18 -34 -20 -98 -17 -59 3 -76 8 -90 24\r\n-22 27 -40 32 -79 22z",
      countryData: countries.PT,
      listeners,
      className: svgPathStyling
    },
    {},
    {}
  )}${validate_component(PathInteractive, "PathInteractive").$$render(
    $$result,
    {
      d: "M7503 1755 c-44 -19 -67 -56 -58 -95 5 -21 2 -39 -9 -55 -34 -52 -9\r\n-156 44 -185 31 -17 58 -7 118 44 63 54 98 65 245 74 l112 8 -65 31 c-75 36\r\n-96 53 -136 108 -37 51 -44 56 -70 50 -11 -2 -37 4 -57 15 -43 23 -79 25 -124\r\n5z",
      countryData: countries.TR,
      listeners,
      className: svgPathStyling
    },
    {},
    {}
  )}${validate_component(PathInteractive, "PathInteractive").$$render(
    $$result,
    {
      d: "M9065 1759 c-22 -4 -75 -8 -118 -8 -169 -2 -428 -100 -523 -198 l-44\r\n-47 -88 13 c-107 16 -285 26 -307 18 -37 -15 50 -87 105 -87 39 0 19 -19 -42\r\n-39 -82 -28 -98 -38 -79 -50 20 -13 -16 -17 -224 -30 -207 -12 -287 -32 -335\r\n-87 -25 -29 -30 -43 -28 -72 l3 -37 78 2 c42 2 77 1 77 -2 0 -2 -9 -19 -20\r\n-38 l-21 -35 36 -42 c19 -23 35 -45 35 -49 0 -4 -11 -22 -25 -41 -14 -19 -25\r\n-35 -25 -37 0 -2 12 -15 26 -28 15 -14 22 -25 16 -25 -17 0 -42 -30 -42 -52 0\r\n-14 12 -24 40 -35 34 -14 40 -21 40 -45 0 -16 -6 -31 -15 -34 -24 -9 -18 -24\r\n30 -75 24 -26 47 -58 50 -71 6 -23 9 -24 53 -17 76 13 81 11 131 -36 27 -25\r\n58 -45 70 -45 14 0 28 -11 39 -31 50 -92 100 -118 182 -93 49 14 110 69 110\r\n99 0 32 24 65 47 65 67 0 261 -88 345 -156 59 -49 89 -54 168 -30 85 26 137\r\n54 189 100 28 25 63 49 77 52 38 10 112 -1 133 -20 25 -23 43 -20 86 14 46 37\r\n69 44 95 30 28 -15 25 -39 -10 -91 -53 -79 -33 -163 26 -108 37 34 54 72 54\r\n119 0 23 5 50 10 61 13 23 54 25 90 4 35 -20 72 -19 169 7 l83 22 97 -22 c53\r\n-12 106 -22 119 -22 12 0 71 16 130 35 142 45 189 55 304 65 63 5 107 14 127\r\n26 29 17 32 17 60 1 26 -15 32 -15 65 -2 27 11 77 15 205 15 109 0 172 4 176\r\n11 13 20 -6 63 -42 95 -33 31 -35 36 -25 59 24 52 10 186 -34 313 -16 47 -12\r\n62 14 62 36 0 62 29 62 70 0 44 -18 60 -69 60 -54 0 -77 16 -99 68 -25 58 -27\r\n75 -10 102 17 27 -7 71 -81 148 -66 69 -88 76 -199 62 -94 -12 -129 -24 -207\r\n-66 -106 -58 -217 -77 -309 -52 -36 9 -62 8 -145 -6 -127 -23 -188 -16 -346\r\n35 -66 21 -131 39 -144 39 -18 0 -41 17 -78 57 -41 44 -56 54 -65 45 -17 -17\r\n-69 -15 -96 4 -13 9 -34 33 -48 55 -26 42 -35 44 -109 28z",
      countryData: countries.TR,
      listeners,
      className: svgPathStyling
    },
    {},
    {}
  )}${validate_component(PathInteractive, "PathInteractive").$$render(
    $$result,
    {
      d: "M6910 1614 c-25 -8 -78 -18 -119 -23 -57 -7 -78 -14 -90 -30 -12 -15\r\n-34 -23 -84 -30 -64 -9 -121 -34 -147 -66 -8 -9 -30 -15 -55 -15 -59 0 -75 -8\r\n-75 -36 0 -13 -13 -38 -29 -57 -16 -18 -33 -48 -38 -67 -7 -24 -16 -36 -34\r\n-40 -22 -6 -24 -11 -23 -62 2 -88 58 -172 126 -188 l33 -8 -32 -7 c-49 -11\r\n-57 -26 -38 -71 24 -58 37 -63 157 -64 59 0 131 -5 160 -11 68 -14 223 -89\r\n275 -134 22 -19 43 -32 46 -29 10 10 -12 75 -36 107 -25 32 -69 65 -192 143\r\nl-60 37 33 9 c33 9 33 9 17 34 -9 14 -15 35 -13 47 3 19 9 22 46 20 35 -2 43\r\n1 40 14 -2 9 -17 20 -35 25 -31 8 -34 13 -48 72 -3 17 -15 42 -26 57 -10 15\r\n-19 37 -19 48 0 25 21 77 43 106 15 19 16 19 23 -10 10 -44 33 -65 70 -65 61\r\n0 81 14 88 63 4 25 16 53 27 62 23 22 180 54 260 55 30 0 79 -7 108 -16 29 -8\r\n69 -14 89 -12 35 3 37 5 35 38 -1 19 -8 39 -17 46 -9 6 -55 14 -103 17 -49 4\r\n-126 18 -172 32 -96 28 -127 30 -191 9z",
      countryData: countries.EL,
      listeners,
      className: svgPathStyling
    },
    {},
    {}
  )}${validate_component(PathInteractive, "PathInteractive").$$render(
    $$result,
    {
      d: "M3843 1479 c-59 -28 -63 -32 -63 -64 0 -19 7 -60 15 -92 19 -74 19\r\n-129 -2 -205 l-17 -61 39 -34 c21 -18 45 -33 52 -33 8 0 26 14 40 31 14 16 32\r\n28 39 25 29 -11 65 81 79 202 12 107 -46 262 -98 262 -12 0 -50 -14 -84 -31z",
      countryData: countries.IT,
      listeners,
      className: svgPathStyling
    },
    {},
    {}
  )}${validate_component(PathInteractive, "PathInteractive").$$render(
    $$result,
    {
      d: "M6485 798 c-11 -6 -44 -29 -73 -51 l-52 -40 60 -63 c58 -60 71 -86\r\n50 -99 -15 -9 -12 -61 4 -74 11 -10 20 -10 36 -1 31 17 46 7 75 -50 14 -27 29\r\n-50 33 -50 5 0 16 17 26 37 l18 38 19 -24 c11 -13 25 -21 34 -17 24 9 18 71\r\n-16 148 -17 38 -28 72 -25 76 3 3 28 -5 54 -17 56 -26 105 -25 110 3 3 15 0\r\n18 -18 13 -16 -4 -33 4 -63 32 -60 53 -105 85 -162 113 -68 35 -87 39 -110 26z",
      countryData: countries.EL,
      listeners,
      className: svgPathStyling
    },
    {},
    {}
  )}${validate_component(PathInteractive, "PathInteractive").$$render(
    $$result,
    {
      d: "M4720 745 c-8 -9 -26 -15 -46 -13 -19 1 -40 -4 -46 -11 -30 -30 154\r\n-154 277 -186 66 -17 98 -35 120 -69 9 -13 30 -30 46 -36 26 -11 34 -10 57 7\r\n34 25 38 51 18 111 -17 52 -12 82 28 157 33 62 37 61 -149 40 -113 -12 -138\r\n-12 -190 0 -77 18 -100 18 -115 0z",
      countryData: countries.IT,
      listeners,
      className: svgPathStyling
    },
    {},
    {}
  )}${validate_component(PathInteractive, "PathInteractive").$$render(
    $$result,
    {
      d: "M6890 92 c0 -12 46 -27 107 -36 23 -3 63 -17 89 -31 83 -44 219 -25 161 23 -29 24 -357 65 -357 44z",
      countryData: countries.EL,
      listeners,
      className: svgPathStyling
    },
    {},
    {}
  )}</g></svg>`;
});
class Europe {
  constructor() {
    this.DE = { key: "DE", id: "germany", color: "#00008b", stroke: "none", de: "Deutschland", en: "Germany" };
    this.UK = { key: "UK", id: "unitedKingdom", color: "#00008b", stroke: "none", de: "Großbritannien", en: "United Kingdom" };
    this.FR = { key: "FR", id: "france", color: "#00008b", stroke: "none", de: "Frankreich", en: "France" };
    this.IT = { key: "IT", id: "italy", color: "#00008b", stroke: "none", de: "Italien", en: "Italy" };
    this.ES = { key: "ES", id: "spain", color: "#00008b", stroke: "none", de: "Spanien", en: "Spain" };
    this.UA = { key: "UA", id: "ukraine", color: "#00008b", stroke: "none", de: "Ukraine", en: "Ukraine" };
    this.PL = { key: "PL", id: "poland", color: "#00008b", stroke: "none", de: "Polen", en: "Poland" };
    this.RO = { key: "RO", id: "romania", color: "#00008b", stroke: "none", de: "Rumänien", en: "Romania" };
    this.NL = { key: "NL", id: "netherlands", color: "#00008b", stroke: "none", de: "Niederlande", en: "Netherlands" };
    this.BE = { key: "BE", id: "belgium", color: "#00008b", stroke: "none", de: "Belgien", en: "Belgium" };
    this.CS = { key: "CS", id: "czechoslovakia", color: "#00008b", stroke: "none", de: "Tschechoslowakei", en: "Czechoslovakia" };
    this.CZ = { key: "CZ", id: "czechia", color: "#00008b", stroke: "none", de: "Tschechien", en: "Czechia" };
    this.EL = { key: "EL", id: "greece", color: "#00008b", stroke: "none", de: "Griechenland", en: "Greece" };
    this.PT = { key: "PT", id: "portugal", color: "#00008b", stroke: "none", de: "Portugal", en: "Portugal" };
    this.SE = { key: "SE", id: "sweden", color: "#00008b", stroke: "none", de: "Schweden", en: "Sweden" };
    this.HU = { key: "HU", id: "hungary", color: "#00008b", stroke: "none", de: "Ungarn", en: "Hungary" };
    this.BY = { key: "BY", id: "belarus", color: "#00008b", stroke: "none", de: "Belarus", en: "Belarus" };
    this.AT = { key: "AT", id: "austria", color: "#00008b", stroke: "none", de: "Österreich", en: "Austria" };
    this.CH = { key: "CH", id: "switzerland", color: "#00008b", stroke: "none", de: "Schweiz", en: "Switzerland" };
    this.BG = { key: "BG", id: "bulgaria", color: "#00008b", stroke: "none", de: "Bulgarien", en: "Bulgaria" };
    this.DK = { key: "DK", id: "denmark", color: "#00008b", stroke: "none", de: "Dänemark", en: "Denmark" };
    this.FI = { key: "FI", id: "finland", color: "#00008b", stroke: "none", de: "Finland", en: "Finland" };
    this.NO = { key: "NO", id: "norway", color: "#00008b", stroke: "none", de: "Norwegen", en: "Norway" };
    this.IE = { key: "IE", id: "ireland", color: "#00008b", stroke: "none", de: "Irland", en: "Ireland" };
    this.MD = { key: "MD", id: "moldova", color: "#00008b", stroke: "none", de: "Moldawien", en: "Moldova" };
    this.AL = { key: "AL", id: "albania", color: "#00008b", stroke: "none", de: "Albanien", en: "Albania" };
    this.LT = { key: "LT", id: "lithuania", color: "#00008b", stroke: "none", de: "Litauen", en: "Lithuania" };
    this.YU = { key: "YU", id: "Yugoslavia", color: "#00008b", stroke: "none", de: "Jugoslawien", en: "Yugoslavia" };
    this.LV = { key: "LV", id: "latvia", color: "#00008b", stroke: "none", de: "Lettland", en: "Latvia" };
    this.EE = { key: "EE", id: "estonia", color: "#00008b", stroke: "none", de: "Estland", en: "Estonia" };
    this.LU = { key: "LU", id: "luxembourg", color: "#00008b", stroke: "none", de: "Luxemburg", en: "Luxembourg" };
    this.TR = { key: "TR", id: "turkey", color: "#00008b", stroke: "none", de: "Türkei", en: "Turkey" };
  }
}
const HeatMap = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "" } = $$props;
  let { colorFrom = { red: 0, green: 0, blue: 139 } } = $$props;
  let { colorTo = { red: 238, green: 30, blue: 29 } } = $$props;
  let { upperBound = 100 } = $$props;
  let { lowerBound = 0 } = $$props;
  let { listeners = {
    onClick: (country) => console.log("The clicked country is " + country),
    onMouseEnter: (country) => console.log("Mouse is over: " + country),
    onMouseLeave: (country) => console.log("Mouse was over: " + country)
  } } = $$props;
  let { countryHeatValues = [] } = $$props;
  let { state = false } = $$props;
  let { europe } = $$props;
  function mapColor(value) {
    let colorResult = { red: 0, green: 0, blue: 0 };
    if (lowerBound > upperBound) {
      let temp = lowerBound;
      lowerBound = upperBound;
      upperBound = temp;
    }
    if (value <= lowerBound || upperBound === 0) {
      return "url(#grad1)";
    } else if (value > upperBound) {
      return "rgb(" + colorTo.red + ", " + colorTo.green + ", " + colorTo.blue + ")";
    } else {
      let mappingFactor = (value - lowerBound) / (upperBound - lowerBound);
      colorResult.red = Math.floor((1 - mappingFactor) * colorFrom.red + mappingFactor * colorTo.red);
      colorResult.green = Math.floor((1 - mappingFactor) * colorFrom.green + mappingFactor * colorTo.green);
      colorResult.blue = Math.floor((1 - mappingFactor) * colorFrom.blue + mappingFactor * colorTo.blue);
    }
    return "rgb(" + colorResult.red + ", " + colorResult.green + ", " + colorResult.blue + ")";
  }
  function colorHeatMap() {
    for (const country of countryHeatValues) {
      europe[country.name].color = mapColor(country.value);
    }
  }
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.colorFrom === void 0 && $$bindings.colorFrom && colorFrom !== void 0)
    $$bindings.colorFrom(colorFrom);
  if ($$props.colorTo === void 0 && $$bindings.colorTo && colorTo !== void 0)
    $$bindings.colorTo(colorTo);
  if ($$props.upperBound === void 0 && $$bindings.upperBound && upperBound !== void 0)
    $$bindings.upperBound(upperBound);
  if ($$props.lowerBound === void 0 && $$bindings.lowerBound && lowerBound !== void 0)
    $$bindings.lowerBound(lowerBound);
  if ($$props.listeners === void 0 && $$bindings.listeners && listeners !== void 0)
    $$bindings.listeners(listeners);
  if ($$props.countryHeatValues === void 0 && $$bindings.countryHeatValues && countryHeatValues !== void 0)
    $$bindings.countryHeatValues(countryHeatValues);
  if ($$props.state === void 0 && $$bindings.state && state !== void 0)
    $$bindings.state(state);
  if ($$props.europe === void 0 && $$bindings.europe && europe !== void 0)
    $$bindings.europe(europe);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        state = state;
        countryHeatValues = countryHeatValues;
        colorHeatMap();
      }
    }
    $$rendered = `<div class="${escape(className, true) + " w-full"}">${validate_component(SVGEurope, "SVGEurope").$$render(
      $$result,
      { countries: europe, listeners },
      {
        listeners: ($$value) => {
          listeners = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>`;
  } while (!$$settled);
  return $$rendered;
});
const CheveronOutlineUp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "1" } = $$props;
  let { direction = "0" } = $$props;
  let { className = "" } = $$props;
  let { color = "black" } = $$props;
  let { darkColor = "white" } = $$props;
  let { hover = "" } = $$props;
  let { rotationSpeed = "0" } = $$props;
  let { backgroundColor = "inherit" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0)
    $$bindings.direction(direction);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.darkColor === void 0 && $$bindings.darkColor && darkColor !== void 0)
    $$bindings.darkColor(darkColor);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.rotationSpeed === void 0 && $$bindings.rotationSpeed && rotationSpeed !== void 0)
    $$bindings.rotationSpeed(rotationSpeed);
  if ($$props.backgroundColor === void 0 && $$bindings.backgroundColor && backgroundColor !== void 0)
    $$bindings.backgroundColor(backgroundColor);
  return `<div>${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      name: "cheveron-outline-up",
      size,
      direction,
      className,
      color,
      darkColor,
      hover,
      rotationSpeed,
      backgroundColor
    },
    {},
    {}
  )}</div>`;
});
const CheveronOutlineDown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "1" } = $$props;
  let { direction = "0" } = $$props;
  let { className = "" } = $$props;
  let { color = "black" } = $$props;
  let { darkColor = "white" } = $$props;
  let { hover = "" } = $$props;
  let { rotationSpeed = "0" } = $$props;
  let { backgroundColor = "inherit" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0)
    $$bindings.direction(direction);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.darkColor === void 0 && $$bindings.darkColor && darkColor !== void 0)
    $$bindings.darkColor(darkColor);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.rotationSpeed === void 0 && $$bindings.rotationSpeed && rotationSpeed !== void 0)
    $$bindings.rotationSpeed(rotationSpeed);
  if ($$props.backgroundColor === void 0 && $$bindings.backgroundColor && backgroundColor !== void 0)
    $$bindings.backgroundColor(backgroundColor);
  return `<div>${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      name: "cheveron-outline-down",
      size,
      direction,
      className,
      color,
      darkColor,
      hover,
      rotationSpeed,
      backgroundColor
    },
    {},
    {}
  )}</div>`;
});
const CheveronOutlineLeft = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "1" } = $$props;
  let { direction = "0" } = $$props;
  let { className = "" } = $$props;
  let { color = "black" } = $$props;
  let { darkColor = "white" } = $$props;
  let { hover = "" } = $$props;
  let { rotationSpeed = "0" } = $$props;
  let { backgroundColor = "inherit" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0)
    $$bindings.direction(direction);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.darkColor === void 0 && $$bindings.darkColor && darkColor !== void 0)
    $$bindings.darkColor(darkColor);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.rotationSpeed === void 0 && $$bindings.rotationSpeed && rotationSpeed !== void 0)
    $$bindings.rotationSpeed(rotationSpeed);
  if ($$props.backgroundColor === void 0 && $$bindings.backgroundColor && backgroundColor !== void 0)
    $$bindings.backgroundColor(backgroundColor);
  return `<div>${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      name: "cheveron-outline-left",
      size,
      direction,
      className,
      color,
      darkColor,
      hover,
      rotationSpeed,
      backgroundColor
    },
    {},
    {}
  )}</div>`;
});
const CheveronOutlineRight = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "1" } = $$props;
  let { direction = "0" } = $$props;
  let { className = "" } = $$props;
  let { color = "black" } = $$props;
  let { darkColor = "white" } = $$props;
  let { hover = "" } = $$props;
  let { rotationSpeed = "0" } = $$props;
  let { backgroundColor = "inherit" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0)
    $$bindings.direction(direction);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.darkColor === void 0 && $$bindings.darkColor && darkColor !== void 0)
    $$bindings.darkColor(darkColor);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.rotationSpeed === void 0 && $$bindings.rotationSpeed && rotationSpeed !== void 0)
    $$bindings.rotationSpeed(rotationSpeed);
  if ($$props.backgroundColor === void 0 && $$bindings.backgroundColor && backgroundColor !== void 0)
    $$bindings.backgroundColor(backgroundColor);
  return `<div>${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      name: "cheveron-outline-right",
      size,
      direction,
      className,
      color,
      darkColor,
      hover,
      rotationSpeed,
      backgroundColor
    },
    {},
    {}
  )}</div>`;
});
const YearNumbers = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { year = "1926" } = $$props;
  let { minYear = 1890 } = $$props;
  let { maxYear = 1950 } = $$props;
  let { className = "" } = $$props;
  let { responsive = "" } = $$props;
  let wideSize;
  let windowWidth;
  switch (responsive) {
    case "sm":
      wideSize = 640;
      break;
    case "md":
      wideSize = 768;
      break;
    case "lg":
      wideSize = 1024;
      break;
    case "xl":
      wideSize = 1280;
      break;
    case "2xl":
      wideSize = 1536;
      break;
    default:
      wideSize = 1e4;
      break;
  }
  if ($$props.year === void 0 && $$bindings.year && year !== void 0)
    $$bindings.year(year);
  if ($$props.minYear === void 0 && $$bindings.minYear && minYear !== void 0)
    $$bindings.minYear(minYear);
  if ($$props.maxYear === void 0 && $$bindings.maxYear && maxYear !== void 0)
    $$bindings.maxYear(maxYear);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.responsive === void 0 && $$bindings.responsive && responsive !== void 0)
    $$bindings.responsive(responsive);
  return `
<div class="${escape(responsive, true) + ":w-min"}">
    ${windowWidth < wideSize ? `<div class="${escape(className, true) + " flex justify-around place-items-center p-0.5 w-full rounded"}"><button>${validate_component(CheveronOutlineLeft, "CheveronOutlineLeft").$$render(
    $$result,
    {
      size: "2",
      darkColor: "#D2CAB3",
      hover: "firebrick"
    },
    {},
    {}
  )}</button>
            <h1 class="text-2xl font-bold">${escape(year)}</h1>
            <button>${validate_component(CheveronOutlineRight, "CheveronOutlineRight").$$render(
    $$result,
    {
      size: "2",
      darkColor: "#D2CAB3",
      hover: "firebrick"
    },
    {},
    {}
  )}</button></div>` : `
        <div class="${escape(className, true) + " border border-black dark:border-warm-gray-600 bg-dark-paper-200 dark:bg-warm-gray-700 p-0.5 w-min rounded"}"><div class="flex">
                <input type="text" maxlength="4" size="4" class="bg-inherit font-bold text-center text-xl border-none outline-none"${add_attribute("value", year, 0)}>
                
                <div class="grid grid-col-1 gap-y-0.5"><button>${validate_component(CheveronOutlineUp, "CheveronOutlineUp").$$render(
    $$result,
    {
      size: "1.5",
      darkColor: "#D2CAB3",
      hover: "firebrick"
    },
    {},
    {}
  )}</button>
                    <button>${validate_component(CheveronOutlineDown, "CheveronOutlineDown").$$render(
    $$result,
    {
      size: "1.5",
      darkColor: "#D2CAB3",
      hover: "firebrick"
    },
    {},
    {}
  )}</button></div></div>
            
            ${``}</div>`}</div>`;
});
const HeatMapSettings = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data = {} } = $$props;
  let { genders = {
    female: false,
    male: false,
    unknown: false
  } } = $$props;
  let { absoluteMap = true } = $$props;
  let { profession = profession ?? "" } = $$props;
  let { className = "" } = $$props;
  let professionList = [];
  data.getProfessionList((json) => professionList = json);
  let informationButtonStyle = "";
  let professionVisibility = "hidden";
  let chevronButtonStyle = "rounded-[50%] bg-amber-400 dark:bg-firebrick-800 hover:bg-firebrick-500 hover:dark:bg-firebrick-800 dark:hover:border border-firebrick-700";
  let initialButtonStyle = "text-sm sm:text-md font-bold border border-amber-500 dark:border-none rounded bg-amber-400 dark:bg-firebrick-800 h-8";
  let activatedButtonStyle = "text-md sm:text-lg font-bold ring-2 ring-amber-500 rounded dark:bg-firebrick-700 dark:ring-firebrick-600 bg-amber-400 dark:bg-firebrick-800 h-8";
  let currentButtonStyles = {
    female: initialButtonStyle,
    male: initialButtonStyle,
    unknown: initialButtonStyle,
    absolute: activatedButtonStyle,
    relative: initialButtonStyle
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.genders === void 0 && $$bindings.genders && genders !== void 0)
    $$bindings.genders(genders);
  if ($$props.absoluteMap === void 0 && $$bindings.absoluteMap && absoluteMap !== void 0)
    $$bindings.absoluteMap(absoluteMap);
  if ($$props.profession === void 0 && $$bindings.profession && profession !== void 0)
    $$bindings.profession(profession);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  return `<div${add_attribute("class", className, 0)}>
    <div class="grid grid-cols-9 place-items-center gap-2">
        <div class="col-span-9 grid grid-cols-2 gap-2 w-full border-blue-500"><button class="${"w-full " + escape(currentButtonStyles.absolute, true)}">${validate_component(T, "T").$$render(
    $$result,
    {
      en: "Maximum all years",
      de: "Maximum alle Jahre"
    },
    {},
    {}
  )}</button>
            <button class="${"w-full " + escape(currentButtonStyles.relative, true)}">${validate_component(T, "T").$$render(
    $$result,
    {
      en: "Maximum per year",
      de: "Maximum pro Jahr"
    },
    {},
    {}
  )}</button></div>
        
        <button class="${"col-span-3 w-full " + escape(currentButtonStyles.female, true)}">${validate_component(T, "T").$$render($$result, { en: "Female", de: "Weiblich" }, {}, {})}</button>
        
        <button class="${"col-span-3 w-full " + escape(currentButtonStyles.male, true)}">${validate_component(T, "T").$$render($$result, { en: "Male", de: "Männlich" }, {}, {})}</button>
        
        <button class="${"col-span-3 w-full " + escape(currentButtonStyles.unknown, true)}">${validate_component(T, "T").$$render(
    $$result,
    {
      en: "Queer/Unknown",
      de: "Divers/Unbekannt"
    },
    {},
    {}
  )}</button>
        
        
        <button${add_attribute("class", chevronButtonStyle, 0)}>${validate_component(CheveronLeft, "CheveronLeft").$$render($$result, { size: "1.2" }, {}, {})}</button>
        
        <h1 class="text-sm">${validate_component(T, "T").$$render($$result, { en: "Job:", de: "Beruf:" }, {}, {})}</h1>
        
        <h1 class="col-span-5 w-full rounded text-md text-center bg-amber-400 dark:bg-firebrick-800 ">${profession === "" ? `${validate_component(T, "T").$$render($$result, { en: "all", de: "alle" }, {}, {})}` : `${escape(profession)}`}</h1>
        
        <button class="${"rounded-[50%] duration-500 " + escape(informationButtonStyle, true)}">${validate_component(InformationOutline, "InformationOutline").$$render($$result, { darkColor: "#D2CAB3" }, {}, {})}</button>

        
        <button${add_attribute("class", chevronButtonStyle, 0)}>${validate_component(CheveronRight, "CheveronRight").$$render($$result, { size: "1.2" }, {}, {})}</button>

        
        <div class="${"col-span-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl-grid-cols-5 p-2 duration-1000 " + escape(professionVisibility, true)}"><button class="text-sm text-start italic hover:text-firebrick-400">${validate_component(T, "T").$$render($$result, { en: "-- all --", de: "-- alle --" }, {}, {})}</button>
            ${each(professionList, (prof) => {
    return `<button class="text-sm text-start hover:text-firebrick-300">${escape(prof)}
                </button>`;
  })}</div></div></div>`;
});
const EUROPA = "";
const SidePanel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const EUROPE_NAMES = { de: "Europa", en: "Europe" };
  const displayGenders = {
    female: { de: "Weiblich", en: "Female" },
    male: { de: "Männlich", en: "Male" },
    unknown: {
      de: "Divers/Unbekannt",
      en: "Queer/Unknown"
    }
  };
  let { data } = $$props;
  let { year = 1926 } = $$props;
  let { country = EUROPA } = $$props;
  let { genderDistribution = {
    DE: { female: "", male: "", unknown: "" }
  } } = $$props;
  let { profession = "" } = $$props;
  let { className = "" } = $$props;
  let genders = ["female", "male", "unknown"];
  let displayGendersDistribution = {};
  let countryLanguages = EUROPE_NAMES;
  let people = new Array(3).fill({ name: "name", profession: "profession" });
  function getGenderData() {
    genders = Object.keys(genderDistribution["DE"]);
    displayGendersDistribution = {};
    if (country === EUROPA) {
      for (const gender in genderDistribution["DE"]) {
        displayGendersDistribution[gender] = 0;
      }
      for (const country2 in genderDistribution) {
        for (const gender in genderDistribution[country2]) {
          displayGendersDistribution[gender] += genderDistribution[country2][gender];
        }
      }
    } else {
      displayGendersDistribution = genderDistribution[country];
    }
  }
  function getCountryNamesLang() {
    let europe = new Europe();
    if (country === EUROPA) {
      countryLanguages = EUROPE_NAMES;
    } else {
      countryLanguages = {
        de: europe[country].de,
        en: europe[country].en
      };
    }
  }
  function getPersons() {
    data.getPersonPerYear(
      (json) => {
        const res = /* @__PURE__ */ new Set();
        for (const filmId in json) {
          for (const person in json[filmId]["people"]) {
            if ((country == "" || json[filmId]["location"].includes(country)) && genders.includes(json[filmId]["people"][person]["gen"]) && (profession === "" || profession === json[filmId]["people"][person]["pro"])) {
              res.add({
                name: person,
                profession: json[filmId]["people"][person]["pro"]
              });
            }
          }
        }
        people = Array.from(res).sort(() => 0.5 - Math.random());
      },
      year
    );
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.year === void 0 && $$bindings.year && year !== void 0)
    $$bindings.year(year);
  if ($$props.country === void 0 && $$bindings.country && country !== void 0)
    $$bindings.country(country);
  if ($$props.genderDistribution === void 0 && $$bindings.genderDistribution && genderDistribution !== void 0)
    $$bindings.genderDistribution(genderDistribution);
  if ($$props.profession === void 0 && $$bindings.profession && profession !== void 0)
    $$bindings.profession(profession);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  {
    {
      year = year;
      country = country;
      genderDistribution = genderDistribution;
      getGenderData();
      getCountryNamesLang();
      getPersons();
    }
  }
  return `<div${add_attribute("class", className, 0)}><h1 class="text-3xl font-semibold text-center">${validate_component(T, "T").$$render(
    $$result,
    {
      de: "Die Filmindustrie in " + countryLanguages.de + " im Jahr " + year,
      en: "The film industry of " + countryLanguages.en + " in " + year
    },
    {},
    {}
  )}</h1>
    <h2 class="text-lg font-semibold">${validate_component(T, "T").$$render(
    $$result,
    {
      de: "Geschlechterverteilung",
      en: "Gender Distribution"
    },
    {},
    {}
  )}</h2>
    ${each(genders, (gender) => {
    return `<p>${validate_component(T, "T").$$render(
      $$result,
      {
        de: displayGenders[gender].de,
        en: displayGenders[gender].en
      },
      {},
      {}
    )}: ${escape(displayGendersDistribution[gender])}
        </p>`;
  })}
    <h2 class="mt-4 text-lg font-semibold">${validate_component(T, "T").$$render($$result, { de: "Personen", en: "People" }, {}, {})}</h2>
    ${each(people, (person) => {
    return `<div class="grid grid-cols-2"><p>${escape(person.name)}</p>
            <p>${escape(person.profession)}</p>
        </div>`;
  })}</div>`;
});
const ALLE = "";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $language, $$unsubscribe_language;
  $$unsubscribe_language = subscribe(language, (value) => $language = value);
  let { data } = $$props;
  let year = "1926";
  let chosenGenders = {
    female: false,
    male: false,
    unknown: false
    // ...to mark as chosen
  };
  let chosenProfession = ALLE;
  let heatMapColors = [];
  let mapUpperBound = 0;
  let countryGenderDistribution = {
    DE: { female: "", male: "", unknown: "" }
  };
  let europe = new Europe();
  let countryFocused = { state: false, country: ALLE };
  function mouseClickAction(country) {
    if (countryFocused.state && countryFocused.country == country["key"]) {
      countryFocused.state = false;
      europe[country["key"]]["stroke"] = "none";
    } else if (countryFocused.state && countryFocused.country != country["key"]) {
      europe[countryFocused.country]["stroke"] = "none";
      europe[country["key"]]["stroke"] = "red";
      countryFocused.country = country["key"];
    } else {
      countryFocused = {
        state: true,
        // no country is fixed
        country: country["key"]
      };
      europe[country["key"]]["stroke"] = "red";
    }
  }
  function mouseEnterAction(country) {
    if (!countryFocused.state) {
      countryFocused = { state: false, country: country["key"] };
    }
  }
  function mouseLeaveAction() {
    if (!countryFocused.state) {
      countryFocused = { state: false, country: ALLE };
    }
  }
  let svgListeners = {
    onClick: (country) => mouseClickAction(country),
    onMouseEnter: (country) => mouseEnterAction(country),
    onMouseLeave: () => mouseLeaveAction()
  };
  let germanyCounted = true;
  let heatMapBoundColors = [
    {
      title: "",
      rgb: { red: 0, green: 0, blue: 139 }
    },
    {
      title: "",
      rgb: { red: 238, green: 30, blue: 29 }
    }
  ];
  const colorPickerNamesDE = ["Wenig Aktivität", "Viel Aktivität"];
  const colorPickerNamesEN = ["Little activity", "Much activity"];
  let currentLanguage;
  let colorInput = false;
  function getChosenGenders() {
    let res = [];
    Object.keys(chosenGenders).forEach((e) => chosenGenders[e] ? res.push(e) : null);
    res = Object.values(chosenGenders).includes(true) ? res : ["male", "female", "unknown"];
    return res;
  }
  function fillMap(json) {
    let countryPeopleAmount = [];
    let europe2 = new Europe();
    for (const country in europe2) {
      countryPeopleAmount.push({ name: country, value: 0 });
    }
    if (json[year] != void 0) {
      for (const gender of getChosenGenders()) {
        for (const country in json[year][gender]) {
          if (chosenProfession === ALLE) {
            if (Object.keys(europe2).includes(country)) {
              let index = countryPeopleAmount.findIndex((entry) => entry.name === country);
              countryPeopleAmount[index].value += json[year][gender][country];
            }
          } else {
            if (Object.keys(europe2).includes(country)) {
              let index = countryPeopleAmount.findIndex((entry) => entry.name === country);
              countryPeopleAmount[index].value += json[year][gender][country][chosenProfession] ?? 0;
            }
          }
        }
      }
    }
    heatMapColors = countryPeopleAmount;
  }
  function calculateGenderDistribution(json) {
    let countryGenderDist = {};
    for (const location of Object.keys(new Europe())) {
      countryGenderDist[location] = {};
      for (const gender of getChosenGenders()) {
        countryGenderDist[location][gender] = 0;
      }
    }
    if (json[year] != void 0) {
      for (const gender of getChosenGenders()) {
        for (const country in json[year][gender]) {
          if (chosenProfession === ALLE && json[year] != void 0) {
            if (Object.keys(countryGenderDist).includes(country)) {
              countryGenderDist[country][gender] += json[year][gender][country];
            }
          } else {
            if (json[year] != void 0) {
              if (Object.keys(countryGenderDist).includes(country)) {
                countryGenderDist[country][gender] += json[year][gender][country][chosenProfession] ?? 0;
              }
            }
          }
        }
      }
    }
    countryGenderDistribution = countryGenderDist;
  }
  function calculateMaximumOfAllYears(json) {
    mapUpperBound = 0;
    for (const yearEntry in json) {
      let amountPerYear = 0;
      for (const gender of getChosenGenders()) {
        for (const country in json[yearEntry][gender]) {
          if (chosenProfession === ALLE) {
            amountPerYear += json[yearEntry][gender][country] ?? 0;
          } else {
            amountPerYear += json[yearEntry][gender][country][chosenProfession] ?? 0;
          }
        }
      }
      mapUpperBound = Math.max(mapUpperBound, amountPerYear);
    }
  }
  function calculateMaximum() {
    if (germanyCounted) {
      data.getDataProfession(calculateMaximumOfAllYears, chosenProfession);
    } else {
      data.getDataProfession(calculateMaximumPerYear, chosenProfession);
    }
  }
  function calculateMaximumPerYear(json) {
    mapUpperBound = 0;
    for (const gender of getChosenGenders()) {
      for (const country in json[year][gender]) {
        if (chosenProfession === ALLE && json[year] != void 0) {
          mapUpperBound += json[year][gender][country];
        } else {
          mapUpperBound += json[year][gender][country][chosenProfession] ?? 0;
        }
      }
    }
    mapUpperBound = mapUpperBound === 0 ? 1 : mapUpperBound;
  }
  function updateMap() {
    if (chosenProfession === ALLE) {
      data.getPersonData(fillMap, year);
      data.getPersonData(calculateGenderDistribution, year);
    } else {
      data.getDataSpecificYearAndProfession(fillMap, year, chosenProfession);
      data.getDataSpecificYearAndProfession(calculateGenderDistribution, year, chosenProfession);
    }
  }
  let colorPickerVisibility = "-translate-x-[84%] 2xl:translate-x-0";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        currentLanguage = $language === "de" ? colorPickerNamesDE : colorPickerNamesEN;
        heatMapBoundColors[0].title = currentLanguage[0];
        for (let i = 0; i < heatMapBoundColors.length; i++) {
          heatMapBoundColors[i].title = currentLanguage[i];
        }
      }
    }
    {
      {
        chosenGenders = chosenGenders;
        chosenProfession = chosenProfession;
        germanyCounted = germanyCounted;
        calculateMaximum();
      }
    }
    {
      {
        chosenGenders = chosenGenders;
        chosenProfession = chosenProfession;
        year = year;
        updateMap();
      }
    }
    $$rendered = `
<div class="grid grid-cols-1 grow md:grid-cols-3">
    <div class="relative w-full md:col-span-2">
        ${validate_component(HeatMap, "HeatMap").$$render(
      $$result,
      {
        className: "relative p-2",
        countryHeatValues: heatMapColors,
        colorFrom: heatMapBoundColors[0].rgb,
        colorTo: heatMapBoundColors[1].rgb,
        upperBound: mapUpperBound,
        lowerBound: "0",
        state: colorInput,
        listeners: svgListeners,
        europe
      },
      {
        europe: ($$value) => {
          europe = $$value;
          $$settled = false;
        }
      },
      {}
    )}
        
        <div class="${"mt-2 absolute left-0 top-0 flex " + escape(colorPickerVisibility, true) + " rounded-r-md duration-500"}">${validate_component(ColorPicker, "ColorPicker").$$render(
      $$result,
      {
        className: "bg-paper-100 dark:bg-warm-gray-800 opacity-90",
        onInput: () => colorInput = !colorInput,
        colors: heatMapBoundColors
      },
      {
        colors: ($$value) => {
          heatMapBoundColors = $$value;
          $$settled = false;
        }
      },
      {}
    )}
            <button class="grid place-items-center rounded-r-md w-[20%] h-10 md:h-20 2xl:hidden" style="background: linear-gradient(0deg, rgba(255,0,0, 0.9) 10%, rgba(0,255,0,0.9) 50%, rgba(0,0,255,0.9) 90%); ">${validate_component(CheveronRight, "CheveronRight").$$render(
      $$result,
      {
        size: 2,
        darkColor: "black"
      },
      {},
      {}
    )}</button></div>
        
        ${``}
        
        ${`<div class="m-2">${validate_component(YearNumbers, "YearNumbers").$$render(
      $$result,
      {
        className: "bg-amber-400 dark:bg-firebrick-800",
        year
      },
      {
        year: ($$value) => {
          year = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>`}
        
        <div class="m-2">${validate_component(HeatMapSettings, "HeatMapSettings").$$render(
      $$result,
      {
        data,
        genders: chosenGenders,
        profession: chosenProfession,
        absoluteMap: germanyCounted
      },
      {
        genders: ($$value) => {
          chosenGenders = $$value;
          $$settled = false;
        },
        profession: ($$value) => {
          chosenProfession = $$value;
          $$settled = false;
        },
        absoluteMap: ($$value) => {
          germanyCounted = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
        
        <div class="my-4 text-sm p-2"><p>${validate_component(T, "T").$$render(
      $$result,
      {
        de: "Ein maximal eingefärbtes Land entspricht " + mapUpperBound + " Personen, die an Filmen aus der Datenbank beteiligt waren.",
        en: "A maximum colored country corresponds to " + mapUpperBound + " people involved in films of the database."
      },
      {},
      {}
    )}</p>
            <p class="my-2">${validate_component(T, "T").$$render(
      $$result,
      {
        de: "Gestreifte Länder: Hier gibt es keine Filmdaten vom DFF für das ausgewählte Jahr.\r\n                       Dies bedeutet aber nicht, dass hier keine Filme gedreht worden wäre. Das DFF hat lediglich keine\r\n                       Daten darüber.",
        en: "Striped countries: The DFF has no film data for these countries for the chosen year.\r\n                       This does not mean that no films were shot here. The DFF just doesn't have any\r\n                       data about it."
      },
      {},
      {}
    )}</p>
            <p class="italic">${validate_component(T, "T").$$render(
      $$result,
      {
        de: "Hinweis Maximum: 'alle Jahre' bedeutet, dass 100% Färbung auf der Karte der Personenzahl in dem Jahr\r\n                       entspricht, in der am meisten Personen tätig waren.",
        en: "Note Maximum: 'all years' means 100% coloring on the map of the number of people in that year\r\n                       corresponds to the one in which the most people were employed."
      },
      {},
      {}
    )}</p></div></div>
    
    <div class="border-t-2 md:border-l border-firebrick-500 dark:border-firebrick-1000 p-2 h-full">${validate_component(SidePanel, "SidePanel").$$render(
      $$result,
      {
        data,
        year,
        country: countryFocused.country,
        genderDistribution: countryGenderDistribution,
        profession: chosenProfession
      },
      {},
      {}
    )}</div></div>`;
  } while (!$$settled);
  $$unsubscribe_language();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-c95c8f60.js.map
