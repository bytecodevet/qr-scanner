import { type Telegram } from "@twa-dev/types";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

declare global {
  interface Window {
    Telegram: Telegram;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
