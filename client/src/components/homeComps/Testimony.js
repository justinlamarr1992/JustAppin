import React from "react";
import Client1 from "../../images/iWax.png";
import Client2 from "../../images/Creative.png";
import ClientWeb2 from "../../images/ChrisPic.png";
import ClientWeb from "../../images/iWaxWeb.png";
import ClientMob from "../../images/iWaxMob.jpg";
import ClientMob2 from "../../images/ChrisPicMob.jpeg";

const Testimony = () => {
  // Make this clients switchable
  return (
    <section className="testimony">
      <h2 className="test-title">Past Clients</h2>
      <p className="test-text">
        Scroll to view the work JustAPPin’ has done in the past.
      </p>
      {/* TODO  switch picture of website based on which client is clicked */}

      <ul className="gallery-testimony">
        <li className="client-list">
          <div className="client c-top">
            <img src={Client1} className="client-pic" alt="" />
            <h5 className="client-text">
              "Since my Website went live I have been able to manage current
              clients and connect with new ones. I could not have before. It's
              so much easier telling someone to visit my website. THANK YOU
              JUSTAPPIN'"
            </h5>
            <h4 className="client-name">Lanee Green</h4>
            <h6 className="client-company">
              <a
                className="client-link"
                href="https://www.iWax682.com/"
                target="_blank"
              >
                iWax682.com
              </a>
            </h6>
            <img src={ClientWeb} className="client-web" alt="" />
            <img src={ClientMob} className="client-web client-mob" alt="" />
          </div>
        </li>
        <li className="client-list">
          <div className="client c-top">
            <img src={Client2} className="client-pic" alt="" />
            <h5 className="client-text">
              "I can't thank you enough for the website. The process and the
              communication always easy to follow along with. The finished
              product looks great. I will always refer start ups to you."
            </h5>
            <h4 className="client-name">Chris Burnette</h4>
            <h6 className="client-company">
              <a
                className="client-link"
                href="https://www.creativecakeballs.com/"
                target="_blank"
              >
                CreativeCakeballs.com
              </a>
            </h6>
            <img src={ClientWeb2} className="client-web" alt="" />
            <img src={ClientMob2} className="client-web client-mob" alt="" />
          </div>
        </li>
        <li>Test</li>
        <li>Test</li>
      </ul>
      {/* <div className="test-clients">
        <div className="client c-top">
          <img src={Client1} className="client-pic" alt="" />
          <h5 className="client-text">
            "Since my Website went live I have been able to manage current
            clients and connect with new ones. I could not have before. It's so
            much easier telling someone to visit my website. THANK YOU
            JUSTAPPIN'"
          </h5>
          <h4 className="client-name">Lanee Green</h4>
          <h6>
            <a
              className="client-company"
              href="https://www.iWax682.com/"
              target="_blank"
            >
              iWax
            </a>
          </h6>
        </div>
        <div className="client c-bottom">
          <img src={ClientYou} className="client-pic" alt="" />
          <h5 className="client-text">"This could be your comment here!"</h5>
          <h4 className="client-name">Your Name</h4>
          <h6 className="client-company">Your Company Name</h6>
        </div>
      </div>
      <img src={ClientWeb} className="client-web" alt="" /> */}
    </section>
  );
};
export default Testimony;
