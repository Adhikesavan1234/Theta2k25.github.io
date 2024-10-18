import React, { useEffect, useState } from 'react'
import './evencard.css'
import Header from './Header'
import Footer from './Footer'
import  png from"./asset/thetalogo.png"

function EventCard() {
  useEffect(() => {
    window.scrollTo(0, 0);
  },);

  return (
    <>
    <Header/>
    <div class="bg">
    <h3>THETA2K25</h3>
  </div>
  <div className="headingc">
    <h1 >CLUSTERING EVENTS</h1>
  </div>
  <div className="wrap">

  <div class="nft">
    <div class='main'>
      <img class='tokenImage' src='./src/theta/asset/codehunt.avif' alt="NFT" />
      <h2 className='hhhh'>Code Hunt by Tech.</h2>
      <p class='description'>To solve the problem using any programming Language</p>
      <div class='tokenInfo'>
        <div class="price">
          <ins>◘</ins>
          <p>Informatica</p>
        </div>
        <div class="duration">
          <ins>◷</ins>
          <p>(28.3.24) 11 PM</p>
        </div>
      </div>
      <hr />
      <div class='creator'>
        <div class='wrapper'>
          <img src={png} alt="Creator" />
        </div>
        <a href='https://forms.gle/TFzXGDGaadEzmvLLA' target='_blank'><button  className="rb">Register</button></a>
      </div>
    </div>
  </div>
   
  <div class="nft">
    <div class='main'>
      <img class='tokenImage' src='./src/theta/asset/robosaga.avif' alt="NFT" />
      <h2 className='hhhh'>Robo Saga Event</h2>
      <p class='description'>It is a game you play until you won atlast you won the game </p>
      <div class='tokenInfo'>
        <div class="price">
          <ins>◘</ins>
          <p>Robotics</p>
        </div>
        <div class="duration">
          <ins>◷</ins>
          <p>(28.3.24) 12 PM</p>
        </div>
      </div>
      <hr />
      <div class='creator'>
        <div class='wrapper'>
          <img src={png} alt="Creator" />
        </div>
        <a href='https://forms.gle/TFzXGDGaadEzmvLLA' target='_blank'><button  className="rb">Register</button></a>
      </div>
    </div>
  </div>
  <div class="nft">
    <div class='main'>
      <img class='tokenImage' src='./src/theta/asset/captutesaga.avif' alt="NFT" />
      <h2 className="hhhh">Capture Caption </h2>
      <p class='description'>You're Given by the coding and decoding or Logical Reasoning</p>
      <div class='tokenInfo'>
        <div class="price">
          <ins>◘</ins>
          <p>Acess America</p>
        </div>
        <div class="duration">
          <ins>◷</ins>
          <p>(28.3.25) 1 PM</p>
        </div>
      </div>
      <hr />
      <div class='creator'>
        <div class='wrapper'>
          <img src={png} alt="Creator" />
        </div>
        <a href='https://forms.gle/TFzXGDGaadEzmvLLA' target='_blank'><button  className="rb">Register</button></a>
      </div>
    </div>
  </div>
  </div>
  {/* endd */}
  <div className="wrap">
  <div class="nft">
    <div class='main'>
      <img class='tokenImage' src='./src/theta/asset/tamilliterature.avif' alt="NFT" />
      <h2 className="hhhh">Eludhukol Monai</h2>
      <p class='description'>You're given with all the stuffs in literature quiz</p>
      <div class='tokenInfo'>
        <div class="price">
          <ins>◘</ins>
          <p>Wquilibiria</p>
        </div>
        <div class="duration">
          <ins>◷</ins>
          <p>(28.3.24) 2 PM</p>
        </div>
      </div>
      <hr />
      <div class='creator'>
        <div class='wrapper'>
          <img src={png} alt="Creator" />
        </div>
        <a href='https://forms.gle/TFzXGDGaadEzmvLLA' target='_blank'><button  className="rb">Register</button></a>
      </div>
    </div>
  </div>
   
  <div class="nft">
    <div class='main'>
      <img class='tokenImage' src='./src/theta/asset/thirukural.jpeg' alt="NFT" />
      <h2 className="hhhh">Avai Anjamai
      </h2>
      <p class='description'>Need to convert the tamil Thiriukural into English </p>
      <div class='tokenInfo'>
        <div class="price">
          <ins>◘</ins>
          <p>Equilibiria</p>
        </div>
        <div class="duration">
          <ins>◷</ins>
          <p>(28.3.24) 3 PM</p>
        </div>
      </div>
      <hr />
      <div class='creator'>
        <div class='wrapper'>
          <img src={png} alt="Creator" />
        </div>
        <a href='https://forms.gle/TFzXGDGaadEzmvLLA' target='_blank'><button  className="rb">Register</button></a>
      </div>
    </div>
  </div>
  <div class="nft">
    <div class='main'>
      <img class='tokenImage' src='./src/theta/asset/bytebank.avif' alt="NFT" />
      <h2 className="hhhh">Bank Bytes </h2>
      <p class='description'>Money and Investment related quiz prices based on performance</p>
      <div class='tokenInfo'>
        <div class="price">
          <ins>◘</ins>
          <p>Electronica</p>
        </div>
        <div class="duration">
          <ins>◷</ins>
          <p>(29.3.24) 11 PM</p>
        </div>
      </div>
      <hr />
      <div class='creator'>
        <div class='wrapper'>
          <img src={png} alt="Creator" />
        </div>
        <a href='https://forms.gle/TFzXGDGaadEzmvLLA' target='_blank'><button  className="rb">Register</button></a>
      </div>
    </div>
  </div>
  </div>
  <div className="wrap">
  <div class="nft">
    <div class='main'>
      <img class='tokenImage' src='./src/theta/asset/wonderfest.avif' alt="NFT" />
      <h2 className="hhhh">Wonder Fest</h2>
      <p class='description'>Game is any topic related JAM for a Team</p>
      <div class='tokenInfo'>
        <div class="price">
          <ins>◘</ins>
          <p>Mathematicia</p>
        </div>
        <div class="duration">
          <ins>◷</ins>
          <p>(29.3.24) 12 PM</p>
        </div>
      </div>
      <hr />
      <div class='creator'>
        <div class='wrapper'>
          <img src={png} alt="Creator" />
        </div>
        <a href='https://forms.gle/TFzXGDGaadEzmvLLA' target='_blank'><button  className="rb">Register</button></a>
      </div>
    </div>
  </div>
   
  <div class="nft">
    <div class='main'>
      <img class='tokenImage' src='./src/theta/asset/comeandenough.avif' alt="NFT" />
      <h2 className="hhhh">Ninga Vantha pothum</h2>
      <p class='description'>In this Game you have to came nothing to do as a task</p>
      <div class='tokenInfo'>
        <div class="price">
          <ins>◘</ins>
          <p>Equilibiria</p>
        </div>
        <div class="duration">
          <ins>◷</ins>
          <p>(29.3.24) 1 PM</p>
        </div>
      </div>
      <hr />
      <div class='creator'>
        <div class='wrapper'>
          <img src={png} alt="Creator" />
        </div>
        <a href='https://forms.gle/TFzXGDGaadEzmvLLA' target='_blank'><button  className="rb">Register</button></a>
      </div>
    </div>
  </div>
  <div class="nft">
    <div class='main'>
      <img class='tokenImage' src='./src/theta/asset/synapsesculptors.avif' alt="NFT" />
      <h2 className="hhhh">Synapse Sculptors</h2>
      <p class='description'>You do the critical Thinking and solve the problems</p>
      <div class='tokenInfo'>
        <div class="price">
          <ins>◘</ins>
          <p>Biogenisis</p>
        </div>
        <div class="duration">
          <ins>◷</ins>
          <p>(29.3.24) 3 PM</p>
        </div>
      </div>
      <hr />
      <div class='creator'>
        <div class='wrapper'>
          <img src={png} alt="Creator" />
        </div>
        <a href='https://forms.gle/TFzXGDGaadEzmvLLA' target='_blank'><button  className="rb">Register</button></a>
      </div>
    </div>
  </div>
  </div>
  <div className="wrap">
  <div class="nft">
    <div class='main'>
      <img class='tokenImage' src='./src/theta/asset/missionimmpossible.avif' alt="NFT" />
      <h2 className="hhhh">Mission Impossible</h2>
      <p class='description'>Completeing the Impossible Problem and find Solution</p>
      <div class='tokenInfo'>
        <div class="price">
          <ins>◘</ins>
          <p>Informatica</p>
        </div>
        <div class="duration">
          <ins>◷</ins>
          <p>(29.3.24) 2 PM</p>
        </div>
      </div>
      <hr />
      <div class='creator'>
        <div class='wrapper'>
          <img src={png} alt="Creator" />
        </div>
        <a href='https://forms.gle/TFzXGDGaadEzmvLLA' target='_blank'><button  className="rb">Register</button></a>
      </div>
    </div>
  </div>
   
  <div class="nft">
    <div class='main'>
      <img class='tokenImage' src='./src/theta/asset/sharpmind.avif' alt="NFT" />
      <h2 className="hhhh">Sharp Mind</h2>
      <p class='description'>Solve the Problem with your out of box thinking skill</p>
      <div class='tokenInfo'>
        <div class="price">
          <ins>◘</ins>
          <p>startegia</p>
        </div>
        <div class="duration">
          <ins>◷</ins>
          <p>(29.3.24) 3 PM</p>
        </div>
      </div>
      <hr />
      <div class='creator'>
        <div class='wrapper'>
          <img src={png} alt="Creator" />
        </div>
        <a href='https://forms.gle/TFzXGDGaadEzmvLLA' target='_blank'><button  className="rb">Register</button></a>
      </div>
    </div>
  </div>
  <div class="nft">
    <div class='main'>
      <img class='tokenImage' src='./src/theta/asset/squidgame.jpeg' alt="NFT" />
      <h2 className="hhhh">Squid Game</h2>
      <p class='description'>Elimination Rounds like Squid Game(Technical questions)</p>
      <div class='tokenInfo'>
        <div class="price">
          <ins>◘</ins>
          <p>Optica</p>
        </div>
        <div class="duration">
          <ins>◷</ins>
          <p>(29.3.24) 4 PM</p>
        </div>
      </div>
      <hr />
      <div class='creator'>
        <div class='wrapper'>
          <img src={png} alt="Creator" />
        </div>
        <a href='https://forms.gle/TFzXGDGaadEzmvLLA' target='_blank'><button  className="rb">Register</button></a>
      </div>
    </div>
  </div>
  </div>
  <div className="wrap">
  <div class="nft">
    <div class='main'>
      <img class='tokenImage' src='./src/theta/asset/robosaga.avif'alt="NFT" />
      <h2 className="hhhh">Robo Swag</h2>
      <p class='description'>Robotics related assembling or projects may have to done</p>
      <div class='tokenInfo'>
        <div class="price">
          <ins>◘</ins>
          <p>Robotics</p>
        </div>
        <div class="duration">
          <ins>◷</ins>
          <p>(29.3.24) 4 PM</p>
        </div>
      </div>
      <hr />
      <div class='creator'>
        <div class='wrapper'>
          <img src={png} alt="Creator" />
        </div>
        <a href='https://forms.gle/TFzXGDGaadEzmvLLA' target='_blank'><button  className="rb">Register</button></a>
      </div>
    </div>
  </div>
   
  <div class="nft">
    <div class='main'>
      <img class='tokenImage' src='./src/theta/asset/bigbang.avif' alt="NFT" />
      <h2 className="hhhh">Big Bang</h2>
      <p class='description'>Completly refer the given problem and get up with solution</p>
      <div class='tokenInfo'>
        <div class="price">
          <ins>◘</ins>
          <p>Robotics</p>
        </div>
        <div class="duration">
          <ins>◷</ins>
          <p>(29.3.24) 4 PM</p>
        </div>
      </div>
      <hr />
      <div class='creator'>
        <div class='wrapper'>
          <img src='./src/theta/asset/thetalogo.png' alt="Creator" />
        </div>
        <a href='https://forms.gle/TFzXGDGaadEzmvLLA' target='_blank'><button  className="rb">Register</button></a>
      </div>
    </div>
  </div>
  <div class="nft">
    <div class='main'>
      <img class='tokenImage' src='./src/theta/asset/technicaltalk.avif' alt="NFT" />
      <h2 className="hhhh">Technical Talk</h2>
      <p class='description'>Your Team will be debate some technical concerns</p>
      <div class='tokenInfo'>
        <div class="price">
          <ins>◘</ins>
          <p>Electronica</p>
        </div>
        <div class="duration">
          <ins>◷</ins>
          <p>(29.3.24) 5 PM</p>
        </div>
      </div>
      <hr />
      <div class='creator'>
        <div class='wrapper'>
          <img src='./src/theta/asset/thetalogo.png' alt="Creator" />
        </div>
        <a href='https://forms.gle/TFzXGDGaadEzmvLLA' target='_blank'><button  className="rb">Register</button></a>
      </div>
    </div>
  </div>
  </div>
  <div className="wrap">
  <div class="nft">
    <div class='main'>
      <img class='tokenImage' src='./src/theta/asset/logicladder.avif'alt="NFT" />
      <h2 className="hhhh">Logic Ladder</h2>
      <p class='description'>You may be asked with many logical reasoning</p>
      <div class='tokenInfo'>
        <div class="price">
          <ins>◘</ins>
          <p>Informatica</p>
        </div>
        <div class="duration">
          <ins>◷</ins>
          <p>(29.3.25) 5 PM</p>
        </div>
      </div>
      <hr />
      <div class='creator'>
        <div class='wrapper'>
          <img src='./src/theta/asset/thetalogo.png' alt="Creator" />
        </div>
        <a href='https://forms.gle/TFzXGDGaadEzmvLLA' target='_blank'><button  className="rb">Register</button></a>
      </div>
    </div>
  </div>
   
  <div class="nft">
    <div class='main'>
      <img class='tokenImage' src='./src/theta/asset/funisland.avif' alt="NFT" />
      <h2 className="hhhh">Fun Island</h2>
      <p class='description'>This game will be very fun among the teams</p>
      <div class='tokenInfo'>
        <div class="price">
          <ins>◘</ins>
          <p>Mathematica</p>
        </div>
        <div class="duration">
          <ins>◷</ins>
          <p>(29.3.25) 5 PM</p>
        </div>
      </div>
      <hr />
      <div class='creator'>
        <div class='wrapper'>
          <img src='./src/theta/asset/thetalogo.png' alt="Creator" />
        </div>
        <a href='https://forms.gle/TFzXGDGaadEzmvLLA' target='_blank'><button  className="rb">Register</button></a>
      </div>
    </div>
  </div>
  <div class="nft">
    <div class='main'>
      <img class='tokenImage' src='./src/theta/asset/modelexhibit.avif' alt="NFT" />
      <h2 className="hhhh">Model Exhibit</h2>
      <p class='description'>Model Exhibition for the Models and students</p>
      <div class='tokenInfo'>
        <div class="price">
          <ins>◘</ins>
          <p>Biogenesis</p>
        </div>
        <div class="duration">
          <ins>◷</ins>
          <p>(29.3.25) 6 PM</p>
        </div>
      </div>
      <hr />
      <div class='creator'>
        <div class='wrapper'>
          <img src='./src/theta/asset/thetalogo.png' alt="Creator" />
        </div>
        <a href='https://forms.gle/TFzXGDGaadEzmvLLA' target='_blank'><button  className="rb">Register</button></a>
      </div>
    </div>
  </div>
  </div>
  <div className="wrap">
  <div class="nft">
    <div class='main'>
      <img class='tokenImage' src='./src/theta/asset/kalavarm.avif' alt="NFT" />
      <h2 className="hhhh">Kalvhi Bhoomi</h2>
      <p class='description'>Quesions from the general knowledge</p>
      <div class='tokenInfo'>
        <div class="price">
          <ins>◘</ins>
          <p>Equilibiria</p>
        </div>
        <div class="duration">
          <ins>◷</ins>
          <p>(29.3.25) 6 PM</p>
        </div>
      </div>
      <hr />
      <div class='creator'>
        <div class='wrapper'>
          <img src='./src/theta/asset/thetalogo.png' alt="Creator" />
        </div>
        <a href='https://forms.gle/TFzXGDGaadEzmvLLA' target='_blank'><button  className="rb">Register</button></a>
      </div>
    </div>
  </div>
   
  <div class="nft">
    <div class='main'>
      <img class='tokenImage' src='./src/theta/asset/cognitive.avif' alt="NFT" />
      <h2 className="hhhh">Cognitive Cracking</h2>
      <p class='description'>Event may be solving by answering the logical questions</p>
      <div class='tokenInfo'>
        <div class="price">
          <ins>◘</ins>
          <p>Optica</p>
        </div>
        <div class="duration">
          <ins>◷</ins>
          <p>(29.3.25) 2 PM</p>
        </div>
      </div>
      <hr />
      <div class='creator'>
        <div class='wrapper'>
          <img src='./src/theta/asset/thetalogo.png' alt="Creator" />
        </div>
        <a href='https://forms.gle/TFzXGDGaadEzmvLLA' target='_blank'><button  className="rb">Register</button></a>
      </div>
    </div>
  </div>
  <div class="nft">
    <div class='main'>
      <img class='tokenImage' src='./src/theta/asset/ideaverse.avif' alt="NFT" />
      <h2 className="hhhh">Idea Verse</h2>
      <p class='description'>You may give your team idea for a particular problem</p>
      <div class='tokenInfo'>
        <div class="price">
          <ins>◘</ins>
          <p>Informatica</p>
        </div>
        <div class="duration">
          <ins>◷</ins>
          <p>(29.3.25) 4 PM</p>
        </div>
      </div>
      <hr />
      <div class='creator'>
        <div class='wrapper'>
          <img src='./src/theta/asset/thetalogo.png' alt="Creator" />
        </div>
        <a href='https://forms.gle/TFzXGDGaadEzmvLLA' target='_blank'><button  className="rb">Register</button></a>
      </div>
    </div>
  </div>
  </div>
  <div className="wrap">

  <div class="nft">
    <div class='main'>
      <img class='tokenImage' src='./src/theta/asset/raodies.avif' alt="NFT" />
      <h2 className='hhhh'>Roadies</h2>
      <p class='description'>Identifing routes related questions (directions)</p>
      <div class='tokenInfo'>
        <div class="price">
          <ins>◘</ins>
          <p>Startegia</p>
        </div>
        <div class="duration">
          <ins>◷</ins>
          <p>(28.3.24) 11 PM</p>
        </div>
      </div>
      <hr />
      <div class='creator'>
        <div class='wrapper'>
          <img src={png} alt="Creator" />
        </div>
        <a href='https://forms.gle/TFzXGDGaadEzmvLLA' target='_blank'><button  className="rb">Register</button></a>
      </div>
    </div>
  </div>
   
  <div class="nft">
    <div class='main'>
      <img class='tokenImage' src='./src/theta/asset/escaperoom.avif' alt="NFT" />
      <h2 className='hhhh'>Escape Room</h2>
      <p class='description'>Identifying task reach among the destination</p>
      <div class='tokenInfo'>
        <div class="price">
          <ins>◘</ins>
          <p>Electronica</p>
        </div>
        <div class="duration">
          <ins>◷</ins>
          <p>(28.3.24) 12 PM</p>
        </div>
      </div>
      <hr />
      <div class='creator'>
        <div class='wrapper'>
          <img src={png} alt="Creator" />
        </div>
        <a href='https://forms.gle/TFzXGDGaadEzmvLLA' target='_blank'><button  className="rb">Register</button></a>
      </div>
    </div>
  </div>
  <div class="nft">
    <div class='main'>
      <img class='tokenImage' src='./src/theta/asset/mathpirates.avif' alt="NFT" />
      <h2 className="hhhh">Math PI Rates</h2>
      <p class='description'>You're Given by the coding and decoding or Logical Reasoning</p>
      <div class='tokenInfo'>
        <div class="price">
          <ins>◘</ins>
          <p>Mathematica</p>
        </div>
        <div class="duration">
          <ins>◷</ins>
          <p>(28.3.25) 1 PM</p>
        </div>
      </div>
      <hr />
      <div class='creator'>
        <div class='wrapper'>
          <img src={png} alt="Creator" />
        </div>
        <a href='https://forms.gle/TFzXGDGaadEzmvLLA' target='_blank'><button  className="rb">Register</button></a>
      </div>
    </div>
  </div>
  </div>
  <Footer/>
  </>
  )
}

export default EventCard