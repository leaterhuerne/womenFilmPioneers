import database from "$lib/data/films.json";
import {error} from "@sveltejs/kit";
type film = keyof typeof database;
export function GET({ url }: { url:URL }) {

    const ALL = undefined;
    const personList = url.searchParams.get("person-list");
    const filmList = url.searchParams.get("film-list");
    const film = url.searchParams.get("film");
    const gender = url.searchParams.get("gender");
    const person = url.searchParams.get("person");
    const year = url.searchParams.get("year");

    const mapGender = () => {
        checkIfGenderInDatabase();
        return gender == "female" ? "W" : (gender == "male" ? "M" : "U")
    }
    const checkIfYearInDatabase = (): void => {
        if(Number(year) < 1890 || Number(year) > 2021) {
            throw error(406, "The year \"" + year + "\" is not in the database.");
        }

    }
    const checkIfGenderInDatabase = (): void => {
        if(!(gender == "male" || gender == "female" || gender == "unknown")) {
            throw error(406, "The gender \"" + gender + "\" is not in the database.");
        }

    }
    function checkIfPersonInDatabase(result: object) {
        if (Object.keys(result).length == 0) {
            throw error(406, "The person \"" + person + "\" is not in the database.");
        }

    }

    let json = {};

// Return list of all persons
    if(personList == "true") {
        const persons: Record<string, {"gender": string, "born": string, "died": string}> = {};
        for (const film in database) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            for (const person in database[film as film]["people"]) {
                const personData = database[film as film]["people"][person]
                persons[person] = {
                    "gender": personData["gender"],
                    "born": personData["born"],
                    "died": personData["died"]
                };
            }
        }
        json = persons;
    // Return list of all films
    } else if(filmList == "true") {
        json = Object.keys(database);
    } else {
        //0000: all films, all genders, all persons, all years
        if(film == ALL && gender == ALL && person == ALL && year == ALL) {
            json = database;
        }
        //0001: all films, all genders, all persons, specific year
        if(film == ALL && gender == ALL && person == ALL && year != ALL) {
            checkIfYearInDatabase();
            for(const film in database) {
                if(database[film as film]["year"] == url.searchParams.get("year")) {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    json[film] = {
                        "people": database[film as film]["people"],
                        "location": database[film as film]["location"]
                    }
                }
            }
        }
        //0010: all films, all genders, specific person, all years
        if(film == ALL && gender == ALL && person != ALL && year == ALL) {
            const films= {};
            for(const film in database) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                if(person in database[film as film]["people"]) {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    films[film] = database[film as film];
                }
            }
            checkIfPersonInDatabase(films);
            json = films;
        }
        //0011: all films, all genders, specific person, specific year
        if(film == ALL && gender == ALL && person != ALL && year != ALL) {
            checkIfYearInDatabase();
            const films: Record<string, {"location": string[], "people": object}> = {};
            for(const film in database) {
                if(database[film as film]["year"] == year && (person?? "") in database[film as film]["people"]) {
                    films[film] = {
                        location: database[film as film]["location"],
                        people: database[film as film]["people"]
                    };
                }
            }
            checkIfPersonInDatabase(films);
            json = films;
        }
        //0100: all films, specific gender, all persons, all years
        if(film == ALL && gender != ALL && person == ALL && year == ALL) {
            checkIfGenderInDatabase();
            const films: Record<string, object> = {};
            for(const filmTitle in database) {
                const film: Record<string, object | number> = {
                    "people": {}
                }
                for(const person in database[filmTitle as film]["people"] as object) {
                    if(database[filmTitle as film]["people"][person]["gender"] == mapGender()) {
                        (film["people"] as Record<string, never>)[person] = database[filmTitle as film]["people"][person]
                    }
                }
                if (Object.keys(film["people"]).length > 0) {
                    film["year"] = Number(database[filmTitle as film]["year"]);
                    film["location"] = database[filmTitle as film]["location"];
                    films[filmTitle] = film;
                }
            }
            json = films;
        }
        //0101: all films, specific gender, all persons, specific year
        if(film == ALL && gender != ALL && person == ALL && year != ALL) {

        }
        //0110: specific film, specific gender, all persons, all years
        if(film == ALL && gender != ALL && person != ALL && year == ALL) {

        }
        //0111: all films, specific gender, specific person, specific year
        if(film == ALL && gender != ALL && person != ALL && year != ALL) {

        }
        //1000: specific film, all genders, all persons, all years
        if(film != ALL && gender == ALL && person == ALL && year == ALL) {

        }
        //1001: specific film, all genders, all persons, specific year
        if(film != ALL && gender == ALL && person == ALL && year != ALL) {

        }
        //1010: specific film, all genders, specific person, all years
        if(film != ALL && gender == ALL && person != ALL && year == ALL) {

        }
        //1011: specific film, all genders, specific person, specific year
        if(film != ALL && gender == ALL && person != ALL && year != ALL) {

        }
        //1100: specific film, specific gender, all persons, all years
        if(film != ALL && gender != ALL && person == ALL && year == ALL) {

        }
        //1101: specific films, specific genders, all persons, specific years
        if(film != ALL && gender != ALL && person == ALL && year != ALL) {

        }
        //1110: specific film, specific gender, specific person, all years
        if(film != ALL && gender != ALL && person != ALL && year != ALL) {

        }
        //1111: specific film, specific gender, specific person, specific year
        if(film != ALL && gender != ALL && person != ALL && year != ALL) {

        }
    }

    return new Response(
        JSON.stringify(json),
        {
            status: 200,
            headers: {
                'Content-Type' : 'application/json',
            }
        }
    );
}