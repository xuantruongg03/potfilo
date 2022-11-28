import {
  faArrowLeft,
  faArrowRight,
  faBriefcase,
  faCloudArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useState } from "react";
import Title from "../../title/Title";
import style from "./About.module.scss";
import cv from "../../assets/doc/Xuan-Truong.pdf";

const info = [
  {
    lable: "Name",
    value: "Le Xuan Truong",
  },
  {
    lable: "Age",
    value: "20",
  },
  {
    lable: "Sex",
    value: "Female",
  },
  {
    lable: "Email",
    value: "lexuantruong098@gmail.com",
  },
  {
    lable: "Phone",
    value: "0981793201",
  },
  {
    lable: "Facebook",
    value: "facebook.com/xuan.truong.03",
  },
  {
    lable: "Github",
    value: "github.com/xuantruongg03",
  },
];

const Experience = [
  { time: "2021 - 2025", place: "Quy Nhon University" },
  { time: "2022", place: "F8 Education" },
];

const Skills = [
  {
    name: "HTML",
    icon: "https://img.icons8.com/color/48/000000/html-5--v1.png",
  },
  { name: "CSS", icon: "https://img.icons8.com/color/48/000000/css3.png" },
  {
    name: "JavaScript",
    icon: "https://img.icons8.com/color/48/000000/javascript--v1.png",
  },
  {
    name: "ReactJS",
    icon: "https://img.icons8.com/color/48/000000/react-native.png",
  },
  { name: "SASS", 
    icon: "https://img.icons8.com/color/48/000000/sass.png" 
  },
  {
    name: "Bootstrap",
    icon: "https://img.icons8.com/color/48/000000/bootstrap.png",
  },
  {
    name: "Java",
    icon: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png",
  },
  {
    name: "C++",
    icon: "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png",
  },
  { name: "SQL", 
    icon: "https://img.icons8.com/color/48/000000/sql.png" 
  },
  {
    name: "GitHub",
    icon: "https://img.icons8.com/fluent/48/000000/github.png",
  },
];

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
                  {info.map((item, index) => (
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
                  {Experience.map((item, index) => (
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
