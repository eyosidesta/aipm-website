import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import Reveal from "../../components/Shared/Reveal";
import PlaceholderMedia from "../../components/Shared/PlaceholderMedia";
import Gallery from "../../components/Shared/Gallery";
import VideoPlaceholderCard from "../../components/Shared/VideoPlaceholderCard";
import { Meter, Steps } from "../../components/Shared/Meter";
import { getProjectBySlug } from "../../data/projects";

function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <>
      <section className="pagehero">
        {project.heroImage ? (
          <img src={project.heroImage} alt="" />
        ) : (
          <div style={{ position: "absolute", inset: 0 }}>
            <PlaceholderMedia label={project.heroPlaceholderLabel} aspect="auto" style={{ height: "100%", borderRadius: 0 }} />
          </div>
        )}
        <div className="wrap pagehero-inner">
          <div className="crumbs">
            <Link to="/">Home</Link> &rsaquo; <Link to="/projects">Projects</Link> &rsaquo; <span>{project.title}</span>
          </div>
          <div className="eyebrow">{project.eyebrow}</div>
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
        </div>
      </section>

      <section>
        <div className="wrap narrow">
          <Reveal style={{ color: "var(--text-soft)", fontSize: 16.5, lineHeight: 1.75 }}>
            {project.body.map((paragraph, i) => (
              <p key={i} style={{ marginTop: i === 0 ? 0 : 14 }}>
                {paragraph}
              </p>
            ))}
          </Reveal>

          {project.meter && (
            <Reveal style={{ maxWidth: 380, marginTop: 28 }}>
              <Meter label={project.meter.label} percent={project.meter.percent} />
            </Reveal>
          )}
          {project.steps && (
            <Reveal style={{ maxWidth: 320, marginTop: 28 }}>
              <Steps steps={project.steps} />
            </Reveal>
          )}
          {project.note && (
            <Reveal style={{ marginTop: 20 }}>
              <span className="sample-badge">{project.note}</span>
            </Reveal>
          )}
        </div>
      </section>

      {project.gallery.length > 0 && (
        <section className="alt">
          <div className="wrap">
            <Reveal className="section-head">
              <div>
                <div className="eyebrow">Photos</div>
                <h2>From the site</h2>
              </div>
            </Reveal>
            <Reveal>
              <Gallery images={project.gallery} />
            </Reveal>
          </div>
        </section>
      )}
      {project.videos.length > 0 && (
        <section>
          <div className="wrap">
            <Reveal className="section-head">
              <div>
                <div className="eyebrow">Videos</div>
                <h2>Watch</h2>
              </div>
            </Reveal>
            <Reveal className="rail-shell">
              <div className="rail">
                {project.videos.map((v) => (
                  <VideoPlaceholderCard key={v.title} img={v.img} tag={v.tag} title={v.title} videoSrc={v.videoSrc} />
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      <section className="cta-band" id="give">
        <div className="wrap">
          <div className="inner">
            <Reveal>
              <h2>Help move this forward</h2>
              <p>Every gift goes toward projects like this one across AIPM.</p>
            </Reveal>
            <Reveal className="actions">
              <Link to="/give" className="btn btn-gold">
                Give Now
              </Link>
              <Link to="/projects" className="btn btn-outline-ink">
                All Projects
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectDetail;
