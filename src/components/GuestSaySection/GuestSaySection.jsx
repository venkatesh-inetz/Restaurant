import { useState } from "react";
import Assets from "../../assets/Assets";
import "./GuestSaySection.css";

const slides = [
  {
    quote:
      "The Food Was Absolutely Delicious And Full Of Flavor! The Chili Chicken And Manchurian Were Amazing, Definitely Coming Back!",
    name: "Sarah Hamilton",
    images: [Assets.signatureDish1, Assets.signatureDish2, Assets.signatureDish3],
  },
  {
    quote:
      "Hands down one of the best Indo-Chinese meals I've had. Fresh, spicy, and the portion sizes were generous!",
    name: "Arjun Mehta",
    images: [Assets.signatureDish4, Assets.herodish1, Assets.herodish2],
  },
  {
    quote:
      "Fast service, great atmosphere, and the flavors are spot on. Perfect for family dinners and celebrations.",
    name: "Emily Chen",
    images: [Assets.insights1, Assets.insights2, Assets.insights3],
  },
];

const GuestSaySection = () => {
  const [index, setIndex] = useState(0);
  const slide = slides[index];

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <section className="guest-say">
      <div className="guest-say-inner">
        <h2 className="guest-say-title">
          What <span>Our Guests Say</span>
        </h2>

        <p className="guest-say-quote" key={slide.quote}>
          {slide.quote}
        </p>

        <div className="guest-say-collage" aria-hidden="true">
          <div className="guest-say-photo guest-say-photo--left">
            <img src={slide.images[0]} alt="" loading="lazy" />
          </div>
          <div className="guest-say-photo guest-say-photo--center">
            <img src={slide.images[1]} alt="" loading="lazy" />
          </div>
          <div className="guest-say-photo guest-say-photo--right">
            <img src={slide.images[2]} alt="" loading="lazy" />
          </div>
        </div>

        <p className="guest-say-name">{slide.name}</p>

        <div className="guest-say-nav">
          <button
            type="button"
            className="guest-say-nav-btn"
            onClick={prev}
            aria-label="Previous testimonial"
          >
            <img
              src={Assets.arrowLeft}
              alt=""
              className="guest-say-nav-icon"
              aria-hidden="true"
              loading="lazy"
            />
          </button>
          <button
            type="button"
            className="guest-say-nav-btn"
            onClick={next}
            aria-label="Next testimonial"
          >
            <img
              src={Assets.arrowRight}
              alt=""
              className="guest-say-nav-icon"
              aria-hidden="true"
              loading="lazy"
            />
          </button>
        </div>

        <img
          className="guest-say-ring guest-say-ring--left"
          src={Assets.ring}
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
        <img
          className="guest-say-ring guest-say-ring--right"
          src={Assets.ring}
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default GuestSaySection;
