import React from "react";
import { GoLocation } from "react-icons/go";
import { AiOutlinePhone } from "react-icons/ai";
import { MdOutlineMail } from "react-icons/md";
import { ContactUsBox } from "../../Components/ContactUsBox/ContactUsBox";

import "./ContactUs.css";

export default function ContactUs() {
  return (
    <>
      <section className="section" id="contact">
        <div className="container">
          <div className="content">
            <h1 className="section__title contact__title">تماس با ما</h1>
            <p className="section__subtitle">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون.
            </p>
          </div>
          <div className="contact-form__wrapper ">
            <div
              className="google-map"
              style={{
                width: "100%",
              }}
            >
              <img src={require("../../images/map.png")} alt="" />
            </div>
            <div className="contact__infos">
              <ContactUsBox title="آدرس" desc="شیراز ، بلوار چمران ، هتل چمران">
                <GoLocation className="infos-icon" />
              </ContactUsBox>
              <ContactUsBox title="ایمیل" desc="info@example.com">
                <MdOutlineMail className="infos-icon" />
              </ContactUsBox>
              <ContactUsBox title="شماره تماس" desc="09355555555">
                <AiOutlinePhone className="infos-icon" />
              </ContactUsBox>
            </div>
            <div className="contact-form">
              <form action="">
                <div className="form-inputs__wrapper">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="نام شما"
                  />
                  <input
                    type="text"
                    className="form-input"
                    placeholder="ایمیل شما"
                  />
                </div>
                <input type="text" className="form-input" placeholder="موضوع" />
                <textarea
                  name=""
                  id=""
                  rows="5"
                  placeholder="متن شما"
                ></textarea>
                <a href="" className="btn form-cta">
                  ارسال پیام
                </a>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
