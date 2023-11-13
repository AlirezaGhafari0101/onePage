import React, { useEffect } from "react";
import { FiAlignRight } from "react-icons/fi";
import { GiOrange } from "react-icons/gi";
import { SiWebpack } from "react-icons/si";
import { ImDatabase, ImRtl } from "react-icons/im";
import { GrWordpress } from "react-icons/gr";

import Aos from "aos";

import "./Services.css";
import ServicesBox from "../ServicesBox/ServicesBox";

export default function Services() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <>
      <section id="services" className="section" data-aos="fade-up">
        <div className="container">
          <div className="services__content">
            <h1 className="section__title">خدمات ما</h1>
            <p className="section__subtitle">
              چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
              و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
              بهبود ابزارهای کاربردی می باشد.
            </p>
          </div>
          <div className="services__boxes">
            <ServicesBox
              title="طراحی وبسایت"
              desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"
            >
              <SiWebpack className="services-icon" />
            </ServicesBox>
            <ServicesBox
              title="سئو و بهینه سازی"
              desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"
            >
              <GiOrange className="services-icon" color="grey" />
            </ServicesBox>
            <ServicesBox
              title="فارسی سازی"
              desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"
            >
              <FiAlignRight className="services-icon" color="violet" />
            </ServicesBox>
            <ServicesBox
              title="دیتابیس"
              desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"
            >
              <ImDatabase className="services-icon" color="red" />
            </ServicesBox>
            <ServicesBox
              title="راست چین"
              desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"
            >
              <ImRtl className="services-icon" color="green" />
            </ServicesBox>
            <ServicesBox
              title="وردپرس"
              desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"
            >
              <GrWordpress className="services-icon" color="blue" />
            </ServicesBox>
          </div>
        </div>
      </section>
    </>
  );
}
