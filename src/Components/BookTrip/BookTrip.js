import React from "react";
import "./BookTrip.css";
import trip from '../assets/trip.jpg'

function BookTrip() {
  return (
    <div className="Book-trip-main">
      <div className="book-tirp-left">
        <div className="book-trip-left-head">
          <p>Easy and Fast</p>
          <h1>
            Book your next trip <br /> in 3 east steps
          </h1>
        </div>

        <div className="book-trip-left-body">
          <div>
            <p className="book-trip-left-body-para-top">choose</p>
            <p>
              Lorem ipsum dolor sit amet , consectetur <br /> adipiscing elit.
              Urna, tortor tempus.
            </p>
          </div>

          <div>
            <p className="book-trip-left-body-para-top">Make Payment</p>
            <p>
              Lorem ipsum dolor sit amet , consectetur <br /> adipiscing elit.
              Urna, tortor tempus.
            </p>
          </div>

          <div>
            <p className="book-trip-left-body-para-top">Reach Airport on Selected Date</p>
            <p>
              Lorem ipsum dolor sit amet , consectetur <br /> adipiscing elit.
              Urna, tortor tempus.
            </p>
          </div>
        </div>
    </div>

      <div className="book-trip-right-body">
        <img src={trip} alt="trip"/>
        <p className="book-trip-right-body-para-top">Trip to Greece</p>
        <p>14-29  <span style={{paddingLeft:'45px'}}> | by Robbin </span></p>
       </div>

    </div>
  );
}

export default BookTrip;
