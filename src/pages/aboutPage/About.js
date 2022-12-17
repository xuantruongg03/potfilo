import {
  faArrowLeft,
  faArrowRight,
  faBriefcase,
  faCloudArrowDown
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useState } from "react";
import cv from "../../assets/doc/Xuan-Truong.pdf";
import { Experiences, Info, Skills } from "../../data";
import Title from "../../title/Title";
import style from "./About.module.scss";


function About() {
  const [isLeft, setIsLeft] = useState(true);

  const hanldeChangeView = () => setIsLeft(!isLeft);

  const data = { background: "About", title: "About Me" };

  return (
    <div className={style.container}>
      <div className={style.box}>
        <Title data={data} />
        {isLeft ? (
          <div className={style.boxInfo}>
            <div>
              <div className={style.sub}>
                <h2 className={style.subTitle}>PERSONAL INFOS</h2>
                <h2 className={style.subTitle}>EXPERIENCE</h2>
              </div>
              <div className={style.containerInfo}>
                <ul className={clsx(style.infoLeft)}>
                  {Info.map((item, index) => (
                    <li key={index}>
                      <span className={style.lable}>{item.lable}: </span>
                      <span className={style.content}> {item.value} </span>
                    </li>
                  ))}
                  <a href={cv} download className={style.downloadCV}>
                    <div className={style.boxDownloadCV}>
                      <FontAwesomeIcon
                        icon={faCloudArrowDown}
                        className={style.downloadCVIcon}
                      />
                    </div>
                    <h4 className={style.lableDownloadCV}>Download My CV</h4>
                  </a>
                </ul>
                <div className={style.exp}>
                  {Experiences.map((item, index) => (
                    <div className={style.expItem} key={index}>
                      <div className={style.boxIcon}>
                        <FontAwesomeIcon
                          icon={faBriefcase}
                          className={style.icon}
                        />
                      </div>
                      <div className={style.boxContentExp}>
                        <div className={style.timeExp}> {item.time} </div>
                        <h4 className={style.placeExp}> {item.place} </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={style.boxSkill}>
            <h2 className={style.subTitle2}>SKILLS</h2>
            <div className={style.containerSkills}>
              {Skills.map((item) => (
                <div className={style.boxSkills}>
                  <img
                    src={item.icon}
                    alt={item.name}
                    className={style.skill}
                  />
                  <label className={style.nameSkill}>{item.name}</label>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className={style.boxNext} onClick={hanldeChangeView}>
          <FontAwesomeIcon
            icon={isLeft ? faArrowRight : faArrowLeft}
            className={style.iconNext}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
