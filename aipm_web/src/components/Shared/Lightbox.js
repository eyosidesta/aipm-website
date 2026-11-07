import React, { useEffect, useRef } from "react";
import { useLightbox } from "../../context/LightboxContext";

function Lightbox() {
  const { state, close } = useLightbox();
  const open = Boolean(state);
  const videoRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  useEffect(() => {
    if (!open && videoRef.current) {
      videoRef.current.pause();
    }
  }, [open]);

  const isImage = state?.kind === "image";
  const isVideo = state?.kind === "video";

  return (
    <div
      className={`lightbox${open ? " open" : ""}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div className={`box${isImage || isVideo ? " image-box" : ""}`}>
        <button className="x" aria-label="Close" onClick={close}>
          &times;
        </button>
        {isImage && <img src={state.img} alt={state.title || ""} />}
        {isVideo && (
          <video
            ref={videoRef}
            key={state.videoSrc}
            src={state.videoSrc}
            poster={state.img}
            controls
            autoPlay
            playsInline
            style={{ maxWidth: "100%", maxHeight: "76vh", borderRadius: 6, boxShadow: "0 40px 80px -20px rgba(0,0,0,0.6)" }}
          />
        )}
        {!isImage && !isVideo && (
          <div
            className="vphold"
            style={{ "--vp-img": state ? `url(${state.img})` : "none" }}
          >
            <div className="ring">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M9 7v10l8-5-8-5Z" fill="#FBF7EC" />
              </svg>
            </div>
            <strong>{state?.title || "Video placeholder"}</strong>
            <span>{state?.note || "Add your video file and wire it into this player."}</span>
          </div>
        )}
        {(isImage || isVideo) && state?.title && (
          <div className="image-caption">{state.title}</div>
        )}
      </div>
    </div>
  );
}

export default Lightbox;
