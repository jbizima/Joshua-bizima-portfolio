import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({});

export function ThemeProvider({ children }) {
  const result = window.matchMedia("(prefers-color-scheme: dark)");
  const [theme, setTheme] = useState(() => localStorage.theme === "light");

  useEffect(() => {
    const rootElement = window.document.documentElement;
    const currentTheme = theme;

    const prevTheme = currentTheme ? "dark" : "light";
    rootElement.classList.remove(prevTheme);

    const nextTheme = currentTheme ? "light" : "dark";
    rootElement.classList.add(nextTheme);

    localStorage.setItem("theme", nextTheme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
