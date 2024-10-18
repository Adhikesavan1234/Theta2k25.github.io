import React, { useEffect } from 'react'
import Header from './Header';
import Thetayear from './Thetayear';
import Courasel from './Courasel';
import Events from './Events';
import Cards from './Cards';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Gain() {
  useEffect(() => {
    window.scrollTo(0, 0);
  },["./Gain.jsx"]);
  return (
    
    <div className='hidden'>
        <>
        <Link to={'/'}>
    <div>
    <Header/>
    </div>

    
    <div style={{marginTop:"100px"}}>
    <Thetayear/>
    
    <Courasel/>
    <Events/>
    <Cards/>
    <Footer/>
    </div>
    </Link>
        </>
    </div>
  )
}

export default Gain