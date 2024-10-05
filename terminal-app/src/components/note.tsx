import { useContext } from "react";
import { themes } from "../styles/themes";
import { ThemeContext } from "../context/themecontext";
import { TitleBar } from "./titlebar";
import { motion, useDragControls } from "framer-motion";
import { WindowProps } from "./window";

export const Note: React.FC<WindowProps> = ({ constraintsRef }) => {
  const theme = useContext(ThemeContext);
  const dragControls = useDragControls();
  const commands = [
    "about",
    "help",
    "summary",
    "email",
    "github",
    "linkedin",
    "resume",
    "languages",
    "tools",
    "experience",
    "education",
    "coursework",
    "projects",
    "theme",
    "echo",
  ];

  const handleClick = () => {
    const noteElement = document.getElementById("note");
    const terminalElement = document.getElementById("terminal");
    if (noteElement) {
      noteElement.style.zIndex = "1";
      if (terminalElement) {
        terminalElement.style.zIndex = "0";
      }
    }
  };

  return (
    <motion.div
      id="note"
      drag
      dragListener={false}
      dragTransition={{ power: 0.6 }}
      dragConstraints={constraintsRef}
      dragControls={dragControls}
      onPointerDown={handleClick}
      style={{
        overflow: "hidden",
        height: "40vh",
        width: "20vw",
        position: "absolute",
        bottom: 0,
        right: "2%",
        zIndex: 1,
        opacity: 0.85,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "1px",
        backgroundColor: themes[theme.theme].note,
        maxHeight: "calc(100vh - 10px)",
      }}
    >
      <TitleBar dragControls={dragControls} title="Notes" />
      <div
        id="note"
        className="scroller"
        style={{
          height: "80%",
          width: "100%",
          margin: 8,
          display: "flex",
          flexDirection: "column",
          overflowWrap: "anywhere",
          overflowY: "auto",
          color: themes[theme.theme].noteText,
        }}
      >
        <ul style={{ listStyleType: "none" }}>
          {commands.map((data) => (
            <li>{data}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
