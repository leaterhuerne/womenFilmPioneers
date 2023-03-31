import {domainString} from "$lib/stores/domain";

type genderKey = "female" | "male" | "unknown"

/** @type {import('../../../.svelte-kit/types/src/routes').PageLoad} */
// @ts-ignore
export function load({ fetch }) {
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

    function getProfessionList(consumer: (json: JSON) => void): void {
        fetch(domainString + "/api/genders-by-year-profession-location?profession-list=true")
            .then((e: Response) => e.json()).then(consumer);
    }

    function getLocationList(consumer: (json: JSON) => void): void {
        fetch(domainString + "/api/genders-by-year-profession-location?location-list=true")
            .then((e: Response) => e.json()).then(consumer);
    }

    return {
        getData,
        getProfessionList,
        getLocationList
    };
}