import { Load, Save } from "./helpers.js";
import { writable } from "svelte/store";

let list = Load("myRoo", []);
let sched = Load("myBoom", []);
let today = Load("myDate", 0);

export const Roos = writable(list);
export const Booms = writable(sched);
export const lastBoom = writable(today);
export const name = writable(Load("myName", "mate"));
export const isDark = writable(false); //makes a thing that can be globally changed
export const toast = writable({ text: "Woohoo!!", show: false });
export function pop(text) {
  toast.set({ text, show: true });
  setTimeout(() => {
    toast.set({ text, show: false });
  }, 2000); //time in ms
}

Roos.subscribe((updatedRoos) => Save("myRoo", updatedRoos));
Booms.subscribe((updatedBooms) => Save("myBoom", updatedBooms));
lastBoom.subscribe((updatelastBoom) => Save("myDate", updatelastBoom));
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
