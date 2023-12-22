import React from "react";
import "./style.css";
import icon from "../../assets/svgs/Exodus Landing Page.svg";
import icon1 from "../../assets/svgs/Exodus Landing Page (1).svg";
import icon2 from "../../assets/svgs/Exodus Landing Page (2).svg";
import icon3 from "../../assets/svgs/Exodus Landing Page (3).svg";

function Footer() {
  return (
    <div className="frame-14">
      <div className="frame-15">
        <div className="frame-16">
          <div className="frame-7">
            <p className="ship-up-2">
              <span className="text-wrapper-15">Ship</span>
              <span className="text-wrapper-16">Up</span>
            </p>
            <p className="text-wrapper-17">
              ShipUp delivers an unparalleled customer service through dedicated
              customer teams, engaged people working in an agile culture, and a
              global footprint
            </p>
          </div>
          <div className="frame-7">
            <div className="text-wrapper-18">Explore</div>
            <div className="frame-17">
              <div className="text-wrapper-19">About Us</div>
              <div className="text-wrapper-20">Our Warehoueses</div>
              <div className="text-wrapper-20">Blog</div>
              <div className="text-wrapper-20">News and Media</div>
            </div>
          </div>
          <div className="group-3">
            <div className="text-wrapper-21">Legal</div>
            <div className="group-4">
              <div className="text-wrapper-22">Terms</div>
              <div className="text-wrapper-23">Privacy</div>
            </div>
          </div>
          <div className="frame-7">
            <div className="text-wrapper-18">Social Media</div>
            <div className="div-3">
              <div className="exodus-landing-page">
                <div className="exodus-landing-page-wrapper">
                  <img
                    className="exodus-landing-page-2"
                    alt="Exodus landing page"
                    src={icon}
                  />
                </div>
              </div>
              <div className="exodus-landing-page">
                <div className="exodus-landing-page-wrapper">
                  <img
                    className="exodus-landing-page-3"
                    alt="Exodus landing page"
                    src={icon1}
                  />
                </div>
              </div>
              <div className="exodus-landing-page">
                <div className="exodus-landing-page-wrapper">
                  <img
                    className="exodus-landing-page-4"
                    alt="Exodus landing page"
                    src={icon2}
                  />
                </div>
              </div>
              <div className="exodus-landing-page">
                <div className="exodus-landing-page-wrapper">
                  <img
                    className="exodus-landing-page-4"
                    alt="Exodus landing page"
                    src={icon3}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-18">
          <img
            className="line"
            alt="Line"
            src="https://c.animaapp.com/rEl4ihRh/img/line-10.svg"
          />
          <p className="shipup-ng">
            <span className="text-wrapper-24">Ship</span>
            <span className="text-wrapper-25">Up</span>
            <span className="text-wrapper-16">.ng</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
