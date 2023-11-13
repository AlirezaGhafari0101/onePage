import React from "react";
import ProfileBox from "../ProfileBox/ProfileBox";

import "./Profiiles.css";

export default function Profiiles() {
  return (
    <>
      <section className="section" id="profiles">
        <div className="container">
          <div className="content">
            <h1 className="section__title">اعضای تیم ما</h1>
            <p className="section__subtitle">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>
          </div>
          <div className="profile__boxes">
            <ProfileBox name="امین احمدی" job="طراح گرافیک">
              <img src={require("../../images/profiles/team-1.jpg")} alt="" />
            </ProfileBox>
            <ProfileBox name="کیمیا رستگار" job="مدیر تولید">
              <img src={require("../../images/profiles/team-2.jpg")} alt="" />
            </ProfileBox>
            <ProfileBox name="ایمن جعفری" job="طراح">
              <img src={require("../../images/profiles/team-3.jpg")} alt="" />
            </ProfileBox>
            <ProfileBox name="مریم صالحی" job="طراح">
              <img src={require("../../images/profiles/team-4.jpg")} alt="" />
            </ProfileBox>
          </div>
        </div>
      </section>
    </>
  );
}
