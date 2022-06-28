import React, { useState } from "react";
import InfoModal from "../modal/InfoModal";
const Perk = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const wellDesigned = () => {
    setIsOpen(true);
    setTitle("Well Designed Websites");
    setBody(
      "A website reflects the company, its products, services and ultimately the brand. So it’s imperative for it to be visually appealing, professional and polished. We will allow white space, layouts will be uncluttered with handpicked photographs and graphics. Equally important, the webpage has to work as expected and be lighting fast. We build to web standards, proofread text and test for bugs with speed and functionality. The average page should be functional and fast, because at anytime there could be a potential customer’s visiting. Broken, slow, or poorly constructed areas will leave your visitors frustrated and encourage them to leave. Our website leave customers with a good experience and not the aforementioned."
    );
    console.log("Title", title, "Body", body);
  };
  const easyToUse = () => {
    setIsOpen(true);
    setTitle("Easy to Use Platforms");
    setBody(
      "Consumer’s are always in a hurry. There’s no need making them work for information. The User Experience (UX) we give plays a key role in helping visitors use, understand and stay on your  website. We create obvious, common sense navigation with clear hierarchy. The use of consistent layouts and visual cues aid in the functionality across the webpage. Our websites satisfy both customers coming for something specific, and those just looking."
    );
    console.log("Title", title, "Body", body);
  };
  const mobileOptimzed = () => {
    setIsOpen(true);
    setTitle("Webites Optimized for Mobile Phones");
    setBody(
      "Today there are no reasons for a Mobile device viewing a webpage to look the same as it would on a desktop screen. Our sites look great and work well on any platform. Data has shown that growth of mobile and tablet devices is increasing steadily with no signs of slowing down. There’s no way of knowing what the next visitor will be using. Optimizing for mobile will improve both the experience of visitors and SEO Rankings."
    );
    console.log("Title", title, "Body", body);
  };
  const qualityContent = () => {
    setIsOpen(true);
    setTitle("Up to Date Content for Possible Customers");
    setBody(
      "The information we provide on webpages are succinct, interesting and new. We use sensible language for the targeted audience. Term’s that include jargon, corporate speak and acronyms will be avoided to leave out any confusion. We explain the “Why”. Consumers have short attention spands. So to keep them focused on the product we only provide appeasing content. In addition we spell correctly, remain accurate, relevant and update regularly. The Pictures and Video’s on the website are relevant to the today circumstances of the company. All prices and services will be accurate and refrain from confusion."
    );
    console.log("Title", title, "Body", body);
  };
  const callToActions = () => {
    setIsOpen(true);

    setTitle("Strategically Placed Call To Action's");
    setBody(
      "If a website doesn’t asks anything from the visitors, they will do nothing. We boldly display the purpose of our webpages through the Call to Action buttons. The Call to Action will keep the purpose clear to visitors and it will be hard not to understand what the business is asking from them. We have a specific reason displayed on each button with it's purpose. We pressure visitors to Purchase products, Read/Share articles, Follow the company on social media, Download toolkits, Join mailing lists, Learn more about the company and many more options. There will be a Call to Action placed properly on each page."
    );
    console.log("Title", title, "Body", body);
  };
  const SEO = () => {
    setIsOpen(true);
    setTitle("Search Engine Ready Websites");
    setBody(
      "It should be enough to build a nice looking website that’s easy to use but it’s not. It still needs to earn traffic, eloquent designs alone won’t do that. There are many rules mixed with guidelines for effective search engine  optimization. Here are some of the many we will use for our webpage to meet the criteria. <br /> 1. Use page titles and meta tags on every page and alt tags on every image. <br /> 2. Optimize content on your site to align with words real people search for. <br /> 3. Use keywords appropriately in content and links. <br /> 4. Use Cascading Style Sheets for layout and keep your HTML code clutter-free. <br /> 5. Make it as easy as possible for visitors to share your content."
    );
    console.log("Title", title, "Body", body);
  };

  return (
    <div id="perks" className="feature">
      <h2 className="feat-title">Features</h2>
      <div className="feat-l text-gray">
        {/* Take thes out and add them to there respected Modals figure out better things to be placed here */}
        The Design of the webpage maybe the most important obstacle for getting
        customers to complete transactions. We make well balanced and consumer
        friendly Websites that clear these obstacles.
        <br />
        Our Websites are also engineered to be navigated easily by customers.
        <br />
        In addition, every website we build will be optimized for both Mobile
        and Tablet devices.
      </div>
      <div className="feat-r text-gray">
        Second to design, the HTML needs a variety of things to allow the
        customer to convert from webpage visits to purchase or product. Our
        webpages Call to Actions are placed in areas proven to increase the
        conversion rate.
        <br />
        We will also give consumers the neccessary information they need to
        purchase products.
        <br />
        Lastly we ensure every inch of our webpages have are SEO friendly.
      </div>
      <div className="feat-b">
        <p className="text-gray">Click the buttons to find out more</p>
      </div>

      <div className="feat-icons">
        <div className="icon1 iandt">
          <h4 className="feat-item-text">Well Designed</h4>
          <button className="modalIconBtn" onClick={wellDesigned}>
            <span className="ionly fa-stack fa-4x">
              <i className="feat-btn fas fa-circle fa-stack-2x"></i>
              <i className="fas fa-inverse fa-ruler-combined fa-stack-1x"></i>
            </span>
          </button>
          {isOpen && (
            <InfoModal setIsOpen={setIsOpen} Title={title} Body={body} />
          )}
        </div>

        <div className="icon2 iandt">
          <h4 className="feat-item-text">Easy to Use</h4>
          <button className="modalIconBtn" onClick={easyToUse}>
            <span className="ionly fa-stack fa-4x">
              <i className="feat-btn fas fa-circle fa-stack-2x"></i>
              <i className="fas fa-inverse fa-birthday-cake fa-stack-1x"></i>
            </span>
          </button>
          {isOpen && (
            <InfoModal setIsOpen={setIsOpen} Title={title} Body={body} />
          )}
        </div>

        <div className="icon3 iandt">
          <h4 className="feat-item-text">Mobile Optimized</h4>
          <button className="modalIconBtn" onClick={mobileOptimzed}>
            <span className="ionly fa-stack fa-4x">
              <i className="feat-btn fas fa-circle fa-stack-2x"></i>
              <i className="fas fa-inverse fa-mobile fa-stack-1x"></i>
            </span>
          </button>
          {isOpen && (
            <InfoModal setIsOpen={setIsOpen} Title={title} Body={body} />
          )}
        </div>

        <div className="icon4 iandt">
          <h4 className="feat-item-text">Quality Content</h4>
          <button className="modalIconBtn" onClick={qualityContent}>
            <span className="ionly fa-stack fa-4x">
              <i className="feat-btn fas fa-circle fa-stack-2x"></i>
              <i className="fas fa-inverse fa-gem fa-stack-1x"></i>
            </span>
          </button>
          {isOpen && (
            <InfoModal setIsOpen={setIsOpen} Title={title} Body={body} />
          )}
        </div>

        <div className="icon5 iandt">
          <h4 className="feat-item-text">Call to Actions</h4>
          <button className="modalIconBtn" onClick={callToActions}>
            <span className="ionly fa-stack fa-4x">
              <i className="feat-btn fas fa-circle fa-stack-2x"></i>
              <i className="fas fa-inverse fa-bullseye fa-stack-1x"></i>
            </span>
          </button>
          {isOpen && (
            <InfoModal setIsOpen={setIsOpen} Title={title} Body={body} />
          )}
        </div>

        <div className="icon6 iandt">
          <h4 className="feat-item-text">SEO</h4>
          <button className="modalIconBtn" onClick={SEO}>
            <div className="ionly fa-stack fa-4x">
              <i className="feat-btn fas fa-circle fa-stack-2x"></i>
              <i className="fas fa-inverse fa-search fa-stack-1x"></i>
            </div>
          </button>
          {isOpen && (
            <InfoModal setIsOpen={setIsOpen} Title={title} Body={body} />
          )}
        </div>
      </div>
    </div>
  );
};
export default Perk;
