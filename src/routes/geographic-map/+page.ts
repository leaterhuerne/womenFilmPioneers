import {domain} from "$lib/stores/domain";

/** @type {import('./$types').PageLoad} */
// @ts-ignore
export async function load({ fetch }) {
    const res = await fetch("/api/genders-by-year-profession-location?profession-list=true");
    const professionList = await res.json();

    return { professionList };
}