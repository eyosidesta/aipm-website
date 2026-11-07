import React from "react";
import { Link } from "react-router-dom";
import { PageHero, SubNav } from "../../components/Shared/PageHero";
import Reveal from "../../components/Shared/Reveal";
import { hero } from "../../assets/siteImages";

const PRAYER_WALL_SAMPLES = [
  {
    name: "A Partner in Prayer",
    date: "Oct 2026",
    body: "Praying for the missionary families serving in unreached areas — for safety, provision and open hearts to the Gospel.",
  },
  {
    name: "A Friend of AIPM",
    date: "Oct 2026",
    body: "Lord, prepare the hearts of everyone who will gather on Ambaricho this January. May the mountain once again be a place of breakthrough.",
  },
  {
    name: "A Student, Addis Ababa",
    date: "Sep 2026",
    body: "Please pray for the student training ministry as we start a new semester — for boldness to share our faith on campus.",
  },
];

function GetInvolved() {
  return (
    <>
      <PageHero
        img={hero}
        eyebrow="Join the Movement"
        crumb="Get Involved"
        title="We're glad you're here"
        description="However you're wired — to pray, to give, or to go — there's a place for you in what God is doing on Mount Ambaricho."
      />
      <SubNav
        links={[
          { href: "#pray", label: "Pray" },
          { href: "#partner", label: "Partner" },
          { href: "#visit", label: "Visit" },
          { href: "#prayer-request", label: "Prayer Wall" },
        ]}
      />

      <section id="pray">
        <Reveal className="wrap grid3" stagger>
          <div className="waycard" style={{ "--i": 0 }}>
            <div className="num">01</div>
            <h3>Pray</h3>
            <p>
              This prayer movement was started on Mount Ambaricho, where a renowned witch doctor whose family was
              worshipped there for over 700 years became a Christian. Today, 100,000+ gather every January 19th to
              pray for world evangelization &mdash; and your prayer matters just as much from wherever you are.
            </p>
            <a href="#prayer-request" className="btn btn-outline-ink">
              Submit a Prayer Request
            </a>
          </div>
          <div className="waycard" id="partner" style={{ "--i": 1 }}>
            <div className="num">02</div>
            <h3>Partner</h3>
            <p>
              AIPM is grateful for partners around the world. Become a prayer partner, or support the mission
              financially. We&apos;re looking for churches and individuals with a heart for missions, willing to
              commit to supporting our missionaries as they spread the Gospel in Ethiopia and beyond.
            </p>
            <Link to="/give" className="btn btn-outline-ink">
              See Ways to Give
            </Link>
          </div>
          <div className="waycard" id="visit" style={{ "--i": 2 }}>
            <div className="num">03</div>
            <h3>Visit</h3>
            <p>
              Do you have a passion for prayer and excitement for what God is doing in Ethiopia? Vision trips happen
              every January, around the annual gathering on Mount Ambaricho. Fill out an interest form and our team
              will respond shortly.
            </p>
            <Link to="/contact" className="btn btn-outline-ink">
              Request Vision Trip Info
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="alt" id="prayer-request">
        <div className="wrap narrow">
          <Reveal className="section-head">
            <div>
              <div className="eyebrow">Pray Without Ceasing</div>
              <h2>Our Prayer Wall</h2>
            </div>
            <p>
              &ldquo;Let us then with confidence draw near to the throne of grace, that we may receive mercy and find
              grace to help in time of need.&rdquo; &mdash; Hebrews 4:16
            </p>
          </Reveal>
          <Reveal style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 8, padding: 28, marginBottom: 28 }}>
            <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 10 }}>Submit a request</h3>
            <p style={{ color: "var(--text-soft)", fontSize: 15, lineHeight: 1.65, marginBottom: 18 }}>
              Fill out the form below and your request will be sent to our prayer team. If your request is shared
              publicly, it will appear on this wall so others may pray for you too.
            </p>
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
                <label>Prayer Request</label>
                <textarea placeholder="Share what's on your heart..." />
              </div>
              <div className="full">
                <button type="submit" className="btn btn-gold" style={{ marginTop: 4 }}>
                  Submit Request
                </button>
              </div>
            </form>
          </Reveal>
          <span className="sample-badge">Sample entries &mdash; for layout only</span>
          <Reveal className="pwall" stagger>
            {PRAYER_WALL_SAMPLES.map((entry, i) => (
              <div className="pcard" key={entry.name} style={{ "--i": i }}>
                <span className="pname">
                  {entry.name} <span className="pdate">{entry.date}</span>
                </span>
                <p>{entry.body}</p>
                <span className="plike">&#9825; Pray with us</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section>
        <div className="wrap narrow" style={{ textAlign: "center" }}>
          <Reveal className="eyebrow">Stay Connected</Reveal>
          <Reveal as="h2" style={{ marginTop: 10 }}>
            Register for our newsletter
          </Reveal>
          <Reveal style={{ marginTop: 14, color: "var(--text-soft)" }}>
            Stay up to date on all happenings with AIPM &mdash; the mountain, the missionaries, and the movement.
          </Reveal>
          <Reveal
            as="form"
            style={{ marginTop: 24, display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="you@example.com"
              style={{
                padding: "13px 16px",
                borderRadius: 5,
                border: "1px solid var(--line)",
                minWidth: 260,
                fontFamily: "inherit",
                fontSize: 15,
                background: "var(--surface)",
                color: "var(--text)",
              }}
            />
            <button type="submit" className="btn btn-gold">
              Sign Up
            </button>
          </Reveal>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <div className="inner">
            <Reveal>
              <h2>Ready to take the next step?</h2>
              <p>Prayer, partnership or a vision trip &mdash; we&apos;d love to hear from you.</p>
            </Reveal>
            <Reveal className="actions">
              <Link to="/give" className="btn btn-gold">
                Give Now
              </Link>
              <Link to="/contact" className="btn btn-outline-ink">
                Contact Us
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

export default GetInvolved;
