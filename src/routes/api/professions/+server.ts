import professions from "$lib/data/professions.json";
import {error} from "@sveltejs/kit";

type professionKey = keyof typeof professions;
type genderKey = keyof typeof professions.Adaption;

/**
 * Helper function for GET handling cthe case that only the gender argument was given. The function returns a smaller
 * json that only contains all professions with the specified gender.
 * @param gender gender key
 * @return a Response containing a json with professions as keys and the frequency of the given gender as value.
 */
function onlyGender(gender: genderKey) {
    const result: { [key: string]: number } = {};
    const keys = Object.keys(professions) as professionKey[];
    for (let i = 0; i < keys.length; i++) {
        if (professions[keys[i]][gender as genderKey] > 0) {
            result[keys[i]] = professions[keys[i]][gender as genderKey];
        }
    }
    return new Response(JSON.stringify(result));
}

/**
 * Helper function for GET to throw different errors, if the given arguments don't exist in the database.
 * @param name profession key
 * @param gender gender key
 */
function errorIfwrongArgument(name: professionKey, gender: genderKey) {
    if (professions[name] == undefined) {
        throw error(400, "The profession \"" + String(name) + "\" does not exist in the database.");
    } else if (String(gender) != "male" || String(gender) != "female" || String(gender) != "unknown") {
        throw error(400, "The gender \"" + String(gender) + "\" does not exist in the database.");
    }
}

/**
 * Returns a json containing the professions as key and the frequency of genders as value.
 * @param url URL coming from GET request
 */
export function GET({ url }: { url:URL }) {
    const gender = url.searchParams.get("gender") as genderKey;
    const name = url.searchParams.get("name") as professionKey;
    // if parameter gender is given
    if (gender != undefined) {
        // if parameters name and gender are given
        if (name != undefined) {
            // if profession or gender is not in the database
            errorIfwrongArgument(name, gender);
            return new Response(String(professions[name][gender as genderKey]));
        // if only parameter gender is given
        } else {
            return onlyGender(gender);
        }
    // if only parameter name is given
    } else if (name != undefined) {
        return new Response(
            JSON.stringify(professions[name]),
            {
                status: 200,
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                }
            });
    // no parameters given
    } else {
        return new Response(
            JSON.stringify(professions),
            {
                status: 200,
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                }
            });
    }

}