import React from "react";
import { useLightbox } from "../../context/LightboxContext";

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M9 7v10l8-5-8-5Z" fill="#FBF7EC" />
    </svg>
  );
}

function VideoPlaceholderCard({ img, title, tag, note, videoSrc }) {
  const { open } = useLightbox();
  const hasRealVideo = Boolean(videoSrc);

  return (
    <button
      className={`vcard${hasRealVideo ? " real" : ""}`}
      onClick={() =>
        hasRealVideo
          ? open({ img, title, kind: "video", videoSrc })
          : open({
              img,
              title,
              note: note || "Placeholder slot — add a real video file and wire it into this player.",
            })
      }
    >
      <img src={img} alt="" />
      <span className="play">
        <PlayIcon />
      </span>
      <span className="meta">
        <span className="tag">{tag}</span>
        <span className="ttl">{title}</span>
      </span>
    </button>
  );
}

export default VideoPlaceholderCard;
