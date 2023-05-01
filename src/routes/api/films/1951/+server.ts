import films from '$lib/data/films_1951.json';
export function GET({url}: {url: URL}) {

    return new Response(
        JSON.stringify(films),
        {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        }
    );
}