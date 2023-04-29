export function GET({ url }: { url:URL }) {
    let content: {"first-year": number, "last-year": number} | number = {"first-year": 1890, "last-year": 2021};
    if(url.searchParams.get("bound") == "first") {
        content = 1890;
    }
    if(url.searchParams.get("bound") == "last") {
        content = 2021;
    }
    return new Response(
        JSON.stringify(content),
        {
            status: 200,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        }
    );
}