import React, { useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "./Comments.css";

import "swiper/css";
import "swiper/css/pagination";
import Aos from "aos";
import CommentBox from "../CommentBox/CommentBox";

export default function Comments() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <section className="section" id="comments" data-aos="fade-up">
      <div className="container">
        {" "}
        <div className="comments__content">
          <h1 className="section__title ">نظرات مشتریان ما</h1>
          <p className="section__subtitle ">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
          </p>
          <Swiper
            freeMode={true}
            grabCursor={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <CommentBox
                commentBody=" چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
                هدف بهبود ابزارهای کاربردی می باشد."
                name="امین احمدی"
                job="سئو و تولید محتوا"
              >
                <img
                  src={require("../../images/avatars/testimonials-1.jpg")}
                  alt=""
                />
              </CommentBox>
            </SwiperSlide>
            <SwiperSlide>
              <CommentBox
                commentBody=" چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
                هدف بهبود ابزارهای کاربردی می باشد."
                name="سارا خلیلی"
                job="طراح"
              >
                <img
                  src={require("../../images/avatars/testimonials-2.jpg")}
                  alt=""
                />
              </CommentBox>
            </SwiperSlide>
            <SwiperSlide>
              <CommentBox
                commentBody=" چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
                هدف بهبود ابزارهای کاربردی می باشد."
                name="جان ویک"
                job="سئو"
              >
                <img
                  src={require("../../images/avatars/testimonials-3.jpg")}
                  alt=""
                />
              </CommentBox>
            </SwiperSlide>
            <SwiperSlide>
              <CommentBox
                commentBody=" چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
                هدف بهبود ابزارهای کاربردی می باشد."
                name="رضا صالحی"
                job=" تولید محتوا"
              >
                <img
                  src={require("../../images/avatars/testimonials-4.jpg")}
                  alt=""
                />
              </CommentBox>
            </SwiperSlide>
            <SwiperSlide>
              <CommentBox
                commentBody=" چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
                هدف بهبود ابزارهای کاربردی می باشد."
                name="امین رضایی"
                job="فریلنسر"
              >
                <img
                  src={require("../../images/avatars/testimonials-5.jpg")}
                  alt=""
                />
              </CommentBox>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
