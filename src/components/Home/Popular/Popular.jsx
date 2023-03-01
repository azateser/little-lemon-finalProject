import { useEffect, useState } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./Popular.scss";

import arrow from "../../../assets/icons/arrow.svg";
import star from "../../../assets/icons/star.svg";

import { popular } from "../../../data";

import {responsive } from "./constants"

const Popular = () => {
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 664) {
      setMobileView(true);
    } else {
      setMobileView(false);
    }
  }, []);

  return (
    <div className="popular">
      <div className="container">
        <div className="head">
          <h2>Popular Dishes</h2>

          <div className="navigation">
            <button className="prev" onClick={() => Carousel?.previous()}>
              <img src={arrow} alt="prev" />
            </button>
            <button className="next" onClick={() => Carousel?.next()}>
              <img src={arrow} alt="next" />
            </button>
          </div>
        </div>

        <div className="items">
          <Carousel
            ref={(el) => (Carousel = el)}
            centerMode={mobileView ? true : false}
            arrows={false}
            responsive={responsive}
          >
            {popular.map((item) => (
              <div key={item.id} className="item">
                <div className="img">
                  <img src={item.img} alt="" />
                </div>
                <div className="info">
                  <h3>{item.title}</h3>
                  <div className="stars">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                  </div>
                  <p>{item.description}</p>
                </div>
                <div className="footer">
                  <span className="price">${item.price}</span>
                  <button>Add To Cart</button>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Popular;
