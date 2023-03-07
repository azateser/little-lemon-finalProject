import React from "react";

import "./MobileApp.scss";

import apple from "../../../assets/images/mobileapp/apple.svg";
import playStore from "../../../assets/images/mobileapp/play.svg";

import phone from "../../../assets/images/mobileapp/phone.png";
import sus from "../../../assets/images/mobileapp/sus.png";

const MobileApp = () => {
  return (
    <div className="mobileApp">
      <div className="container">
        <div className="texts">
          <h1>
            Never Feel Hungry! Download Our Mobile App Enjoy Delicious Foods
          </h1>

          <p>
            Make online reservations, read restaurant reviews from diners, and
            earn points towards free meals, OpenTable is a real-time online
            reservation.
          </p>

        <div className="buttons">
          <button className="apple">
            <div className="icon">
              <img src={apple} alt="apple" />
            </div>
            <div className="text">
              <h3>Download on the</h3>
              <h2>App Store</h2>
            </div>
          </button>
          <button className="playStore">
            <div className="icon">
              <img src={playStore} alt="playStore" />
            </div>
            <div className="text">
              <h3>Download on the</h3>
              <h2>App Store</h2>
            </div>
          </button>
        </div>
        </div>

        <img className="phone" src={phone} alt="Phone" />
        <img className="sus" src={sus} alt="sus" />
      </div>
    </div>
  );
};

export default MobileApp;
