import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Advanced } from "./pages/AdvancedView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Advanced />} />
        {/* <Route path="/upscaler" element={} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
