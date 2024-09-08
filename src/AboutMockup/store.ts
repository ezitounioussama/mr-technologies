import { create } from "zustand";

// Define the store's type
interface StoreState {
  play: boolean;
  setPlay: (play: boolean) => void;
}

// Create a store with typed state
export const useStore = create<StoreState>((set) => ({
  play: true,
  setPlay: (play: boolean) => set({ play }),
}));
