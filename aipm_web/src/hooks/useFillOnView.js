import { useEffect, useRef, useState } from "react";

export default function useFillOnView(targetPercent) {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      setWidth(targetPercent);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWidth(targetPercent);
          io.unobserve(el);
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [targetPercent]);

  return { ref, width };
}
