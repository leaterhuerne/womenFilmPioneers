import database from "$lib/data/films.json";
import {error} from "@sveltejs/kit";

type filmId = keyof typeof database;
type person = {gender: string, profession: string, born: string, died:string};
type people = Record<string, person>;
type film = {title: string, year: string[], location: string[], people: people}

export function GET({ url }: { url:URL }) {

    const ALL = undefined;
    const personList = url.searchParams.get("person-list");
    const filmList = url.searchParams.get("film-list");
    const film = url.searchParams.get("film");
    const gender = url.searchParams.get("gender");
    const person = url.searchParams.get("person");
    const year = url.searchParams.get("year");
    const random = url.searchParams.get("random");
    const location = url.searchParams.get("location");

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
        for(const filmId in database) {
            if (film != null && database[filmId as filmId]["title"] == film) {
                return;
            }
        }
        throw error(406, "The film \"" + film + "\" is not in the database.");
    };

    /**
     * Checks if given year and year of current film are equal.
     * @param currentFilm film to check
     */
    const yearEquals = (currentFilm: film) => {
        if (!currentFilm.year.includes(year ?? "")) {
            throw error(406, "There is no film \"" + film + "  from " + year + " in the database. Try \"" + currentFilm.year + "\" instead.");
        }
    };

    const getCurrentFilm = () => {
        for(const id in database) {
            if(database[id as filmId]["title"] == film) {
                return database[id as filmId];
            }
        }
    }

    function getSpecificFilmSpecificGenderSpecificPersonSpecificYear() {
        checkIfFilmInDatabase();
        checkIfGenderInDatabase();
        checkIfYearInDatabase();
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        let currentFilm: film = {};
        for(const id in database) {
            if(database[id as filmId]["title"] == film && (database[id as filmId] as string[]).includes(year ?? "")) {
                currentFilm = database[id as filmId];
            }
        }
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
        const result = {}
        for(const filmId in database) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            if(database[filmId as filmId]["title"] == film && person in database[filmId as filmId]["people"] && database[filmId as filmId]["people"][person]["gender"] == gender) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                result[film] = {
                    location: database[filmId as filmId]["location"],
                    year: database[filmId as filmId]["year"]
                }
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
        return result;
    }

    function getSpecificFilmSpecificGenderAllPersonsSpecificYear() {
        checkIfFilmInDatabase();
        checkIfGenderInDatabase();
        checkIfYearInDatabase();
        const result: any = {}
        for(const filmId in database) {
            if(database[filmId as filmId]["title"] == film && (database[filmId as filmId]["year"] as string[]).includes(year ?? "")) {
                result[filmId] = createResultForSpecificFilmSpecificGender(database[filmId as filmId])
            }
        }
        //yearEquals(currentFilm); -> adapt for multiple films
        json = result;
    }

    function getSpecificFilmSpecificGenderAllPersonsAllYears() {
        checkIfFilmInDatabase();
        checkIfGenderInDatabase();
        const result: any = {}
        for(const filmId in database) {
            if(database[filmId as filmId]["title"] == film) {
                result[filmId] = createResultForSpecificFilmSpecificGender(database[filmId as filmId])
            }
        }
        json = result;
    }

    function getSpecificFilmAllGendersSpecificPersonSpecificYear() {
        checkIfFilmInDatabase();
        checkIfYearInDatabase();
        const result: any = {}
        for(const filmId in database) {
            if(database[filmId as filmId]["title"] == film && (person ?? "" in database[filmId as filmId]["people"]) && (database[filmId as filmId]["year"] as string[]).includes(year ?? "")) {
                result[filmId] = {
                    location: database[filmId as filmId]["location"],
                }
                for(const per in database[filmId as filmId]["people"] as object) {
                    if(per == person) {
                        result[filmId][person] = database[filmId as filmId]["people"][person]
                    }
                }
            }
        }
        json = result;
    }

    function getSpecificFilmAllGendersSpecificPersonAllYears() {
        checkIfFilmInDatabase();
        const result: any = {}
        for(const filmId in database) {
            if(database[filmId as filmId]["title"] == film && (person ?? "" in database[filmId as filmId]["people"])) {
                for(const per in database[filmId as filmId]["people"] as object) {
                    if(per == person) {
                        result[filmId] = {
                            location: database[filmId as filmId]["location"],
                            year: database[filmId as filmId]["year"],
                        }
                        result[filmId][person] = database[filmId as filmId]["people"][person];
                    }
                }
            }
        }
        json = result;
    }

    function getSpecificFilmAllGendersAllPersonsSpecificYear() {
        checkIfFilmInDatabase();
        const result: any = {}
        for(const filmId in database) {
            if(database[filmId as filmId]["title"] == film && (database[filmId as filmId]["year"] as string[]).includes(year ?? "")) {
                result[filmId] = {
                    location: database[filmId as filmId]["location"],
                    year: database[filmId as filmId]["year"],
                    people: database[filmId as filmId]["people"]
                }
            }
        }
        json = result;
    }

    function getSpecificFilmAllGendersAllPersonsAllYears() {
        checkIfFilmInDatabase();
        const result: any = {}
        for(const filmId in database) {
            if(database[filmId as filmId]["title"] == film) {
                result[filmId] = database[filmId as filmId]
            }
        }
        json = result;

    }

    function getAllFilmsSpecificGenderSpecificPersonSpecificYear() {
        checkIfGenderInDatabase();
        checkIfYearInDatabase();
        const films: Record<string, { title: string, location: string[] }> = {}
        for (const filmId in database) {
            const currentFilm: film = database[filmId as filmId];
            if (currentFilm.year.includes(year ?? "")) {
                for (const per in currentFilm.people) {
                    if (per == person) {
                        const currentPerson: person = currentFilm.people[per];
                        if (currentPerson.gender == gender) {
                            films[filmId] = {
                                title: currentFilm.title,
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
        checkIfGenderInDatabase();
        const films: Record<string, { title: string, location: string[], year: string[] }> = {}
        for (const filmId in database) {
            const currentFilm: film = database[filmId as filmId];
            for (const per in currentFilm.people) {
                if (per == person) {
                    const currentPerson: person = currentFilm.people[per];
                    if (currentPerson.gender == gender) {
                        films[filmId] = {
                            title: currentFilm.title,
                            location: currentFilm.location,
                            year: currentFilm.year
                        }
                    }
                }
            }
        }
        json = films;
    }

    function getAllFilmsSpecificGendersAllPersonsSpecificYear() {
        const films: Record<string, object> = {};
        for (const film in database) {
            const currentFilm: film = database[film as filmId];
            if ((currentFilm["year"] as string[]).includes(year ?? "")) {
                const filmSnap: any = {
                    title: currentFilm.title,
                    location: currentFilm.location,
                    people: {} as people
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
        for (const filmId in database) {
            const film: Record<string, object | number> = {
                "people": {}
            }
            for (const person in database[filmId as filmId]["people"] as object) {
                if (database[filmId as filmId]["people"][person]["gender"] == gender) {
                    (film["people"] as Record<string, never>)[person] = database[filmId as filmId]["people"][person]
                }
            }
            if (Object.keys(film["people"]).length > 0) {
                film["title"] = database[filmId as filmId]["title"]
                film["year"] = Number(database[filmId as filmId]["year"]);
                film["location"] = database[filmId as filmId]["location"];
                films[filmId] = film;
            }
        }
        json = films;
    }

    function getAllFilmsAllGendersSpecificPersonSpecificYear() {
        checkIfYearInDatabase();
        const films: Record<string, { title: string, location: string[]}> = {};
        for (const filmId in database) {
            if ((database[filmId as filmId]["year"] as string[]).includes(year ?? "") && (person ?? " ") in database[filmId as filmId]["people"]) {
                films[filmId] = {
                    title: database[filmId as filmId]["title"],
                    location: database[filmId as filmId]["location"],
                };
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                films[filmId][person] = database[filmId as filmId]["people"][person];
            }
        }
        checkIfPersonInDatabase(films);
        json = films;
    }

    function getAllFilmsAllGendersSpecificPersonAllYears() {
        const films: Record<string, film> = {};
        for (const filmId in database) {
            if (person != null && person in database[filmId as filmId]["people"]) {
                films[filmId] = database[filmId as filmId];
            }
        }
        checkIfPersonInDatabase(films);
        json = films;
    }

    function getAllFilmsAllGendersAllPersonsSpecificYear() {
        checkIfYearInDatabase();
        if(random != undefined) {
            json = Object.keys(database)
                .filter(id => (database[id as filmId]["year"] as string[]).includes(year ?? ""))
                .filter(id => location != undefined ? (database[id as filmId]["location"] as string[]).includes(location) : true)
                .sort(() => 0.5 - Math.random())
                .slice(0, Number(random))
                .map(id => database[id as filmId]["title"])
        } else {
            const films: Record<string, { title: string, people: any, location: string[] }> = {}
            for (const filmId in database) {
                if ((database[filmId as filmId]["year"] as string[]).includes(year ?? "")) {
                    films[filmId] = {
                        title: database[filmId as filmId]["title"],
                        people: {},
                        location: database[filmId as filmId]["location"]
                    }
                    for (const pers in database[filmId as filmId]["people"] as object) {
                        const data = (database[filmId as filmId]["people"][pers] as string).split(";");
                        films[filmId]["people"][pers] = {
                            name: data[0],
                            gender: data[1] == "W" ? "female" : (data[1] == "M" ? "male" : "unknown"),
                            profession: data[2]
                        }
                    }
                }

            }
            json = films;
        }
    }

    /**
     * Creates list of all persons.
     */
    function getPersonList() {
        const persons: Record<string, { "gender": string, "born": string, "died": string }> = {};
        for (const film in database) {
            for (const person in database[film as filmId]["people"] as object) {
                const personData = database[film as filmId]["people"][person]
                persons[person] = {
                    "gender": personData["gender"],
                    "born": personData["born"],
                    "died": personData["died"]
                };
            }
        }
        const keys = Object.keys(persons).sort();
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        keys.forEach(key => json[key] = persons[key]);

    }

// Return list of all persons
    if(personList == "true") {
        getPersonList();
        // Return list of all films
    } else if(filmList == "true") {
        json = Object.keys(database).sort();
    }
    else {
        //0000: all films, all genders, all persons, all years
        if(film == ALL && gender == ALL && person == ALL && year == ALL) {
            json = database;
        }
        //0001: all films, all genders, all persons, specific year
        if(film == ALL && gender == ALL && person == ALL && year != ALL) {
            getAllFilmsAllGendersAllPersonsSpecificYear();
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