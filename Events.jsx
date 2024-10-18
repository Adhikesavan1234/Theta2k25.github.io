import React from 'react'
import { Link } from 'react-router-dom'

function Events() {
  return (
    <>
    
    <div className="get-start">
        <Link to="events">
      <button className='even'>EVENTS</button>
        </Link>
    </div>
    
    </>
  )
}

export default Events