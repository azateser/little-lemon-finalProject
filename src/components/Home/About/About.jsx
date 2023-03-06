import "./About.scss"

import Cheff from "../../../assets/images/about/cheff.png"

import salad from "../../../assets/images/about/salad.png"
import cheese from "../../../assets/images/about/cheese.png"

import allTime from "../../../assets/images/about/icons/724.svg"

const About = () => {
  return (
    <div className="about">
        <div className="container">
            <div className="image">
                <img src={Cheff} alt="cheff" />
                <img className="cheese" src={cheese} alt="cheese" />
                <img className="salad" src={salad} alt="salad" />
            </div>
            <div className="information">
                <h1>We Are More Than Multiple Survice</h1>

                <p>This is a type of restaurant which typicall serves food and drinks, in addition to light refreshment such as baked good or snacks. The term comes from the rench word meaning food.</p>
                    <ul>
                        <li>
                            <img src={allTime} alt="" />
                            <span>Online Order</span>
                        </li>
                        <li>
                            <img src={allTime} alt="" />
                            <span>Online Order</span>
                        </li>
                        <li>
                            <img src={allTime} alt="" />
                            <span>Online Order</span>
                        </li>
                        <li>
                            <img src={allTime} alt="" />
                            <span>Online Order</span>
                        </li>
                        <li>
                            <img src={allTime} alt="" />
                            <span>Online Order</span>
                        </li>
                        <li>
                            <img src={allTime} alt="" />
                            <span>Online Order</span>
                        </li>
                    </ul>

                    <button>About Us</button>
            </div>
        </div>
    </div>
  )
}

export default About