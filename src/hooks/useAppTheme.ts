import { useColorScheme } from 'react-native';

import { useThemeStore } from '@/store/themeStore';
import { accentColors, lightTheme, darkTheme } from '@/constants/themes';

export default function useAppTheme() {
  const systemTheme = useColorScheme();

  const mode = useThemeStore((state) => state.mode);
  const accent = useThemeStore((state) => state.accent);

  const resolvedTheme = mode === 'system' ? systemTheme : mode;

  const isDark = resolvedTheme === 'dark';

  const baseTheme = isDark ? darkTheme : lightTheme;

  return {
    ...baseTheme,

    primary: isDark ? accentColors[accent].dark : accentColors[accent].light,
  };
}
