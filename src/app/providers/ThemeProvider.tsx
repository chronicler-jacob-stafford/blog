import { createContext, useEffect, useState } from 'react';
 
type Theme = 'dark' | 'light' | 'system'
 
type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}
 
type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}
 
const initialState: ThemeProviderState = {
  theme: 'dark',
  setTheme: () => null,
};
 
const ThemeProviderContext = createContext<ThemeProviderState>(initialState);


function ThemeProvider({
  children,
  defaultTheme = 'dark',
  storageKey = 'vite-ui-theme',
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );
 
  useEffect(() => {
    const root = window.document.documentElement;
 
    root.classList.remove('light', 'dark');
 
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light';
 
      root.classList.add(systemTheme);
      return;
    }
 
    root.classList.add(theme);
  }, [theme]);
 
  // eslint-disable-next-line react-x/no-unstable-context-value
  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };
 
  return (
    <ThemeProviderContext {...props} value={value}>
      {children}
    </ThemeProviderContext>
  );
}

export { ThemeProvider, ThemeProviderContext };