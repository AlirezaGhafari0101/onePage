import React, { useEffect } from "react";
import Counter from "../Counter/Counter";
import AOS from "aos";

import "./Counts.css";

export default function Counts() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section className="section" id="counts" data-aos="fade-up">
      <div className="container">
        <div className="counts-boxes__container">
          <div className="counts-box">
            <span className="counts__count">
              {" "}
              <Counter number={65} />
            </span>
            <p className="counts__title">کاربران ما</p>
          </div>
          <div className="counts-box">
            <span className="counts__count">
              {" "}
              <Counter number={86} />
            </span>
            <p className="counts__title"> پروژه های ما</p>
          </div>
          <div className="counts-box">
            <span className="counts__count">
              {" "}
              <Counter number={20} />
            </span>
            <p className="counts__title">جوایز ما</p>
          </div>
          <div className="counts-box">
            <span className="counts__count">
              {" "}
              <Counter number={30} />
            </span>
            <p className="counts__title">سال ها تجربه</p>
          </div>
        </div>
      </div>
    </section>
  );
}
