import React from "react";
import useFillOnView from "../../hooks/useFillOnView";

export function Meter({ label, percent }) {
  const { ref, width } = useFillOnView(percent);
  return (
    <div className="meter" ref={ref}>
      <div className="row">
        <span>{label}</span>
        <span>{percent}%</span>
      </div>
      <div className="track">
        <div className="fill" style={{ width: `${width}%` }} />
      </div>
    </div>
  );
}

export function FundMeter({ raisedLabel, goalLabel, percent, note, dark }) {
  const { ref, width } = useFillOnView(percent);
  return (
    <div className="fund" ref={ref}>
      <div className="row">
        <span>{raisedLabel}</span>
        <span>{goalLabel}</span>
      </div>
      <div className="track">
        <div className="fill" style={{ width: `${width}%` }} />
      </div>
      {note && <div className="note">{note}</div>}
    </div>
  );
}

export function Steps({ steps }) {
  return (
    <div className="steps">
      {steps.map((step) => (
        <div key={step.label} className={`step${step.done ? " done" : ""}`}>
          <div className="dot" />
          <div className="lbl">{step.label}</div>
        </div>
      ))}
    </div>
  );
}
