import React, { useState } from "react";

import Hero from "../components/homeComps/Hero";
import About from "../components/homeComps/About";
import Testimony from "../components/homeComps/Testimony";
import Perk from "../components/homeComps/Perk";
import Benefit from "../components/homeComps/Benefit";
import CTA from "../components/homeComps/CTA";
import Footer from "../components/nav/Footer";
import InfoModal from "../components/modal/InfoModal";

// import InfoModal from "../components/modal/InfoModal";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
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
  );
};
export default Home;
