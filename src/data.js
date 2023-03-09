import item1 from "./assets/images/slider/items/item1.png";
import item1Sub from "./assets/images/slider/items/item1.1.png";
import item2 from "./assets/images/slider/items/item2.png";
import item2Sub from "./assets/images/slider/items/item2.1.png";
import item3 from "./assets/images/slider/items/item3.png";
import item3Sub from "./assets/images/slider/items/item3.1.png";
import item4 from "./assets/images/slider/items/item4.png";
import item4Sub from "./assets/images/slider/items/item4.1.png";
import item5 from "./assets/images/slider/items/item5.png";
import item5Sub from "./assets/images/slider/items/item5.1.png";

import pasta from "./assets/images/popular/items/pasta.png";
import burger from "./assets/images/popular/items/burger.png";
import chickenShawarma from "./assets/images/popular/items/chicken-shawarma.png";
import frenchFires from "./assets/images/popular/items/french-fires.png";
import fish from "./assets/images/popular/items/fish.png";

export const slider = [
  {
    id: 0,
    title: "Salad",
    img: item1,
    subImg: item1Sub,
  },
  {
    id: 1,
    title: "Pasta",
    img: item2,
    subImg: item2Sub,
  },
  {
    id: 2,
    title: "Drinks",
    img: item3,
    subImg: item3Sub,
  },
  {
    id: 3,
    title: "Breakfast",
    img: item4,
    subImg: item4Sub,
  },
  {
    id: 4,
    title: "Meat",
    img: item5,
    subImg: item5Sub,
  },
];

export const popular = [
  {
    id: 0,
    title: "Pasta",
    img: pasta,
    price: 12.99,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    star: 4,
  },
  {
    id: 1,
    title: "French Fires",
    img: frenchFires,
    price: 20.59,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    star: 5,
  },
  {
    id: 2,
    title: "Chicken Shawarma",
    img: chickenShawarma,
    price: 5.99,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    star: 4,
  },
  {
    id: 3,
    title: "Fis Curry",
    img: fish,
    price: 22.99,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    star: 3,
  },
  {
    id: 4,
    title: "Burger",
    img: burger,
    price: 10.99,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    star: 4,
  },
];

export const menuCategories = [
  {
    id: 0,
    name: "Turkish",
  },
  {
    id: 1,
    name: "Maxican",
  },
  {
    id: 2,
    name: "Italian",
  },
  {
    id: 3,
    name: "Special Foods",
  },
  {
    id: 4,
    name: "Drinks",
  },
  {
    id: 5,
    name: "Launch",
  },
];

export const footerMenu = [
  {
    id: 0,
    title: "Service",
    items: [
      "Online Order",
      "Pre-Reservation",
      "7/24 Services",
      "Foodie Place",
      "Super Chefs",
    ],
  },
  {
    id: 1,
    title: "Quick Links",
    items: ["Menu", "Reviews", "Blogs", "Reserve Table", "Order Foods"],
  },
  {
    id: 2,
    title: "About",
    items: ["Our Story", "Benifits", "Career", "Our Cheffs"],
  },
  {
    id: 3,
    title: "Help",
    items: ["Contact", "Support", "FAQ"],
  },
];
