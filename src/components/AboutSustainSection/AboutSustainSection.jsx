import { useState } from "react";
import Assets from "../../assets/Assets";
import "./AboutSustainSection.css";

const AboutSustainSection = () => {
  const panels = [
    {
      title: "Locally Sourced Ingredients",
      body: "We work closely with local partners to bring fresh, high-quality ingredients to every dish.",
      image: Assets.ingredients,
    },
    {
      title: "Sustainable Seafood",
      body: "Our seafood is responsibly sourced to protect marine ecosystems and ensure future generations can enjoy ocean-fresh flavors.",
      image: Assets.seafood,
    },
    {
      title: "Eco-Friendly Packaging",
      body: "Packaging choices that reduce waste and support a cleaner environment.",
      image: Assets.ecofriendly,
    },
    {
      title: "Minimizing Food Waste",
      body: "Smart prep and portioning to reduce waste without compromising freshness.",
      image: Assets.foodwaste,
    },
    {
      title: "Ethical Farming Practices",
      body: "Ingredients from partners who share our values and treat the land with care.",
      image: Assets.farming,
    },
  ];

  // Default open state matches the screenshot: "Sustainable Seafood" expanded.
  const [openIndex, setOpenIndex] = useState(1);

  return (
    <section
      className="about-sustain"
      style={{ backgroundImage: `url(${Assets.signatureMemoriesBg})` }}
    >
      <div className="about-sustain-inner">
        <div className="about-sustain-grid">
          <div className="about-sustain-left">
            <h2>
              Fresh, Ethical,
              <br />
              Sustainable Food
            </h2>
            <p>
              We source responsibly, support local farmers, and embrace
              sustainability to ensure fresh, high-quality ingredients for a
              healthier planet
            </p>
            <button type="button" className="about-sustain-cta">
              See More
            </button>
          </div>

          <div className="about-sustain-right">
            <div className="about-sustain-accordion">
              {panels.map((panel, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <article
                    key={panel.title}
                    className={`about-sustain-item${isOpen ? " is-open" : ""}`}
                  >
                    <button
                      type="button"
                      className="about-sustain-toggle"
                      aria-expanded={isOpen}
                      onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    >
                      <span>{panel.title}</span>
                      <span className="about-sustain-arrow" aria-hidden="true">
                        <img src={Assets.upArrowIcon} alt="" />
                      </span>
                    </button>

                    {isOpen ? (
                      <div className="about-sustain-body">
                        <p>{panel.body}</p>
                        <img src={panel.image} alt="" aria-hidden="true" />
                      </div>
                    ) : null}
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSustainSection;
