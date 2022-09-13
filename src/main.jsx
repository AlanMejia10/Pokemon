import React from "react";
import ReactDOM from "react-dom/client";
import { Navbar } from "../Components/Navbar";
import { Pokedex } from "./Pokedex";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* main component */}
    <Navbar />
    <Pokedex />
  </React.StrictMode>
);
