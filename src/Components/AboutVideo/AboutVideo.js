import Aos from "aos";
import React, { useEffect } from "react";
import { TbChecks } from "react-icons/tb";

import "./AboutVideo.css";

export default function AboutVideo() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <section className="section" id="about-video" data-aos="fade-up">
      <div className="container">
        <div className="about-video__content">
          <div className="about-video__content__right">
            <img
              className="about-video__img"
              src={require("../../images/about-video.jpg")}
              alt="asd"
            />
          </div>
          <div className="about-video__content__left">
            <h1 className="section__title ">گذری بر سابقه ما</h1>
            <p className="about-video__paragraphs1">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
            <ul className="description__list">
              <li className="description__list-item">
                <TbChecks className="description__list-icon" />
                ساخت بیش از 60 قالب اختصاصی
              </li>
              <li className="description__list-item">
                <TbChecks className="description__list-icon" />
                بهینه سازی بیش از 50 وبسایت
              </li>
              <li className="description__list-item">
                <TbChecks className="description__list-icon" />
                تولید محتوا برای 15 سایت مانند دیجی کالا و زومیت
              </li>
              <li className="description__list-item">
                <TbChecks className="description__list-icon" />
                طراحی صفر تا صد وبسایت راست چین
              </li>
            </ul>
            <p className="about-video__paragraphs2">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
