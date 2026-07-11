import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router"
import DetailView from "./routes/DetailView"
import NavBar from "./routes/NavBar";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<NavBar />} >
        <Route index element={<App />} />
        <Route path="/PokemonDetail/:id" element={<DetailView />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
