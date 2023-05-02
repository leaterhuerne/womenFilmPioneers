import { d as data } from './genders_by_year_profession_location-19bd90e1.js';

function GET({ url, fetch }) {
  const content = {};
  const year = url.searchParams.get("year") ?? "";
  const gender = url.searchParams.get("gender") ?? "";
  const location = url.searchParams.get("location") ?? "";
  const professionList = url.searchParams.get("list");
  if (professionList === "true") {
    return fetch("/api/genders-by-year-profession-location?profession-list=true");
  } else {
    if (year != "" && gender == "" && location == "") {
      for (const gender2 in data[year]) {
        for (const profession in data[year][gender2].professions) {
          if (!(profession in content)) {
            content[profession] = {
              female: 0,
              male: 0,
              unknown: 0
            };
          }
          content[profession][gender2] = data[year][gender2].professions[profession];
        }
      }
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
//# sourceMappingURL=_server.ts-a82f9cab.js.map
