import { create } from 'zustand';

export type ThemeMode = 'system' | 'light' | 'dark';

export type AccentColor = 'purple' | 'green' | 'orange' | 'navy';

type ThemeStore = {
  mode: ThemeMode;
  accent: AccentColor;

  setMode: (mode: ThemeMode) => void;
  setAccent: (accent: AccentColor) => void;
};

export const useThemeStore = create<ThemeStore>((set) => ({
  mode: 'system',
  accent: 'green',

  setMode: (mode) => set({ mode }),
  setAccent: (accent) => set({ accent }),
}));
