import database from "$lib/data/persons.json";
type id = keyof typeof database;

export function GET({url}: {url: URL}) {
    const id = url.searchParams.get("id");

    return new Response(
        JSON.stringify(id == null ? {} : database[id as id]),
        {
            status: 200,
            headers: {
                'Content-Type' : 'application/json',
            }
        }
    );
}