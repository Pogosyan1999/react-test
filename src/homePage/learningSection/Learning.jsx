import React from "react";
import { LearningItems } from "./LearningItems";
import Title from "./title/Title";
import style from "./style.module.scss";
import img1 from "../../img/circle1.png";
import img2 from "../../img/circle2.png";
import img3 from "../../img/circle3.png";

const Learning = () => {
  return (
    <section className="container" id = "learning">
      <Title />
      <div className={style.container}>
        <div className={style.imgContainer1}>
          <img src={img1} alt="" />
        </div>
        <div className={style.imgContainer2}>
          <img src={img2} alt="" />
        </div>
        <div className={style.imgContainer3}>
          <img src={img3} alt="" />
        </div>
        <div className="container">
          <div className="container">
            {LearningItems.map((item) => {
              return (
                <div className={style.blog} key={item.id}>
                  <img src={item.src} alt="" />
                  <p className={style.text}>{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Learning;
