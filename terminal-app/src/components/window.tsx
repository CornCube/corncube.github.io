import React from "react";
import { useEffect, useContext } from "react";
import Input from "../components/input";
import { motion, useDragControls } from "framer-motion";
import { TitleBar } from "./titlebar";
import { themes } from "../styles/themes";
import { ThemeContext } from "../context/themecontext";

interface WindowProps {
  constraintsRef: any;
}

export const TerminalWindow: React.FC<WindowProps> = ({ constraintsRef }) => {
  const inputRef = React.useRef<HTMLDivElement>(null);
  const dragControls = useDragControls();
  const themeValue = useContext(ThemeContext);
  const theme = themes[themeValue.theme];

  const handleClick = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <motion.div
      drag
      dragListener={false}
      dragConstraints={constraintsRef}
      dragTransition={{ power: 0.6 }}
      dragControls={dragControls}
      style={{
        overflow: "hidden",
        height: "80vh",
        width: "70vw",
        border: "1px solid #292929",
        borderRadius: "1px",
        backgroundColor: theme.foreground,
      }}
    >
      <TitleBar dragControls={dragControls} />
      <div
        onClick={handleClick}
        style={{
          height: "90%",
          width: "100%",
          color: "#9eacb8",
          display: "flex",
          overflow: "hidden",
        }}
      >
        <Input inputRef={inputRef} />
      </div>
    </motion.div>
  );
};
