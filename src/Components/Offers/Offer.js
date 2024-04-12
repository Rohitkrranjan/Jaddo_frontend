import React from 'react'
import './Offer.css'
import flight from '../assets/flight.png'
import mic from '../assets/mic.png'
import setting from '../assets/setting.png'
import weather from '../assets/weather.png'

function Offer() {
  return (
    <div className='offer'>
      <div className='offer-top'>
         <p>CATEGORY</p>
         <h2>We Offer Best</h2>
      </div>

      <div className='offer-main-content'>
         <div className='offer-content' id='content1'>
            <img src={weather} alt='' style={{height:'100px'}}/>
            <p className='para-top'>Calculated Weather</p>
            <p className='para-bottom'>Built Wicket longer <br/> admire do barton <br/> vanity itself do in it.</p>
         </div>
 
         <div className='offer-content-flight' id='content2'>
            <img src={flight} alt='' style={{height:'100px'}}/>
            <p className='flight-top'>Best Flights</p>
            <p className='flight-bottom'>Engrossed listening <br/> Park gate sell they <br/> west hard for the.</p>
         </div>

         <div className='offer-content' id='content3'>
            <img src={mic} alt='' style={{height:'100px'}}/>
            <p className='flight-top'>Local Events</p>
            <p className='flight-bottom'>Barton vanity itself do <br/> in it. Preferd to men it <br/>engrossed listening.</p>
         </div>

         <div className='offer-content' id='content4'>
            <img src={setting} alt='' style={{height:'100px'}}/>
            <p className='flight-top'>Customization</p>
            <p className='flight-bottom'>We deliver outsourced <br/> aviation services for <br/> military customers.</p>
         </div>

      </div>
    </div>
  )
}

export default Offer