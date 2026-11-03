import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { LightboxProvider } from "../../context/LightboxContext";
import ScrollProgress from "./ScrollProgress";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import Lightbox from "./Lightbox";
import "../../styles/site.css";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function AipmLayout() {
  return (
    <LightboxProvider>
      <div className="aipm">
        <ScrollToTop />
        <ScrollProgress />
        <SiteHeader />
        <main>
          <Outlet />
        </main>
        <SiteFooter />
        <Lightbox />
      </div>
    </LightboxProvider>
  );
}

export default AipmLayout;
