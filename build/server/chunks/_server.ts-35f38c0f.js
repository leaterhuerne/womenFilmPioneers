import { p as professions } from './professions-78441d65.js';
import { e as error } from './index2-2e3d14e8.js';

function onlyGender(gender) {
  const result = {};
  const keys = Object.keys(professions);
  for (let i = 0; i < keys.length; i++) {
    if (professions[keys[i]][gender] > 0) {
      result[keys[i]] = professions[keys[i]][gender];
    }
  }
  return new Response(JSON.stringify(result));
}
function errorIfwrongArgument(name, gender) {
  if (professions[name] == void 0) {
    throw error(400, 'The profession "' + String(name) + '" does not exist in the database.');
  } else if (String(gender) != "male" || String(gender) != "female" || String(gender) != "unknown") {
    throw error(400, 'The gender "' + String(gender) + '" does not exist in the database.');
  }
}
function GET({ url }) {
  const gender = url.searchParams.get("gender");
  const name = url.searchParams.get("name");
  if (gender != void 0) {
    if (name != void 0) {
      errorIfwrongArgument(name, gender);
      return new Response(String(professions[name][gender]));
    } else {
      return onlyGender(gender);
    }
  } else if (name != void 0) {
    return new Response(
      JSON.stringify(professions[name]),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      }
    );
  } else {
    return new Response(
      JSON.stringify(professions),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      }
    );
  }
}

export { GET };
//# sourceMappingURL=_server.ts-35f38c0f.js.map
