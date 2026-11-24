import React from "react";
import { Link } from "react-router-dom";
import { PageHero, SubNav } from "../../components/Shared/PageHero";
import Reveal from "../../components/Shared/Reveal";
import { hero } from "../../assets/siteImages";
import { PROJECTS } from "../../data/projects";

// Projects with real photos, in the same order as the Projects page.
const FEATURED_PROJECTS = PROJECTS.filter((p) =>
  ["birhan-building", "global-missions-university", "training", "charity"].includes(p.slug)
);

// The prayer wall form is not connected to the backend yet, so the section is
// hidden. Prayer requests go through the Contact form instead. Set to true to
// show it again once it's wired up.
const SHOW_PRAYER_WALL = false;

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
          ...(SHOW_PRAYER_WALL ? [{ href: "#prayer-request", label: "Prayer Wall" }] : []),
        ]}
      />

      <section id="pray">
        <Reveal className="wrap grid3" stagger>
          <div className="waycard" style={{ "--i": 0 }}>
            <div className="num">01</div>
            <h3>Pray</h3>
            <p>
              This prayer movement was started on Mount Ambaricho, where a renowned witch doctor whose family was
              worshipped there for over 500 years became a Christian. Today, 100,000+ gather every January 19th to
              pray for world evangelization &mdash; and your prayer matters just as much from wherever you are.
            </p>
            <Link to="/contact?reason=prayer" className="btn btn-outline-ink">
              Submit a Prayer Request
            </Link>
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

      {SHOW_PRAYER_WALL && (
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
      )}

      <section id="projects">
        <div className="wrap">
          <Reveal className="section-head">
            <div>
              <div className="eyebrow">Building the Mountain</div>
              <h2>Projects you can be part of</h2>
            </div>
            <p>
              <Link to="/projects" className="btn btn-outline-ink">
                See All Projects &rarr;
              </Link>
            </p>
          </Reveal>
          <Reveal className="projects-grid" stagger>
            {FEATURED_PROJECTS.map((project, i) => (
              <Link
                key={project.slug}
                to={`/projects/${project.slug}`}
                className="project-card"
                style={{ "--i": i, textDecoration: "none" }}
              >
                <div className="img-wrap">
                  <img src={project.heroImage} alt={project.title} />
                  <span className="status-pill dot">{project.status}</span>
                </div>
                <div className="body">
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                </div>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <div className="inner">
            <Reveal>
              <h2>Ready to take the next step?</h2>
              <p>
                Give toward the work, or contact us about prayer, partnership or a January vision trip &mdash;
                we&apos;d love to hear from you.
              </p>
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
