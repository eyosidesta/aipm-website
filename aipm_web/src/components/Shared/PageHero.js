import React from "react";
import { Link } from "react-router-dom";

export function PageHero({ img, eyebrow, crumb, title, description, minHeight }) {
  return (
    <section className="pagehero" style={minHeight ? { minHeight } : undefined}>
      <img src={img} alt="" />
      <div className="wrap pagehero-inner">
        <div className="crumbs">
          <Link to="/">Home</Link> &rsaquo; <span>{crumb || title}</span>
        </div>
        <div className="eyebrow">{eyebrow}</div>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
    </section>
  );
}

export function SubNav({ links }) {
  return (
    <section className="subnav">
      <div className="wrap">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
