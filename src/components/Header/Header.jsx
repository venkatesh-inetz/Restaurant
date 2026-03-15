import "./Header.css";
import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import Assets from "../../assets/Assets";
import { useStore } from "../../store/StoreContext";

const Header = () => {
  const { cartCount } = useStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isLightPage =
    location.pathname === "/about" || location.pathname.startsWith("/product");

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header${isLightPage ? " header--about" : ""}`}>
      <div className={`header-container ${isMenuOpen ? "menu-open" : ""}`}>
        <Link to="/" className="logo">
          <img className="logo-mark" src={Assets.logo} alt="Lagoon Hakka logo" />
          <span>Lagoon Hakka</span>
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={isMenuOpen}
          aria-controls="primary-menu"
          onClick={toggleMenu}
        >
          <span className="menu-toggle-line" />
          <span className="menu-toggle-line" />
          <span className="menu-toggle-line" />
        </button>

        <nav id="primary-menu" className="nav-menu">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/menu"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={closeMenu}
          >
            Menu
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={closeMenu}
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={closeMenu}
          >
            Contact Us
          </NavLink>
        </nav>

        <div className="header-right">
          <Link to="/booking" className="book-link" onClick={closeMenu}>
            Book Reservation
          </Link>
          <NavLink to="/cart" className="cart-link" aria-label="Cart" onClick={closeMenu}>
            <ShoppingCart size={22} strokeWidth={2.2} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
