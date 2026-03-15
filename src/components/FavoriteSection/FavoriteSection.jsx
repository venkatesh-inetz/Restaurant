import "./FavoriteSection.css";
import Assets from "../../assets/Assets";
import whiskIcon from "../../assets/icons/Whisk.png";
import servingDomeIcon from "../../assets/icons/Serving Dome.png";
import chefCheckmarkIcon from "../../assets/icons/chef-checkmark.png";

const FavoriteSection = () => {
  return (
    <section className="favorite-section">
      <div className="favorite-inner">
        <h2 className="favorite-title">
          <span>Mississauga&apos;s Favourite</span>, Hakka
          <br />
          Destination
        </h2>

        <div className="favorite-visual-wrap">
          <article className="favorite-stat favorite-stat--left">
            <div className="favorite-stat-head">
              <span className="favorite-stat-icon" aria-hidden="true">
                <img src={whiskIcon} alt="" />
              </span>
              <p className="favorite-stat-value">15+</p>
            </div>
            <p className="favorite-stat-label">Years of Excellence</p>
          </article>

          <img
            className="favorite-image"
            src={Assets.favourite}
            alt="Restaurant storefront"
          />

          <article className="favorite-stat favorite-stat--top">
            <div className="favorite-stat-head">
              <span className="favorite-stat-icon" aria-hidden="true">
                <img src={servingDomeIcon} alt="" />
              </span>
              <p className="favorite-stat-value">80+</p>
            </div>
            <p className="favorite-stat-label">Authentic Hakka Dishes</p>
          </article>

          <article className="favorite-stat favorite-stat--bottom">
            <div className="favorite-stat-head">
              <span className="favorite-stat-icon" aria-hidden="true">
                <img src={chefCheckmarkIcon} alt="" />
              </span>
              <p className="favorite-stat-value">1000+</p>
            </div>
            <p className="favorite-stat-label">Happy Customers Every Week</p>
          </article>
        </div>

        <p className="favorite-description">
          At Lagoon Hakka, food is more than a meal it&apos;s an experience. We
          specialize in authentic Indo-Chinese Hakka cuisine, prepared fresh
          with premium ingredients and bold spices. From sizzling Manchurian to
          flavorful fried rice and signature chili dishes, every plate is
          crafted with passion and consistency. Whether you&apos;re dining in,
          ordering takeout, or celebrating with family, we promise taste,
          quality, and hospitality every time.
        </p>

        <button type="button" className="favorite-btn">
          View More
        </button>
      </div>
      <img className="ring" src={Assets.ring} alt="Ring decoration" />
    </section>
  );
};

export default FavoriteSection;
