import {domainString} from "$lib/stores/domain";
type Response = { json: () => never; };
type gender = "female" | "male" | "unknown";
interface Consumer<T> {
    (t: T): void;
}

const ALL = undefined;

/** @type {import('./$types').PageLoad} */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

export function load({fetch}) {

    /**
     * Returns a JSON containing the requested snapshot of the database.
     * @param professionList true or undefined
     * @param locationList true or undefined
     * @param year number between 1890 and 2021
     * @param gender string: female, male or unknown
     * @param location string contained in location list
     * @param profession string contained in profession list
     * @return Promise containing a JSON.
     */
    const getData = (professionList?: boolean, locationList?: boolean, year?: string | number,
                     gender?: gender, location?: string, profession?: string,): Promise<JSON> => {
        const queryValues = {
            "profession-list": professionList,
            "location-list": locationList,
            year: year,
            gender: gender,
            location: location,
            profession: profession
        }
        type entry = keyof typeof queryValues;
        let url: string = domainString + "/api/genders-by-year-profession-location?";
        for(const entry in queryValues) {
            if(queryValues[entry as entry] != undefined) {
                url += entry + "=" + queryValues[entry as entry] + "&";
            }
        }
        return fetch(url).then((response: Response) => response.json());
    }

    /**
     * Performs a consumer on a json array containing of all professions in the database.
     * @param consumer function performed on profession list.
     */
    const getProfessionList = (consumer: Consumer<JSON>): void => {
        getData(true).then(consumer);
    }

    /**
     * Performs a consumer on a json array containing of all locations in the database.
     * @param consumer function performed on location list.
     */
    const getLocationList = (consumer: Consumer<JSON>): void => {
        getData(undefined, true).then(consumer);
    }

    /**
     * Performs consumer on JSON containing all years with requested gender, location and profession.
     * @param location string
     * @param profession string
     * @param consumer function to execute on requested data
     * @return Promise<JSON> JSON containing all years with requested gender, location and profession.
     */
    const getProfessionLocation = (profession: string, location: string, consumer: Consumer<JSON>): void => {
        getData(ALL, ALL, ALL, ALL, location, profession).then(consumer);
    }
    const getProfessionForYear = (year: number, country: string, genders: string[], consumer: Consumer<JSON>): void => {
        const location = country == "alle" ? "" : "&location=" + country;
        const url = "/api/professions?random=5&year=" + year + location  + "&genders=" + JSON.stringify(genders);
        return fetch(url).then((res: Response) => res.json()).then(consumer);
    }

    const getFilmsForYear = (year: number, country: string, genders: string[],  consumer: Consumer<JSON>): void => {
        const location = country == "alle" ? "" : "&location=" + country;
        return fetch("/api/films?title-only=true&random=5&year=" + year + location + "&genders=" + JSON.stringify(genders))
            .then((response: Response) => response.json()).then(consumer);
    }

    return {
        getFilmsForYear,
        getProfessionForYear,
        getProfessionList,
        getLocationList,
        getProfessionLocation,
        years: {
            first: 1890,
            last: 2021
        }
    };
}