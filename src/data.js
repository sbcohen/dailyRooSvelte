import { Load, Save } from "./helpers.js";
import { writable } from "svelte/store";

let list = Load("myRoo", []);
export const Roos = writable(list);
export const name = writable(Load("myName", "Bud"));

Roos.subscribe((updatedRoos) => Save("myRoo", updatedRoos));

name.subscribe((enteredName) => Save("myName", enteredName));
