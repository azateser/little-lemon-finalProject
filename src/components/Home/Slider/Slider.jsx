import React, { useState, useEffect } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { slider } from "../../../data";

import "./Slider.scss";

import bgPatter1 from "../../../assets/images/slider/bg-pattern1.svg";
import bgPatter2 from "../../../assets/images/slider/bg-pattern2.svg";
import sliderBg from "../../../assets/images/slider/slider-bg.png";

import heartEye from "../../../assets/images/slider/heart-eye.png";
import searchIcon from "../../../assets/icons/search.svg";
import classNames from "classnames";

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((activeSlide) => (activeSlide + 1) % slider.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <img className="bgPattern1" src={bgPatter1} alt="bgPattern1" />
      <img className="bgPattern2" src={bgPatter2} alt="bgPattern2" />
      <div className="container">
        <div className="texts">
          <h1>
            Discover the unforgettable taste{" "}
            <span>
              <img src={heartEye} alt="" />
            </span>
          </h1>
          <p>
            This is a type of restaurant which typicall serves food and drinks,
            in addition to light refreshment such as baked good or snacks. The
            term comes from the rench word meaning food.
          </p>
          <div className="buttons">
            <button className="button-primary">Explore Food</button>
            <button className="button-tertiary">
              <span>
                <img src={searchIcon} alt="" />
              </span>
              Search
            </button>
          </div>
        </div>

        <div className="slide">
          <AnimatePresence>
            <div className="highlighte-image">
              <motion.img
                key={activeSlide}
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.4 }}
                src={slider[activeSlide].img}
                alt={slider[activeSlide].title}
              />
            </div>
          </AnimatePresence>
          <img className="sliderBg" src={sliderBg} alt="sliderBg"></img>
          <AnimatePresence>
            <motion.img
              key={activeSlide}
              initial={{ translateX: 300, translatey: 220, opacity: 0 }}
              animate={{ translateX: 0, translateY: 0, opacity: 1 }}
              exit={{ translateX: -300, translateY: -220, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="subimg"
              src={slider[activeSlide].subImg}
              alt={slider[activeSlide].title}
            ></motion.img>
          </AnimatePresence>
          <AnimatePresence>
            <div className="items">
              <ul>
                {slider.map((item) => (
                  <li
                    className={classNames({
                      active: item.id === activeSlide,
                    })}
                    key={item.id}
                    onClick={() => setActiveSlide(item.id)}
                  >
                    <motion.img
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 2 }}
                      src={item.img}
                      alt={item.title}
                    />
                    <span>{item.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Slider;
