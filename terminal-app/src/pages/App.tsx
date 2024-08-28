import { useState, useEffect } from "react";
import "../styles/terminal.css";
import { themes, ThemeName } from "../styles/themes";
import { TerminalWindow } from "../components/window";

function App() {
  const [currentTheme, setCurrentTheme] = useState<ThemeName>("dark");

  useEffect(() => {
    console.log("theme changed");
  }, [currentTheme]);

  // @ts-ignore
  const changeTheme = (newTheme: ThemeName) => {
    setCurrentTheme(newTheme);
  };

  const theme = themes[currentTheme];

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.background,
      }}
    >
      <TerminalWindow theme={theme} />
    </div>
  );
}

export default App;
