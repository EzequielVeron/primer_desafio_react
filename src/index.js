import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./contexts/userContext";
import { CarritoContextProvider } from "./contexts/carritotContext";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserContextProvider>
    <CarritoContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CarritoContextProvider>
  </UserContextProvider>,
  
);

