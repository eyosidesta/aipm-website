import React from "react";
import { Link } from "react-router-dom";
import Reveal from "../../components/Shared/Reveal";
import Marquee from "../../components/Shared/Marquee";
// VideoPlaceholderCard is unused while the Voices section is hidden — see below.
import { Meter } from "../../components/Shared/Meter";
import { useLightbox } from "../../context/LightboxContext";
import { hero, origin, founder, birhan, cross } from "../../assets/siteImages";

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M9 7v10l8-5-8-5Z" fill="#FBF7EC" />
    </svg>
  );
}

const MOVEMENTS = [
  {
    to: "/movements#prayer",
    title: "Prayer Movement",
    desc: "Every January 19th, as many as 100,000 gather on Ambaricho's summit to fast and pray for world evangelization.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 3v12M7 9h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M5 21c0-4 3-6 7-6s7 2 7 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    to: "/movements#students",
    title: "University Students Movement",
    desc: "Raising the next generation of intercessors and missionaries on campuses across Ethiopia.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 4 3 8l9 4 9-4-9-4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M6 11v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    to: "/movements#mission",
    title: "Mission Movement",
    desc: "470+ missionaries trained and sent to unreached peoples across Ethiopia over the past 25 years.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
        <path d="M4 12h16M12 4c2.5 2.3 4 5 4 8s-1.5 5.7-4 8c-2.5-2.3-4-5-4-8s1.5-5.7 4-8Z" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    to: "/movements#ddlf",
    title: "Dr. Desta Langena Foundation",
    desc: "Food, clothing and encouragement for men, women and children in great need around Durame.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 21s-7-5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4-9.5 9-9.5 9Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
  },
];

// Voices (video testimonies) hidden for now — see commented section below.
// const VOICES = [
//   { img: origin, tag: "Mission Movement", title: "A missionary's testimony" },
//   { img: hero, tag: "Prayer Movement", title: "Why we climb every January" },
//   { img: gather2, tag: "Students", title: "A new generation of intercessors" },
//   { img: birhan, tag: "Birhan Building", title: "Building a home for prayer" },
// ];

function Home() {
  const { open } = useLightbox();

  return (
    <>
      <section className="hero">
        {/*
          Ready to swap in real footage: replace the <video> source below
          with your own file in /public/videos, or point at a hosted CDN URL.
          Autoplay video must stay muted to play in every browser.
        */}
        <video className="bgvideo" autoPlay muted loop playsInline poster={hero}>
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="wrap hero-inner">
          <div className="hero-kicker amh">አምበሪቾ አለም አቀፍ የጸሎት እና የወንጌል አገልግሎት</div>
          <div className="hero-kicker-en">Ambaricho International Prayer &amp; Mission Movement</div>
          <h1>
            A mountain of idols.
            <br />
            Now a mountain of <em>prayer.</em>
          </h1>
          <p className="lede">
            For more than 700 years, Mount Ambaricho was worshipped as the seat of a witchdoctor dynasty. Today, as
            many as 100,000 believers climb its 3,028&nbsp;metre summit every January&nbsp;19th to fast and pray for
            world evangelism.
          </p>
          <div className="hero-ctas">
            <Link to="/give" className="btn btn-gold">
              Give Toward the Mountain
            </Link>
            <button
              className="playbtn"
              onClick={() =>
                open({
                  img: hero,
                  title: "The Annual Gathering",
                  kind: "video",
                  videoSrc: "/videos/hero.mp4",
                })
              }
            >
              <span className="ring">
                <PlayIcon />
              </span>
              Watch the Gathering
            </button>
          </div>
        </div>
        <div className="scrollcue">
          <span>Scroll</span>
          <span className="line" />
        </div>
      </section>

      <Marquee words={["Prayer", "Fasting", "Revival", "Mission", "Training", "Compassion"]} />

      <section className="stats">
        <div className="wrap">
          <Reveal className="bento" stagger>
            <div className="bstat feature" style={{ "--feat-img": `url(${hero})` }}>
              <span className="tag">Kambatta Highlands</span>
              <div className="num">3,028m</div>
              <div className="label">Summit of Mount Ambaricho &mdash; once a seat of idol worship, now a place of prayer.</div>
            </div>
            <div className="bstat" style={{ "--i": 1 }}>
              <div className="num">100,000+</div>
              <div className="label">Gather on the mountain every January 19th &mdash; up from just 500</div>
            </div>
            <div className="bstat" style={{ "--i": 2 }}>
              <div className="num">470+</div>
              <div className="label">Missionaries trained and sent in the last 25 years</div>
            </div>
            <div className="bstat wide" style={{ "--i": 3 }}>
              <div className="num">700+ years of idol worship, now a mountain of prayer</div>
              <div className="label">The last of the Abba Sarecho witchdoctor dynasty became a follower of Christ</div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="origin">
        <div className="wrap split">
          <Reveal as="figure">
            <img src={origin} alt="A pastor addresses a vast crowd seated on the open hillside of Mount Ambaricho." />
            <figcaption>
              <div className="num">1920s</div>
              <div className="txt">Missionaries from England, the US, Canada, Australia &amp; New Zealand first reach southern Ethiopia</div>
            </figcaption>
          </Reveal>
          <Reveal className="split-copy">
            <div className="eyebrow">Our Story</div>
            <h2 style={{ marginTop: 10 }}>From Abba Sarecho&apos;s mountain to God&apos;s mountain</h2>
            <p>
              For over 700 years, Mount Ambaricho was the seat of a witchdoctor family, Abba Sarecho &mdash;
              worshipped by tens of thousands who gathered there each year.
            </p>
            <p>
              After missionaries carried the Gospel into southern Ethiopia in the late 1920s, prayer transformed the
              region: over 95% of the Kambatta people are evangelical Christians today, and the 22nd of the Abba
              Sarecho dynasty became a follower of Jesus Christ himself.
            </p>
            <p>
              What began with a handful of teenagers pooling money after a hike has grown into a movement spanning
              prayer, training and mission across Ethiopia and beyond.
            </p>
            <Link to="/our-story" className="btn btn-outline-ink" style={{ marginTop: 8 }}>
              Read Our Full Story &rarr;
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bigword">
        <div className="wrap">
          <Reveal className="track">
            <span className="from">Idols</span>
            <span className="arrow">&#10230;</span>
            <span className="to">Intercession</span>
          </Reveal>
          <div className="cap">The story of every summit, every missionary, every gathering</div>
        </div>
      </section>

      <section className="founder alt">
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
              missionary training school for six years before founding AIPM &mdash; experience that shaped a
              movement now training and sending missionaries across Ethiopia and beyond.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="movements">
        <div className="wrap">
          <Reveal className="section-head">
            <div>
              <div className="eyebrow">What We Do</div>
              <h2>Three movements, one mountain</h2>
            </div>
            <p>Prayer, training and gospel advancement &mdash; each rooted in the same summit where Ambaricho&apos;s story began.</p>
          </Reveal>
          <Reveal className="rail-shell">
            <div className="rail">
              {MOVEMENTS.map((m) => (
                <Link key={m.to} to={m.to} className="movecard">
                  <div className="icon">{m.icon}</div>
                  <h3>{m.title}</h3>
                  <p>{m.desc}</p>
                  <span className="more">Learn more &rarr;</span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Voices section hidden until there's real video to show — re-enable once footage is ready.
      <section className="alt" id="voices">
        <div className="wrap">
          <Reveal className="section-head">
            <div>
              <div className="eyebrow">Voices</div>
              <h2>Stories from the mountain</h2>
            </div>
            <p>Short video testimonies from missionaries, students and families — placeholders, ready for your footage.</p>
          </Reveal>
          <Reveal className="rail-shell">
            <div className="rail">
              {VOICES.map((v) => (
                <VideoPlaceholderCard key={v.title} img={v.img} tag={v.tag} title={v.title} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      */}

      <section id="projects">
        <div className="wrap">
          <Reveal className="section-head">
            <div>
              <div className="eyebrow">Building the Mountain</div>
              <h2>Projects underway across AIPM</h2>
            </div>
            <p>
              <Link to="/projects" className="btn btn-outline-ink">
                See All Projects &rarr;
              </Link>
            </p>
          </Reveal>
          <Reveal className="projects-grid" stagger>
            <Link to="/projects/birhan-building" className="project-card" style={{ "--i": 0, textDecoration: "none" }}>
              <div className="img-wrap">
                <img src={birhan} alt="Construction of the concrete foundation for the Birhan Building on Mount Ambaricho." />
                <span className="status-pill dot">Under construction</span>
              </div>
              <div className="body">
                <h3>Birhan Building Project</h3>
                <p>A 7-story building in Durame for retail, food and medical services, leader training and missionary housing.</p>
                <Meter label="Construction progress" percent={62} />
              </div>
            </Link>
            <Link to="/projects/cross-project" className="project-card" style={{ "--i": 1, textDecoration: "none" }}>
              <div className="img-wrap">
                <img src={cross} alt="Foundation work for the cross monument on Mount Ambaricho's summit." />
                <span className="status-pill dot">In planning</span>
              </div>
              <div className="body">
                <h3>Cross Project</h3>
                <p>A monument crowning the summit once worshipped as a seat of witchcraft &mdash; now marked by the cross.</p>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="pullquote">
        <Reveal className="wrap">
          <p>If we pray, God works! If we don&apos;t pray, we work.</p>
          <div className="attr">Dr. Desta Langena Letta &mdash; Founder, AIPM</div>
        </Reveal>
      </section>

      <section className="cta-band" id="give">
        <div className="wrap">
          <div className="inner">
            <Reveal>
              <h2>Partner with the mountain</h2>
              <p>
                It costs $100&ndash;$300 a month to fully support a missionary family. AIPM USA raises up to half
                &mdash; the rest comes from partners like you.
              </p>
              {/* Funding progress hidden until there's a real campaign to report — re-enable when ready.
              <FundMeter
                raisedLabel="$48,200 raised"
                goalLabel="Goal: $120,000"
                percent={40}
                note="Toward Birhan Hall — placeholder figures, ready for your real campaign numbers."
              />
              */}
            </Reveal>
            <Reveal className="actions">
              <Link to="/give" className="btn btn-gold">
                Give Now
              </Link>
              <Link to="/get-involved#prayer-request" className="btn btn-outline-ink">
                Request Prayer
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
