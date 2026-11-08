import React, { useState } from "react";
import { PageHero } from "../../components/Shared/PageHero";
import Reveal from "../../components/Shared/Reveal";
import { gather2 } from "../../assets/siteImages";
import { sendContactMessage } from "../../utils/ApiService/contact.api";

const INITIAL_FORM = { name: "", phone: "", email: "", reason: "General question", message: "" };

function ContactUs() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const res = await sendContactMessage(form);
    if (res && res.status === 201) {
      setStatus("sent");
      setForm(INITIAL_FORM);
    } else {
      setStatus("error");
    }
  };

  return (
    <>
      <PageHero img={gather2} eyebrow="Get In Touch" crumb="Contact" title="We'd love to hear from you" />

      <section>
        <Reveal className="wrap" stagger>
          <div className="loccard" style={{ "--i": 0, maxWidth: 480 }}>
            <div className="eyebrow">Ethiopia</div>
            <h3>AIPM &mdash; Durame</h3>
            <div className="addr">
              Zeraro Kebele, Durame Town
              <br />
              Kambatta Zone, Central Region, Ethiopia
            </div>
          </div>
        </Reveal>
      </section>

      <section className="alt">
        <div className="wrap narrow">
          <Reveal className="section-head">
            <div>
              <div className="eyebrow">Send a Message</div>
              <h2>Questions, vision trips, partnership &mdash; we&apos;re listening</h2>
            </div>
          </Reveal>
          <Reveal style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 8, padding: 30 }}>
            <form className="formgrid" onSubmit={handleSubmit}>
              <div className="field">
                <label>Name</label>
                <input type="text" name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
              </div>
              <div className="field">
                <label>Phone Number</label>
                <input type="tel" name="phone" placeholder="Your phone number" value={form.phone} onChange={handleChange} required />
              </div>
              <div className="field">
                <label>Email (optional)</label>
                <input type="email" name="email" placeholder="you@example.com" value={form.email} onChange={handleChange} />
              </div>
              <div className="field full">
                <label>Reason for contact</label>
                <select name="reason" value={form.reason} onChange={handleChange}>
                  <option>General question</option>
                  <option>Prayer request</option>
                  <option>Partnership &amp; giving</option>
                  <option>January vision trip</option>
                </select>
              </div>
              <div className="field full">
                <label>Message</label>
                <textarea name="message" placeholder="How can we help?" value={form.message} onChange={handleChange} required />
              </div>
              <div className="full">
                <button type="submit" className="btn btn-gold" style={{ marginTop: 4 }} disabled={status === "sending"}>
                  {status === "sending" ? "Sending…" : "Send Message"}
                </button>
                {status === "sent" && (
                  <p style={{ color: "var(--accent-deep)", marginTop: 12, fontSize: 14.5 }}>
                    Thank you &mdash; your message has been sent. We&apos;ll be in touch soon.
                  </p>
                )}
                {status === "error" && (
                  <p style={{ color: "#B3412C", marginTop: 12, fontSize: 14.5 }}>
                    Something went wrong sending your message. Please try again in a moment.
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="pullquote">
        <Reveal className="wrap">
          <p>If we pray, God works! If we don&apos;t pray, we work.</p>
          <div className="attr">Dr. Desta Langena Letta &mdash; Founder, AIPM</div>
        </Reveal>
      </section>
    </>
  );
}

export default ContactUs;
