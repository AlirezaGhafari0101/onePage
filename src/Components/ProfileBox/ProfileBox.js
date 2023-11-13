import React, { Children } from "react";
import {
  AiFillLinkedin,
  AiOutlineInstagram,
  AiFillFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";

import "./ProfileBox.css";

export default function ProfileBox({ children, name, job }) {
  return (
    <div className="profile-box">
      <div className="profile__image">
        {children}
        <div className="profile-overlay">
          <AiFillLinkedin className="profile-overlay__icon" />
          <AiOutlineInstagram className="profile-overlay__icon" />
          <AiFillFacebook className="profile-overlay__icon" />
          <AiOutlineTwitter className="profile-overlay__icon" />
        </div>
      </div>
      <div className="profile__details">
        <h3 className="profile__name">{name}</h3>
        <h4 className="profile__job">{job}</h4>
      </div>
    </div>
  );
}
