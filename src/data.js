import { Load, Save } from "./helpers.js";
import { writable } from "svelte/store";

let list = Load("myRoo", []);
export const Roos = writable(list);
export const name = writable(Load("myName", "mate"));

Roos.subscribe((updatedRoos) => Save("myRoo", updatedRoos));

name.subscribe((enteredName) => Save("myName", enteredName));

export let roolette = [
  "Read for 30 minutes",
  "Make some Brekkie",
  "Stretch",
  "Apply for 2 jobs",
  "Grab a coldie",
  "Run for 30 minutes",
  "3 reps of weights",
  "Call your reps",
  "Fire up the barbie",
  "Listen to the news",
];
