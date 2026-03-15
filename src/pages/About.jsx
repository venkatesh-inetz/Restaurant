import "../styles/About.css";
import FavoriteSection from "../components/FavoriteSection/FavoriteSection";
import AboutSustainSection from "../components/AboutSustainSection/AboutSustainSection";
import ChefTeamSection from "../components/ChefTeamSection/ChefTeamSection";
import GuestSaySection from "../components/GuestSaySection/GuestSaySection";

const About = () => {
  return (
    <main className="about-page">
      <section className="about-hero">
        <h1 className="about-hero-title">
          About <span> Us </span>
        </h1>
      </section>
      <FavoriteSection />
      <AboutSustainSection />
      <ChefTeamSection />
      <GuestSaySection />
    </main>
  );
};

export default About;
