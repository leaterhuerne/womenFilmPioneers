export function GET() {
    return new Response(
        JSON.stringify({
            "female": 8356,
            "male": 23645,
            "unknown": 1172
        }),
        {
            status: 200,
            headers: {
                'Content-Type' : 'application/json',
            }
        }
    );
}