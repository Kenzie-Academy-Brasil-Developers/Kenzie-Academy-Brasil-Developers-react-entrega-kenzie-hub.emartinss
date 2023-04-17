import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { TechProvider } from "./Providers/techContext";
import { UserProvider } from "./Providers/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <TechProvider>
          <App />
        </TechProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
