import { d as data } from './genders_by_year_profession_location-19bd90e1.js';

function GET({ url, fetch }) {
  let content = {};
  const year = url.searchParams.get("year") ?? "";
  url.searchParams.get("gender") ?? "";
  const location = url.searchParams.get("location") ?? "";
  const professionList = url.searchParams.get("list");
  const genders = JSON.parse(url.searchParams.get("genders") ?? '["female","male","unknown"]');
  const random = url.searchParams.get("random") ?? "";
  if (professionList === "true") {
    return fetch("/api/genders-by-year-profession-location?profession-list=true");
  } else {
    if (year != "") {
      const professions2 = /* @__PURE__ */ new Set();
      for (const gender2 of genders) {
        for (const loc in data[year][gender2]["locations"]) {
          if (location == "" || loc == location) {
            for (const profession in data[year][gender2]["locations"][loc]["professions"]) {
              professions2.add(profession);
            }
          }
        }
      }
      content = Array.from(professions2);
      if (random != "") {
        content = content.sort(() => 0.5 - Math.random()).slice(0, Number(random));
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
//# sourceMappingURL=_server.ts-b68f7ac2.js.map
