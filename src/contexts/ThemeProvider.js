import { useState, useEffect, createContext } from "react";
import { loadTheme, saveTheme } from "../components/utils/localStorage";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(null);

  const styles = getComputedStyle(document.body);

  const lightThemeTextColor = styles.getPropertyValue('--light-theme-text-color');
  const lightThemeBackgroundColor = styles.getPropertyValue('--light-theme-background-color');
  const darkThemeTextColor = styles.getPropertyValue('--dark-theme-text-color');
  const darkThemeBackgroundColor = styles.getPropertyValue('--dark-theme-background-color');

  let textColor = darkTheme ? darkThemeTextColor : lightThemeTextColor;
  let backgroundColor = darkTheme ? darkThemeBackgroundColor : lightThemeBackgroundColor;

  document.body.style.color = textColor;
  document.body.style.background = backgroundColor;
  document.body.dataset.theme = darkTheme ? 'dark-theme' : 'light-theme'

  useEffect(() => {
    saveTheme(darkTheme);
  }, [darkTheme]);

  useState(()=> {
    loadTheme(setDarkTheme);

    window.addEventListener('storage', (e) => {
      if(e.key === 'dark-mode-active')
      loadTheme(setDarkTheme);
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;