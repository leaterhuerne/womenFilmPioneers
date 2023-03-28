import data from "$lib/data/genders_by_year_profession_location.json";
import {error} from "@sveltejs/kit";

type dataKey = keyof typeof data
type genderKey = "female" | "male" | "unknown"


function getProfessionList() {
    const professionSet = new Set<string>;
    for (const year of Object.keys(data)) {
        for (const gender of Object.keys(data[year as dataKey])) {
            for (const profession of Object.keys(data[year as dataKey][gender as genderKey]["professions"])) {
                professionSet.add(profession);
            }
        }
    }
    return Array.from(professionSet).sort();
}

function getLocationList() {
    const countrySet = new Set<string>;
    for (const year of Object.keys(data)) {
        for (const gender of Object.keys(data[year as dataKey])) {
            for (const location of Object.keys(data[year as dataKey][gender as genderKey]["locations"])) {
                countrySet.add(location);
            }
        }
    }
    return Array.from(countrySet).sort();
}

export function GET({ url }: { url:URL }) {
    let content: any = {};
    const year = url.searchParams.get("year");
    const gender = url.searchParams.get("gender");
    const profession = url.searchParams.get("profession");
    const location = url.searchParams.get("location");
    const professionList = url.searchParams.get("profession-list");
    const locationList = url.searchParams.get("location-list");

    //==================================================================================================================
    // Create profession and location list
    //==================================================================================================================

    /**
     * Return data for specific year, gender, location and profession.
     */
    function getSpecificYearGenderLocationProfession() {
        if (data[year as dataKey] != undefined) {
            content[year as dataKey] = {}
            if (data[year as dataKey][gender as genderKey] != undefined) {
                content[year as dataKey][gender as genderKey] = {}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                if (data[year as dataKey][gender as genderKey]["locations"][location] != undefined) {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    content[year as dataKey][gender as genderKey][location] = {}
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    if (data[year as dataKey][gender as genderKey]["locations"][location]["professions"][profession] != undefined) {
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        content[year][gender][location][profession] = data[year as dataKey][gender as genderKey]["locations"][location]["professions"][profession]
                    } else {
                        throw error(406, {message: "Profession \"" + profession + "\" does not exist in database."});
                    }
                } else {
                    throw error(406, {message: "Location \"" + location + "\" does not exist in database."});
                }
            } else {
                throw error(406, {message: "Gender \"" + gender + "\" does not exist in database."});
            }
        } else {
            throw error(406, {message: "Year " + year + " not in database."});
        }
    }

    function getAllYearsGendersLocationsProfessions() {
        for (const year of Object.keys(data)) {
            content[year] = {}
            for (const gender of Object.keys(data[year as dataKey])) {
                content[year][gender] = {}
                for (const location of Object.keys(data[year as dataKey][gender as genderKey]["locations"])) {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    content[year][gender][location] = data[year as dataKey][gender as genderKey]["locations"][location]["occurences"]
                }
            }
        }
    }

    function getAllYearsGendersLocationsSpecificProfession() {
        if(!getProfessionList().includes(profession as string)) {
            throw error(406, "Profession \"" + profession + "\" does not exist in the database.")
        }
        for (const year of Object.keys(data)) {
            content[year] = {}
            for (const gender of Object.keys(data[year as dataKey])) {
                content[year][gender] = {}
                for (const location of Object.keys(data[year as dataKey][gender as genderKey]["locations"])) {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    content[year][gender][location] = {}
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    const pro = data[year as dataKey][gender as genderKey]["locations"][location]["professions"][profession];
                    if (pro != undefined) {
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        content[year][gender][location][profession] = pro;
                    }
                }
            }
        }
    }

    function getAllYearsGendersProfessionsSpecificLocation() {
        if (!getLocationList().includes(location)) {
            throw error(406, "Location \"" + location + "\" does not exist in the database.")
        }
        for (const year of Object.keys(data)) {
            content[year] = {}
            for (const gender of Object.keys(data[year as dataKey])) {
                content[year][gender] = {}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                const loc = data[year as dataKey][gender as genderKey]["locations"][location];
                if (loc != undefined) {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    content[year][gender][location] = data[year as dataKey][gender as genderKey]["locations"][location]["occurences"]

                }
            }
        }
    }

// Return profession list
    if(professionList != undefined) {
        content = getProfessionList();

    // Return location list
    } else if (locationList != undefined) {
        content = getLocationList();

    //==================================================================================================================
    // Create gender distribution data filterable by location, profession and gender
    //==================================================================================================================
    } else {
        // 0000: specific year, specific gender, specific location, specific profession
        if (year != undefined && gender != undefined && location != undefined && profession != undefined) {
            getSpecificYearGenderLocationProfession();
        }
        // 0001: specific year, specific gender, specific location, all professions
        if (year != undefined && gender != undefined && location != undefined && profession == undefined) {

        }
        // 0010: specific year, specific gender, all locations, specific profession
        if (year != undefined && gender != undefined && location == undefined && profession != undefined) {

        }
        // 0011:specific year, specific gender, all locations, all professions
        if (year != undefined && gender != undefined && location == undefined && profession == undefined) {

        }
        // 0100: specific year, all genders, specific location, specific profession
        if (year != undefined && gender == undefined && location != undefined && profession != undefined) {

        }
        // 0101:specific year, all genders, specific location, all professions
        if (year != undefined && gender == undefined && location != undefined && profession == undefined) {

        }
        // 0110: specific year, all genders, all locations, specific profession
        if (year != undefined && gender == undefined && location == undefined && profession != undefined) {

        }
        // 0111: specific year, all genders, all locations, all professions
        if (year != undefined && gender == undefined && location == undefined && profession == undefined) {

        }
        // 1000: all years, specific gender, specific locations, specific professions
        if (year == undefined && gender != undefined && location != undefined && profession != undefined) {

        }
        // 1001: all years, specific gender, specific locations, all professions
        if (year == undefined && gender != undefined && location != undefined && profession == undefined) {

        }
        // 1010: all years, specific gender, all locations, specific profession
        if (year == undefined && gender != undefined && location == undefined && profession != undefined) {

        }
        // 1011: all years, specific gender, all locations, all professions
        if (year == undefined && gender != undefined && location == undefined && profession == undefined) {

        }
        // 1100: all years, all genders, specific location, specific profession
        if (year == undefined && gender == undefined && location != undefined && profession != undefined) {

        }
        // 1101: all years, all genders, specific location, all professions
        if (year == undefined && gender == undefined && location != undefined && profession == undefined) {
            getAllYearsGendersProfessionsSpecificLocation();
        }
        // 1110: all years, all genders, all locations, specific profession
        if (year == undefined && gender == undefined && location == undefined && profession != undefined) {
            getAllYearsGendersLocationsSpecificProfession();
        }
        // 1111: all years, all genders, all locations, all professions
        if (year == undefined && gender == undefined && location == undefined && profession == undefined) {
            getAllYearsGendersLocationsProfessions();
        }
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