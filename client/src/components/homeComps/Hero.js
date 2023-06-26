import React from "react";
import Logo from "../../images/Logo.png";

const Hero = () => {
  return (
    <section id="hero">
      <h1 className="hero-title">
        Boost your <br />
        Small Business <br />
        online presence
      </h1>
      {/* <h5 className="hero-text">
        At JustAPPin’, we solve your company’s present day problems with web
        applications of tomorrow. Let us mirror your hardworking and growing
        business with a beautiful and adequate Website.
      </h5> */}
      <h5 className="hero-text">
        Our experienced team specializes in creating affordable, high-quality
        websites tailored to meet the unique needs of small businesses. Drive
        growth, attract customers, and establish credibility with a
        professionally designed website. Contact us today for a free
        consultation!
      </h5>

      <div className="hero-action">
        <a className="hero-link" href="#cta">
          Build My Site
        </a>
        <div className="icons">
          <a
            href="https://www.facebook.com/Justappin-109278647984311"
            target="_blank"
          >
            <i className="icon fab fa-lg fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com/JustAppin" target="_blank">
            <i className="icon fab fa-lg fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/justappinllc/" target="_blank">
            <i className="icon fab fa-lg fa-instagram"></i>
          </a>
        </div>
      </div>
      <img className="hero-logo" src={Logo} alt="JustAPPin’ Logo" />
      {/* <Logo /> */}
      <i className="fas fa-2x fa-arrow-down"></i>
    </section>
  );
};
export default Hero;
