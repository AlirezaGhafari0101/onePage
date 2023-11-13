import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineChevronDown } from "react-icons/hi";

import "./Navbar.css";

export default function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <header id="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__right">
            <a href="" className="header__logo">
              وان پیج
            </a>
          </div>
          <div className="header__left">
            <ul className="navbar">
              <li className="navbar__item">
                <a href="" className="navbar__link">
                  خانه{" "}
                </a>
              </li>
              <li className="navbar__item">
                <a href="" className="navbar__link">
                  درباره ما
                </a>
              </li>
              <li className="navbar__item">
                <a href="" className="navbar__link dropdown">
                  برگه های داخلی
                  <HiOutlineChevronDown className="navbar__link__icon" />
                  <ul className="navbar-dropdown">
                    <li className="dropdown__item">
                      <a href="" className="dropdown__link">
                        توضیحات محصول 1
                      </a>
                    </li>
                    <li className="dropdown__item">
                      <a href="" className="dropdown__link">
                        توضیحات محصول 1
                      </a>
                    </li>
                    <li className="dropdown__item">
                      <a href="" className="dropdown__link">
                        توضیحات محصول 1
                      </a>
                    </li>
                    <li className="dropdown__item">
                      <a href="" className="dropdown__link">
                        توضیحات محصول 1
                      </a>
                    </li>
                  </ul>
                </a>
              </li>
              <li className="navbar__item">
                <a href="" className="navbar__link">
                  خدمات
                </a>
              </li>
              <li className="navbar__item">
                <a href="" className="navbar__link">
                  نمونه کارها
                </a>
              </li>
              <li className="navbar__item">
                <a href="" className="navbar__link">
                  تیم ما
                </a>
              </li>
              <li className="navbar__item">
                <a href="" className="navbar__link">
                  قیمت
                </a>
              </li>
              <li className="navbar__item">
                <a href="" className="navbar__link">
                  تماس باما
                </a>
              </li>
            </ul>
            <a href="" className="btn header__cta ">
              شروع
            </a>
          </div>
          <div className="hamburger-menu" onClick={() => setIsExpanded(true)}>
            <div className="hamburger-menu__lines"></div>
          </div>
          <nav className={`mobile-menu ${isExpanded && "navbar--expanded"}`}>
            <div className="close-icon">
              <AiOutlineClose
                className="mobile-menu__close-icon"
                onClick={() => setIsExpanded(false)}
              />
            </div>
            <ul className="navbar-mobile">
              <li className="navbar-mobile__item">
                <a href="" className="navbar-mobile__link">
                  خانه{" "}
                </a>
              </li>
              <li className="navbar-mobile__item">
                <a href="" className="navbar-mobile__link">
                  درباره ما
                </a>
              </li>
              <li className="navbar-mobile__item">
                <a href="" className="navbar-mobile__link">
                  برگه های داخلی
                </a>
              </li>
              <li className="navbar-mobile__item">
                <a href="" className="navbar-mobile__link">
                  خدمات
                </a>
              </li>
              <li className="navbar-mobile__item">
                <a href="" className="navbar-mobile__link">
                  نمونه کارها
                </a>
              </li>
              <li className="navbar-mobile__item">
                <a href="" className="navbar-mobile__link">
                  تیم ما
                </a>
              </li>
              <li className="navbar-mobile__item">
                <a href="" className="navbar-mobile__link">
                  قیمت
                </a>
              </li>
              <li className="navbar-mobile__item">
                <a href="" className="navbar-mobile__link">
                  تماس باما
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>{" "}
    </header>
  );
}
