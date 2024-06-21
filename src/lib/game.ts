import { writable } from "svelte/store";
import game from "../assets/story.json";

export type TGameState = {
  currentNodeId: number;
};

export type TLevelOption = {
  text: string;
  nextId: number;
};

export type TLevel = {
  id: number;
  content: string;
  backgroundImage: string;
  options: TLevelOption[];
};

export const gameState = writable<TGameState>({
  currentNodeId: 1,
});

export const currentNodeId = writable(1);

export const story = game;