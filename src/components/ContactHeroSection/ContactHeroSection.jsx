import { useMemo, useState } from "react";
import ContactMethodsSection from "../ContactMethodsSection/ContactMethodsSection";
import Assets from "../../assets/Assets";
import "./ContactHeroSection.css";

const ContactHeroSection = () => {
  const slides = useMemo(
    () => [
      { image: Assets.signatureDish3, alt: "Stir-fried noodles" },
      { image: Assets.favourite, alt: "Lagoon Hakka storefront" },
      { image: Assets.insightshero, alt: "Restaurant interior" },
    ],
    [],
  );

  const [index, setIndex] = useState(1);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  const left = slides[(index - 1 + slides.length) % slides.length];
  const center = slides[index];
  const right = slides[(index + 1) % slides.length];

  return (
    <section className="contact-main">
      <h1 className="contact-main-title">Contact Us</h1>
      <div className="contact-hero">
        <div className="contact-hero-inner">
          <h2 className="contact-hero-subtitle">
            Get in Touch {"\u2013"} Your Support
            <br />
            Starts Here!
          </h2>
          <p className="contact-hero-lede">
            Wherever you need assistance, have questions, or just want to say
            hello, we're here to help. Reach out anytime.
          </p>

          <div className="contact-collage" aria-hidden="true">
            <div className="contact-photo contact-photo--left">
              <img src={left.image} alt={left.alt} loading="lazy" />
            </div>
            <div className="contact-photo contact-photo--center">
              <img src={center.image} alt={center.alt} loading="lazy" />
            </div>
            <div className="contact-photo contact-photo--right">
              <img src={right.image} alt={right.alt} loading="lazy" />
            </div>
          </div>

          <div className="contact-collage-nav">
            <button
              type="button"
              className="contact-collage-btn"
              onClick={prev}
              aria-label="Previous image"
            >
              <img src={Assets.arrowLeft} alt="" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="contact-collage-btn"
              onClick={next}
              aria-label="Next image"
            >
              <img src={Assets.arrowRight} alt="" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      <ContactMethodsSection />
    </section>
  );
};

export default ContactHeroSection;
