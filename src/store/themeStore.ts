// src/store/themeStore.ts

import { create } from 'zustand';

type ThemeMode = 'light' | 'dark';

interface ThemeState {
  mode: ThemeMode;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>((set, get) => ({
  mode: 'light',

  toggleTheme: () =>
    set({
      mode: get().mode === 'light' ? 'dark' : 'light',
    }),
}));
