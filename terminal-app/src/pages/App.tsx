import React from "react";
import { useState, useEffect } from "react";
import Input from "../components/input";
import "../styles/terminal.css";
import { themes, ThemeName } from "../styles/themes";
import Draggable from "react-draggable";

function App() {
  const inputRef = React.useRef<HTMLTextAreaElement>(null);
  const [currentTheme, setCurrentTheme] = useState<ThemeName>("dark");

  useEffect(() => {
    console.log("theme changed");
  }, [currentTheme]);

  const handleClick = () => {
    inputRef.current?.focus();
  };

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
      <Draggable bounds="div" handle="strong">
        <div>
          <strong>draggable</strong>
          <div
            onClick={handleClick}
            style={{
              height: "80vh",
              width: "80vw",
              backgroundColor: theme.foreground,
              color: "#9eacb8",
              display: "flex",
              border: "1px solid #292929",
              borderRadius: "1px",
            }}
          >
            <Input inputRef={inputRef} />
          </div>
        </div>
      </Draggable>
    </div>
  );
}

export default App;
