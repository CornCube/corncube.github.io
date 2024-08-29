import { DragControls } from "framer-motion";

interface TitleBarProps {
  dragControls: DragControls;
}

export const TitleBar: React.FC<TitleBarProps> = ({ dragControls }) => {
  return (
    <div
      onPointerDown={(e) => dragControls.start(e)}
      style={{
        cursor: "move",
        backgroundColor: "#333",
        padding: "8px",
        color: "#fff",
        userSelect: "none",
      }}
    >
      <strong>Terminal</strong>
    </div>
  );
};
