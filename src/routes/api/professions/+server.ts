import data from "$lib/data/genders_by_year_profession_location.json";

type year = keyof typeof data;
type gender = "female" | "male" | "unknown";


export function GET({ url, fetch} : {url:URL, fetch: any}) {
    let content: any = {};
    const year = url.searchParams.get("year") ?? "";
    const gender = url.searchParams.get("gender") ?? "";
    const location = url.searchParams.get("location") ?? "";
    const professionList = url.searchParams.get("list");
    const genders = JSON.parse(url.searchParams.get("genders") ?? "[\"female\",\"male\",\"unknown\"]")
    const random = url.searchParams.get("random") ?? "";

    if(professionList === "true") {
        return fetch("/api/genders-by-year-profession-location?profession-list=true");
    } else {
        const professions = new Set();
        if(year != "") {
            const professions = new Set<string>;
            for(const gender of genders) {
                for(const loc in data[year as year][gender as gender]["locations"]) {
                    if(location == "" || loc == location) {
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        for (const profession in data[year as year][gender as gender]["locations"][loc]["professions"]) {
                            professions.add(profession)
                        }
                    }
                }
            }
            content = Array.from(professions);
            if(random != "") {
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