import data from "$lib/data/persons.json";
type gender = keyof typeof data;

export function GET({url}: {url: URL}) {
    const genders = JSON.parse(url.searchParams.get("genders") ?? "[]");
    const result: any = {}
    for(const gender in data) {
        if(genders.includes(gender)) {
            result[gender] = data[gender as gender];
        }
    }

    return new Response(
        JSON.stringify(result),
        {
            status: 200,
            headers: {
                'Content-Type' : 'application/json',
            }
        }
    )
}