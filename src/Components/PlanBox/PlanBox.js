import React from "react";

import "./PlanBox.css";

export default function PlanBox({
  price,
  isBlue,
  availbleItems,
  unavailbleItems,
  title,
}) {
  return (
    <div className="plan-box" style={isBlue && { backgroundColor: "#2487ce" }}>
      <h3 className="plan__name" style={isBlue && { color: "#fff" }}>
        {title}
      </h3>

      {price ? (
        <h4 className="plan__price" style={isBlue && { color: "#fff" }}>
          <sup>ماهانه</sup>
          {price}
          <span style={isBlue && { color: "#fff" }}> / تومان</span>
        </h4>
      ) : (
        <h4 className="plan__price--free" style={isBlue && { color: "#fff" }}>
          رایگان
        </h4>
      )}

      <ul className="plan__sevices__list">
        {availbleItems.map((item) => (
          <li
            className="plan__services__list-item"
            style={isBlue && { color: "#fff" }}
          >
            {item}
          </li>
        ))}
        {unavailbleItems.map((item) => (
          <li
            className="plan__services__list-item--disabled"
            style={isBlue && { color: "#fff" }}
          >
            {item}
          </li>
        ))}
      </ul>
      {isBlue ? (
        <a href="#" className="btn plan__cta--blue">
          فعال سازی
        </a>
      ) : (
        <a href="#" className="btn plan__cta">
          فعال سازی
        </a>
      )}
    </div>
  );
}
