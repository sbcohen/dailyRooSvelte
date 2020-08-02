import { Load, Save } from "./helpers.js";
import { writable } from "svelte/store";

let list = Load("myRoo", []);
export const Roos = writable(list);
export const name = writable(Load("myName", "Bud"));

Roos.subscribe((updatedRoos) => Save("myRoo", updatedRoos));

name.subscribe((enteredName) => Save("myName", enteredName));

export let roolette = [
  "Read for 30 minutes",
  "Meditate for 10 minutes",
  "Stretch/Yoga",
  "Apply for 2 jobs",
  "1 hour of online course",
  "Run for 30 minutes",
  "3 reps of weights",
  "Call your representatives",
  "Listen to folklore",
  "Listen to the news",
];
