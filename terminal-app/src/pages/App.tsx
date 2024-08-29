import { useContext, useRef } from "react";
import "../styles/terminal.css";
import { themes } from "../styles/themes";
import { TerminalWindow } from "../components/window";
import { ThemeSwitcher } from "../components/themeswitcher";
import { ThemeContext } from "../context/themecontext";

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
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: themes[theme.theme].background,
      }}
    >
      <ThemeSwitcher />
      <TerminalWindow constraintsRef={constraintsRef} />
    </div>
  );
}

export default App;
