// noinspection TypeScriptExplicitMemberType

import database from "$lib/data/films.json";
import {error} from "@sveltejs/kit";

type filmTitle = keyof typeof database;
type person = {gender: string, profession: string, born: string, died:string};
type people = Record<string, person>;
type film = {year: string, location: string[], people: people}

export function GET({ url }: { url:URL }) {

    const ALL = undefined;
    const personList = url.searchParams.get("person-list");
    const filmList = url.searchParams.get("film-list");
    const film = url.searchParams.get("film");
    const gender = url.searchParams.get("gender");
    const person = url.searchParams.get("person");
    const year = url.searchParams.get("year");

    let json: typeof database | film | string[] = {};

    /**
     * Checks if object is empty.
     * @param obj any ts object.
     */
    const isEmpty = (obj: object) => {
        return Object.keys(obj).length === 0;
    }

    /**
     * Checks if year in database.
     */
    const checkIfYearInDatabase = (): void => {
        if(Number(year) < 1890 || Number(year) > 2021) {
            throw error(406, "The year \"" + year + "\" is not in the database.");

        }
    }

    /**
     * Checks if gender in database.
     */
    const checkIfGenderInDatabase = (): void => {
        if(!(gender == "male" || gender == "female" || gender == "unknown")) {
            throw error(406, "The gender \"" + gender + "\" is not in the database.");
        }
    }

    /**
     * Checks if person in database. If result empty, check fails.
     * @param result result people list, after adding persons based on their gender.
     */
    const checkIfPersonInDatabase = (result: object) => {
        if (isEmpty(result)) {
            throw error(406, "The person \"" + person + "\" is not in the database.");

        }

    }

    /**
     * Checks if film in database.
     */
    const checkIfFilmInDatabase = () => {
        if (film != null && !(film in database)) {
            throw error(406, "The film \"" + film + "\" is not in the database.");
        }
    };

    /**
     * Checks if given year and year of current film are equal.
     * @param currentFilm film to check
     */
    const yearEquals = (currentFilm: film) => {
        if (year != currentFilm.year) {
            throw error(406, "There is no film \"" + film + "  from " + year + " in the database. Try \"" + currentFilm.year + "\" instead.");
        }
    };

    function getSpecificFilmSpecificGenderSpecificPersonSpecificYear() {
        checkIfFilmInDatabase();
        checkIfGenderInDatabase();
        checkIfYearInDatabase();
        const currentFilm: film = database[film as filmTitle];
        yearEquals(currentFilm);
        const result = {
            location: currentFilm.location,
        }
        for (const personKey in currentFilm.people) {
            const currentPerson = currentFilm.people[personKey];
            if (personKey == person) {
                if (currentPerson.gender != gender) {
                    throw error(406, person + " is not " + gender + ". Try \"" + currentPerson.gender + "\" instead.")
                }
            } else {
                throw error(406, person + " was not involved in \"" + film + "\".");
            }
        }
        json = result;
    }

    function getSpecificFilmSpecificGenderSpecificPersonAllYears() {
        checkIfFilmInDatabase();
        checkIfGenderInDatabase();
        const currentFilm: film = database[film as filmTitle];
        const result = {
            location: currentFilm.location,
            year: currentFilm.year
        }
        for (const per in currentFilm.people) {
            const currentPerson = currentFilm.people[per];
            if (per == person) {
                if (currentPerson.gender != gender) {
                    throw error(406, person + " is not " + gender + ". Try \"" + currentPerson.gender + "\" instead.")
                }
            } else {
                throw error(406, person + " was not involved in \"" + film + "\".");
            }
        }
        json = result;
    }

    function createResultForSpecificFilmSpecificGender(currentFilm: film) {
        const result = {
            location: currentFilm.location,
            year: currentFilm.year,
            people: {} as Record<string, { profession: string, born: string, died: string }>
        }
        for (const person in currentFilm.people) {
            const currentPerson = currentFilm.people[person];
            if (currentPerson.gender == gender) {
                result.people[person] = {
                    profession: currentPerson.profession,
                    born: currentPerson.born,
                    died: currentPerson.died
                }
            }
        }
        json = result;
    }

    function getSpecificFilmSpecificGenderAllPersonsSpecificYear() {
        checkIfFilmInDatabase();
        checkIfGenderInDatabase();
        checkIfYearInDatabase();
        checkIfFilmInDatabase();
        checkIfGenderInDatabase();
        const currentFilm: film = database[film as filmTitle];
        yearEquals(currentFilm);
        createResultForSpecificFilmSpecificGender(currentFilm);
    }

    function getSpecificFilmSpecificGenderAllPersonsAllYears() {
        checkIfFilmInDatabase();
        checkIfGenderInDatabase();
        createResultForSpecificFilmSpecificGender(database[film as filmTitle]);
    }

    function getSpecificFilmAllGendersSpecificPersonSpecificYear() {
        checkIfFilmInDatabase();
        checkIfYearInDatabase();
        const currentFilm: film = database[film as filmTitle];
        yearEquals(currentFilm);
        if (person ?? " " in currentFilm.people) {
            json = {location: currentFilm.location}
        } else {
            throw error(406, person + " was not involved in \"" + film + "\".");
        }
    }

    function getSpecificFilmAllGendersSpecificPersonAllYears() {
        checkIfFilmInDatabase();
        const currentFilm: film = database[film as filmTitle];
        if (person ?? " " in currentFilm.people) {
            json = {location: currentFilm.location}
        } else {
            throw error(406, person + " was not involved in \"" + film + "\".");
        }
    }

    function getSpecificFilmAllGendersAllPersonsSpecificYear() {
        checkIfFilmInDatabase();
        yearEquals(database[film as filmTitle]);
        json = database[film as filmTitle];
    }

    function getSpecificFilmAllGendersAllPersonsAllYears() {
        checkIfFilmInDatabase();
        json = database[film as filmTitle];
    }

    function getAllFilmsSpecificGenderSpecificPersonSpecificYear() {
        checkIfGenderInDatabase();
        checkIfYearInDatabase();
        const films: Record<string, { location: string[] }> = {}
        for (const film in database) {
            const currentFilm: film = database[film as filmTitle];
            if (currentFilm.year == year) {
                for (const per in currentFilm.people) {
                    if (per == person) {
                        const currentPerson: person = currentFilm.people[per];
                        if (currentPerson.gender == gender) {
                            films[film] = {
                                location: currentFilm.location
                            }
                        } else {
                            throw error(406, person + " is not " + gender + ". Try \"" + currentPerson.gender + "\" instead.");
                        }
                    }
                }
            }
        }
        json = films;
    }

    function getAllFilmsSpecificGenderSpecificPersonAllYears() {
        checkIfFilmInDatabase();
        checkIfGenderInDatabase();
        const currentFilm: film = database[film as filmTitle];
        const resultfilm = {
            year: currentFilm.year,
            people: {} as Record<string, { profession: string, born: string, died: string }>
        };
        for (const person in currentFilm.people) {
            const currentPerson: person = currentFilm.people[person];
            if (currentPerson.gender == gender) {
                resultfilm.people[person] = {
                    profession: currentPerson.profession,
                    born: currentPerson.born,
                    died: currentPerson.died
                }
            }
        }
        if (!isEmpty(resultfilm.people)) {
            json = resultfilm;
        }
    }

    function getAllFilmsSpecificGendersAllPersonsSpecificYear() {
        const films: Record<string, object> = {};
        for (const film in database) {
            const currentFilm = database[film as filmTitle];
            if (currentFilm["year"] == year) {
                const filmSnap: Record<string, string[] | object> = {
                    location: database[film as filmTitle]["location"],
                    people: {}
                }
                for (const person in currentFilm["people"] as object) {
                    const currentPerson: person = currentFilm["people"][person]
                    if (currentPerson["gender"] == gender) {
                        (filmSnap["people"] as Record<string, object>)[person] = {
                            profession: currentPerson["profession"],
                            born: currentPerson["born"],
                            died: currentPerson["died"]
                        }
                    }
                }
                if (!isEmpty(filmSnap["people"])) {
                    films[film] = filmSnap;
                }
            }
        }
        json = films;
    }

    function getAllFilmsSpecificGenderAllPersonsAllYears() {
        checkIfGenderInDatabase();
        const films: Record<string, object> = {};
        for (const filmTitle in database) {
            const film: Record<string, object | number> = {
                "people": {}
            }
            for (const person in database[filmTitle as filmTitle]["people"] as object) {
                if (database[filmTitle as filmTitle]["people"][person]["gender"] == gender) {
                    (film["people"] as Record<string, never>)[person] = database[filmTitle as filmTitle]["people"][person]
                }
            }
            if (Object.keys(film["people"]).length > 0) {
                film["year"] = Number(database[filmTitle as filmTitle]["year"]);
                film["location"] = database[filmTitle as filmTitle]["location"];
                films[filmTitle] = film;
            }
        }
        json = films;
    }

    function getAllFilmsAllGendersSpecificPersonSpecificYear() {
        checkIfYearInDatabase();
        const films: Record<string, { location: string[], people: people }> = {};
        for (const film in database) {
            if (database[film as filmTitle]["year"] == year && (person ?? " ") in database[film as filmTitle]["people"]) {
                films[film] = {
                    location: database[film as filmTitle]["location"],
                    people: database[film as filmTitle]["people"]
                };
            }
        }
        checkIfPersonInDatabase(films);
        json = films;
    }

    function getAllFilmsAllGendersSpecificPersonAllYears() {
        const films: Record<string, film> = {};
        for (const film in database) {
            if (person ?? "" in database[film as filmTitle]["people"]) {
                films[film] = database[film as filmTitle];
            }
        }
        checkIfPersonInDatabase(films);
        json = films;
    }

    function getAllFilmsAllGendersAllPersonsSpecificYears() {
        checkIfYearInDatabase();
        const films: Record<string, { people: people, location: string[] }> = {}
        for (const film in database) {
            if (database[film as filmTitle]["year"] == year) {
                films[film] = {
                    people: database[film as filmTitle]["people"],
                    location: database[film as filmTitle]["location"]
                }
            }
        }
        json = films;
    }

    /**
     * Creates list of all persons.
     */
    function getPersonList() {
        const persons: Record<string, { "gender": string, "born": string, "died": string }> = {};
        for (const film in database) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            for (const person in database[film as filmTitle]["people"]) {
                const personData = database[film as filmTitle]["people"][person]
                persons[person] = {
                    "gender": personData["gender"],
                    "born": personData["born"],
                    "died": personData["died"]
                };
            }
        }
        json = persons;
    }

// Return list of all persons
    if(personList == "true") {
        getPersonList();
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
            getAllFilmsAllGendersAllPersonsSpecificYears();
        }
        //0010: all films, all genders, specific person, all years
        if(film == ALL && gender == ALL && person != ALL && year == ALL) {
            getAllFilmsAllGendersSpecificPersonAllYears();
        }
        //0011: all films, all genders, specific person, specific year
        if(film == ALL && gender == ALL && person != ALL && year != ALL) {
            getAllFilmsAllGendersSpecificPersonSpecificYear();
        }
        //0100: all films, specific gender, all persons, all years
        if(film == ALL && gender != ALL && person == ALL && year == ALL) {
            getAllFilmsSpecificGenderAllPersonsAllYears();
        }
        //0101: all films, specific gender, all persons, specific year
        if(film == ALL && gender != ALL && person == ALL && year != ALL) {
            getAllFilmsSpecificGendersAllPersonsSpecificYear();
        }
        //0110: specific film, specific gender, all persons, all years
        if(film == ALL && gender != ALL && person != ALL && year == ALL) {
            getAllFilmsSpecificGenderSpecificPersonAllYears();
        }
        //0111: all films, specific gender, specific person, specific year
        if(film == ALL && gender != ALL && person != ALL && year != ALL) {
            getAllFilmsSpecificGenderSpecificPersonSpecificYear();
        }
        //1000: specific film, all genders, all persons, all years
        if(film != ALL && gender == ALL && person == ALL && year == ALL) {
            getSpecificFilmAllGendersAllPersonsAllYears();
        }
        //1001: specific film, all genders, all persons, specific year
        if(film != ALL && gender == ALL && person == ALL && year != ALL) {
            getSpecificFilmAllGendersAllPersonsSpecificYear();
        }
        //1010: specific film, all genders, specific person, all years
        if(film != ALL && gender == ALL && person != ALL && year == ALL) {
            getSpecificFilmAllGendersSpecificPersonAllYears();
        }
        //1011: specific film, all genders, specific person, specific year
        if(film != ALL && gender == ALL && person != ALL && year != ALL) {
            getSpecificFilmAllGendersSpecificPersonSpecificYear();
        }
        //1100: specific film, specific gender, all persons, all years
        if(film != ALL && gender != ALL && person == ALL && year == ALL) {
            getSpecificFilmSpecificGenderAllPersonsAllYears();
        }
        //1101: specific films, specific genders, all persons, specific years
        if(film != ALL && gender != ALL && person == ALL && year != ALL) {
            getSpecificFilmSpecificGenderAllPersonsSpecificYear();
        }
        //1110: specific film, specific gender, specific person, all years
        if(film != ALL && gender != ALL && person != ALL && year == ALL) {
            getSpecificFilmSpecificGenderSpecificPersonAllYears();
        }
        //1111: specific film, specific gender, specific person, specific year
        if(film != ALL && gender != ALL && person != ALL && year != ALL) {
            getSpecificFilmSpecificGenderSpecificPersonSpecificYear();
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