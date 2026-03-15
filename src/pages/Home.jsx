import "../styles/Home.css";
import Assets from "../assets/Assets";
import FavoriteSection from "../components/FavoriteSection/FavoriteSection";
import ChefTeamSection from "../components/ChefTeamSection/ChefTeamSection";
import InsightsNewsSection from "../components/InsightsNewsSection/InsightsNewsSection";
import QualityExperienceSection from "../components/QualityExperienceSection/QualityExperienceSection";
import SignatureMemories from "../components/SignatureMemories/SignatureMemories";
import FaqSection from "../components/FaqSection/FaqSection";
import GuestSaySection from "../components/GuestSaySection/GuestSaySection";

const Home = () => {
  return (
    <main className="home">
      <section className="hero-section">
        <div className="balloon-wrap">
          <img src={Assets.ballon} alt="Balloon decoration" />
        </div>
        <div className="ellipse-wrap">
          <img src={Assets.ellipse} alt="Ellipse decoration" />
        </div>
        <div className="ellipse-wrap2">
          <img src={Assets.ellipse} alt="Ellipse decoration" />
        </div>

        <div className="hero-wrap">
          <div className="hero-left">
            <p className="hero-top-badge">Number 1 Restaurant in the Canada</p>
            <h1>
              Authentic{" "}
              <span>
                Hakka <br /> Flavours,
              </span>{" "}
              Crafted to <br /> Perfection
            </h1>
            <p className="hero-description">
              Where Chinese tradition meets bold Indo-Hakka taste fresh,
              flavorful, unforgettable. At Lagoon Hakka, we bring you the true
              taste of Hakka Chinese cuisine, blending rich spices, sizzling
              woks, and time-honored recipes to create dishes you&apos;ll crave
              again and again.
            </p>

            <div className="hero-cta-row">
              <button type="button" className="hero-btn hero-btn--gold">
                View Menu
              </button>
              <button type="button" className="hero-btn hero-btn--light">
                Online Order
              </button>
            </div>
          </div>

          <div className="hero-right">
            <img src={Assets.heroleft} alt="Hakka noodles" />
          </div>
        </div>

        <div className="hero-review-row">
          <img src={Assets.herodish1} alt="Crispy chilli chicken" />
          <img src={Assets.herodish2} alt="Loaded fries" />
          <div className="hero-rating">
            <p className="stars">
              ★ ★ ★ ★ ★ <span>5.0</span>
            </p>
            <p className="rating-description">
              Best Hakka food in Mississauga! The flavors are authentic,
              portions are generous, and the service is always friendly. Our
              go-to spot for Chili Chicken!
            </p>
          </div>
        </div>
      </section>

      <FavoriteSection />
      <SignatureMemories />
      <ChefTeamSection />
      <QualityExperienceSection />
      <InsightsNewsSection />
      <FaqSection />
      <GuestSaySection />
    </main>
  );
};

export default Home;
