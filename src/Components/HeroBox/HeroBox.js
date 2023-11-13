import React from "react";

import "./HeroBox.css";

export default function HeroBox({ title, desc, children }) {
  return (
    <div className="hero-box">
      {children}
      <span className="box__title">{title}</span>
      <p className="box__description">{desc}</p>
    </div>
  );
}
