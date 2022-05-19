import { useState, createContext } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(true);

  const styles = getComputedStyle(document.body);

  const lightThemeTextColor = styles.getPropertyValue('--light-theme-text-color');
  const lightThemeBackgroundColor = styles.getPropertyValue('--light-theme-background-color');
  const darkThemeTextColor = styles.getPropertyValue('--dark-theme-text-color').trim();
  const darkThemeBackgroundColor = styles.getPropertyValue('--dark-theme-background-color').trim();

  let textColor = darkTheme ? darkThemeTextColor : lightThemeTextColor;
  let backgroundColor = darkTheme ? darkThemeBackgroundColor : lightThemeBackgroundColor;

  document.body.style.color = textColor;
  document.body.style.background = backgroundColor;

  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;