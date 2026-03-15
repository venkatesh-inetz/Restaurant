import { useId, useState } from "react";
import Assets from "../../assets/Assets";
import "./FaqSection.css";

const faqs = [
  {
    question: "What are your restaurant's hours of operation?",
    answer: "We're open Monday to Sunday from 11:00 AM to 11:00 PM.",
  },
  {
    question: "Do I need a reservation to dine?",
    answer:
      "Reservations are recommended for peak hours, but walk-ins are always welcome.",
  },
  {
    question: "Can I modify my reservation after booking?",
    answer:
      "Yes. Contact us with your booking details and we'll help you update it based on availability.",
  },
  {
    question: "Do you offer takeout or delivery services?",
    answer:
      "Yes. We offer takeout and delivery through our ordering partners and direct phone orders.",
  },
  {
    question: "Are there vegetarian or gluten-free available?",
    answer:
      "We have vegetarian options and can accommodate many dietary needs. Ask our team for recommendations.",
  },
  {
    question: "Can I host a private event at your restaurant?",
    answer:
      "Yes. We support private events for groups. Reach out to confirm dates, menu options, and minimums.",
  },
  {
    question: "Do you accommodate requests for celebrations?",
    answer:
      "Absolutely. Let us know in advance and we'll do our best to make your celebration special.",
  },
];

const FaqSection = () => {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section className="faq-section">
      <div className="faq-inner">
        <div className="faq-top">
          <h2 className="faq-title">
            Your <span>Questions Answered</span>, Enjoy a<br />
            Seamless Experience!
          </h2>

          <div className="faq-top-right">
            <p className="faq-lede">
              Explore our FAQs to find answers to common inquiries, ensuring a
              smooth and enjoyable dining experience for all our guests
            </p>
            <button type="button" className="faq-more-btn">
              See More
            </button>
          </div>
        </div>

        <div className="faq-grid">
          <div className="faq-accordion" role="region" aria-label="FAQs">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;
              const contentId = `${baseId}-faq-${index}`;

              return (
                <div
                  key={item.question}
                  className={`faq-item${isOpen ? " is-open" : ""}`}
                >
                  <div className="faq-item-row">
                    <div className="faq-item-text">
                      <p className="faq-question">{item.question}</p>
                      {isOpen ? (
                        <p className="faq-answer" id={contentId}>
                          {item.answer}
                        </p>
                      ) : null}
                    </div>

                    <button
                      type="button"
                      className="faq-toggle"
                      aria-expanded={isOpen}
                      aria-controls={contentId}
                      onClick={() => toggle(index)}
                    >
                      <img
                        src={Assets.upArrowIcon}
                        alt=""
                        className="faq-arrow"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="faq-media" aria-hidden="true">
            <img
              src={Assets.favourite}
              alt=""
              className="faq-image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
