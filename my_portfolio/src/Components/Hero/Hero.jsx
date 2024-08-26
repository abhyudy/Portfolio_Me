import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";

const Hero = () => {
  return (
    <div className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Abhyudya Singh Ujala,</span> frontend developer based in
        India.
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
        illum iure provident minus, nesciunt itaque saepe velit quia sit labore
        rem fuga perferendis nam incidunt esse dolor, vitae eos facere!
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect Me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
