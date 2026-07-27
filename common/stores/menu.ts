import { create } from "zustand";

interface MenuState {
  isOpen: boolean;
  toggleMenu: () => void;
  hideMenu: () => void;
}

export const useMenu = create<MenuState>((set) => ({
  isOpen: false,
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
  hideMenu: () => set({ isOpen: false }),
}));
