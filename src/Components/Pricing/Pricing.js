import React from "react";
import PlanBox from "../PlanBox/PlanBox";

import "./Pricing.css";

export default function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="container">
        <div className="content">
          <h1 className="section__title">تعرفه خدمات ما</h1>
          <p className="section__subtitle">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
          </p>
        </div>
        <div className="plan-boxes">
          <PlanBox
            availbleItems={[
              "مشاوره رایگان",
              "هاست و دامین ریگان",
              "20 مگابایت فضای ذخیره سازی",
            ]}
            unavailbleItems={["ساب دامین اختصاصی", "دامین .com"]}
            price={0}
            title="آغازین"
          ></PlanBox>
          <PlanBox
            availbleItems={[
              "مشاوره رایگان",
              "هاست و دامین ریگان",
              "20 مگابایت فضای ذخیره سازی",
              "ساب دامین اختصاصی",
            ]}
            unavailbleItems={["دامین .com"]}
            price={19000}
            title="کسب و کار"
            isBlue={true}
          ></PlanBox>
          <PlanBox
            availbleItems={[
              "مشاوره رایگان",
              "هاست و دامین ریگان",
              "20 مگابایت فضای ذخیره سازی",
              "ساب دامین اختصاصی",
              "دامین .com",
            ]}
            unavailbleItems={[]}
            price={29000}
            title="توسعه وب"
          ></PlanBox>
        </div>
      </div>
    </section>
  );
}
