import React from "react";
import logo from "../assets/logo.png";
import "./Footer.css";
import ig from "../assets/ig.png";
import twt from "../assets/twt.png";
import fb from "../assets/fb.png";
const Footer = () => {
  return (
    <>
      <div className="footer"></div>
      <img src={logo} alt="" className="footer-logo" />
      <p className="contact">Contact Us</p>
      <p className="contact-details">
        Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market,
        XYZ-343434
      </p>
      <p className="second">example2020@gmail.com</p>
      <p className="third">(904) 443-0343</p>
      <p className="more">More</p>
      <p className="abs">About Us</p>
      <p className="products">Products</p>
      <p className="career">Career</p>
      <p className="ctus">Contact Us</p>

      <p className="social">Social Links</p>
      <div className="allLinks">
        <img src={ig} alt="" className="ig lg" />
        <img src={twt} alt="" className="twt lg" />
        <img src={fb} alt="" className="fb lg" />
      </div>
      <p className="cp">© 2022 Food Truck Example</p>
    </>
  );
};

export default Footer;
