import data from "$lib/data/genders_by_year_profession_location.json";

type year = keyof typeof data;
type gender = "female" | "male" | "unknown";


export function GET({ url, fetch} : {url:URL, fetch: any}) {
    const content: any = {};
    const year = url.searchParams.get("year") ?? "";
    const gender = url.searchParams.get("gender") ?? "";
    const location = url.searchParams.get("location") ?? "";
    const professionList = url.searchParams.get("list");

    if(professionList === "true") {
        return fetch("/api/genders-by-year-profession-location?profession-list=true");
    } else {
        // all genders and locations, specific year
        if(year != "" && gender == "" && location == "") {
            for(const gender in data[year as year]) {
                for(const profession in data[year as year][gender as gender].professions) {
                    if(!(profession in content)) {
                        content[profession] = {
                            female: 0,
                            male: 0,
                            unknown: 0
                        }
                    }
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    content[profession][gender] = data[year as year][gender as gender].professions[profession];
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