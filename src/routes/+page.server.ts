import {domainString} from "$lib/stores/domain";

/** @type {import('./$types').PageLoad} */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export function load({fetch}) {
    return {
        //down to load films.json into RAM at ap app start
        getFilms: fetch(domainString + "/api/films").then((response: { json: () => never; }) => response.json())
    };
}