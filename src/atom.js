import { atom } from "jotai";
import { projects } from "./json/projects";

//* Original data
export const originalAtom = atom(projects);

//* Data
export const dataAtom = atom(projects);

//* Current filter
export const filterAtom = atom("proyectos");

//* Image lazy load
export const imageAtom = atom(true);
