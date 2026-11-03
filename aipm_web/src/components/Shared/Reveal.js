import React from "react";
import useReveal from "../../hooks/useReveal";

/**
 * Wraps children in a div that fades/slides into view the first time it
 * scrolls into the viewport. Pass `as` to render a different element,
 * and `stagger` to also stagger-in the direct children (see site.css
 * `.fin-stagger`).
 */
function Reveal({ as: Tag = "div", stagger = false, className = "", children, ...rest }) {
  const { ref, className: revealClass } = useReveal();
  const classes = [revealClass, stagger ? "fin-stagger" : "", className]
    .filter(Boolean)
    .join(" ");
  return (
    <Tag ref={ref} className={classes} {...rest}>
      {children}
    </Tag>
  );
}

export default Reveal;
