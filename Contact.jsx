import React, { useEffect } from 'react'
import './theta.css'
import image from './asset/thetalogo.png'
import Footer from './Footer'
import Header from './Header'
import { CiMail } from "react-icons/ci";
import { TfiWorld } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom'
function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  },);
  return (
    
    <>
    <Header/>
    <div className="color">

    <div className="">
        <h1 className='white'>Contacts References and Links</h1>
    </div>

    <div className='fullwrap'>
    <div>
      <div>
      <div>
      <div class="infocardContainer">
        <div id="main">
          <img src={image}></img>
        </div>
        <div id="textbois">
            <h2>President</h2>
            <h4>Theta co ordinator</h4>
            <a href="mailto:akesavan725@gmail.com">Name</a>
            <div id="hotlinks">
            <TfiWorld />
            <CiMail  className='black-bg'/> 
            <FaInstagram />
            </div>
          </div>
        </div>
      </div> 
    </div>
  </div>
      <div>
      </div> 
      <div>
      </div> 
      </div>

<div className="wrap">
    <div className=''>
    <div>
      <div>
      <div>
      <div class="infocardContainer">
        <div id="main">
          <img src={image}></img>
        </div>
        <div id="textbois">
            <h2>President</h2>
            <h4>Theta co ordinator</h4>
            <a href="mailto:akesavan725@gmail.com">Name</a>
            <div id="hotlinks">
            <Link to={"/foot"}><TfiWorld /></Link>
            <CiMail  className='black-bg'/> 
            <FaInstagram />
            </div>
          </div>
        </div>
      </div> 
    </div>
  </div>
      <div>
      </div> 
      <div>
      </div> 
      </div>
      <div className="">
        <img src={image} alt="" width={150} />
      </div>
   <div className=''>
    <div>
      <div>
      <div>

      <div class="infocardContainer">
        <div id="main">
          <img src={image}></img>
        </div>
        <div id="textbois">
            <h2>President</h2>
            <h4>Theta co ordinator</h4>
            <a href="mailto:akesavan725@gmail.com">Name</a>
            <div id="hotlinks">
            <TfiWorld />
            <CiMail  className='black-bg'/> 
            <FaInstagram />
            </div>
          </div>
        </div>
      </div> 
    </div>
  </div>
      <div>
      </div> 
      <div>
      </div> 
      </div>
      </div>
      
    <div className='fullwrap'>
    <div>
      <div>
      <div>
      <div class="infocardContainer">
        <div id="main">
          <img src={image}></img>
        </div>
        <div id="textbois">
            <h2>President</h2>
            <h4>Theta co ordinator</h4>
            <a href="mailto:akesavan725@gmail.com">Name</a>
            <div id="hotlinks">

              {/* <a href=""> */}
    <TfiWorld />
    <CiMail  className='black-bg'/> 
    <FaInstagram />

              {/* </a> */}
              {/* <a href="https://codepen.io/LIMESTA">
              <img id="codepenio" src="https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Small.png" target="_blank"></img>
              </a>
              <a href="https://codepen.io/LIMESTA">
              <img id="codepenio" src="https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Small.png" target="_blank"></img> */}
              {/* </a> */}
            </div>
          </div>
        </div>
      </div> 
    </div>
  </div>
      <div>
      </div> 
      <div>
      </div> 
      </div>
      </div>
      <Footer/>
      
 </>
  )
}

export default Contact