import React from "react";
import { Link } from "react-router-dom";
import { PageHero, SubNav } from "../../components/Shared/PageHero";
import Reveal from "../../components/Shared/Reveal";
import PlaceholderMedia from "../../components/Shared/PlaceholderMedia";
import { Meter, Steps } from "../../components/Shared/Meter";
import { PROJECTS } from "../../data/projects";
import { birhanCover } from "../../assets/projectGalleries";

function Projects() {
  return (
    <>
      <PageHero
        img={birhanCover}
        eyebrow="Building the Mountain"
        crumb="Projects"
        title="Tangible ground for a growing movement"
        description="Five projects, each turning prayer into practical ground — built gift by gift, despite global inflation."
      />
      <SubNav
        links={PROJECTS.map((p) => ({ href: `#${p.slug}`, label: p.title }))}
      />

      {PROJECTS.map((project, i) => (
        <section key={project.slug} id={project.slug} className={i % 2 === 1 ? "alt" : undefined}>
          <div className={`wrap split${i % 2 === 1 ? " rev" : ""}`}>
            <Reveal as="figure">
              {project.heroImage ? (
                <img src={project.heroImage} alt={project.title} />
              ) : (
                <PlaceholderMedia label={project.heroPlaceholderLabel} />
              )}
            </Reveal>
            <Reveal className="split-copy">
              <div className="eyebrow">
                {String(i + 1).padStart(2, "0")} &middot; {project.eyebrow}
              </div>
              <h2 style={{ marginTop: 10 }}>{project.title}</h2>
              {project.body.map((paragraph, pi) => (
                <p key={pi}>{paragraph}</p>
              ))}
              {project.meter && (
                <div style={{ maxWidth: 380 }}>
                  <Meter label={project.meter.label} percent={project.meter.percent} />
                </div>
              )}
              {project.steps && (
                <div style={{ maxWidth: 320 }}>
                  <Steps steps={project.steps} />
                </div>
              )}
              {project.note && (
                <span className="sample-badge" style={{ marginTop: 6, display: "inline-block" }}>
                  {project.note}
                </span>
              )}
              <div>
                <Link to={`/projects/${project.slug}`} className="btn btn-outline-ink" style={{ marginTop: 14 }}>
                  View Project Details &rarr;
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="cta-band" id="give">
        <div className="wrap">
          <div className="inner">
            <Reveal>
              <h2>Help build what&apos;s next</h2>
              <p>Every gift moves Birhan Hall, the Global Missions University, and the whole mission forward.</p>
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
