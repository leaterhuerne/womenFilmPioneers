import professions from "$lib/data/professions.json";
type key = keyof typeof professions;

export function GET() {
    let list: key[] = Object.keys(professions) as key[];
    return new Response(JSON.stringify(list));
}