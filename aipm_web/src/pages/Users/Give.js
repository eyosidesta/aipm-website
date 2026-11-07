import React from "react";
import { Link } from "react-router-dom";
import Reveal from "../../components/Shared/Reveal";

// Amount picker + donation buttons below are disabled until a real payment
// processor is connected — see the commented-out blocks in this file.
// Giving is by whatever amount the partner chooses — no preset amounts.

const GIVE_CATEGORIES = [
  {
    title: "Prayer & Mission",
    body: "Support the missionaries trained and sent across Ethiopia, and the annual gathering of prayer on Mount Ambaricho.",
  },
  {
    title: "Training",
    body: "Help disciple students on university campuses across Ethiopia, raising up the next generation of intercessors and missionaries.",
  },
  {
    title: "Global Missions University",
    body: "Partner toward the AIPM Global Missions University in Durame — land acquired, curriculum developed, campus still to come.",
  },
  {
    title: "Charity",
    body: "Provide food, clothing and encouragement for men, women and children in great need around Durame.",
  },
];

const WAYS_TO_GIVE = [
  {
    title: "Monthly Partner",
    body: "Commit to a recurring gift that fully or partially supports a missionary family’s monthly needs — the most sustainable way to give.",
  },
  {
    title: "One-Time Gift",
    body: "Give toward the mission broadly, or designate your gift to Birhan Hall, the Global Missions University, or a specific missionary.",
  },
  {
    title: "Church & Group Partnership",
    body: "Is your church looking for a mission field to partner with long-term? AIPM welcomes churches and groups as committed partners.",
  },
];

function Give() {
  return (
    <>
      <section className="give-hero">
        <div className="wrap" style={{ paddingTop: 150, paddingBottom: 70 }}>
          <div className="eyebrow" style={{ color: "var(--gold-pale)" }}>
            Mission Support
          </div>
          <h1 style={{ color: "#FBF7EC", fontSize: "clamp(32px,5vw,54px)", fontWeight: 600, marginTop: 10, maxWidth: "16ch" }}>
            Partner with the mountain
          </h1>
          <p style={{ color: "#DCE3E6", fontSize: 17, maxWidth: "62ch", marginTop: 16, lineHeight: 1.7 }}>
            AIPM exists to carry out the Ambaricho Prayer and Mission Movement &mdash; prayer, mission, training and
            charity &mdash; through partners who support the work with their prayer and giving.
          </p>
          {/* Donation flow hidden until a real payment processor is connected — re-enable when ready.
          Giving is open-amount — let the partner enter whatever they'd like to give, no preset buttons.
          <div style={{ marginTop: 28, maxWidth: 420 }}>
            <a href="#donate" className="btn btn-gold" style={{ marginTop: 18, width: "100%", justifyContent: "center" }}>
              Make a Donation &rarr;
            </a>
            <p style={{ color: "#9FB0BA", fontSize: 12.5, marginTop: 10 }}>
              Placeholder checkout &mdash; connect your real payment processor when ready.
            </p>
          </div>
          */}
        </div>
      </section>

      <section>
        <div className="wrap narrow">
          <Reveal className="section-head">
            <div>
              <div className="eyebrow">The Need</div>
              <h2>Every gift sustains the movement</h2>
            </div>
          </Reveal>
          <Reveal style={{ color: "var(--text-soft)", fontSize: 16.5, lineHeight: 1.75 }}>
            <p>
              Because national resources are limited, AIPM seeks to raise up to &mdash; but not more than &mdash;
              half of the support it needs. The remaining support comes from the Ethiopian church itself, a
              partnership that keeps the movement rooted locally while still reaching further than it could alone.
            </p>
            <p style={{ marginTop: 14 }}>
              There&apos;s no set amount &mdash; give whatever you&apos;re able to, one-time or monthly, toward
              whichever part of the work God lays on your heart.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <Reveal className="section-head">
            <div>
              <div className="eyebrow">Where Your Gift Goes</div>
              <h2>Four pillars, one mountain</h2>
            </div>
          </Reveal>
          <Reveal className="givecats" stagger>
            {GIVE_CATEGORIES.map((cat, i) => (
              <div className="waygive" key={cat.title} style={{ "--i": i }}>
                <h3>{cat.title}</h3>
                <p>{cat.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal className="section-head">
            <div>
              <div className="eyebrow">Ways to Give</div>
              <h2>Choose what fits you</h2>
            </div>
          </Reveal>
          <Reveal className="waysgive" stagger>
            {WAYS_TO_GIVE.map((way, i) => (
              <div className="waygive" key={way.title} style={{ "--i": i }}>
                <h3>{way.title}</h3>
                <p>{way.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="alt">
        <div className="wrap narrow">
          <Reveal className="section-head">
            <div>
              <div className="eyebrow">Direct Bank Transfer</div>
              <h2>Give directly to AIPM Ethiopia</h2>
            </div>
            <p>Prefer a bank transfer? Use the account details below.</p>
          </Reveal>
          <Reveal className="loccard" style={{ maxWidth: 480 }}>
            <span className="sample-badge" style={{ marginBottom: 6 }}>
              Bank details coming soon
            </span>
            <div className="bankrow">
              <span className="k">Bank Name</span>
              <span className="v">&mdash;</span>
            </div>
            <div className="bankrow">
              <span className="k">Account Name</span>
              <span className="v">&mdash;</span>
            </div>
            <div className="bankrow">
              <span className="k">Account Number</span>
              <span className="v">&mdash;</span>
            </div>
            <div className="bankrow">
              <span className="k">Branch / SWIFT</span>
              <span className="v">&mdash;</span>
            </div>
            <p style={{ color: "var(--text-faint)", fontSize: 13, marginTop: 14 }}>
              In the meantime, reach out via the{" "}
              <Link to="/contact" style={{ color: "var(--accent-deep)", fontWeight: 700, textDecoration: "none" }}>
                Contact page
              </Link>{" "}
              for current transfer details.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="birhan">
        <div className="wrap narrow">
          <Reveal className="section-head">
            <div>
              <div className="eyebrow">Toward Birhan Hall</div>
              <h2>Help finish the 7-story building in Durame</h2>
            </div>
            <p>Retail, food and medical services, leader training, and missionary housing &mdash; all under one roof.</p>
          </Reveal>
          <Reveal style={{ maxWidth: 480 }}>
            {/* Funding progress hidden until there's a real campaign to report — re-enable when ready.
            <FundMeter
              raisedLabel="$48,200 raised"
              goalLabel="Goal: $120,000"
              percent={40}
              note="Placeholder figures, ready for your real campaign numbers."
            />
            */}
            {/* Donation button hidden until a real payment processor is connected — re-enable when ready.
            <a href="#donate" className="btn btn-gold" style={{ marginTop: 20 }}>
              Give Toward Birhan Hall
            </a>
            */}
          </Reveal>
        </div>
      </section>

      <section className="pullquote">
        <Reveal className="wrap">
          <p>
            Because national resources are limited, we seek to raise up to &mdash; but not more than &mdash; half of
            the support for AIPM. The rest comes from the Ethiopian church itself.
          </p>
          <div className="attr">AIPM &mdash; Mission Support</div>
        </Reveal>
      </section>
    </>
  );
}

export default Give;
