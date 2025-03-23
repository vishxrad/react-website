import { createContext, useState, useEffect, useContext } from "react";

// Create Context
const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  // Load dark mode preference from localStorage
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Apply theme class to <html> tag
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

// Custom Hook for easy access
export function useDarkMode() {
  return useContext(DarkModeContext);
}
