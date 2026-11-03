import React from "react";

function Marquee({ words }) {
  const doubled = [...words, ...words];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((word, i) => (
          <span key={`${word}-${i}`}>{word}</span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
