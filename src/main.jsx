import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { HelmetProvider } from "react-helmet-async";
import Routers from "./components/Routers.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider >
      <Routers />
    </HelmetProvider>
  </StrictMode>
);
