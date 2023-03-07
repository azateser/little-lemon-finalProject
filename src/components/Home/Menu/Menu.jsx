import React from 'react'

import "./Menu.scss"

import {menuCategories, popular} from '../../../data'
import star from "../../../assets/icons/star.svg";

const Menu = () => {
  return (
    <div className='our-menu'>
        <div className="container">
            <div className="title">
                <h1>Our Regular Menu Pack</h1>
                <ul>
                    <li>All</li>
                    {menuCategories.map((item, index) => (
                        <li key={index}>{item.name}</li>
                    ))}
                    <li>More Categories +</li>
                </ul>
            </div>
            <div className="items">
            {popular.map((item) => (
             item.id === 1  ||
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
            {popular.map((item) => (
             item.id === 4  ||
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
            
            </div>
        </div>
    </div>
  )
}

export default Menu