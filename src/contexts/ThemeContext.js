import React, { useState, useEffect } from "react";

export const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    if (localStorage.theme === "night") {
      document.querySelector("html").setAttribute("data-theme", "night");
      localStorage.setItem("theme", "night");
      setTheme("night");
    } else {
      document.querySelector("html").setAttribute("data-theme", "winter");
      localStorage.setItem("theme", "winter");
      setTheme("winter");
    }
  }, []);

  const toggleTheme = () => {
    if (localStorage.theme === "night") {
      document.querySelector("html").setAttribute("data-theme", "winter");
      localStorage.setItem("theme", "winter");
      setTheme("winter");
    } else {
      document.querySelector("html").setAttribute("data-theme", "night");
      localStorage.setItem("theme", "night");
      setTheme("night");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
