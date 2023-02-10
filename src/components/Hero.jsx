import React from "react";
import logo from "../assets/logo.png";
import "./Hero.css";
import pizza from "../assets/pizza.png";
import vector from "../assets/vector.png";
function Hero() {
  return (
    <div className="hero-body">
      <span className="logo">
        <img src={logo} alt="" />
      </span>
      <div className="pizza">
        <img src={vector} className="overlay" />
        <img src={pizza} />
      </div>

      <div>
        <h2 className="tagline">
          Discover the
          <br />
          <text style={{ color: "red" }}>Best</text> Food <br />
          and Drinks
        </h2>
        <p className="details">
          Naturally made Healthcare Products for the <br /> better care &
          support of your body.
        </p>
        <button className="btn">
          <p className="btn-text">Explore Now!</p>
        </button>
      </div>
    </div>
  );
}

export default Hero;
