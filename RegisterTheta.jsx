

import React from 'react'
import './Thetareg.css'
import Header from './Header'
function ThetaReg() {
  return (
    <>
    <Header/>
    <div className="container1">
         <div class="container2">
        <h1 class="title">REGISTRATION FORMS</h1>
        <p class="subtitle">THETA 2K25</p>
        <div class="form-container">
            <h2 class="form-title">Register</h2>
            <form>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required/>
                </div>
                <div class="form-group">
                    <label for="password">Select the day</label>
                    <select name="" id="" className='select'>
                        <option value="">DAY 1</option>
                        <option value="">DAY 2</option>
                        <option value="">DAY 2</option>
                    </select>
                    
                </div>
                <div class="form-group">
                    <button type="submit">Register</button>
                </div>
            </form>
            <p class="form-footer">Theta <a href="#">2k25</a></p>
        </div>
    </div>
    </div>
    </>
  )
}

export default ThetaReg