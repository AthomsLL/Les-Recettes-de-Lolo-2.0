import { useTheme } from 'vuetify';

export default function useToggleTheme() {
  const theme = useTheme();

  const toggleTheme = () => {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  }

  return { 
    theme,
    toggleTheme
  }
}