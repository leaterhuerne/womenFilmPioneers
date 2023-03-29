import { readable } from "svelte/store";

const value = "http://127.0.0.1:5173";
export const domain = readable(value);
export const domainString = value;