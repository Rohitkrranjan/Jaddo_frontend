import React from "react";
import "./Hero.css";
import img from '../assets/photo.png'
import { FaCirclePlay } from "react-icons/fa6";

function Hero() {
  return (
    <div className="hero">
     {/* hero left section starts here */}
       <div className="hero-left">
              <h3>BEST DESTINATIONS AROUND THE WORLD</h3>

           <div className="hero-hand-icon">
                <h3>Travel,enjoy <br/> and live a <br/> new</h3>  
                <p>Built wicket longer admire do barton vanity itself do in it. <br/>Preferred to sportmen it engrossed listening. Park gate <br/> sell they west hard for the. </p>      
            </div>
               
       
        <div className="hero-latest-btn">
               <button className="find-btn">Find out</button>
               <button className="play-btn"><FaCirclePlay/> Play Demo</button>
        </div>
      </div>
      {/* hero left section ends here */}
      
      {/* hero right section starts here */}
      <div className="hero-right">
        <img src={img} alt="hello" />

      </div>
    </div>
  );
}

export default Hero;
