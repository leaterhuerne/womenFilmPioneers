export function GET({ url }: { url:URL }) {
    let json = {};


    return new Response(
        JSON.stringify(json),
        {
            status: 200,
            headers: {
                'Content-Type' : 'application/json',
            }
        }
    );
}