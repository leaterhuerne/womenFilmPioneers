import os

for year in range(1890, 2022):
    endpoint = "import films from '$lib/data/films_" + str(year) + """.json';
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
}"""
    with open(str(year) + "/+server.ts", "w") as file:
        file.write(endpoint)
