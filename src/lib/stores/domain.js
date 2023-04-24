import { readable } from "svelte/store";

const value = "https://frauen-filmgeschichte.de:3003";
export const domain = readable(value);
export const domainString = value;