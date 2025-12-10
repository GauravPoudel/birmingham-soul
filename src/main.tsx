import { createRoot } from "react-dom/client";
import { StrictMode } from 'react';
import React from 'react'
import App from "./App.tsx";
import "./index.css";

const rootEl = document.getElementById("root");
if (!rootEl) {
  throw new Error('Root element with id="root" not found in index.html');
}
createRoot(rootEl).render(
  <StrictMode>
    <App />
  </StrictMode>
);
