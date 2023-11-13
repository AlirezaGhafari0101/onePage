import React from "react";
import Accordions from "../Accordion/Accordion";
import Accordion from "../Accordion/Accordion";

import "./Questions.css";

export default function Questions() {
  return (
    <section className="section" id="questions">
      <div className="container">
        <div className="content">
          <h1 className="section__title">سوالات متداول</h1>
          <p className="section__subtitle">
            سوالات متداول لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
            چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
            مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
            نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
          </p>
        </div>

        <Accordions />
      </div>
    </section>
  );
}
