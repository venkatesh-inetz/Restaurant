import Assets from "../../assets/Assets";
import searchIcon from "../../assets/icons/searchicon.png";
import "./InsightsNewsSection.css";

const sideNews = [
  {
    image: Assets.insights1,
    title:
      "In recent years, there has been a significant shift towards plant-based dining",
  },
  {
    image: Assets.insights2,
    title:
      "In recent years, there has been a significant shift towards plant-based dining",
  },
  {
    image: Assets.insights3,
    title:
      "In recent years, there has been a significant shift towards plant-based dining",
  },
  {
    image: Assets.insights4,
    title:
      "In recent years, there has been a significant shift towards plant-based dining",
  },
];

const description =
  "In recent years, there has been a significant shift towards plant-based dining, driven by health-conscious consumers and growing awareness of environmental sustainability.";

const InsightsNewsSection = () => {
  return (
    <section
      className="insights-news"
      style={{ backgroundImage: `url(${Assets.qualitybg})` }}
    >
      <div className="insights-inner">
        <header className="insights-header">
          <h2>
            Delicious Insights, Culinary Tips, and
            <br />
            <span>Restaurant News</span>
          </h2>
          <p>
            Explore our blog for mouthwatering recipes, expert tips, and the
            latest updates from our restaurant to enhance your dining experience
          </p>
          <div className="insights-search">
            <img src={searchIcon} alt="" aria-hidden="true" />
            <input type="search" placeholder="What do you want to know?" />
          </div>
        </header>

        <div className="insights-grid">
          <article className="insights-featured">
            <img src={Assets.insightshero} alt="Featured restaurant dishes" />
            <div className="insights-tags">
              <button type="button" className="insights-tag">
                Food Trends
              </button>
              <button type="button" className="insights-tag">
                6 Min Read
              </button>
            </div>
            <h3>
              The rise of plant-based dining in restaurants reflects health
              trends and environmental sustainability awareness among consumers
            </h3>
            <p>{description}</p>
          </article>

          <div className="insights-side-list">
            {sideNews.map((item, index) => (
              <article key={index} className="insights-side-item">
                <img src={item.image} alt="" />
                <div className="insights-side-content">
                  <h4>{item.title}</h4>
                  <p>{description}</p>
                  <div className="insights-tags">
                    <button type="button" className="insights-tag">
                      Food Trends
                    </button>
                    <button type="button" className="insights-tag">
                      6 Min Read
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsNewsSection;
