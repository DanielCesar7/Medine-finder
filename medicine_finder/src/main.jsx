import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Medicine from './Medicine_view.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={ <App /> } />
        <Route path="medicine" element={ <Medicine /> } />
      </Routes>
  </BrowserRouter>,
)
