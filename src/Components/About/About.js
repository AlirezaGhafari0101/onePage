import Aos from "aos";
import React, { useEffect } from "react";
import { TbChecks } from "react-icons/tb";

import "./About.css";

export default function About() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <section className="section" id="about" data-aos="fade-up">
      <div className="container">
        <div className="about__content">
          <h1 className="section__title ">درباره ما</h1>
          <p className="section__subtitle ">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است
          </p>
        </div>
        <div className="about__description">
          <div className="about__description__right">
            <p>
              {" "}
              ما جاده ای هستیم که مسیر رویاهایتان را هموار میکنیم. گروه ما متشکل
              از تیمی قدرتمند است که برای خلق ایده های شما تلاش میکنند.
            </p>
            <ul className="description__list">
              <li className="description__list-item">
                <TbChecks className="description__list-icon" />
                توانا در اجرای هرگونه ایده
              </li>
              <li className="description__list-item">
                <TbChecks className="description__list-icon" />
                خلاقیت را سرلوحه خود قرار داده ایم
              </li>
              <li className="description__list-item">
                <TbChecks className="description__list-icon" />
                در محصولات ما امنیت حرف اول را می زند
              </li>
            </ul>
          </div>
          <div className="about__description__left">
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>
            <a href="" className="btn about__cta">
              بیشتر بدانید
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
