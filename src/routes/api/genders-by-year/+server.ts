import data from "$lib/data/genders_by_year.json";

type dataKey = keyof typeof data
type genderKey = "female" | "male" | "unknown"
type res = Record<string, number> | number | {"female": number, "male": number, "unknown": number} | typeof data

export function GET({ url }: { url:URL }) {
    let content: res = {};
    const year = url.searchParams.get("year");
    const gender = url.searchParams.get("gender");
    if(year != undefined) {
        if(gender != undefined) {
            content = data[year as dataKey][gender as genderKey]
        } else {
            content = data[year as dataKey];
        }
    } else if(gender != undefined)  {
        for(const key in data) {
            content[key as dataKey] = data[key as dataKey][gender as genderKey]
        }
    } else {
        content = data;
    }
    return new Response(
        JSON.stringify(content),
        {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        }
    );

}