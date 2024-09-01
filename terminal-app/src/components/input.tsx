import React from "react";
import { useRef, useState, useEffect } from "react";
import { getUserLine } from "./userline";

interface InputProps {
  inputRef: React.RefObject<HTMLDivElement>;
}

export const Input: React.FC<InputProps> = ({ inputRef }) => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([getUserLine()]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    //3️⃣ bring the last item into view
    containerRef.current?.lastElementChild?.scrollIntoView();
  }, [history]);

  const onSubmit = async (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      // submit
      e.preventDefault();

      const output = `output of ${input}`;

      setHistory((prevHistory: any) => [
        ...prevHistory,
        <span style={{ color: "greenyellow" }}>
          &gt; <span style={{ color: "orange" }}>{input}</span>
        </span>,
        output,
        "\n",
        getUserLine(),
      ]);

      setInput("");

      if (inputRef.current) {
        inputRef.current.textContent = "";
        inputRef.current.focus();
      }
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

    if (e.key === "l" && e.ctrlKey) {
      // clear screen
      e.preventDefault();
      setHistory([getUserLine()]);
      setInput("");
    }
  };

  const handleChange = (e: React.FormEvent<HTMLDivElement>) => {
    setInput(e.currentTarget.textContent || "");
  };

  return (
    <div
      ref={containerRef}
      style={{
        margin: 8,
        width: "100%",
        height: "93%",
        display: "flex",
        flexDirection: "column",
        whiteSpace: "pre-wrap",
        overflowWrap: "anywhere",
        overflowY: "auto",
      }}
    >
      <ul style={{ listStyleType: "none" }}>
        {history.map((data, index) => (
          <React.Fragment key={index}>
            <li>{data}</li>
          </React.Fragment>
        ))}
      </ul>
      <div style={{ display: "flex" }}>
        <span style={{ color: "greenyellow" }}>&gt;&nbsp;</span>
        <div
          ref={inputRef}
          id="prompt"
          contentEditable
          onInput={handleChange}
          onKeyDown={onSubmit}
          style={{
            backgroundColor: "transparent",
            border: "none",
            outline: "none",
            width: "100%",
            height: "100%",
            resize: "none",
            overflowY: "auto",
            color: "orange",
            minHeight: "100%",
            fontFamily: "inherit",
            fontSize: "inherit",
            flex: 1,
            caretColor: "red",
          }}
          spellCheck="false"
        />
      </div>
    </div>
  );
};

export default Input;
