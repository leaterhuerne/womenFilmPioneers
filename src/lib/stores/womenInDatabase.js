import { readable } from "svelte/store";
import database from "$lib/data/original_database.json";

let keys = Object.keys(database);
let json = {};

for(let i = 0; i < keys.length; i++) {
    if(database[keys[i]].person.Geschlecht == "W") {
        json[key[i]] = database[keys[i]].person;
    }
}

export const womenInDataBase = readable(json);