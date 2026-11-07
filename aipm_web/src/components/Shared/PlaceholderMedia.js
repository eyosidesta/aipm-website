import React from "react";

/**
 * A clearly-labeled stand-in for project media we don't have real photos
 * for yet. Never pair this with an unrelated real photo — that reads as
 * the actual thing. Swap for a real <img>/<video> once assets arrive.
 */
function PlaceholderMedia({ label = "Photo coming soon", aspect = "16/10", style }) {
  return (
    <div
      style={{
        aspectRatio: aspect,
        width: "100%",
        borderRadius: 4,
        background: "linear-gradient(135deg, var(--ink-2), var(--ink))",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        color: "var(--gold-pale)",
        ...style,
      }}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="8.5" cy="10" r="1.6" stroke="currentColor" strokeWidth="1.4" />
        <path d="M21 16l-5.5-5-7 6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: ".04em", textTransform: "uppercase" }}>
        {label}
      </span>
    </div>
  );
}

export default PlaceholderMedia;
