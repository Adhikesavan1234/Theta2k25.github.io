import React from 'react'
import logo from "./asset/thetalogo.png"
import insta from"./asset/insta.jpeg"
import { FaInstagram } from "react-icons/fa";
import { TbBrandYoutube } from "react-icons/tb";
import { IoMdContact } from "react-icons/io";
import { FaRegCopyright } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <>
       <div className="footer">
      <div className="">
        <img src={logo} alt="img" width={200} height={250} className='logo' />
      </div>
      <div className="h">
        <h1>Dates - 28 29 30 March 2025</h1>
        <p className='pc'> <FaRegCopyright />copyrights issued by 
        <Link to={"/foot"}>Adhikesvan</Link></p>
      </div>

      <div className="icon-flex">
      <div className="hh">
      
      <FaInstagram className='insta' />
      <a><TbBrandYoutube className='tube' /></a> 
      <a><IoMdContact  className='cont'/> </a>
      <a href='https://chatgpt.com/c/67115129-a94c-8000-9ceb-ea383fc803b5' target='_blank'><TfiWorld  className='world'/></a>

      </div>
      </div>
      
    </div>
    </>
  )
}

export default Footer