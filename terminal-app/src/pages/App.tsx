import { useContext, useRef } from "react";
import "../styles/terminal.css";
import { themes } from "../styles/themes";
import { TerminalWindow } from "../components/window";
import { ThemeContext } from "../context/themecontext";
import { Note } from "../components/note";

function App() {
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
}

export default App;
