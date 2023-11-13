import React from "react";

import "./Support.css";

export default function Support() {
  return (
    <>
      <section className="section" id="support">
        <div className="container">
          <div className="support__content">
            <h1 className="section__title support__title">پشتیبانی دائمی</h1>
            <p className="section__subtitle support__subtitle">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>
            <a href="#" className="btn support__cta">
              بزن بریم
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
