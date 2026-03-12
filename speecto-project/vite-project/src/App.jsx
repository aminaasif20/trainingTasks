import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home'
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import OurTeam from './components/pages/OurTeam';
import Serivces from './components/pages/Serivces';
import HeroSection from './components/HeroSection';

function App() {
  

  return (
   <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<HeroSection/>}/>
      <Route path='/about us' element={<AboutUs/>}/>
      <Route path='/contact us' element={<ContactUs/>}/>
      <Route path='/our team' element={<OurTeam/>}/>
      <Route path='/services' element={<Serivces/>}/>
    </Routes>
    <Footer/>
   </BrowserRouter>
     
  )
}

export default App
