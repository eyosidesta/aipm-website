import React from "react";
import { Link } from "react-router-dom";
import BrandMark from "./BrandMark";

function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <Link to="/" className="brand">
              <BrandMark />
              <span>
                <span className="word">AIPM</span>
              </span>
            </Link>
            <div className="foot-tagline">&ldquo;If we pray, God works! If we don&apos;t pray, we work.&rdquo;</div>
            <div className="foot-tagline-en">Ambaricho International Prayer &amp; Mission Movement</div>
          </div>
          <div className="foot-col">
            <h4>About</h4>
            <ul>
              <li><Link to="/our-story">Our Story</Link></li>
              <li><Link to="/our-story#beliefs">Statement of Faith</Link></li>
              <li><Link to="/our-story#team">Our Team</Link></li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>Movements</h4>
            <ul>
              <li><Link to="/movements#prayer">Prayer</Link></li>
              <li><Link to="/movements#mission">Mission</Link></li>
              <li><Link to="/movements#training">Training</Link></li>
              <li><Link to="/movements#charity">Charity</Link></li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>Connect</h4>
            <ul>
              <li><Link to="/get-involved">Get Involved</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/give">Give</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <div>&copy; {new Date().getFullYear()} AIPM &mdash; Ambaricho International Prayer and Mission Movement &middot; Durame, Ethiopia</div>
          <div className="foot-social">
            <a href="https://www.youtube.com/@AIPM-Global/videos" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="5" width="20" height="14" rx="4" stroke="currentColor" strokeWidth="1.6" />
                <path d="M10 9.5v5l5-2.5-5-2.5Z" fill="currentColor" />
              </svg>
            </a>
            <a href="#facebook" aria-label="Facebook">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path d="M14 9h3V5h-3c-2.2 0-4 1.8-4 4v2H8v4h2v6h4v-6h3l1-4h-4V9c0-.6.4-1 1-1Z" fill="currentColor" />
              </svg>
            </a>
            <a href="#instagram" aria-label="Instagram">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
