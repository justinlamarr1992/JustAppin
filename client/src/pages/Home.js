import React, { useState } from "react";

import Hero from "../components/homeComps/Hero";
import About from "../components/homeComps/About";
import Testimony from "../components/homeComps/Testimony";
import Perk from "../components/homeComps/Perk";
import Benefit from "../components/homeComps/Benefit";
import CTA from "../components/homeComps/CTA";
import Footer from "../components/nav/Footer";
import InfoModal from "../components/modal/InfoModal";

import { Helmet } from "react-helmet-async";

// import InfoModal from "../components/modal/InfoModal";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Helmet>
        <title>
          Affordable Small Business Websites | The Trusted Web Dev Company
        </title>
        <meta name="This is the Name" content="This is the content" />
        <meta
          name="description"
          content="Creating affordable, high-quality websites for small businesses owners. Drive growth, attract customers, and establish credibility with a professionally designed website"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <div>
        <Hero />
        {/* <button onClick={() => setIsOpen(true)}>Open Modal</button>
      {isOpen && (
        <InfoModal
          setIsOpen={setIsOpen}
          Title={"Example Title"}
          Body={"Example Body"}
        />
      )} */}

        <About />
        <Testimony />
        <Perk />
        <Benefit />
        <CTA />
      </div>
    </>
  );
};
export default Home;
