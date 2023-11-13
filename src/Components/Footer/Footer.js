import React from "react";
import { BiChevronLeft } from "react-icons/bi";

import "./Footer.css";

export default function Footer() {
  return (
    <>
      <section className="section" id="footer">
        <div className="container">
          <div className="footer-items">
            <div className="footer-item">
              <h1 className="footer-item__logo">وان پیج</h1>
              <p className="footer-item__address">
                شیراز بلوار چمران <br />
                کوچه 12
                <br />
                هتل چمران <br />
                <br />
                شماره تماس : 1234567890
                <br />
                ایمیل : info@example.com
                <br />
              </p>
            </div>

            <div className="footer-item">
              <h3 className="footer-item__title">لینک های مفید</h3>
              <ul className="footer-item__list">
                <li>
                  <a href="" className="footer-item__link">
                    <BiChevronLeft className="footer-item__icon" />
                    خانه
                  </a>
                </li>
                <li>
                  <a href="" className="footer-item__link">
                    <BiChevronLeft className="footer-item__icon" />
                    خانه
                  </a>
                </li>
                <li>
                  <a href="" className="footer-item__link">
                    <BiChevronLeft className="footer-item__icon" />
                    خانه
                  </a>
                </li>
                <li>
                  <a href="" className="footer-item__link">
                    <BiChevronLeft className="footer-item__icon" />
                    خانه
                  </a>
                </li>
                <li>
                  <a href="" className="footer-item__link">
                    <BiChevronLeft className="footer-item__icon" />
                    خانه
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-item">
              <h3 className="footer-item__title">سرویس ها</h3>
              <ul className="footer-item__list">
                <li>
                  <a href="" className="footer-item__link">
                    <BiChevronLeft className="footer-item__icon" />
                    طراحی وب
                  </a>
                </li>
                <li>
                  <a href="" className="footer-item__link">
                    <BiChevronLeft className="footer-item__icon" />
                    توسعه وب
                  </a>
                </li>
                <li>
                  <a href="" className="footer-item__link">
                    <BiChevronLeft className="footer-item__icon" />
                    خانه
                  </a>
                </li>
                <li>
                  <a href="" className="footer-item__link">
                    <BiChevronLeft className="footer-item__icon" />
                    خانه
                  </a>
                </li>
                <li>
                  <a href="" className="footer-item__link">
                    <BiChevronLeft className="footer-item__icon" />
                    خانه
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-item">
              <h3 className="footer-item__title">عضویت در خبرنامه</h3>
              <p>با عضویت در خبرنامه از جدیدترین مقالات ما با خبر شوید.</p>
              <div className="newsletter-form">
                <input type="text" placeholder="ایمیل خود را وارد کنید" />
                <a href="" className="btn footer-item__cta">
                  عضویت
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
