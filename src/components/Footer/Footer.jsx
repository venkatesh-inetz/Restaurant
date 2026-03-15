import { useState } from "react";
import Assets from "../../assets/Assets";
import {
  Clock,
  Mail,
  MapPin,
  PhoneCall,
} from "lucide-react";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    // Hook up to your email provider later.
    setEmail("");
  };

  return (
    <footer className="site-footer">
      <div className="site-footer-shell">
        <div className="site-footer-panel">
          <div className="footer-brand-top">
            <img className="footer-mark" src={Assets.logo} alt="Lagoon Hakka logo" />
            <p className="footer-brand-name">Lagoon Hakka</p>
          </div>
          <div className="site-footer-grid">
            <div className="footer-brand">
              <p className="footer-tagline">
                We Drive Real Result, More Traffic,
                <br />
                More Leads, more Growth!
              </p>

              <p className="footer-subtitle">
                Subscribe now for exclusive offers and the latest
                <br />
                food updates!
              </p>

              <form className="footer-subscribe" onSubmit={onSubmit}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your Email Address"
                  aria-label="Email address"
                  required
                />
                <button type="submit" aria-label="Subscribe">
                  →
                </button>
              </form>
            </div>

            <div className="footer-links">
              <p className="footer-col-title">Quick Links</p>
              <nav aria-label="Quick links">
                <a href="/">Home</a>
                <a href="/menu">Menu</a>
                <a href="/contact">Contact Us</a>
                <a href="/about">About US</a>
                <a href="/booking">Reservation</a>
              </nav>
            </div>

            <div className="footer-info">
              <p className="footer-col-title">Information</p>
              <ul className="footer-info-list">
                <li>
                  <span className="footer-ico" aria-hidden="true">
                    <MapPin size={18} strokeWidth={2.4} />
                  </span>
                  <span>3443 Wolfedale Rd, Mississauga, ON L5C 1V8</span>
                </li>
                <li>
                  <span className="footer-ico" aria-hidden="true">
                    <PhoneCall size={18} strokeWidth={2.4} />
                  </span>
                  <a href="tel:+19052768685">(905)-276-8685</a>
                </li>
                <li>
                  <span className="footer-ico" aria-hidden="true">
                    <Mail size={18} strokeWidth={2.4} />
                  </span>
                  <a href="mailto:mohanlagun41@gmail.com">
                    mohanlagun41@gmail.com
                  </a>
                </li>
              </ul>

              <a
                className="footer-map-btn"
                href="https://www.google.com/maps?q=3443+Wolfedale+Rd,+Mississauga,+ON+L5C+1V8"
                target="_blank"
                rel="noreferrer"
              >
                <span className="footer-map-ico" aria-hidden="true">
                  <MapPin size={18} strokeWidth={2.6} />
                </span>
                View On Map
              </a>
            </div>

            <div className="footer-hours">
              <p className="footer-col-title">Opening Hours</p>
              <div className="footer-hours-row">
                <span
                  className="footer-ico footer-ico--solid"
                  aria-hidden="true"
                >
                  <Clock size={18} strokeWidth={2.4} />
                </span>
                <p>
                  Monday to Sunday -<br />
                  11.00 AM to 11.00 PM
                </p>
              </div>
            </div>
          </div>

          <div className="footer-lower">
            <div className="footer-social" aria-label="Social links">
            <a
              className="footer-social-btn"
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <img
                src={Assets.whatapp}
                alt=""
                aria-hidden="true"
                className="footer-social-img"
                loading="lazy"
              />
            </a>
            <a
              className="footer-social-btn"
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <img
                src={Assets.instagram}
                alt=""
                aria-hidden="true"
                className="footer-social-img"
                loading="lazy"
              />
            </a>
            <a
              className="footer-social-btn"
              href="https://tiktok.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
            >
              <img
                src={Assets.tiktok}
                alt=""
                aria-hidden="true"
                className="footer-social-img"
                loading="lazy"
              />
            </a>
          </div>

            <div className="footer-bottom">
              <div className="footer-bottom-links">
                <a href="/privacy">Privacy Policy</a>
                <a href="/terms">Terms of Service</a>
              </div>
              <p className="footer-copy">2026 Lagoon Hakka, All right reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
