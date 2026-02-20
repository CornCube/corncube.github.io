import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { useContext } from "react";
import { ThemeContext } from "../context/themecontext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleClick = () => {
    toggleTheme();
  };

  return (
    <div style={{ position: "absolute", top: "10px", right: "10px" }}>
      <FontAwesomeIcon
        icon={theme === "light" ? faMoon : faSun}
        onClick={handleClick}
        size="lg"
      />
    </div>
  );
};
