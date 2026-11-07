import React from "react";
import { useLightbox } from "../../context/LightboxContext";

function Gallery({ images }) {
  const { open } = useLightbox();

  if (!images || images.length === 0) return null;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
        gap: 14,
      }}
    >
      {images.map((item, i) => (
        <button
          key={item.src}
          type="button"
          onClick={() => open({ img: item.src, title: item.caption, kind: "image" })}
          style={{
            border: "none",
            padding: 0,
            borderRadius: 4,
            overflow: "hidden",
            cursor: "pointer",
            aspectRatio: "4/3",
            background: "var(--bg-alt)",
          }}
        >
          <img
            src={item.src}
            alt={item.caption || ""}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform .3s ease" }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </button>
      ))}
    </div>
  );
}

export default Gallery;
