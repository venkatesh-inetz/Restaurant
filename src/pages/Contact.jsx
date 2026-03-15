import "../styles/Contact.css";
import ContactHeroSection from "../components/ContactHeroSection/ContactHeroSection";

import ContactFormSection from "../components/ContactFormSection/ContactFormSection";

const Contact = () => {
  return (
    <main className="contact-page">
      <ContactHeroSection />
      <ContactFormSection />
    </main>
  );
};

export default Contact;
