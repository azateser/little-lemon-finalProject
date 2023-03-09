import React from "react";

import "./Footer.scss";

import Logo from "../../assets/images/logos/logoDefault.png";
import Arrow from "../../assets/icons/arrow.svg";

import facebook from "../../assets/icons/footer/facebook.svg";
import instagram from "../../assets/icons/footer/instagram.svg";
import twitter from "../../assets/icons/footer/twitter.svg";
import youtube from "../../assets/icons/footer/youtube.svg";

import { footerMenu } from "../../data";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="content">
          <div className="newsletter">
            <h2>Subscribe Our Newsletter</h2>

            <div className="subscribe">
              <input type="text" placeholder="Enter your email" />
              <button>
                <img src={Arrow} alt="Arrow" />
              </button>
            </div>

            <div className="social">
              <button>
                <img src={facebook} alt="facebook" />
              </button>
              <button>
                <img src={instagram} alt="instagram" />
              </button>
              <button>
                <img src={twitter} alt="twitter" />
              </button>
              <button>
                <img src={youtube} alt="youtube" />
              </button>
            </div>
          </div>
          <div className="menu">
            {footerMenu.map((item, index) => (
              <div className="menu-item" key={index}>
                <h3>{item.title}</h3>

                <ul>
                  {item.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
