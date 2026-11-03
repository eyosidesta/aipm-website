import React from "react";
import { Link } from "react-router-dom";
import { PageHero, SubNav } from "../../components/Shared/PageHero";
import Reveal from "../../components/Shared/Reveal";
import { origin, founder } from "../../assets/siteImages";

const ACTS = [
  {
    no: "01",
    title: "The mountain",
    body: "The Ambaricho International Prayer & Missions Movement started on a 10,000-foot mountain called Ambaricho, six hours south of Addis Ababa near the town of Durame, Ethiopia. Mount Ambaricho was the seat of a dynasty of witchdoctors from the Abba Sarecho family — worshipped by the people of the area for over 700 years.",
  },
  {
    no: "02",
    title: "The missionaries",
    body: "Christian missionaries arrived in southern Ethiopia in the late 1920s from England, the USA, Canada, Australia and New Zealand. Their faithful endeavor brought the conversion of natives who were bold to share their faith in Christ. Their day-and-night prayer fueled the spread of the Gospel, transforming the lives of the people — today over 95% of the Kambatta tribe are evangelical Christians, and the 22nd of the Abba Sarecho dynasty submitted to Jesus Christ roughly 25 years ago.",
  },
  {
    no: "03",
    title: "The first gathering",
    body: "After Evangelical Christianity became the predominant faith among the Kambatta people, believers started climbing Mount Ambaricho to pray for the lost throughout Ethiopia. After one such hike, a few teenagers pooled their money for water and snacks. When they told Dr. Desta, he suggested they give some of it to missions instead — and a Prayer Movement that became a Mission Movement was born.",
  },
  {
    no: "04",
    title: "The movement continues",
    body: "Every January, people gather on top of Mt. Ambaricho to fast and pray for world missions. Attendance has grown from 500 to over 100,000 people. After prayer and worship, the people give and pledge to support world missions through AIPM. Over the past 25 years, AIPM has trained and sent more than 470 missionaries across Ethiopia — many serving in highly challenging environments, including armed conflict, inflation and famine.",
  },
  {
    no: "05",
    title: "The movement advances",
    body: "God has given AIPM a vision for a global missionary training university in Durame — the AIPM Global Missions University — to house and train missionaries from Ethiopia, Africa and beyond. The land has been acquired and the curriculum developed. Alongside it, a 7-story building project in Durame will generate ministry revenue through retail, food and medical services while training leaders and housing missionaries.",
  },
];

const BELIEFS = [
  "The Scriptures",
  "The Triune God",
  "God the Father",
  "God the Son",
  "God the Spirit",
  "Baptism and Communion",
  "Missions",
  "Things to Come",
  "Mankind",
  "Salvation",
  "The Church",
  "Church Unity",
];

const VALUES = [
  { n: "01", title: "Prayer", body: "We pray that God will raise up laborers for a great harvest in Ethiopia and all of Africa." },
  { n: "02", title: "Training", body: "We train and equip missionaries to go and make disciples of all nations, tribes and tongues." },
  { n: "03", title: "Gospel Advancement", body: "We send equipped disciples to plant churches that will reach the world." },
];

const TEAM = [
  { initials: null, img: founder, name: "Dr. Desta Langena", role: "AIPM Founder" },
  { initials: "ZO", name: "Zenebech Oushe", role: "AIPM Staff Member" },
  { initials: "KA", name: "Kaleb Ayele", role: "AIPM Staff Member" },
  { initials: "EL", name: "Eyosias Desta Langena", role: "AIPM Staff Member" },
  { initials: "TL", name: "Tamiru Langena", role: "AIPM Staff Member" },
  { initials: "TD", name: "Tekalign Daniel", role: "AIPM Staff Member" },
];

function OurStory() {
  return (
    <>
      <PageHero
        img={origin}
        eyebrow="Who We Are"
        crumb="Our Story"
        title="From idols to intercession"
        description="The story of a mountain, a dynasty of witchdoctors, and the prayer movement that now gathers 100,000 strong."
      />
      <SubNav
        links={[
          { href: "#history", label: "History" },
          { href: "#founder", label: "Founder" },
          { href: "#beliefs", label: "Beliefs" },
          { href: "#values", label: "Values" },
          { href: "#team", label: "Team" },
        ]}
      />

      <section id="history">
        <div className="wrap narrow">
          <Reveal className="eyebrow">The Movement Begins</Reveal>
          <Reveal as="h2" style={{ marginTop: 10 }}>
            A mountain of witchcraft, 700 years in the making
          </Reveal>
          <Reveal style={{ marginTop: 8 }}>
            {ACTS.map((act) => (
              <div className="act" key={act.no}>
                <div className="no">{act.no}</div>
                <div>
                  <h3>{act.title}</h3>
                  <p>{act.body}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="founder alt" id="founder">
        <div className="wrap">
          <Reveal as="img" src={founder} alt="Dr. Desta Langena Letta, founder of AIPM, with his wife." />
          <Reveal>
            <div className="eyebrow">The Founder</div>
            <blockquote style={{ marginTop: 14 }}>&ldquo;If we pray, God works! If we don&apos;t pray, we work.&rdquo;</blockquote>
            <div className="who">
              <div>
                <div className="name">Dr. Desta Langena Letta</div>
                <div className="role">Founder &amp; Director, AIPM</div>
              </div>
            </div>
            <p className="bio">
              A graduate in Physics from Addis Ababa University, Dr. Desta earned his M.A. in Missions in Singapore
              and a Doctorate in Missiology at Western Seminary, Portland. He directed the Ethiopian Kale Heywet
              missionary training school for six years before founding AIPM. What began as a suggestion to a handful
              of teenagers has grown into a movement that gathers 100,000 people a year and has sent hundreds of
              missionaries across Ethiopia and beyond.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="beliefs">
        <div className="wrap narrow">
          <Reveal className="section-head">
            <div>
              <div className="eyebrow">What We Believe</div>
              <h2>Our Statement of Faith</h2>
            </div>
            <p>AIPM holds to the historic, evangelical Christian faith across every area of doctrine and practice.</p>
          </Reveal>
          <Reveal className="beliefs">
            {BELIEFS.map((belief) => (
              <div key={belief}>{belief}</div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="alt" id="values">
        <div className="wrap">
          <Reveal className="section-head">
            <div>
              <div className="eyebrow">Our Values</div>
              <h2>What drives everything we do</h2>
            </div>
          </Reveal>
          <Reveal className="grid3" stagger>
            {VALUES.map((v) => (
              <div className="valuecard" key={v.n} style={{ "--i": Number(v.n) - 1 }}>
                <div className="n">{v.n}</div>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="team">
        <div className="wrap">
          <Reveal className="section-head">
            <div>
              <div className="eyebrow">Our Team</div>
              <h2>A called people, serving on the ground in Durame</h2>
            </div>
            <p>This dynamic grassroots team carries out the day-to-day work of AIPM in Southern Ethiopia.</p>
          </Reveal>
          <Reveal className="team-grid" stagger>
            {TEAM.map((member, i) => (
              <div className="teamcard" key={member.name} style={{ "--i": i }}>
                <div className="avatar">
                  {member.img ? (
                    <img src={member.img} alt={member.name} />
                  ) : (
                    <span className="mono">{member.initials}</span>
                  )}
                </div>
                <div className="name">{member.name}</div>
                <div className="role">{member.role}</div>
              </div>
            ))}
          </Reveal>
          <p style={{ marginTop: 28, color: "var(--text-soft)", fontSize: 15 }}>
            AIPM USA &mdash; our US support arm &mdash; is directed by its own board and staff.{" "}
            <Link to="/contact" style={{ color: "var(--accent-deep)", fontWeight: 700, textDecoration: "none" }}>
              Get in touch &rarr;
            </Link>
          </p>
        </div>
      </section>

      <section className="cta-band" id="give">
        <div className="wrap">
          <div className="inner">
            <Reveal>
              <h2>Be part of the next chapter</h2>
              <p>From a few teenagers pooling spare change to a movement of 100,000 &mdash; your support writes the next part of this story.</p>
            </Reveal>
            <Reveal className="actions">
              <Link to="/give" className="btn btn-gold">
                Give Now
              </Link>
              <Link to="/get-involved" className="btn btn-outline-ink">
                Get Involved
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurStory;
