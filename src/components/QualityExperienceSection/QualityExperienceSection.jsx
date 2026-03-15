import Assets from "../../assets/Assets";
import bookIcon from "../../assets/icons/board-book-recipe.png";
import dish2Icon from "../../assets/icons/dish2.png";
import burgerIcon from "../../assets/icons/Group.png";
import spatulaIcon from "../../assets/icons/Spatula.png";
import "./QualityExperienceSection.css";

const leftCards = [
  {
    title: "Authentic Hakka Recipes",
    icon: burgerIcon,
    iconKey: "burger",
    text: "Traditional Indo-Chinese flavors made with perfected recipes.Traditional Indo-Chinese flavors made with perfected recipes.Traditional Indo-Chinese flavors made with perfected recipes.Traditional Indo-Chinese flavors made with perfected recipes.",
    highlighted: true,
  },
  {
    title: "Fresh Ingredients",
    icon: dish2Icon,
    text: "We use high-quality meats, vegetables, and house-made sauces daily.We use high-quality meats, vegetables, and house-made sauces daily.We use high-quality meats, vegetables, and house-made sauces daily.We use high-quality meats, vegetables, and house-made sauces daily.",
  },
];

const rightCards = [
  {
    title: "Expert Chefs",
    icon: spatulaIcon,
    text: "Our experienced chefs master the art of wok cooking for that perfect smoky flavor.Our experienced chefs master the art of wok cooking for that perfect smoky flavor.Our experienced chefs master the art of wok cooking for that perfect smoky flavor.",
  },
  {
    title: "Warm Hospitality",
    icon: bookIcon,
    text: "We treat every guest like family.We treat every guest like family.We treat every guest like family.We treat every guest like family.We treat every guest like family.We treat every guest like family.We treat every guest like family.We treat every guest like family.We treat every guest like family.",
  },
];

const InfoCard = ({ item }) => (
  <article
    className={`quality-card ${item.highlighted ? "quality-card--highlighted" : ""}`}
  >
    <span className="quality-icon-wrap">
      <img
        src={item.icon}
        alt=""
        className={item.iconKey === "burger" ? "quality-icon--burger" : ""}
      />
    </span>
    <h3>{item.title}</h3>
    <p>{item.text}</p>
  </article>
);

const QualityExperienceSection = () => {
  return (
    <section
      className="quality-section"
      style={{ backgroundImage: `url(${Assets.qualitybg})` }}
    >
      <div className="quality-inner">
        <header className="quality-header">
          <h2>Unmatched Quality, Exceptional Service, Memorable Experience</h2>
          <p>
            We blend premium ingredients, expert craftsmanship, and warm
            hospitality to create a dining experience that exceeds expectations
            every time.
          </p>
        </header>

        <div className="quality-layout">
          <div className="quality-column">
            {leftCards.map((item) => (
              <InfoCard key={item.title} item={item} />
            ))}
          </div>

          <div className="quality-center">
            <img src={Assets.qualityhero} alt="Restaurant interior" />
            <button type="button">Reserve Now</button>
          </div>

          <div className="quality-column">
            {rightCards.map((item) => (
              <InfoCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityExperienceSection;
