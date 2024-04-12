import React from "react";
import "./TopDestination.css";
import Rome from "../assets/Rome.jpeg";
import London from '../assets/Londonn.jpeg'
import Europe from '../assets/Europe.webp'

const Item = () => {
  return (
    <div className="container">
      <div className="top">
        <h5>Top Selling</h5>
        <h2>Top Destinations</h2>
      </div>

      <div className="main-container">
        <div className="card-container" id="card1">
          <div className="image-container">
            <img src={Rome} alt="" />
          </div>
          <div className="card-title">
            <p>Rome Italty</p>
            <p>$5,42k</p>
          </div>
          <div className="card-bottom-para">
            <p> 10 Days Trip</p>
          </div>
        </div>

        <div className="card-container" id="card2">
          <div className="image-container">
            <img src={London} alt="" />
          </div>
          <div className="card-title">
            <p>London UK</p>
            <p>$4.2k</p>
          </div>
          <div className="card-bottom-para">
            <p> 12 Days Trip</p>
          </div>
        </div>

        <div className="card-container" id="card3">
          <div className="image-container">
            <img src={Europe} alt="" />
          </div>
          <div className="card-title">
            <p>Full Europe</p>
            <p>$15k</p>
          </div>
          <div className="card-bottom-para">
            <p> 28 Days Trip</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
