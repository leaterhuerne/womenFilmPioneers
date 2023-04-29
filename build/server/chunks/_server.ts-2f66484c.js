import { p as professions } from './professions-78441d65.js';

function GET() {
  let list = Object.keys(professions);
  return new Response(
    JSON.stringify(list),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    }
  );
}

export { GET };
//# sourceMappingURL=_server.ts-2f66484c.js.map
