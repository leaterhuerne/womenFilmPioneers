export function GET() {
    let json: {"female": number, "male": number, "unknown": number} = {
        "female": 8356, 
        "male": 23645,
        "unknown": 1172
    }
    return new Response(JSON.stringify(json), {status: 404});
}