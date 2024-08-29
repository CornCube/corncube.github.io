import React from "react";
import UserContext from "./user";

interface InputProps {
  inputRef: React.RefObject<HTMLTextAreaElement>;
}

export const Input: React.FC<InputProps> = ({ inputRef }) => {
  const onSubmit = async (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      // submit
      e.preventDefault();
    }

    if (e.key === "ArrowUp") {
      // up in history
    }

    if (e.key === "ArrowDown") {
      // down in history
    }

    if (e.key === "Tab") {
      // auto-complete
      e.preventDefault();
    }

    if (e.key === "c" && e.ctrlKey) {
      // stop execution
    }

    if (e.key === "l" && e.ctrlKey) {
      // clear screen
    }
  };

  return (
    <div
      style={{
        margin: 8,
        width: "100%",
        height: "93%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <UserContext />
      <textarea
        ref={inputRef}
        id="prompt"
        onKeyDown={onSubmit}
        style={{
          backgroundColor: "transparent",
          border: "none",
          outline: "none",
          width: "100%",
          height: "100%",
          resize: "none",
          overflowY: "auto",
          color: "white",
          minHeight: "100%",
          fontFamily: "inherit",
          fontSize: "inherit",
          whiteSpace: "pre-wrap",
          flex: 1,
        }}
        spellCheck="false"
      />
    </div>
  );
};

export default Input;
