import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AuthProvider } from "./Context/AuthContext";
import Router from "./Router";
import { RouterProvider } from "react-router-dom";
import './style.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={Router}>
        <App />
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
