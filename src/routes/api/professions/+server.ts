import professions from "$lib/data/professions.json";

type professionKey = keyof typeof professions;
type genderKey = keyof typeof professions.Adaption;

export function GET({ url }: { url:URL }) {
    // /api/professions?gender=female&name=DarstellerIn
    if (url.searchParams.get("gender") != undefined) {
        const gender = url.searchParams.get("gender");
        if (url.searchParams.get("name") != undefined) {
            return new Response(JSON.stringify(professions[url.searchParams.get("name") as professionKey][gender as genderKey]));
        } else {
            const result: {[key: string]: number} = {};
            const keys = Object.keys(professions) as professionKey[];
            for (let i = 0; i < keys.length; i++) {
                if (professions[keys[i]][gender as genderKey] > 0) {
                    result[keys[i]] = professions[keys[i]][gender as genderKey];
                }
            }
            return new Response(JSON.stringify(result));
        }
    } else if (url.searchParams.get("name") != undefined) {
        const name: professionKey = url.searchParams.get("name") as professionKey;
        return new Response(JSON.stringify(professions[name]));
    } else {
        return new Response(JSON.stringify(professions));
    }

}