import React from "react";
import Input from "../components/input";
import Draggable from "react-draggable";
import { Theme } from "../styles/themes";

interface WindowProps {
  theme: Theme;
}

export const TerminalWindow: React.FC<WindowProps> = ({ theme }) => {
  const inputRef = React.useRef<HTMLTextAreaElement>(null);

  const handleClick = () => {
    inputRef.current?.focus();
  };

  return (
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
  );
};
