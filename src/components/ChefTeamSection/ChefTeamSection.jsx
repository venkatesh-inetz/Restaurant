import Assets from "../../assets/Assets";
import "./ChefTeamSection.css";

const teamMembers = [
  { name: "Olivia Martinez", role: "Pastry Chef" },
  { name: "James Carter", role: "Head Chef" },
  { name: "Daniel Wong", role: "Restaurant Manager" },
];

const ChefTeamSection = () => {
  return (
    <section className="chef-team">
      <div className="chef-lanterns">
        <img src={Assets.ballon2} alt="" aria-hidden="true" />
      </div>
      <div className="ellipse-wrap3">
        <img src={Assets.ellipse} alt="Ellipse decoration" />
      </div>
      <div className="ellipse-wrap4">
        <img src={Assets.ellipse} alt="Ellipse decoration" />
      </div>

      <div className="chef-header">
        <h2>
          <span>Passionate Chefs</span>, Dedicated Team -<br />
          Crafting Culinary Excellence
        </h2>
        <p>
          Our talented chefs and dedicated team work together to create <br />
          unforgettable dining experiences with passion, precision, and
          creativity.
        </p>
      </div>

      <div className="chef-cards-wrap">
        <div className="chef-cards" aria-hidden="true">
          <article className="chef-card chef-card--edge">
            <img src={Assets.chef} alt="" />
          </article>

          {teamMembers.map((member) => (
            <article key={member.name} className="chef-card chef-card--full">
              <img src={Assets.chef} alt="" />
            </article>
          ))}

          <article className="chef-card chef-card--edge">
            <img src={Assets.chef} alt="" />
          </article>
        </div>

        <div className="chef-captions">
          {teamMembers.map((member) => (
            <div key={`${member.name}-caption`} className="chef-caption">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      <button type="button" className="chef-cta">
        Discover More
      </button>
    </section>
  );
};

export default ChefTeamSection;
