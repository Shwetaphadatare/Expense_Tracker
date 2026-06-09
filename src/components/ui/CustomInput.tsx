import useAppTheme from '@/hooks/useAppTheme';
import { useThemeStore } from '@/store/themeStore';
import { useState } from 'react';
import { View, TextInput, Text } from 'react-native';

interface Props {
  icon: React.ReactNode;
  placeholder: string;
  secureTextEntry?: boolean;
}

export default function CustomInput({ icon, placeholder, secureTextEntry }: Props) {
  const theme = useAppTheme();
  const mode = useThemeStore((state) => state.mode);

  const [isFocused, setIsFocused] = useState(false);
  return (
    <View
      className={c.container}
      style={{
        backgroundColor: theme.background,
    borderWidth:1,
        borderColor: isFocused ? theme.primary : theme.borderColor,
      }}>
      {icon}
      <TextInput
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="#94A3B8"
        className={c.textInput}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
        style={{
          color: theme.text,
        }}
      />
    </View>
  );
}
const c = {
  container: 'py-3 flex-row items-center rounded-2xl px-4',
  textInput: 'ml-3 flex-1 px-2 py-2 text-base focus:outline-none"',
};
