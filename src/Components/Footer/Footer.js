import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa6";
import play_store from "../assets/googlePlay.jpeg";
import app_store from "../assets/AppStore.png";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer-heading">
          <h1>Jadoo.</h1>
          <p>
            Book your trip in minute , get full <br /> Controll for much longer.
          </p>
        </div>
        <div className="footer-social-section">
          <h3>Company</h3>
          <ul className="footer-links">
            <li>About </li>
            <li>Careers</li>
            <li>Mobile</li>
          </ul>
        </div>

        <div className="footer-social-section">
          <h3>Contact</h3>

          <ul className="footer-links">
            <li>Help/FAQ</li>
            <li>Press</li>
            <li>Affilates</li>
          </ul>
        </div>

        <div className="footer-social-section">
          <h4>More</h4>
          <ul className="footer-links">
            <li>Airlinefees</li>
            <li>Airline</li>
            <li>Low fare tips</li>
          </ul>
        </div>

        {/* <div className="footer-social-section"> */}
        <div className="footer-social-icon">
          <div className="footer-icon-container">
            <FaFacebookF />
          </div>

          <div className="footer-icon-container">{<CiInstagram />}</div>

          <div className="footer-icon-container">
            <FaTwitter />
          </div>
        </div>
      </div>
      {/* </div> */}

      <div className="footer-copyright">
        <p> All rights reserved@jadoo.co</p>
      </div>
    </footer>
  );
}

export default Footer;
