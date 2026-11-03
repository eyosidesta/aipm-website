import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import BrandMark from "./BrandMark";
import useCountdown from "../../hooks/useCountdown";
import useTheme from "../../hooks/useTheme";

const NAV_LINKS = [
  { to: "/our-story", label: "Our Story" },
  { to: "/movements", label: "Movements" },
  { to: "/projects", label: "Projects" },
  { to: "/get-involved", label: "Get Involved" },
  { to: "/contact", label: "Contact" },
];

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 2.5v3M12 18.5v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2.5 12h3M18.5 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SiteHeader() {
  const [solid, setSolid] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const { days, hours, minutes } = useCountdown();
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = sheetOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [sheetOpen]);

  return (
    <>
      <div className="ticker">
        <div className="wrap">
          <div>
            <b>Annual Gathering</b> &middot; Mount Ambaricho &middot; every January 19th
          </div>
          <div className="countdown" aria-live="polite">
            <span>{days}</span>
            <em>days</em>
            <span>{hours}</span>
            <em>hrs</em>
            <span>{minutes}</span>
            <em>min</em>
          </div>
        </div>
      </div>

      <header className={`site${solid ? " solid" : ""}`}>
        <nav className="wrap">
          <Link to="/" className="brand">
            <BrandMark />
            <span>
              <span className="word">AIPM</span>
              <span className="sub">Ambaricho Prayer &amp; Mission</span>
            </span>
          </Link>
          <ul className="navlinks">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} className={({ isActive }) => (isActive ? "active" : undefined)}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="navcta">
            <button className="themetoggle" aria-label="Toggle dark mode" onClick={toggle}>
              {theme === "dark" ? <MoonIcon /> : <SunIcon />}
            </button>
            <Link to="/get-involved#prayer-request" className="btn btn-ghost">
              Prayer Request
            </Link>
            <Link to="/give" className="btn btn-gold">
              Give
            </Link>
          </div>
          <button className="navtoggle" aria-label="Open menu" onClick={() => setSheetOpen(true)}>
            <span />
          </button>
        </nav>
      </header>

      <div className={`mobilesheet${sheetOpen ? " open" : ""}`}>
        <div className="veil" onClick={() => setSheetOpen(false)} />
        <div className="panel">
          <button className="close" aria-label="Close menu" onClick={() => setSheetOpen(false)}>
            &times;
          </button>
          {NAV_LINKS.map((link) => (
            <Link key={link.to} to={link.to} onClick={() => setSheetOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link
            to="/get-involved#prayer-request"
            className="btn btn-outline-ink"
            style={{ marginTop: 10, justifyContent: "center", borderColor: "rgba(251,247,236,0.45)", color: "#FBF7EC" }}
            onClick={() => setSheetOpen(false)}
          >
            Prayer Request
          </Link>
          <Link
            to="/give"
            className="btn btn-gold"
            style={{ justifyContent: "center" }}
            onClick={() => setSheetOpen(false)}
          >
            Give
          </Link>
        </div>
      </div>
    </>
  );
}

export default SiteHeader;
