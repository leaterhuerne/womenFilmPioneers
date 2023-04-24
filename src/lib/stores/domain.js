import { readable } from "svelte/store";

const value = "http://192.168.2.102:5173";
export const domain = readable(value);
export const domainString = value;