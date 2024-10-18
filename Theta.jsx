import React from 'react'
import './theta.css'

import EventCard from './EventCard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Gain from './Gain';
import Footer from './Footer';
import Contact from './Contact';
import ThetaReg from './RegisterTheta';
import Portfolio from './portfolio';
// import Footer from './Footer';

function Theta() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Gain/>}/>
      <Route path='events' element={<EventCard/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/reg' element={<ThetaReg/>}/>
      <Route path='/' element={<Gain/>}/>
      <Route path='/foot' element={<Portfolio/>}/>
      

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Theta