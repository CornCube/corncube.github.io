import { useContext, useRef } from "react";
import { ThemeContext } from "../context/themecontext";
import { themes } from "../styles/themes";
import { Note } from "../components/note";
import { TerminalWindow } from "../components/window";
import "../styles/terminal.css";

export const Advanced = () => {
  const theme = useContext(ThemeContext);
  const constraintsRef = useRef(null);

  return (
    <div
      ref={constraintsRef}
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: themes[theme.theme].background,
      }}
    >
      <Note constraintsRef={constraintsRef} />
      <TerminalWindow constraintsRef={constraintsRef} />
    </div>
  );
};
