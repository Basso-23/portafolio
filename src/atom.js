import { atom } from "jotai";
import { projects } from "./json/projects";

//* Original data
export const originalAtom = atom(projects);

//* Data
export const dataAtom = atom(projects);

//* Image lazy load
export const imageAtom = atom(true);
