import { Instagram, Mail, MapPin, PhoneCall } from "lucide-react";
import "./ContactMethodsSection.css";

const methods = [
  {
    title: "Follow our Instagram",
    subtitle: "Speak to our supportive crew",
    value: "@lagoonhakka",
    href: "https://www.instagram.com/lagoonhakka/",
    icon: Instagram,
  },
  {
    title: "Chat to Support",
    subtitle: "Speak to our supportive crew",
    value: "hello@lagoonhakka.com",
    href: "mailto:hello@lagoonhakka.com",
    icon: Mail,
  },
  {
    title: "Visit Us",
    subtitle: "Speak to our supportive crew",
    value: "lagoonhakka.com",
    href: "https://lagoonhakka.com",
    icon: MapPin,
  },
  {
    title: "Call Us",
    subtitle: "Speak to our supportive crew",
    value: "+1 905-276-8685",
    href: "tel:+19052768685",
    icon: PhoneCall,
  },
];

const ContactMethodsSection = () => {
  return (
    <section className="contact-methods">
      <div className="contact-methods-inner">
        <div className="contact-methods-grid">
          {methods.map((m) => {
            const Icon = m.icon;
            return (
              <article key={m.title} className="contact-method">
                <div className="contact-method-icon" aria-hidden="true">
                  <Icon size={25} strokeWidth={2} />
                </div>
                <div className="contact-method-content">
                  <h3>{m.title}</h3>
                  <p>{m.subtitle}</p>
                  <a
                    className="contact-method-value"
                    href={m.href}
                    {...(m.href?.startsWith("http")
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                  >
                    {m.value}
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactMethodsSection;
