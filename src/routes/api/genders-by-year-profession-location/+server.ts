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

function checkIfGenderInDatabase(gender: string | null) {
    // @ts-ignore
    if(!(gender == "male" || gender == "female" || gender == "unknown")) {
        throw error(406, "Gender \"" + gender + "\" does not exist in the database.");
    }
}

function checkIfProfessionInDatabase(profession: string | null) {
    if (!getProfessionList().includes(profession as string)) {
        throw error(406, "Profession \"" + profession + "\" does not exist in the database.")
    }
}

function checkIfLocationInDatabase(location: string | null) {
    if (!getLocationList().includes(location as string)) {
        throw error(406, "Location \"" + location + "\" does not exist in the database.")
    }
}

function checkIfYearInDatabase(year: string | null) {
    if (Number(year) < 1890 || Number(year) > 2021) {
        throw error(406, "Year \"" + year + "\" does not exist in the database.")
    }
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
        checkIfYearInDatabase(year as string);
        checkIfGenderInDatabase(gender as string);
        checkIfLocationInDatabase(location as string);
        checkIfProfessionInDatabase(profession as string);
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
                    }
                }
            }
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
        if (!getLocationList().includes(location as string)) {
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

    function getAllYearsGendersSpecificLocationProfession() {
        checkIfLocationInDatabase(location as string);
        checkIfProfessionInDatabase(profession as string);
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
                    content[year][gender][location] = {}
                    if (loc["professions"][profession] != undefined) {
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        content[year][gender][location][profession] = loc["professions"][profession];
                    }
                }
            }
        }
    }

    function getAllYearsLocationsProfessionsSpecificGender() {
        for (const year of Object.keys(data)) {
            content[year] = {}
            const gen = data[year as dataKey][gender as genderKey];
            if (gen != undefined) {
                content[year][gender] = {}
                for (const location of Object.keys(data[year as dataKey][gender as genderKey]["locations"])) {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    content[year][gender][location] = data[year as dataKey][gender as genderKey]["locations"][location]["occurences"]
                }
            }
        }
    }

    function getAllYearsLocationsSpecificGenderProfession() {
        for (const year of Object.keys(data)) {
            content[year] = {}
            const gen = data[year as dataKey][gender as genderKey];
            if (gen != undefined) {
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

    function getAllYearsProfessionsSpecificGenderLocation() {
        for (const year of Object.keys(data)) {
            content[year] = {}
            const gen = data[year as dataKey][gender as genderKey];
            if (gen != undefined) {
                content[year][gender as genderKey] = {}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                const loc = data[year as dataKey][gender as genderKey]["locations"][location];
                if (loc != undefined) {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    content[year][gender][location] = data[year as dataKey][gender as genderKey]["locations"][location]["occurences"];

                }
            }
        }
    }

    function getAllYearsSpecificGenderLocationProfession() {
        checkIfGenderInDatabase(gender);
        checkIfProfessionInDatabase(profession);
        checkIfLocationInDatabase(location);
        for (const year of Object.keys(data)) {
            content[year] = {}
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
                    }
                }
            }
        }
    }

    function getAllProfessionsSpecificYearGenderLocation() {
        checkIfYearInDatabase(year);
        checkIfGenderInDatabase(gender);
        checkIfLocationInDatabase(location);
        if (data[year as dataKey] != undefined) {
            content[year as dataKey] = {}
            if (data[year as dataKey][gender as genderKey] != undefined) {
                content[year as dataKey][gender as genderKey] = {}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                const loc = data[year as dataKey][gender as genderKey]["locations"][location];
                if (loc != undefined) {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    content[year][gender][location] = data[year as dataKey][gender as genderKey]["locations"][location]["occurences"];
                }
            }
        }
    }

    function getAllLocationsSpecificYearGenderProfession() {
        checkIfYearInDatabase(year);
        checkIfGenderInDatabase(gender);
        checkIfProfessionInDatabase(profession);
        if (data[year as dataKey] != undefined) {
            content[year as dataKey] = {}
            if (data[year as dataKey][gender as genderKey] != undefined) {
                content[year as dataKey][gender as genderKey] = {}
                for (const location of Object.keys(data[year as dataKey][gender as genderKey]["locations"])) {
                    content[year][gender][location] = {}
                    // @ts-ignore
                    const pro = data[year as dataKey][gender as genderKey]["locations"][location]["professions"][profession];
                    if (pro != undefined) {
                        content[year][gender][location][profession] = pro;
                    }
                }
            }
        }
    }

    function getAllLocationsProfessionsSpecificYearGender() {
        checkIfYearInDatabase(year);
        checkIfGenderInDatabase(gender);
        if (data[year as dataKey] != undefined) {
            content[year as dataKey] = {}
            if (data[year as dataKey][gender as genderKey] != undefined) {
                content[year as dataKey][gender as genderKey] = {}
                for (const location of Object.keys(data[year as dataKey][gender as genderKey]["locations"])) {
                    content[year][gender][location] = {}
                    for (const location of Object.keys(data[year as dataKey][gender as genderKey]["locations"])) {
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        content[year][gender][location] = data[year as dataKey][gender as genderKey]["locations"][location]["occurences"]
                    }
                }
            }
        }
    }

    function getAllGendersSpecificYearLocationProfession() {
        checkIfYearInDatabase(year as string);
        checkIfLocationInDatabase(location as string);
        checkIfProfessionInDatabase(profession as string);
        if (data[year as dataKey] != undefined) {
            content[year as dataKey] = {}
            for (const gender of Object.keys(data[year as dataKey])) {
                content[year][gender] = {}
                // @ts-ignore
                const loc = data[year as dataKey][gender as genderKey]["locations"][location];
                if (loc != undefined) {
                    content[year][gender][location] = {}
                    if (loc["professions"][profession] != undefined) {
                        content[year][gender][location][profession] = loc["professions"][profession];
                    }
                }
            }
        }
    }

    function getAllGendersProfessionsSpecificYearLocation() {
        checkIfYearInDatabase(year as string);
        checkIfLocationInDatabase(location as string);
        if (data[year as dataKey] != undefined) {
            content[year as dataKey] = {}
            for (const gender of Object.keys(data[year as dataKey])) {
                content[year][gender] = {}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                const loc = data[year as dataKey][gender as genderKey]["locations"][location];
                if (loc != undefined) {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    content[year][gender][location] = data[year as dataKey][gender as genderKey]["locations"][location]["occurences"];
                }
            }
        }
    }

    function getAllGendersLocationsSpecificYearProfession() {
        checkIfYearInDatabase(year as string);
        checkIfProfessionInDatabase(profession);
        if (data[year as dataKey] != undefined) {
            content[year as dataKey] = {}
            for (const gender of Object.keys(data[year as dataKey])) {
                content[year][gender] = {}
                for (const location of Object.keys(data[year as dataKey][gender as genderKey]["locations"])) {
                    content[year][gender][location] = {}
                    // @ts-ignore
                    const pro = data[year as dataKey][gender as genderKey]["locations"][location]["professions"][profession];
                    if (pro != undefined) {
                        content[year][gender][location][profession] = pro;
                    }
                }
            }
        }
    }

    function getAllGendersLocationsProfessionsSpecificYear() {
        checkIfYearInDatabase(year as string);
        if (data[year as dataKey] != undefined) {
            content[year as dataKey] = {}
            for (const gender of Object.keys(data[year as dataKey])) {
                content[year][gender] = {}
                for (const location of Object.keys(data[year as dataKey][gender as genderKey]["locations"])) {
                    content[year][gender][location] = {}
                    for (const location of Object.keys(data[year as dataKey][gender as genderKey]["locations"])) {
                        // @ts-ignore
                        content[year][gender][location] = data[year as dataKey][gender as genderKey]["locations"][location]["occurences"]
                    }
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
            getAllProfessionsSpecificYearGenderLocation();
        }
        // 0010: specific year, specific gender, all locations, specific profession
        if (year != undefined && gender != undefined && location == undefined && profession != undefined) {
            getAllLocationsSpecificYearGenderProfession();
        }
        // 0011:specific year, specific gender, all locations, all professions
        if (year != undefined && gender != undefined && location == undefined && profession == undefined) {
            getAllLocationsProfessionsSpecificYearGender();
        }
        // 0100: specific year, all genders, specific location, specific profession
        if (year != undefined && gender == undefined && location != undefined && profession != undefined) {
            getAllGendersSpecificYearLocationProfession();
        }
        // 0101:specific year, all genders, specific location, all professions
        if (year != undefined && gender == undefined && location != undefined && profession == undefined) {
            getAllGendersProfessionsSpecificYearLocation();
        }
        // 0110: specific year, all genders, all locations, specific profession
        if (year != undefined && gender == undefined && location == undefined && profession != undefined) {
            getAllGendersLocationsSpecificYearProfession();
        }
        // 0111: specific year, all genders, all locations, all professions
        if (year != undefined && gender == undefined && location == undefined && profession == undefined) {
            getAllGendersLocationsProfessionsSpecificYear();
        }
        // 1000: all years, specific gender, specific locations, specific professions
        if (year == undefined && gender != undefined && location != undefined && profession != undefined) {
            getAllYearsSpecificGenderLocationProfession();
        }
        // 1001: all years, specific gender, specific locations, all professions
        if (year == undefined && gender != undefined && location != undefined && profession == undefined) {
            getAllYearsProfessionsSpecificGenderLocation();
        }
        // 1010: all years, specific gender, all locations, specific profession
        if (year == undefined && gender != undefined && location == undefined && profession != undefined) {
            getAllYearsLocationsSpecificGenderProfession();
        }
        // 1011: all years, specific gender, all locations, all professions
        if (year == undefined && gender != undefined && location == undefined && profession == undefined) {
            getAllYearsLocationsProfessionsSpecificGender();
        }
        // 1100: all years, all genders, specific location, specific profession
        if (year == undefined && gender == undefined && location != undefined && profession != undefined) {
            getAllYearsGendersSpecificLocationProfession();
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