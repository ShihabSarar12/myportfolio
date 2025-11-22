import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Research from "./components/Research";

export default function RouteWrapper() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        <Route path="/research/:id" element={<Research />} />
      </Routes>
    </BrowserRouter>
  );
}
