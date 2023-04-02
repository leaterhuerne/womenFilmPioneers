import {domainString} from "$lib/stores/domain";

type genderKey = "female" | "male" | "unknown"

/** @type {import('../../../.svelte-kit/types/src/routes').PageLoad} */
// @ts-ignore
export function load({ fetch }) {

    /**
     * Requests an internal endpoint for information over all genders, years, professions and locations
     * @param consumer a function to work with the response json
     * @param year parameter for endpoint request
     * @param gender parameter for endpoint request
     * @param profession parameter for endpoint request
     */
    function getData(consumer: (json: JSON) => void, year?: number | string, gender?: genderKey, profession?: string): void {
        let url: string = domainString + "/api/genders-by-year-profession-location?";
        if (year != undefined) {
            url += "year=" + year + "&";
        }
        if (gender != undefined) {
            url += "gender=" + gender + "&"
        }
        if (profession != undefined) {
            url += "profession=" + profession;
        }
        fetch(url).then((e: Response) => e.json()).then(consumer);
    }

    /**
     * Requests an internal endpoint for information of the amount of persons working in movies
     * for all genders, years and a specific profession
     * @param consumer
     * @param profession
     */
    function getDataSpecificProfession(consumer: (json: JSON) => void, profession: string): void {
        getData(consumer, undefined, undefined, profession);
    }

    /**
     * Requests an internal endpoint for a list of all professions in the database
     * @param consumer a function to work with the response json
     */
    function getProfessionList(consumer: (json: JSON) => void): void {
        fetch(domainString + "/api/genders-by-year-profession-location?profession-list=true")
            .then((e: Response) => e.json()).then(consumer);
    }

    /**
     * Requests an internal endpoint for a list of all locations in the database
     * @param consumer a function to work with the response json
     */
    function getLocationList(consumer: (json: JSON) => void): void {
        fetch(domainString + "/api/genders-by-year-profession-location?location-list=true")
            .then((e: Response) => e.json()).then(consumer);
    }

    return {
        getData,
        getDataSpecificProfession,
        getProfessionList,
        getLocationList
    };
}