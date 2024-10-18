import React from 'react'
import logo from "./asset/thetalogo.png"
import { Link } from 'react-router-dom'
import Events from './Events'


function Header() {
  
  return (
    <>
            <div className="nav">
              <div className='title'>
                <Link to={"/"}>
                <img src={logo} alt="img" width={100} height={100}/></Link>
                </div>
              <div className='navbars'>
                <Link to={"/"}><h2>Home</h2></Link>
                <Link to={"/events"}><h2>Events</h2></Link>
                <Link to={"/reg"}><h2>Registration</h2></Link>
                <Link to={"/contact"}><h2>Contact</h2></Link>
                </div>

                
            </div>
    </>
  )
}

export default Header