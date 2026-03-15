import { useState } from "react";
import Assets from "../../assets/Assets";
import "./ContactFormSection.css";

const ContactFormSection = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const onChange = (key) => (event) => {
    setForm((prev) => ({ ...prev, [key]: event.target.value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setForm({ firstName: "", lastName: "", email: "", message: "" });
  };

  return (
    <section className="contact-form">
      <div className="contact-form-inner">
        <div className="contact-form-grid">
          <div className="contact-form-media" aria-hidden="true">
            <img src={Assets.contactform} alt="" loading="lazy" />
          </div>

          <div className="contact-form-card">
            <h2>Get in Touch with us</h2>
            <p>
              Have questions, need assistance, or just want to say hello? We're
              here to help! Reach out to us via phone, email, or our contact
              form, and our team will respond promptly to ensure you get the
              support and information you need.
            </p>

            <form onSubmit={onSubmit} className="contact-form-fields">
              <div className="contact-form-row">
                <label>
                  <span>First name</span>
                  <input
                    value={form.firstName}
                    onChange={onChange("firstName")}
                    placeholder="Tell us who you are"
                    required
                  />
                </label>
                <label>
                  <span>Last name</span>
                  <input
                    value={form.lastName}
                    onChange={onChange("lastName")}
                    placeholder="Tell us who you are"
                    required
                  />
                </label>
              </div>

              <label>
                <span>Email address</span>
                <input
                  type="email"
                  value={form.email}
                  onChange={onChange("email")}
                  placeholder="Where can we reach you?"
                  required
                />
              </label>

              <label>
                <span>How can we help?</span>
                <textarea
                  value={form.message}
                  onChange={onChange("message")}
                  placeholder="Tell us your Specific Case"
                  rows={6}
                  required
                />
              </label>

              <button type="submit">Send to Us</button>

              <small className="terms">
                By contacting us, you agree to our <span>Terms </span> of
                Service and <span> Privacy Policy</span>
              </small>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
