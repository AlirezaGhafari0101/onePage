import React, { useEffect } from "react";
import { BsStack } from "react-icons/bs";
import { BiPaint } from "react-icons/bi";
import { MdSecurity, MdCleaningServices } from "react-icons/md";
import HeroBox from "../HeroBox/HeroBox";
import AOS from "aos";
import "aos/dist/aos.css";

import "./Hero.css";

export default function Hero() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section id="hero" className="section" data-aos="fade-up">
      <div className="container">
        <div className="hero__content">
          <h1 className="hero__title">وبسایت شرکتی خود را راه اندازی کنید!</h1>
          <p className="hero__subtitle">تیم ما آرزوهای شما را برآورده می کند</p>
          <a href="" className="btn hero__cta">
            شروع کنید
          </a>
          <div className="hero-boxes__container">
            <HeroBox
              title="دیتابیس ایمن"
              desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است."
            >
              <BsStack className="hero-box__icon" />
            </HeroBox>
            <HeroBox
              title="رنگبندی متنوع "
              desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است."
            >
              <BiPaint className="hero-box__icon" />
            </HeroBox>
            <HeroBox
              title="کد نویسی مرتب "
              desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است."
            >
              <MdCleaningServices className="hero-box__icon" />
            </HeroBox>
            <HeroBox
              title=" کاملا ایمن"
              desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است."
            >
              <MdSecurity className="hero-box__icon" />
            </HeroBox>
          </div>
        </div>
      </div>
    </section>
  );
}
