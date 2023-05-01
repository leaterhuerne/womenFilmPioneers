export function GET({url}: {url: URL}) {
    let json = {}
    const coffee = url.searchParams.get("coffee") ?? "";
    if(coffee == "true") {
        json = "Lea will Kaffee!"
    } else if (coffee == "false") {
        json = "Lea will nicht!"
    } else {
        json = "Lea will. Immer."
    }
    return new Response(
        JSON.stringify(json),
        {
            status: 404,
            statusText: "ok",
            headers: {
                "Content-Type": "application/json"
            }
        }
    );
}