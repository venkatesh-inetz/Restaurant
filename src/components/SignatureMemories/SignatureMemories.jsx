import { useState } from "react";
import { Link } from "react-router-dom";
import Assets from "../../assets/Assets";
import { SIGNATURE_ITEMS } from "../../data/menuData";
import "./SignatureMemories.css";

const memoriesSlides = [
  { image: Assets.memories4, alt: "Memories dish one" },
  { image: Assets.memories1, alt: "Memories dish two" },
  { image: Assets.memories2, alt: "Memories dish three" },
  { image: Assets.memories3, alt: "Memories dish four" },
  { image: Assets.memories5, alt: "Memories dish five" },
];

const SignatureMemories = ({
  showMemories = true,
  menuVariant = false,
  activeMenuIndex = null,
}) => {
  const signatureMenuItems = SIGNATURE_ITEMS.map((it) => ({
    id: it.id,
    image: it.images[0],
    title: it.title,
    description: it.description,
    price: `$${it.price.toFixed(2)}`,
  }));

  const [activeIndex, setActiveIndex] = useState(2);
  const totalSlides = memoriesSlides.length;

  const visibleSlides = [-2, -1, 0, 1, 2].map((offset) => {
    const idx = (activeIndex + offset + totalSlides) % totalSlides;
    return memoriesSlides[idx];
  });

  const handlePrevMemory = () => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNextMemory = () => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  };

  return (
    <section
      className={`signature-memories${
        menuVariant ? " signature-memories--menu" : ""
      }`}
      style={{ backgroundImage: `url(${Assets.signatureMemoriesBg})` }}
    >
      <div className="signature-inner">
        <div className="signature-head">
          <div>
            <h2>
              Our <span>Signature</span> Menu
            </h2>
            <p>
              Experience our signature menu, a masterpiece of flavors crafted
              with premium ingredients, culinary expertise, and an artistic
              touch to delight
            </p>
          </div>
          <div className="signature-arrows">
            <button
              type="button"
              className="sig-arrow-btn"
              aria-label="Previous signature menu"
            >
              <img src={Assets.arrowLeft} alt="" />
            </button>
            <button
              type="button"
              className="sig-arrow-btn"
              aria-label="Next signature menu"
            >
              <img src={Assets.arrowRight} alt="" />
            </button>
          </div>
        </div>

        <div className="signature-grid">
          {signatureMenuItems.map((item, index) => (
            <Link
              key={item.id}
              to={`/product/${item.id}`}
              className={`signature-card${
                activeMenuIndex === index ? " signature-card--active" : ""
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="signature-card-image"
              />
              <div className="signature-card-body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="signature-card-footer">
                  <span className="signature-stars" aria-label="Rating 5 stars">
                    {"\u2605\u2605\u2605\u2605\u2605"}
                  </span>
                  <span className="signature-price">{item.price}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {showMemories ? (
        <div className="memories-wrap">
          <div className="memories-inner">
            <h2>
              Unforgettable Moments, Beautifully Crafted, Memories That Last
              Forever
            </h2>

            <div className="memories-carousel">
              <button
                type="button"
                className="memory-arrow memory-arrow--left"
                aria-label="Previous memory"
                onClick={handlePrevMemory}
              >
                <img src={Assets.arrowLeft2} alt="" />
              </button>

              <div className="memories-track">
                {visibleSlides.map((slide, index) => (
                  <article
                    key={`${slide.alt}-${index}`}
                    className={`memory-card memory-card--slot-${index + 1} ${
                      index === 2 ? "memory-card--active" : ""
                    }`}
                  >
                    <img src={slide.image} alt={slide.alt} />
                  </article>
                ))}
              </div>

              <button
                type="button"
                className="memory-arrow memory-arrow--right"
                aria-label="Next memory"
                onClick={handleNextMemory}
              >
                <img src={Assets.arrowRight2} alt="" />
              </button>
            </div>

            <div className="memories-description">
              <h3>Elegant Anniversary Dinner</h3>
              <p>
                A beautifully curated private dining experience celebrating a
                couple's milestone anniversary. The evening featured a gourmet
                five-course meal, candlelit ambiance, and live acoustic music.
              </p>
            </div>

            <button type="button" className="memories-btn">
              See Menu
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default SignatureMemories;
