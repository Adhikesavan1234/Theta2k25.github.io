import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EventCard from './EventCard';
import Gain from './Gain';
import Portfolio from './portfolio';


function RourterTheta() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<Gain/>}/>
      <Route path='events' element={<EventCard/>}/>
      <Route path='/foot' elements={<Portfolio/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default RourterTheta