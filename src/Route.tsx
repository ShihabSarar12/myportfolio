import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Research from "./components/Research";
import AchieveDetails from "./components/AchieveDetails";

export default function RouteWrapper() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        <Route path="/research/:id" element={<Research />} />
        <Route path="/achievement/:id" element={<AchieveDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
