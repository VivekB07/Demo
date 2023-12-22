// import PropTypes from "prop-types";
import React, { useState } from "react";
import chevronDown from "../../assets/svgs/chevron-down.svg";
import "./style.css";
import Frame from "./Frame";

export const Header = ({ property1, className }) => {
  const [isFrameOpen, setIsFrameOpen] = useState(false);

  const toggleFrame = () => {
    setIsFrameOpen(!isFrameOpen);
  };
  
  return (
    <div className={`header ${className} ${property1}`}>
      <div className="frame">
        <p className="ship-up">
          <span className="text-wrapper">Ship</span>
          <span className="span">Up</span>
        </p>
        <div className="div">
          <div className="frame-2">
            <div className="company">Company</div>
            <img
              className="chevron-down"
              alt="Chevron down"
              src={chevronDown}
              onClick={toggleFrame}
            />
          </div>
          <div className="frame-2">
            <div className="text-wrapper-2">Services</div>
            <div className="chevron-down" />
          </div>
          <div className="text-wrapper-2">Solutions</div>
          <div className="text-wrapper-2">Industries</div>
          <div className="text-wrapper-2">Insights</div>
          <div className="text-wrapper-2">News And Media</div>
        </div>
        <div className="div">
          <div className="request-quote-wrapper">
            <div className="request-quote">Request Quote</div>
          </div>
          <div className="join-now-wrapper">
            <div className="join-now">Join Now</div>
          </div>
        </div>
      </div>
      {isFrameOpen && <Frame onClose={toggleFrame} />}
    </div>
  );
};
