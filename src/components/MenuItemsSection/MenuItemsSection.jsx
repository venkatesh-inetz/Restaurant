import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Assets from "../../assets/Assets";
import "./MenuItemsSection.css";
import { MENU_CATEGORIES, MENU_GRID_ITEMS } from "../../data/menuData";

const categories = MENU_CATEGORIES;

const MenuItemsSection = () => {
  const items = useMemo(() => {
    return MENU_GRID_ITEMS.map((it) => ({
      ...it,
      featured: it.featured ?? false,
      image: it.images?.[0] ?? Assets.item1,
      priceLabel: `$${it.price.toFixed(2)}`,
    }));
  }, []);

  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const visibleItems = items.filter((item) => item.category === activeCategory);

  return (
    <section className="menu-items">
      <div className="menu-items-inner">
        <header className="menu-items-header">
          <h2>
            Savor the Flavor
            <br />
            Delight in Every Bite!
          </h2>
          <p>
            Explore our menu filled with mouthwatering dishes, crafted with
            passion and the freshest ingredients to satisfy every craving
          </p>

          <nav className="menu-items-tabs" aria-label="Menu categories">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`menu-tab${
                  category === activeCategory ? " is-active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </nav>
        </header>

        <div className="menu-items-grid">
          {visibleItems.map((item) => (
            <Link
              key={item.id}
              to={`/product/${item.id}`}
              className={`menu-item${
                item.featured ? " menu-item--featured" : ""
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="menu-item-img"
              />
              <div className="menu-item-body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="menu-item-footer">
                  {item.stars ? (
                    <span
                      className="menu-item-stars"
                      aria-label="Rating 5 stars"
                    >
                      {"\u2605\u2605\u2605\u2605\u2605"}
                    </span>
                  ) : (
                    <span />
                  )}
                  {item.price ? (
                    <span className="menu-item-price">{item.priceLabel}</span>
                  ) : null}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <button type="button" className="menu-items-cta">
          View All Menu
        </button>

        <img
          src={Assets.ring}
          alt=""
          aria-hidden="true"
          className="menu-items-ring menu-items-ring--top"
        />
        <img
          src={Assets.ring}
          alt=""
          aria-hidden="true"
          className="menu-items-ring menu-items-ring--bottom"
        />
      </div>
    </section>
  );
};

export default MenuItemsSection;
