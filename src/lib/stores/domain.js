import { readable } from "svelte/store";

const value = "http://178.254.18.251:3003";
export const domain = readable(value);
export const domainString = value;