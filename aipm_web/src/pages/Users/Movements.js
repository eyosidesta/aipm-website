import React from "react";
import { Link } from "react-router-dom";
import { PageHero, SubNav } from "../../components/Shared/PageHero";
import Reveal from "../../components/Shared/Reveal";
import { hero, origin, gather2 } from "../../assets/siteImages";
import { charityCover, trainingTeaching } from "../../assets/projectGalleries";

function Movements() {
  return (
    <>
      <PageHero
        img={gather2}
        eyebrow="What We Do"
        crumb="Movements"
        title="Four pillars, one mountain"
        description="Prayer, mission, training and charity — each rooted in the same summit where Ambaricho's story began."
      />
      <SubNav
        links={[
          { href: "#prayer", label: "Prayer" },
          { href: "#mission", label: "Mission" },
          { href: "#training", label: "Training" },
          { href: "#charity", label: "Charity" },
        ]}
      />

      <section id="prayer">
        <div className="wrap split">
          <Reveal as="figure">
            <img src={hero} alt="Tens of thousands gather on Mount Ambaricho to pray." />
            <figcaption>
              <div className="num">Jan 19</div>
              <div className="txt">The annual day of fasting and prayer on the summit</div>
            </figcaption>
          </Reveal>
          <Reveal className="split-copy">
            <div className="eyebrow">01 &middot; Prayer Movement</div>
            <h2 style={{ marginTop: 10 }}>Pray Without Ceasing</h2>
            <p>
              This incredible prayer movement was started on Mount Ambaricho, the tallest mountain in southern
              Ethiopia, where a renowned witch doctor whose family was worshipped there for over 700 years became a
              Christian.
            </p>
            <p>
              Tens of thousands once gathered every year to worship the witchdoctor and his family line. Today, by
              God&apos;s grace, as many as 100,000 Christians gather every January 19th on the summit to pray for
              world evangelization.
            </p>
            <p>
              <strong>
                &ldquo;Let us then with confidence draw near to the throne of grace, that we may receive mercy and
                find grace to help in time of need.&rdquo;
              </strong>{" "}
              &mdash; Hebrews 4:16
            </p>
            <Link to="/get-involved#prayer-request" className="btn btn-outline-ink" style={{ marginTop: 8 }}>
              Submit a Prayer Request &rarr;
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="alt" id="mission">
        <div className="wrap split rev">
          <Reveal as="figure">
            <img src={origin} alt="A missionary addresses a gathered crowd." />
            <figcaption>
              <div className="num">470+</div>
              <div className="txt">Missionaries trained and sent in the last 25 years</div>
            </figcaption>
          </Reveal>
          <Reveal className="split-copy">
            <div className="eyebrow">02 &middot; Mission</div>
            <h2 style={{ marginTop: 10 }}>Sent to the hardest places</h2>
            <p>
              Over the past 25 years, AIPM has trained and sent more than 470 missionaries across Ethiopia. Through a
              firm reliance on prayer, God is using each of them to expand His kingdom across the nation.
            </p>
            <p>
              AIPM missionaries serve in highly challenging environments &mdash; including armed conflict, global
              inflation and famine &mdash; remaining faithful and sharing the Gospel with thousands weekly.
            </p>
            <p>
              Missionaries are supported in practical ways too, including AIPM&apos;s own <strong>Chicken Project</strong>{" "}
              &mdash; a poultry facility, grain development, and chicken and egg sales that help fund ongoing
              ministry.
            </p>
            <Link to="/give" className="btn btn-outline-ink" style={{ marginTop: 8 }}>
              Support a Missionary &rarr;
            </Link>
          </Reveal>
        </div>
      </section>

      <section id="training">
        <div className="wrap split">
          <Reveal as="figure">
            <img src={trainingTeaching} alt="Leaders teaching at an AIPM training gathering." />
          </Reveal>
          <Reveal className="split-copy">
            <div className="eyebrow">03 &middot; Training</div>
            <h2 style={{ marginTop: 10 }}>Raising the next generation</h2>
            <p>
              What began with a handful of teenagers pooling their money after a hike up Ambaricho has grown into a
              movement that disciples young people across Ethiopia&apos;s universities and campuses &mdash; trained in
              prayer, Scripture and evangelism, many going on to become the missionaries, pastors and leaders who
              carry the movement into its next generation.
            </p>
            <p>
              That same vision for training is now taking permanent shape in Durame: the{" "}
              <strong>AIPM Global Missions University</strong>, a future home to house and train missionaries from
              Ethiopia, Africa and beyond. The land has been acquired and the curriculum developed &mdash; AIPM is
              well on its way to training and sending thousands of missionaries for the glory of God.
            </p>
            <Link to="/projects/training" className="btn btn-outline-ink" style={{ marginTop: 8 }}>
              See How We Train &rarr;
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="alt" id="charity">
        <div className="wrap split rev">
          <Reveal as="figure">
            <img src={charityCover} alt="AIPM's Humanitarian Aid and Social Development team at a community event." />
          </Reveal>
          <Reveal className="split-copy">
            <div className="eyebrow">04 &middot; Charity</div>
            <h2 style={{ marginTop: 10 }}>Compassion in Durame</h2>
            <p>
              AIPM&apos;s Humanitarian Aid and Social Development ministry exists to help men, women and children in
              great need around Durame, Ethiopia, through food, clothing and encouragement.
            </p>
            <p>
              Through team building and training, this work provides much-needed resources to those in the greatest
              need &mdash; the compassionate arm of the AIPM movement.
            </p>
            <Link to="/projects/charity" className="btn btn-outline-ink" style={{ marginTop: 8 }}>
              See How We Help &rarr;
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="cta-band" id="give">
        <div className="wrap">
          <div className="inner">
            <Reveal>
              <h2>Every movement needs partners</h2>
              <p>Whether it&apos;s prayer, training, sending or compassion &mdash; there&apos;s a place for you in what God is doing on the mountain.</p>
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

export default Movements;
