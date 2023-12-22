import React, { useState } from "react";
import { Header } from "../Header/Header";
import "./style.css";
import truck from "../../assets/svgs/mdi_truck-fast-outline.svg";
import plane from "../../assets/svgs/bx_bxs-plane-take-off.svg";
import image from "../../assets/images/91fa59e6781adbdced82e349bb595d99 1.png";
import video from "../../assets/svgs/Video.svg";
import ellipse from "../../assets/images/ellipse-12.png";
import Footer from "../Footer/Footer";
import LocationFrame from "./LocationFrame";
import DemoBtnModal from "./DemoBtnModal";

export const LandingPage = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className="landing-page">
      <div className="div-2">
        <div className="overlap">
          <div className="group">
            <div className="overlap-group">
              <img className="ellipse" alt="Ellipse" src={ellipse} />
              <div className="bx-bxs-plane-take-wrapper">
                <img className="img-2" alt="Bx bxs plane take" src={plane} />
              </div>
              <div className="mdi-truck-fast-wrapper">
                <img className="img-2" alt="Mdi truck fast" src={truck} />
              </div>
            </div>
          </div>
          <div className="overlap-wrapper">
            <div className="overlap-2">
              <img className="img-3" alt="Img" src={image} />
              <div className="frame-6">
                <div className="frame-7">
                  <p className="quick-reliable">
                    <span className="text-wrapper-10">
                      Quick &amp; Reliable{" "}
                    </span>
                    <span className="text-wrapper-11">Warehousing </span>
                    <span className="text-wrapper-11">and</span>
                    <span className="text-wrapper-11"> logistics </span>
                    <span className="text-wrapper-10">solution</span>
                    <span className="text-wrapper-12">.</span>
                  </p>
                  <p className="p">
                    ShipUp delivers an unparalleled customer service through
                    dedicated customer teams, engaged people working in an agile
                    culture, and a global footprint
                  </p>
                </div>
                <div className="frame-8">
                  <div className="div-wrapper">
                    <div className="join-now-2">Join Now</div>
                  </div>
                  <div className="div-3">
                    <div className="iconly-bold-video-wrapper">
                      <div className="iconly-bold-video">
                        <div className="video">
                          <img src={video} />
                        </div>
                      </div>
                    </div>
                    <div className="play-demo" onClick={openModal}>
                      Play Demo
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Header className="header-instance" property1="default" />
        </div>
        <LocationFrame />
        <Footer />
        {showModal && (
          <DemoBtnModal
            onClose={closeModal}
            videoId="bMknfKXIFA8"
            showModal={showModal}
          />
        )}
      </div>
    </div>
  );
};
