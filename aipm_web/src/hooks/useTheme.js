import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "aipm-theme";

function readStored() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch (e) {
    return null;
  }
}

export default function useTheme() {
  const [theme, setTheme] = useState(() => readStored());

  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme((current) => {
      const systemDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      const effectiveCurrent = current || (systemDark ? "dark" : "light");
      const next = effectiveCurrent === "dark" ? "light" : "dark";
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch (e) {
        // ignore storage failures (private browsing, etc.)
      }
      return next;
    });
  }, []);

  return { theme, toggle };
}
