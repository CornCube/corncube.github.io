import { DragControls } from "framer-motion";

interface TitleBarProps {
  dragControls: DragControls;
  title: string;
}

export const TitleBar: React.FC<TitleBarProps> = ({ dragControls, title }) => {
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
      <strong>{title}</strong>
    </div>
  );
};
