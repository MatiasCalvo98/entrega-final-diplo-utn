import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Nav from './Components/layouts/Nav';
import Footer from './Components/layouts/Footer'

import HomePage from './Pages/HomePage';
import NosotrosPage from './Pages/NosotrosPage';
import NovedadesPage from './Pages/NovedadesPage';
import ContactoPage from './Pages/ContactoPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage/>} />          
          <Route path="nosotros" element={<NosotrosPage/>} />
          <Route path="novedades" element={<NovedadesPage/>} />
          <Route path="contacto" element={<ContactoPage/>} />
        </Routes>

      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
