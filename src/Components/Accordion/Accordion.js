import React, { useState } from "react";
import { GoChevronUp, GoChevronDown } from "react-icons/go";
import { BsPatchQuestion } from "react-icons/bs";

import "./Accordion.css";

export default function Accordions() {
  const accoridionData = [
    {
      id: 1,
      title: "آیا قالب html بر روی وردپرس نصب میشود ؟",
      desc: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
    از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
    سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
    متنوع با هدف بهبود ابزارهای کاربردی می باشد`,
    },
    {
      id: 2,
      title: " مدت زمان انجام پروژه چند روز است ؟",
      desc: `    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
      از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
      سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
      متنوع با هدف بهبود ابزارهای کاربردی می باشد.`,
    },
    {
      id: 3,
      title: "چگونه میتوان ثبت سفارش کرد ؟",
      desc: `    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
      از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
      سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
      متنوع با هدف بهبود ابزارهای کاربردی می باشد.`,
    },
    {
      id: 4,
      title: "میتوان هزینه را بصورت اقساطی پرداخت کرد ؟",
      desc: `    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
      از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
      سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
      متنوع با هدف بهبود ابزارهای کاربردی می باشد.`,
    },
  ];

  const [idExpanded, setIdExpanded] = useState(1);

  return (
    <div>
      {accoridionData.map((accordion) => (
        <div
          className={`accordion ${
            idExpanded === accordion.id && "accordion--expanded"
          }  `}
          key={accordion.id}
        >
          <div
            className="accordion__header"
            onClick={() => {
              idExpanded === accordion.id
                ? setIdExpanded("")
                : setIdExpanded(accordion.id);
            }}
          >
            <div className="accordon__header__right ">
              <BsPatchQuestion className="accordion__queston-icon" />
              <span className="question__title">{accordion.title}</span>
            </div>
            <div className="accordon__header__left">
              {idExpanded ? (
                <GoChevronUp className="accordion__up-icon" />
              ) : (
                <GoChevronDown className="accordion__up-icon" />
              )}
            </div>
          </div>

          <div className="accordion__body ">{accordion.desc}</div>
        </div>
      ))}
    </div>
  );
}
