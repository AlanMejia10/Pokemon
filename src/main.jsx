import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {Navbar} from "../Components/Navbar";
import {AppRouter} from "../Router/AppRouter";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/*the navbar must the inside the BrowserRouter to get the context*/}
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  </React.StrictMode>
);
