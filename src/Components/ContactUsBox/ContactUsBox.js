import React from "react";

import "./ContactUsBox.css";

export const ContactUsBox = ({ children, title, desc }) => {
  return (
    <div className="contact-infos__box">
      <div className="contact-infos__box__right">
        <div className="infos-icon__container">{children}</div>
      </div>
      <div className="contact-infos__box__left">
        <span className="infos__box__title">{title}:</span>
        <p className="infos__box__desc">{desc}</p>
      </div>
    </div>
  );
};
