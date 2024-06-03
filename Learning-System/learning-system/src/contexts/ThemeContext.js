// src/contexts/ThemeContext.js
import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const ThemeContext = createContext();

const lightTheme = {
  background: '#ffffff',
  color: '#000000'
};

const darkTheme = {
  background: '#000000',
  color: '#ffffff'
};

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const themeObject = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <StyledThemeProvider theme={themeObject}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
