import { useEffect, useState } from "react";

function nextJan19() {
  const now = new Date();
  const year = now.getFullYear();
  let target = new Date(year, 0, 19, 6, 0, 0);
  if (now > target) {
    target = new Date(year + 1, 0, 19, 6, 0, 0);
  }
  return target;
}

export default function useCountdown() {
  const [parts, setParts] = useState({ days: "—", hours: "—", minutes: "—" });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, nextJan19() - new Date());
      const days = Math.floor(diff / 86400000);
      const hours = Math.floor((diff % 86400000) / 3600000);
      const minutes = Math.floor((diff % 3600000) / 60000);
      setParts({
        days: String(days),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
      });
    };
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  return parts;
}
