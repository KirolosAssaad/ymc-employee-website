import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import  {BrowserRouter}  from "react-router-dom";
import App from "./App";
import  {createRoot} from 'react-dom/client';
import Navbar from "./components/Navbar";

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
    
  </BrowserRouter>
);


