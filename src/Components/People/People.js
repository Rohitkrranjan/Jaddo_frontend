import React from "react";
import "./People.css";
import mike from "../assets/mike.jpg";

function People() {
  return (
    <div className="about">
      <div className="about-left">
        <p>TESTIMONIALS</p>
        <h2>
          What people say <br /> about Us.
        </h2>
      </div>

        <div className="about-right">
          <img className="mike-image" src={mike} alt="" />
             <p>
               "on the windows talking painted pasfure yet its <br /> express parties
                use. Sure last upon he same as <br /> knew next Of believed or
                diverted no"
            </p>

           <p>
               Mike taylor <br /> Punjab India
           </p>
        
        </div>
    </div>
  );
}

export default People;
