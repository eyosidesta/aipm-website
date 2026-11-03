import React, { useEffect, useState } from "react";

function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const value = max > 0 ? (h.scrollTop / max) * 100 : 0;
      setPct(Number.isFinite(value) ? value : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div className="scrollbar" style={{ width: `${pct}%` }} />;
}

export default ScrollProgress;
