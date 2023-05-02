import { d as data } from './genders_by_year_profession_location-19bd90e1.js';
import { e as error } from './index-36410280.js';

function getProfessionList() {
  const professionSet = /* @__PURE__ */ new Set();
  for (const year of Object.keys(data)) {
    for (const gender of Object.keys(data[year])) {
      for (const profession of Object.keys(data[year][gender]["professions"])) {
        professionSet.add(profession);
      }
    }
  }
  return Array.from(professionSet).sort();
}
function getLocationList() {
  const countrySet = /* @__PURE__ */ new Set();
  for (const year of Object.keys(data)) {
    for (const gender of Object.keys(data[year])) {
      for (const location of Object.keys(data[year][gender]["locations"])) {
        countrySet.add(location);
      }
    }
  }
  return Array.from(countrySet).sort();
}
function checkIfGenderInDatabase(gender) {
  if (!(gender == "male" || gender == "female" || gender == "unknown")) {
    throw error(406, 'Gender "' + gender + '" does not exist in the database.');
  }
}
function checkIfProfessionInDatabase(profession) {
  if (!getProfessionList().includes(profession)) {
    throw error(406, 'Profession "' + profession + '" does not exist in the database.');
  }
}
function checkIfLocationInDatabase(location) {
  if (!getLocationList().includes(location)) {
    throw error(406, 'Location "' + location + '" does not exist in the database.');
  }
}
function checkIfYearInDatabase(year) {
  if (Number(year) < 1890 || Number(year) > 2021) {
    throw error(406, 'Year "' + year + '" does not exist in the database.');
  }
}
function GET({ url }) {
  let content = {};
  const year = url.searchParams.get("year");
  const gender = url.searchParams.get("gender");
  const profession = url.searchParams.get("profession");
  const location = url.searchParams.get("location");
  const professionList = url.searchParams.get("profession-list");
  const locationList = url.searchParams.get("location-list");
  function getSpecificYearGenderLocationProfession() {
    checkIfYearInDatabase(year);
    checkIfGenderInDatabase(gender);
    checkIfLocationInDatabase(location);
    checkIfProfessionInDatabase(profession);
    if (data[year] != void 0) {
      content[year] = {};
      if (data[year][gender] != void 0) {
        content[year][gender] = {};
        if (data[year][gender]["locations"][location] != void 0) {
          content[year][gender][location] = {};
          if (data[year][gender]["locations"][location]["professions"][profession] != void 0) {
            content[year][gender][location][profession] = data[year][gender]["locations"][location]["professions"][profession];
          }
        }
      }
    }
  }
  function getAllYearsGendersLocationsProfessions() {
    for (const year2 of Object.keys(data)) {
      content[year2] = {};
      for (const gender2 of Object.keys(data[year2])) {
        content[year2][gender2] = {};
        for (const location2 of Object.keys(data[year2][gender2]["locations"])) {
          content[year2][gender2][location2] = data[year2][gender2]["locations"][location2]["occurences"];
        }
      }
    }
  }
  function getAllYearsGendersLocationsSpecificProfession() {
    if (!getProfessionList().includes(profession)) {
      throw error(406, 'Profession "' + profession + '" does not exist in the database.');
    }
    for (const year2 of Object.keys(data)) {
      content[year2] = {};
      for (const gender2 of Object.keys(data[year2])) {
        content[year2][gender2] = {};
        for (const location2 of Object.keys(data[year2][gender2]["locations"])) {
          content[year2][gender2][location2] = {};
          const pro = data[year2][gender2]["locations"][location2]["professions"][profession];
          if (pro != void 0) {
            content[year2][gender2][location2][profession] = pro;
          }
        }
      }
    }
  }
  function getAllYearsGendersProfessionsSpecificLocation() {
    if (!getLocationList().includes(location)) {
      throw error(406, 'Location "' + location + '" does not exist in the database.');
    }
    for (const year2 of Object.keys(data)) {
      content[year2] = {};
      for (const gender2 of Object.keys(data[year2])) {
        content[year2][gender2] = {};
        const loc = data[year2][gender2]["locations"][location];
        if (loc != void 0) {
          content[year2][gender2][location] = data[year2][gender2]["locations"][location]["occurences"];
        }
      }
    }
  }
  function getAllYearsGendersSpecificLocationProfession() {
    checkIfLocationInDatabase(location);
    checkIfProfessionInDatabase(profession);
    for (const year2 of Object.keys(data)) {
      content[year2] = {};
      for (const gender2 of Object.keys(data[year2])) {
        content[year2][gender2] = {};
        const loc = data[year2][gender2]["locations"][location];
        if (loc != void 0) {
          content[year2][gender2][location] = {};
          if (loc["professions"][profession] != void 0) {
            content[year2][gender2][location][profession] = loc["professions"][profession];
          }
        }
      }
    }
  }
  function getAllYearsLocationsProfessionsSpecificGender() {
    for (const year2 of Object.keys(data)) {
      content[year2] = {};
      const gen = data[year2][gender];
      if (gen != void 0) {
        content[year2][gender] = {};
        for (const location2 of Object.keys(data[year2][gender]["locations"])) {
          content[year2][gender][location2] = data[year2][gender]["locations"][location2]["occurences"];
        }
      }
    }
  }
  function getAllYearsLocationsSpecificGenderProfession() {
    for (const year2 of Object.keys(data)) {
      content[year2] = {};
      const gen = data[year2][gender];
      if (gen != void 0) {
        content[year2][gender] = {};
        for (const location2 of Object.keys(data[year2][gender]["locations"])) {
          content[year2][gender][location2] = {};
          const pro = data[year2][gender]["locations"][location2]["professions"][profession];
          if (pro != void 0) {
            content[year2][gender][location2][profession] = pro;
          }
        }
      }
    }
  }
  function getAllYearsProfessionsSpecificGenderLocation() {
    for (const year2 of Object.keys(data)) {
      content[year2] = {};
      const gen = data[year2][gender];
      if (gen != void 0) {
        content[year2][gender] = {};
        const loc = data[year2][gender]["locations"][location];
        if (loc != void 0) {
          content[year2][gender][location] = data[year2][gender]["locations"][location]["occurences"];
        }
      }
    }
  }
  function getAllYearsSpecificGenderLocationProfession() {
    checkIfGenderInDatabase(gender);
    checkIfProfessionInDatabase(profession);
    checkIfLocationInDatabase(location);
    for (const year2 of Object.keys(data)) {
      content[year2] = {};
      if (data[year2][gender] != void 0) {
        content[year2][gender] = {};
        if (data[year2][gender]["locations"][location] != void 0) {
          content[year2][gender][location] = {};
          if (data[year2][gender]["locations"][location]["professions"][profession] != void 0) {
            content[year2][gender][location][profession] = data[year2][gender]["locations"][location]["professions"][profession];
          }
        }
      }
    }
  }
  function getAllProfessionsSpecificYearGenderLocation() {
    checkIfYearInDatabase(year);
    checkIfGenderInDatabase(gender);
    checkIfLocationInDatabase(location);
    if (data[year] != void 0) {
      content[year] = {};
      if (data[year][gender] != void 0) {
        content[year][gender] = {};
        const loc = data[year][gender]["locations"][location];
        if (loc != void 0) {
          content[year][gender][location] = data[year][gender]["locations"][location]["occurences"];
        }
      }
    }
  }
  function getAllLocationsSpecificYearGenderProfession() {
    checkIfYearInDatabase(year);
    checkIfGenderInDatabase(gender);
    checkIfProfessionInDatabase(profession);
    if (data[year] != void 0) {
      content[year] = {};
      if (data[year][gender] != void 0) {
        content[year][gender] = {};
        for (const location2 of Object.keys(data[year][gender]["locations"])) {
          content[year][gender][location2] = {};
          const pro = data[year][gender]["locations"][location2]["professions"][profession];
          if (pro != void 0) {
            content[year][gender][location2][profession] = pro;
          }
        }
      }
    }
  }
  function getAllLocationsProfessionsSpecificYearGender() {
    checkIfYearInDatabase(year);
    checkIfGenderInDatabase(gender);
    if (data[year] != void 0) {
      content[year] = {};
      if (data[year][gender] != void 0) {
        content[year][gender] = {};
        for (const location2 of Object.keys(data[year][gender]["locations"])) {
          content[year][gender][location2] = {};
          for (const location3 of Object.keys(data[year][gender]["locations"])) {
            content[year][gender][location3] = data[year][gender]["locations"][location3]["occurences"];
          }
        }
      }
    }
  }
  function getAllGendersSpecificYearLocationProfession() {
    checkIfYearInDatabase(year);
    checkIfLocationInDatabase(location);
    checkIfProfessionInDatabase(profession);
    if (data[year] != void 0) {
      content[year] = {};
      for (const gender2 of Object.keys(data[year])) {
        content[year][gender2] = {};
        const loc = data[year][gender2]["locations"][location];
        if (loc != void 0) {
          content[year][gender2][location] = {};
          if (loc["professions"][profession] != void 0) {
            content[year][gender2][location][profession] = loc["professions"][profession];
          }
        }
      }
    }
  }
  function getAllGendersProfessionsSpecificYearLocation() {
    checkIfYearInDatabase(year);
    checkIfLocationInDatabase(location);
    if (data[year] != void 0) {
      content[year] = {};
      for (const gender2 of Object.keys(data[year])) {
        content[year][gender2] = {};
        const loc = data[year][gender2]["locations"][location];
        if (loc != void 0) {
          content[year][gender2][location] = data[year][gender2]["locations"][location]["occurences"];
        }
      }
    }
  }
  function getAllGendersLocationsSpecificYearProfession() {
    checkIfYearInDatabase(year);
    checkIfProfessionInDatabase(profession);
    if (data[year] != void 0) {
      content[year] = {};
      for (const gender2 of Object.keys(data[year])) {
        content[year][gender2] = {};
        for (const location2 of Object.keys(data[year][gender2]["locations"])) {
          content[year][gender2][location2] = {};
          const pro = data[year][gender2]["locations"][location2]["professions"][profession];
          if (pro != void 0) {
            content[year][gender2][location2][profession] = pro;
          }
        }
      }
    }
  }
  function getAllGendersLocationsProfessionsSpecificYear() {
    checkIfYearInDatabase(year);
    if (data[year] != void 0) {
      content[year] = {};
      for (const gender2 of Object.keys(data[year])) {
        content[year][gender2] = {};
        for (const location2 of Object.keys(data[year][gender2]["locations"])) {
          content[year][gender2][location2] = {};
          for (const location3 of Object.keys(data[year][gender2]["locations"])) {
            content[year][gender2][location3] = data[year][gender2]["locations"][location3]["occurences"];
          }
        }
      }
    }
  }
  if (professionList != void 0) {
    content = getProfessionList();
  } else if (locationList != void 0) {
    content = getLocationList();
  } else {
    if (year != void 0 && gender != void 0 && location != void 0 && profession != void 0) {
      getSpecificYearGenderLocationProfession();
    }
    if (year != void 0 && gender != void 0 && location != void 0 && profession == void 0) {
      getAllProfessionsSpecificYearGenderLocation();
    }
    if (year != void 0 && gender != void 0 && location == void 0 && profession != void 0) {
      getAllLocationsSpecificYearGenderProfession();
    }
    if (year != void 0 && gender != void 0 && location == void 0 && profession == void 0) {
      getAllLocationsProfessionsSpecificYearGender();
    }
    if (year != void 0 && gender == void 0 && location != void 0 && profession != void 0) {
      getAllGendersSpecificYearLocationProfession();
    }
    if (year != void 0 && gender == void 0 && location != void 0 && profession == void 0) {
      getAllGendersProfessionsSpecificYearLocation();
    }
    if (year != void 0 && gender == void 0 && location == void 0 && profession != void 0) {
      getAllGendersLocationsSpecificYearProfession();
    }
    if (year != void 0 && gender == void 0 && location == void 0 && profession == void 0) {
      getAllGendersLocationsProfessionsSpecificYear();
    }
    if (year == void 0 && gender != void 0 && location != void 0 && profession != void 0) {
      getAllYearsSpecificGenderLocationProfession();
    }
    if (year == void 0 && gender != void 0 && location != void 0 && profession == void 0) {
      getAllYearsProfessionsSpecificGenderLocation();
    }
    if (year == void 0 && gender != void 0 && location == void 0 && profession != void 0) {
      getAllYearsLocationsSpecificGenderProfession();
    }
    if (year == void 0 && gender != void 0 && location == void 0 && profession == void 0) {
      getAllYearsLocationsProfessionsSpecificGender();
    }
    if (year == void 0 && gender == void 0 && location != void 0 && profession != void 0) {
      getAllYearsGendersSpecificLocationProfession();
    }
    if (year == void 0 && gender == void 0 && location != void 0 && profession == void 0) {
      getAllYearsGendersProfessionsSpecificLocation();
    }
    if (year == void 0 && gender == void 0 && location == void 0 && profession != void 0) {
      getAllYearsGendersLocationsSpecificProfession();
    }
    if (year == void 0 && gender == void 0 && location == void 0 && profession == void 0) {
      getAllYearsGendersLocationsProfessions();
    }
  }
  return new Response(
    JSON.stringify(content),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    }
  );
}

export { GET };
//# sourceMappingURL=_server.ts-a45f4c90.js.map
