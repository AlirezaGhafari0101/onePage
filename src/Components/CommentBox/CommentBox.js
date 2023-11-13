import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

import "./CommentBox.css";

export default function CommentBox({ name, children, job, commentBody }) {
  console.log(children);
  return (
    <div className="comments__box">
      <p>
        <RiDoubleQuotesL className="comments__icon" />
        {commentBody}
        <RiDoubleQuotesR className="comments__icon" />
      </p>
      {children}
      <h3>{name}</h3>
      <h4>{job}</h4>
    </div>
  );
}
