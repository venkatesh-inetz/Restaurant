import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const Header = () => {
  const cartCount = 2;

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-mark">LH</span>
          <span>Lagoon Hakka</span>
        </Link>

        <nav className="nav-menu">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/menu"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Menu
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Contact Us
          </NavLink>
        </nav>

        <div className="header-right">
          <Link to="/booking" className="book-link">
            Book Reservation
          </Link>
          <NavLink to="/cart" className="cart-link" aria-label="Cart">
            <ShoppingCart size={22} strokeWidth={2.2} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
