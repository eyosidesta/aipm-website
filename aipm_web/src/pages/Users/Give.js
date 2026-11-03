import React, { useState } from "react";
import Reveal from "../../components/Shared/Reveal";
import { FundMeter } from "../../components/Shared/Meter";

const AMOUNTS = ["$25", "$100", "$300", "Other"];

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
  const [selected, setSelected] = useState("$100");

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
            AIPM USA exists to support and encourage the Ambaricho Prayer and Mission Movement with prayer and
            financial support &mdash; as partners in the work with AIPM and the Ethiopian churches who send and
            support their own missionaries and evangelists.
          </p>
          <div style={{ marginTop: 28, maxWidth: 420 }}>
            <div className="give-amounts">
              {AMOUNTS.map((amount) => (
                <button
                  key={amount}
                  type="button"
                  className={`amtbtn${selected === amount ? " sel" : ""}`}
                  onClick={() => setSelected(amount)}
                >
                  {amount}
                </button>
              ))}
            </div>
            <a href="#donate" className="btn btn-gold" style={{ marginTop: 18, width: "100%", justifyContent: "center" }}>
              Make a Donation &rarr;
            </a>
            <p style={{ color: "#9FB0BA", fontSize: 12.5, marginTop: 10 }}>
              Placeholder checkout &mdash; connect your real payment processor when ready.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap narrow">
          <Reveal className="section-head">
            <div>
              <div className="eyebrow">The Need</div>
              <h2>$100&ndash;$300 a month supports a missionary family</h2>
            </div>
          </Reveal>
          <Reveal style={{ color: "var(--text-soft)", fontSize: 16.5, lineHeight: 1.75 }}>
            <p>
              Because national resources are limited, AIPM USA seeks to raise up to &mdash; but not more than &mdash;
              50% of the support for AIPM. The remaining support comes from the Ethiopian church itself, a
              partnership that keeps the movement rooted locally while still reaching further than it could alone.
            </p>
            <p style={{ marginTop: 14 }}>
              Depending on the location of the missionary, the cost to fully support a missionary family is{" "}
              <strong style={{ color: "var(--text)" }}>$100&ndash;$300 per month</strong>. Your gift &mdash;
              one-time or monthly &mdash; goes directly toward that support.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="alt">
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
            <FundMeter
              raisedLabel="$48,200 raised"
              goalLabel="Goal: $120,000"
              percent={40}
              note="Placeholder figures, ready for your real campaign numbers."
            />
            <a href="#donate" className="btn btn-gold" style={{ marginTop: 20 }}>
              Give Toward Birhan Hall
            </a>
          </Reveal>
        </div>
      </section>

      <section className="pullquote">
        <Reveal className="wrap">
          <p>
            Because national resources are limited, we seek to raise up to &mdash; but not more than &mdash; half of
            the support for AIPM. The rest comes from the Ethiopian church itself.
          </p>
          <div className="attr">AIPM USA &mdash; Mission Support</div>
        </Reveal>
      </section>
    </>
  );
}

export default Give;
