// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export async function GET({url, fetch}) {

    const year = url.searchParams.get("year");
    return fetch("/api/films/" + year);
}