import React from "react";
import { Link } from "react-router-dom";
import { PageHero, SubNav } from "../../components/Shared/PageHero";
import Reveal from "../../components/Shared/Reveal";
import { Meter, FundMeter, Steps } from "../../components/Shared/Meter";
import { birhan, cross, gather2 } from "../../assets/siteImages";

function Projects() {
  return (
    <>
      <PageHero
        img={birhan}
        eyebrow="Building the Mountain"
        crumb="Projects"
        title="Tangible ground for a growing movement"
        description="Four projects, each turning prayer into practical ground — built gift by gift, despite global inflation."
      />
      <SubNav
        links={[
          { href: "#birhan", label: "Birhan Building" },
          { href: "#gmu", label: "Global Missions University" },
          { href: "#chicken", label: "Chicken Project" },
          { href: "#ddlf", label: "DDLF" },
        ]}
      />

      <section id="birhan">
        <div className="wrap split">
          <Reveal as="figure">
            <img src={birhan} alt="Concrete foundation work for the Birhan Building." />
            <figcaption>
              <div className="num">7</div>
              <div className="txt">Stories &mdash; retail, food, medical services, training and housing</div>
            </figcaption>
          </Reveal>
          <Reveal className="split-copy">
            <div className="eyebrow">01 &middot; Under Construction</div>
            <h2 style={{ marginTop: 10 }}>Birhan Building Project</h2>
            <p>
              A 7-story building project in Durame is underway. This building will generate ministry revenue through
              retail, food and medical services, while also training leaders and housing missionaries.
            </p>
            <p>Despite global inflation, AIPM and its faithful partners from around the world are making this vision become a reality.</p>
            <div style={{ maxWidth: 380 }}>
              <Meter label="Construction progress" percent={62} />
            </div>
            <Link to="/give" className="btn btn-outline-ink" style={{ marginTop: 14 }}>
              Give Toward Birhan Hall &rarr;
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="alt" id="gmu">
        <div className="wrap split rev">
          <Reveal as="figure">
            <img src={cross} alt="A vision for the future of Mount Ambaricho." />
          </Reveal>
          <Reveal className="split-copy">
            <div className="eyebrow">02 &middot; Coming Soon</div>
            <h2 style={{ marginTop: 10 }}>AIPM Global Missions University</h2>
            <p>
              God has given AIPM a vision for a global missionary training university in Durame, Ethiopia. The AIPM
              Global Missions University (AIPM GMU) will house and train missionaries from all over Ethiopia, Africa,
              and beyond.
            </p>
            <p>
              The land for AIPM GMU has been acquired, the curriculum has been developed, and AIPM is well on its way
              to training and sending thousands of missionaries for the glory of God.
            </p>
            <div style={{ maxWidth: 320 }}>
              <Steps
                steps={[
                  { label: "Land Acquired", done: true },
                  { label: "Curriculum", done: true },
                  { label: "Campus Built", done: false },
                ]}
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section id="chicken">
        <div className="wrap narrow">
          <Reveal className="section-head">
            <div>
              <div className="eyebrow">03 &middot; Sustaining the Mission</div>
              <h2>The Chicken Project</h2>
            </div>
          </Reveal>
          <Reveal style={{ color: "var(--text-soft)", fontSize: 16.5, lineHeight: 1.75, maxWidth: "70ch" }}>
            <p>
              Not every project is a building. AIPM&apos;s Chicken Project &mdash; managing a poultry facility, grain
              development, and chicken and egg sales &mdash; is one of the practical, ongoing ways missionaries are
              supported day to day.
            </p>
            <p style={{ marginTop: 14 }}>
              It&apos;s a small but steady picture of how the movement sustains itself: prayer on the mountain, and
              practical provision on the ground.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="alt" id="ddlf">
        <div className="wrap split">
          <Reveal as="figure">
            <img src={gather2} alt="Community members in Durame." />
          </Reveal>
          <Reveal className="split-copy">
            <div className="eyebrow">04 &middot; Compassion</div>
            <h2 style={{ marginTop: 10 }}>Dr. Desta Langena Foundation</h2>
            <p>
              The Dr. Desta Langena Foundation (DDLF) is a charitable organization in Durame, Ethiopia, that exists
              to help men, women and children in great need through food, clothing and encouragement.
            </p>
            <p>Through team building and training, DDLF is able to provide much-needed resources to those in the greatest need.</p>
            <span className="sample-badge" style={{ marginTop: 6, display: "inline-block" }}>
              DDLF&apos;s own website is coming soon
            </span>
          </Reveal>
        </div>
      </section>

      <section className="cta-band" id="give">
        <div className="wrap">
          <div className="inner">
            <Reveal>
              <h2>Help build what&apos;s next</h2>
              <p>Every gift moves Birhan Hall, the Global Missions University, and the whole mission forward.</p>
              <FundMeter
                raisedLabel="$48,200 raised"
                goalLabel="Goal: $120,000"
                percent={40}
                note="Toward Birhan Hall — placeholder figures, ready for your real campaign numbers."
              />
            </Reveal>
            <Reveal className="actions">
              <Link to="/give" className="btn btn-gold">
                Give Now
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
