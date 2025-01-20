import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"

require('dotenv').config()
var pool = require('../models/bd')

pool.query('select * from posts').then(function (resultados){
  console.log(resultados)
})

import Nav from './src/Components/layouts/Nav';
import Footer from './src/Components/layouts/Footer'

import HomePage from './src/Pages/HomePage';
import NosotrosPage from './src/Pages/NosotrosPage';
import NovedadesPage from './src/Pages/NovedadesPage';
import ContactoPage from './src/Pages/ContactoPage';


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
