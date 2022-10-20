import React, { useState, useEffect } from "react";

export const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    toggleTheme();
  }, []);

  const toggleTheme = () => {
    if (localStorage.theme === "dark") {
      document.querySelector("html").setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.querySelector("html").setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
