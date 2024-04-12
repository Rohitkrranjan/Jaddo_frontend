import React from "react";
import "./CompanyLogo.css";
import axon from "../assets/axon.png";
import jeeet from "../assets/jeeet.png";
import qantas from "../assets/qantas.png";
import alit from "../assets/Alit-remove.png";
import expedia from "../assets/expedia.png";

function CompanyLogo() {
  return (
    <div className="company-logo">
      <img src={axon} />
      <img src={jeeet} />
      <img src={expedia} />
      <img src={qantas} />
      <img src={alit} />
    </div>
  );
}

export default CompanyLogo;
