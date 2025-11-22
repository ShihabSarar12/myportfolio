import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Research from "./components/Research"; // your page component

export default function RouteWrapper() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main homepage (your App) */}
        <Route path="/" element={<App />} />

        {/* Dynamic research paper page */}
        <Route path="/research/:id" element={<Research />} />
      </Routes>
    </BrowserRouter>
  );
}
