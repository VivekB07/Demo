import React from "react";
import location from "../../assets/svgs/Location.svg";
import bag from "../../assets/svgs/Bag 2.svg";

function LocationFrame() {
  return (
    <div className="frame-wrapper">
      <div className="frame-9">
        <div className="overlap-group-wrapper">
          <div className="overlap-group-2">
            <div className="rectangle" />
            <div className="frame-10">
              <div className="frame-11">
                <div className="frame-12">
                  <div className="div-wrapper-2">
                    <div className="location">
                      <img src={location} />
                    </div>
                  </div>
                  <div className="text-wrapper-13">Enter Location</div>
                </div>
              </div>
            </div>
            <div className="frame-13">
              <div className="text-wrapper-14">Origin</div>
            </div>
          </div>
        </div>
        <div className="group-2">
          <div className="overlap-group-2">
            <div className="rectangle-2" />
            <div className="frame-10">
              <div className="frame-11">
                <div className="frame-12">
                  <div className="div-wrapper-2">
                    <div className="location-2">
                      <img src={location} />
                    </div>
                  </div>
                  <div className="text-wrapper-13">Enter Location</div>
                </div>
              </div>
            </div>
            <div className="frame-13">
              <div className="text-wrapper-14">Desitination</div>
            </div>
          </div>
        </div>
        <div className="group-2">
          <div className="overlap-group-2">
            <div className="rectangle-3" />
            <div className="frame-10">
              <div className="frame-11">
                <div className="frame-12">
                  <div className="div-wrapper-2">
                    <div className="bag">
                      <img src={bag} />
                    </div>
                  </div>
                  <div className="text-wrapper-13">Weight (kg)</div>
                </div>
              </div>
            </div>
            <div className="frame-13">
              <div className="weight">Weight</div>
            </div>
          </div>
        </div>
        <div className="check-price-wrapper">
          <div className="check-price">Check Price</div>
        </div>
      </div>
    </div>
  );
}

export default LocationFrame;
