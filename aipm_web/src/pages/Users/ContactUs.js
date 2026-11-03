import React from "react";
import { PageHero } from "../../components/Shared/PageHero";
import Reveal from "../../components/Shared/Reveal";
import { gather2 } from "../../assets/siteImages";

function ContactUs() {
  return (
    <>
      <PageHero img={gather2} eyebrow="Get In Touch" crumb="Contact" title="We'd love to hear from you" minHeight={300} />

      <section>
        <Reveal className="wrap grid2" stagger>
          <div className="loccard" style={{ "--i": 0 }}>
            <div className="eyebrow">Ethiopia</div>
            <h3>AIPM &mdash; Durame</h3>
            <div className="addr">The movement&apos;s home &mdash; six hours south of Addis Ababa, near Mount Ambaricho.</div>
          </div>
          <div className="loccard" style={{ "--i": 1 }}>
            <div className="eyebrow">United States</div>
            <h3>AIPM USA &mdash; Ormond Beach, Florida</h3>
            <div className="addr">
              226 North Nova Road, Box 302
              <br />
              Ormond Beach, Florida 32174
            </div>
            <a href="mailto:info@aipmusa.org" className="link">
              info@aipmusa.org &rarr;
            </a>
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
            <form
              className="formgrid"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="field">
                <label>Name</label>
                <input type="text" placeholder="Your name" />
              </div>
              <div className="field">
                <label>Email</label>
                <input type="email" placeholder="you@example.com" />
              </div>
              <div className="field full">
                <label>Reason for contact</label>
                <select defaultValue="General question">
                  <option>General question</option>
                  <option>Prayer request</option>
                  <option>Partnership &amp; giving</option>
                  <option>January vision trip</option>
                </select>
              </div>
              <div className="field full">
                <label>Message</label>
                <textarea placeholder="How can we help?" />
              </div>
              <div className="full">
                <button type="submit" className="btn btn-gold" style={{ marginTop: 4 }}>
                  Send Message
                </button>
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
