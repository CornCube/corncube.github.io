import React, { createContext, useState, ReactNode } from "react";
import { ThemeName } from "../styles/themes";

interface ThemeContextType {
  theme: ThemeName;
  toggleTheme: () => void;
}

const defaultContextValue: ThemeContextType = {
  theme: "dark",
  toggleTheme: () => {},
};

const ThemeContext = createContext<ThemeContextType>(defaultContextValue);

interface ThemeContextProviderProps {
  children: ReactNode;
}

const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({
  children,
}) => {
  const [theme, setTheme] = useState<ThemeName>("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
};

export { ThemeContext, ThemeContextProvider };
