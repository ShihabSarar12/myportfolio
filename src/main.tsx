import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RouteWrapper from "./Route";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouteWrapper />
  </StrictMode>
);
