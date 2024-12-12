import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import MedicineProvider from "./store/MedicineProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <MedicineProvider>
    <App />
  </MedicineProvider>
);
