import React from "react";
import "./style.css";
import userPlus from "../../assets/svgs/user-plus.svg";
import mapPin from "../../assets/svgs/map-pin.svg";
import careerPoint from "../../assets/svgs/Frame 7030.svg";
import arrow from "../../assets/svgs/arrow-right.svg";
import imag from "../../assets/images/image 4.png";

const Frame = () => {
  return (
    <div className="main-frame">
      <div className="text-wrapper-3">Company</div>
      <div className="text-wrapper-4">Newsroom</div>
      <div className="about-US">About Us</div>
      <p className="the-people-behind">
        The people behind ShipUp and the story of <br />
        shared success.
      </p>
      <p className="collbration-with">
        Collbration with ShipUp and drive mutual
        <br />
        growth
      </p>
      <div className="text-wrapper-5">Join the ShipUp</div>
      <div className="text-wrapper-6">News and awards</div>
      <div className="text-wrapper-7">Learn More</div>
      <div className="text-wrapper-8">Prtner With Us</div>
      <div className="text-wrapper-9">Career</div>
      <img className="img" alt="Frame" src={userPlus} />
      <img className="frame-4" alt="Frame" src={mapPin} />
      <img className="frame-5" alt="Frame" src={careerPoint} />
      <img className="image" alt="Image" src={imag} />
      <img className="arrow-right" alt="Arrow right" src={arrow} />
    </div>
  );
};

export default Frame;
