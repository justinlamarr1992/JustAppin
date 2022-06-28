import React from "react";
import Logo from "../../images/AltLogo.png";
const Footer = () => {
  const today = new Date();
  return (
    <footer>
      <div className="foot1">
        <img className="footer-logo" src={Logo} alt="" />
        <a className="footer-link" href="#about">
          About Us
        </a>
        <div className="footer-icons">
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
      <div className="foot2">
        <h4>Blog</h4>
        <p>Blogs Coming Soon</p>
      </div>
      <div className="foot3">
        <h4>Contact</h4>
        <a className="footer-anchor" href="tel:+3145466723">
          (314) 546-6723
        </a>
        <br />
        <a className="footer-anchor" href="mailto:justappinllc@gmail.com">
          justappinllc@gmail.com
        </a>
      </div>
      <div className="foot4">
        <h4 className="f4-title">Instagram</h4>
        <p className="f4-pic1">Social Media Post Coming Soon</p>
        {/* <p className="f4-pic1">pic</p>
        <p className="f4-pic2">pic</p>
        <p className="f4-pic3">pic</p>
        <p className="f4-pic4">pic</p>
        <p className="f4-pic5">pic</p>
        <p className="f4-pic6">pic</p> */}
      </div>
      <div className="foot-dis">
        <p>
          © Copyright {today.getFullYear()}. JustAPPin’ LLC. All Right Reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
