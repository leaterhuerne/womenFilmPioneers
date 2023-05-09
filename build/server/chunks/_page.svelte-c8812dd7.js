import { c as create_ssr_component, v as validate_component, e as escape, d as add_attribute, a as subscribe, b as each } from './index3-11153cb5.js';
import { R as Refresh } from './Refresh-fafff727.js';
import { I as Icon } from './Icon-eee31a89.js';
import { T } from './T-1170b724.js';
import { I as InformationOutline } from './InformationOutline-c82e6372.js';
import { w as writable } from './index2-d2b5300f.js';
import './language-fc716440.js';

const CheveronUp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
      name: "cheveron-up",
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
const CheveronDown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
      name: "cheveron-down",
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
class CircularArrayIterator {
  constructor(circle) {
    this.circle = circle;
    this.indexOfCurrent = 0;
    this.current = this.circle.data[this.indexOfCurrent];
  }
  setCurrent(value) {
    this.circle.data[this.indexOfCurrent] = value;
  }
  next() {
    this.indexOfCurrent = (this.indexOfCurrent + 1) % this.circle.size;
    this.current = this.circle.data[this.indexOfCurrent];
    return this.current;
  }
  peekNext(n) {
    return this.circle.data[(this.indexOfCurrent + n) % this.circle.size];
  }
  setNext(n, value) {
    this.circle.data[(this.indexOfCurrent + n) % this.circle.size] = value;
  }
  previous() {
    this.indexOfCurrent = (this.indexOfCurrent - 1 + this.circle.size) % this.circle.size;
    this.current = this.circle.data[this.indexOfCurrent];
    return this.current;
  }
  peekPrevious(n) {
    return this.circle.data[(this.indexOfCurrent - n + this.circle.size) % this.circle.size];
  }
  setPrevious(n, value) {
    this.circle.data[(this.indexOfCurrent - n + this.circle.size) % this.circle.size] = value;
  }
  goToStart() {
    this.current = this.circle.data[0];
    this.indexOfCurrent = 0;
  }
  toArray() {
    return this.circle.data;
  }
}
class CircularArrayList {
  constructor(...items) {
    this.data = [];
    this.size = this.data.length;
    items.forEach((e) => this.add(e));
    this.head = this.data[0];
  }
  /**
   * Adds items to the list.
   * @param multiple items
   */
  add(...items) {
    items.forEach((element) => this.data.push(element));
    this.size = this.data.length;
  }
  /**
   * Returns list as array
   * @return list as array
   */
  toArray() {
    return this.data;
  }
  /**
   * Performs a consumer on every item of the list.
   * @param consumer void function to perform on every element
   */
  forEach(consumer) {
    this.data.forEach(consumer);
  }
  /**
   * Returns an iterator.
   * @return CircularArrayIterator
   */
  iterator() {
    return new CircularArrayIterator(this);
  }
  /**
   * Return string representation of the list.
   * @return string, for example 1 ->  2 -> 4 -> 5
   */
  toString() {
    let res = "";
    const elementString = (e) => {
      let element = "{";
      if (typeof e == "object") {
        for (const key in e) {
          element += key + ": " + e[key] + ", ";
        }
        return element.slice(0, -2) + "}";
      } else {
        return String(e);
      }
    };
    this.data.forEach((e) => res += elementString(e) + " -> ");
    return res.slice(0, -4);
  }
}
const boxStyle = "w-full flex place-items-center gap-2 p-2 rounded bg-firebrick-500 dark:bg-warm-gray-800";
const selectorStyle = "grow flex place-items-center rounded px-2 bg-paper-200 dark:bg-warm-gray-900";
const selectorLabelStyle = "grow";
const buttonStyle = "flex flex-col";
let titleStyle = "text-paper-200";
const RollOptions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className } = $$props;
  let { professions = new CircularArrayIterator(new CircularArrayList("alle")) } = $$props;
  let { countries = new CircularArrayIterator(new CircularArrayList("alle")) } = $$props;
  let { professionLabel = professions.current } = $$props;
  let { countryLabel = countries.current } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.professions === void 0 && $$bindings.professions && professions !== void 0)
    $$bindings.professions(professions);
  if ($$props.countries === void 0 && $$bindings.countries && countries !== void 0)
    $$bindings.countries(countries);
  if ($$props.professionLabel === void 0 && $$bindings.professionLabel && professionLabel !== void 0)
    $$bindings.professionLabel(professionLabel);
  if ($$props.countryLabel === void 0 && $$bindings.countryLabel && countryLabel !== void 0)
    $$bindings.countryLabel(countryLabel);
  return `<div class="${escape(className, true) + " grid grid-cols-1 md:grid-cols-2 place-items-center gap-2 text-lg"}">
    <div${add_attribute("class", boxStyle, 0)}><p${add_attribute("class", titleStyle, 0)}>${validate_component(T, "T").$$render($$result, { de: "Beruf", en: "Profession" }, {}, {})}</p>
        <div${add_attribute("class", selectorStyle, 0)}><p${add_attribute("class", selectorLabelStyle, 0)}>${escape(professionLabel)}</p>
            <div${add_attribute("class", buttonStyle, 0)}><button>${validate_component(CheveronUp, "CheveronUp").$$render($$result, { darkColor: "#D2CAB3" }, {}, {})}</button>
                <button>${validate_component(CheveronDown, "CheveronDown").$$render($$result, { darkColor: "#D2CAB3" }, {}, {})}</button></div></div></div>
    
    <div${add_attribute("class", boxStyle, 0)}><p${add_attribute("class", titleStyle, 0)}>${validate_component(T, "T").$$render($$result, { de: "Land", en: "Country" }, {}, {})}</p>
        <div${add_attribute("class", selectorStyle, 0)}><p${add_attribute("class", selectorLabelStyle, 0)}>${escape(countryLabel)}</p>
            <div${add_attribute("class", buttonStyle, 0)}><button>${validate_component(CheveronUp, "CheveronUp").$$render($$result, { darkColor: "#D2CAB3" }, {}, {})}</button>
                <button>${validate_component(CheveronDown, "CheveronDown").$$render($$result, { darkColor: "#D2CAB3" }, {}, {})}</button></div></div></div></div>`;
});
const currentYear = writable(1895);
const SIDES_ON_ROLL = 20;
const Roll = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentYear, $$unsubscribe_currentYear;
  $$unsubscribe_currentYear = subscribe(currentYear, (value) => $currentYear = value);
  let { className } = $$props;
  let { leftColour = { red: 255, green: 0, blue: 0 } } = $$props;
  let { rightColour = { red: 0, green: 0, blue: 255 } } = $$props;
  let { max = 100 } = $$props;
  let { barNames = { left: "left", right: "right" } } = $$props;
  let { frontLabel } = $$props;
  let defaultList = new CircularArrayList();
  let itemList = new CircularArrayList();
  for (let i = 0; i < 30; i++) {
    defaultList.add({ left: 50, year: i, right: 50 });
    if (i < 20) {
      itemList.add({ left: 100, year: -1, right: 100 });
    }
  }
  let { labels = new CircularArrayIterator(defaultList) } = $$props;
  let items = new CircularArrayIterator(itemList);
  const innerRadiusofRoll = 50 / 2 * (1 / Math.tan(Math.PI / items.circle.size));
  const rotationAngle = 360 / SIDES_ON_ROLL;
  let rotation = "";
  const populateRoll = () => {
    const goToStartYear = (iterator) => {
      while (iterator.current.year != $currentYear) {
        iterator.next();
      }
    };
    goToStartYear(labels);
    for (let i = 0; i < 5; i++) {
      items.setCurrent(labels.current);
      items.next();
      labels.next();
    }
    goToStartYear(items);
    items.previous();
    goToStartYear(labels);
    labels.previous();
    for (let i = 0; i < 5; i++) {
      items.setCurrent(labels.current);
      items.previous();
      labels.previous();
    }
    goToStartYear(items);
    goToStartYear(labels);
  };
  const display = (value) => {
    return value == 0 ? 0 : Math.max(value, 0.4);
  };
  labels.current;
  populateRoll();
  frontLabel = items.current;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.leftColour === void 0 && $$bindings.leftColour && leftColour !== void 0)
    $$bindings.leftColour(leftColour);
  if ($$props.rightColour === void 0 && $$bindings.rightColour && rightColour !== void 0)
    $$bindings.rightColour(rightColour);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.barNames === void 0 && $$bindings.barNames && barNames !== void 0)
    $$bindings.barNames(barNames);
  if ($$props.frontLabel === void 0 && $$bindings.frontLabel && frontLabel !== void 0)
    $$bindings.frontLabel(frontLabel);
  if ($$props.labels === void 0 && $$bindings.labels && labels !== void 0)
    $$bindings.labels(labels);
  $$unsubscribe_currentYear();
  return `
<div class="${escape(className, true) + " flex flex-col w-full"}">
    <div class="grid grid-cols-2 place-items-center gap-2 p-2 text-xl font-semibold"><p>${validate_component(T, "T").$$render(
    $$result,
    {
      de: barNames.left === "male" ? "Männlich" : barNames.left === "female" ? "Weiblich" : "Divers/Unbekannt",
      en: barNames.left === "male" ? "Male" : barNames.left === "female" ? "Female" : "Queer/Unknown"
    },
    {},
    {}
  )}</p>
        <p>${validate_component(T, "T").$$render(
    $$result,
    {
      de: barNames.right === "male" ? "Männlich" : barNames.right === "female" ? "Weiblich" : "Divers/Unbekannt",
      en: barNames.right === "male" ? "Male" : barNames.right === "female" ? "Female" : "Queer/Unknown"
    },
    {},
    {}
  )}</p></div>
    
    <div class="relative p-2 grid grid-cols-1 min-h-[24rem]"><div class="absolute lg:relative h-64 w-full flex justify-center">
            <div class="relative h-[50px] w-2/3 max-w-2xl translate-y-40 perspective-1000">
                <div class="h-full w-full absolute preserve-3d duration-500"${add_attribute("style", rotation, 0)}>
                    ${each(items.circle.data, ({ left, year, right }, itemIndex) => {
    return `<div class="preserve-3d block absolute w-full h-[50px] border-2 border-paper-200 dark:border-warm-gray-800 bg-paper-400 dark:bg-warm-gray-600 p-1 rounded-lg opacity-[0.99] f flex justify-center place-items-center gap-2 " style="${"transform: " + escape("rotateX(" + rotationAngle * itemIndex + "deg)", true) + " translateZ(" + escape(innerRadiusofRoll, true) + "px)"}">
                            <div class="h-full grow" style="${"background: " + escape("linear-gradient(\n270deg, rgba(" + leftColour.red + ", " + leftColour.green + ", " + leftColour.blue + ", 1)", true) + " " + escape(display(left / max * 100), true) + "%, rgba(255,255,255,0) " + escape(display(left / max * 100), true) + "%);"}"></div>
                            
                            <h1>${escape(year)}</h1>
                            
                            <div class="h-full grow" style="${"background: " + escape("linear-gradient(\n90deg, rgba(" + rightColour.red + ", " + rightColour.green + ", " + rightColour.blue + ", 1)", true) + " " + escape(display(right / max * 100), true) + "%, rgba(255,255,255,0) " + escape(display(right / max * 100), true) + "%);"}"></div>
                        </div>`;
  })}</div></div></div></div>
    ${``}
    
    <div class="flex items-center gap-2 text-sm pl-2">${validate_component(InformationOutline, "InformationOutline").$$render($$result, { darkColor: "#D2CAB3" }, {}, {})}
        <p>${validate_component(T, "T").$$render(
    $$result,
    {
      de: "Die auf der Rolle abgebildeten Ergebnisse basieren auf den durch das",
      en: "The results shown on the roll are based on the data collected by the"
    },
    {},
    {}
  )}
            <a class="italic hover:text-firebrick-500" href="https://www.dff.film/">DFF</a>
            ${validate_component(T, "T").$$render(
    $$result,
    {
      de: "erfassten Daten zu insgesamt " + max + " Personen im Zeitraum von 1895 bis 1950.",
      en: "total " + max + " people in the period 1895-1950."
    },
    {},
    {}
  )}</p></div></div>`;
});
const SidePanel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { year = 1895 } = $$props;
  let { country = "alle" } = $$props;
  let { leftGender } = $$props;
  let { rightGender } = $$props;
  let { professions = new Array(5).fill("") } = $$props;
  let { films = new Array(5).fill("") } = $$props;
  let { refreshProfessions = () => data.getProfessionForYear(year, (json) => professions = Object.keys(json).sort(() => 0.5 - Math.random()).slice(0, 5)) } = $$props;
  let { refreshFilms = () => data.getFilmsForYear(year, country, (json) => {
    films = Object.values(json);
  }) } = $$props;
  let lastYearChange = Date.now();
  let changedYear = false;
  refreshProfessions();
  refreshFilms();
  setInterval(
    () => {
      if (changedYear && Date.now() - lastYearChange > 100) {
        refreshProfessions();
        refreshFilms();
        changedYear = false;
      }
    },
    10
  );
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.year === void 0 && $$bindings.year && year !== void 0)
    $$bindings.year(year);
  if ($$props.country === void 0 && $$bindings.country && country !== void 0)
    $$bindings.country(country);
  if ($$props.leftGender === void 0 && $$bindings.leftGender && leftGender !== void 0)
    $$bindings.leftGender(leftGender);
  if ($$props.rightGender === void 0 && $$bindings.rightGender && rightGender !== void 0)
    $$bindings.rightGender(rightGender);
  if ($$props.professions === void 0 && $$bindings.professions && professions !== void 0)
    $$bindings.professions(professions);
  if ($$props.films === void 0 && $$bindings.films && films !== void 0)
    $$bindings.films(films);
  if ($$props.refreshProfessions === void 0 && $$bindings.refreshProfessions && refreshProfessions !== void 0)
    $$bindings.refreshProfessions(refreshProfessions);
  if ($$props.refreshFilms === void 0 && $$bindings.refreshFilms && refreshFilms !== void 0)
    $$bindings.refreshFilms(refreshFilms);
  {
    {
      country = country;
      refreshFilms();
    }
  }
  {
    {
      year = year;
      lastYearChange = Date.now();
      changedYear = true;
    }
  }
  return `<div class="grow border-t lg:border-t-0 lg:border-l border-firebrick-500 dark:border-firebrick-1000 p-2 flex flex-col gap-2 "><h1 class="text-3xl font-semibold text-center">${validate_component(T, "T").$$render(
    $$result,
    {
      de: "Die Filmindustrie im Jahr",
      en: "The film industry in the year"
    },
    {},
    {}
  )} ${escape(year)}</h1>
    <div><h2 class="text-lg font-semibold">${validate_component(T, "T").$$render(
    $$result,
    {
      de: "Geschlechterverteilung",
      en: "Gender distribution"
    },
    {},
    {}
  )}</h2>
        <p>${validate_component(T, "T").$$render($$result, { de: leftGender.de, en: leftGender.en }, {}, {})}: ${escape(leftGender.value)}</p>
        <p>${validate_component(T, "T").$$render($$result, { de: rightGender.de, en: rightGender.en }, {}, {})}: ${escape(rightGender.value)}</p></div>
    <p class="flex gap-2 place-items-center justify-center text-sm italic mt-4">${validate_component(T, "T").$$render(
    $$result,
    {
      de: "Die Film- und Berufsbeispiele folgen einer zufälligen Auswahl. Für weitere klicken Sie auf den\r\n                jeweiligen Button neben der Kategorie.",
      en: "The film and profession examples follow a random selection. For more click on the respective button next\r\n                to the category."
    },
    {},
    {}
  )}</p>
    <div><div class="flex gap-4 place-items-center"><h2 class="text-lg font-semibold">${validate_component(T, "T").$$render($$result, { de: "Berufe", en: "Professions" }, {}, {})}</h2>
            <button>${validate_component(Refresh, "Refresh").$$render($$result, { darkColor: "#D2CAB3" }, {}, {})}</button></div>
        <ul class="list-disc ml-4">${each(professions, (profession) => {
    return `<li>${escape(profession)}</li>`;
  })}</ul></div>
    <div><div class="flex gap-4"><h2 class="text-lg font-semibold">${validate_component(T, "T").$$render(
    $$result,
    {
      de: "Filme aus diesem Jahr",
      en: "Films from this year"
    },
    {},
    {}
  )}</h2>
            <button>${validate_component(Refresh, "Refresh").$$render($$result, { darkColor: "#D2CAB3" }, {}, {})}</button></div>
        <ul class="list-disc ml-4">${each(films, (film) => {
    return `<li>${escape(film)}</li>`;
  })}</ul></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const ALL = void 0;
  const yearSpan = { first: 1895, last: 1950 };
  let { data } = $$props;
  const genderMap = {
    male: { de: "Männlich", en: "Male" },
    female: { de: "Weiblich", en: "Female" },
    unknown: {
      de: "Divers/Unbekannt",
      en: "Queer/Unknown"
    }
  };
  let max = 0;
  const genderPairs = [
    { left: "male", right: "female" },
    { left: "male", right: "unknown" },
    { left: "female", right: "unknown" },
    { left: "female", right: "male" },
    { left: "unknown", right: "male" },
    { left: "unknown", right: "female" }
  ];
  let leftGender = genderPairs[0].left;
  let rightGender = genderPairs[0].right;
  let genderPairPosition = 0;
  let coloursOnRoll;
  let content;
  let frontLabelOnRoll = { left: 0, year: 1895, right: 0 };
  let professionList;
  let countryList;
  let profession = "alle";
  let country = "alle";
  const randomRgb = () => {
    const random = () => Math.round(Math.random() * 255);
    return {
      red: random(),
      green: random(),
      blue: random()
    };
  };
  function resetRoll() {
    max = 0;
    let contentList = new CircularArrayList();
    for (let year = yearSpan.first; year <= yearSpan.last; year++) {
      contentList.add({ left: 0, year: Number(year), right: 0 });
    }
    content = contentList.iterator();
  }
  const populateRoll = () => {
    const iterateOver = (json, consumer) => {
      for (const year in json) {
        let bars = { left: 0, right: 0 };
        for (const gender in json[year]) {
          consumer(json, year, gender, bars);
        }
        if (Number(year) >= yearSpan.first && Number(year) <= yearSpan.last) {
          list.add({
            left: bars.left,
            year: Number(year),
            right: bars.right
          });
        }
        max = Math.max(max, bars.left, bars.right);
      }
      content = list.iterator();
    };
    const allProfessionsAllLocations = (json, year, gender, bars) => {
      for (const location in json[year][gender]) {
        if (gender == leftGender) {
          bars.left += json[year][gender][location] ?? 0;
        }
        if (gender == rightGender) {
          bars.right += json[year][gender][location] ?? 0;
        }
      }
    };
    const allProfessionsSpecificLocation = (json, year, gender, bars) => {
      if (gender == leftGender) {
        bars.left += json[year][gender][country] ?? 0;
      }
      if (gender == rightGender) {
        bars.right += json[year][gender][country] ?? 0;
      }
    };
    const specificProfessionAllLocations = (json, year, gender, bars) => {
      for (const location in json[year][gender]) {
        if (gender == leftGender) {
          bars.left += json[year][gender][location][profession] ?? 0;
        }
        if (gender == rightGender) {
          bars.right += json[year][gender][location][profession] ?? 0;
        }
      }
    };
    const specificProfessionSpecificLocation = (json, year, gender, bars) => {
      if (gender == leftGender && json[year][gender][country] != void 0) {
        bars.left += json[year][gender][country][profession] ?? 0;
      }
      if (gender == rightGender && json[year][gender][country] != void 0) {
        bars.right += json[year][gender][country][profession] ?? 0;
      }
    };
    resetRoll();
    let list = new CircularArrayList();
    if (profession == "alle" && country == "alle") {
      data.getProfessionLocation(ALL, ALL, (json) => iterateOver(json, allProfessionsAllLocations));
    } else if (profession == "alle" && country != "alle") {
      data.getProfessionLocation(ALL, country, (json) => iterateOver(json, allProfessionsSpecificLocation));
    } else if (profession != "alle" && country == "alle") {
      data.getProfessionLocation(profession, ALL, (json) => iterateOver(json, specificProfessionAllLocations));
    } else {
      data.getProfessionLocation(profession, country, (json) => iterateOver(json, specificProfessionSpecificLocation));
    }
  };
  const populateOptions = () => {
    const addProfessionsToOptionMenu = (json) => {
      let list = new CircularArrayList("alle");
      for (const profession2 in json) {
        list.add(json[profession2]);
      }
      professionList = list.iterator();
    };
    const addLocationsToOptionMenu = (json) => {
      let list = new CircularArrayList("alle");
      for (const country2 in json) {
        list.add(json[country2]);
      }
      countryList = list.iterator();
    };
    data.getProfessionList(addProfessionsToOptionMenu);
    data.getLocationList(addLocationsToOptionMenu);
  };
  resetRoll();
  populateOptions();
  coloursOnRoll = [{ title: "", rgb: randomRgb() }, { title: "", rgb: randomRgb() }];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        leftGender = leftGender;
        rightGender = rightGender;
        profession = profession;
        country = country;
        populateRoll();
      }
    }
    $$rendered = `
<div class="relative flex flex-col lg:flex-row 3xl:flex-col 2xl:gap-4 grow ">
    <div class="flex flex-col lg:w-2/3 3xl:w-full">
        ${validate_component(Roll, "Roll").$$render(
      $$result,
      {
        className: "pb-2",
        labels: content,
        barNames: genderPairs[genderPairPosition],
        max,
        frontLabel: frontLabelOnRoll,
        leftColour: coloursOnRoll[0].rgb,
        rightColour: coloursOnRoll[1].rgb
      },
      {
        max: ($$value) => {
          max = $$value;
          $$settled = false;
        },
        frontLabel: ($$value) => {
          frontLabelOnRoll = $$value;
          $$settled = false;
        },
        leftColour: ($$value) => {
          coloursOnRoll[0].rgb = $$value;
          $$settled = false;
        },
        rightColour: ($$value) => {
          coloursOnRoll[1].rgb = $$value;
          $$settled = false;
        }
      },
      {}
    )}
        
        <div class="flex flex-col justify-start grow p-2 border-t border-firebrick-500 dark:border-firebrick-1000"><div><h1 class="text-center text-xl font-semibold">${validate_component(T, "T").$$render(
      $$result,
      {
        de: "Anpassung der Daten auf der Rolle",
        en: "Customization of data on the roll"
      },
      {},
      {}
    )}</h1>
                ${validate_component(RollOptions, "RollOptions").$$render(
      $$result,
      {
        className: "w-full py-2",
        professions: professionList,
        countries: countryList,
        professionLabel: profession,
        countryLabel: country
      },
      {
        professionLabel: ($$value) => {
          profession = $$value;
          $$settled = false;
        },
        countryLabel: ($$value) => {
          country = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
            <p class="text-sm italic">${validate_component(T, "T").$$render(
      $$result,
      {
        de: "In der zentralen Datenbank des DFF sind sowohl film- als auch personenbezogene Daten erfasst,\r\n                    welche für die Erstellung von Visualisierungen zusammengeführt wurden. Die personenbezogenen Daten\r\n                    enthalten Tätigkeitszeiträume der einzelnen Personen, während die filmwerksbezogenen Daten die\r\n                    jeweiligen Berufe aufzeigen, welche die einzelnen Personen je nach Filmproduktion ausgeübt haben.\r\n                    Dabei kann es jedoch vorkommen, dass in manchen Jahren berufstätige Personen angezeigt werden,\r\n                    obwohl die spezifische Tätigkeit nicht in den filmwerksbezogenen Daten erfasst wurde, was zu einer\r\n                    Datenabweichung (Data Bias) führt.",
        en: "Both film and personal data are recorded in the central database of the DFF.\r\n                    which were brought together to create visualizations. The personal data\r\n                    contain periods of activity of the individual persons, while the film work-related data\r\n                    show the respective professions that the individual people have practiced depending on the film production.\r\n                    However, it can happen that in some years working people are reported,\r\n                    although the specific activity was not recorded in the film work-related data, resulting in a\r\n                    data bias."
      },
      {},
      {}
    )}</p></div></div>
    
    ${``}
    
    <div class="lg:w-1/3 3xl:w-full flex justify-between">${validate_component(SidePanel, "SidePanel").$$render(
      $$result,
      {
        data,
        leftGender: {
          de: genderMap[leftGender].de,
          en: genderMap[leftGender].en,
          value: frontLabelOnRoll.left
        },
        rightGender: {
          de: genderMap[rightGender].de,
          en: genderMap[rightGender].en,
          value: frontLabelOnRoll.right
        },
        year: frontLabelOnRoll.year,
        country
      },
      {},
      {}
    )}
        ${``}</div></div>`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-c8812dd7.js.map
