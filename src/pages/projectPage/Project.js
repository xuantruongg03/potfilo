import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useState } from "react";
import { Projects } from "../../data";
import Title from "../../title/Title";
import style from "./Project.module.scss";

const data = { background: "Works", title: "My Projects" };

const types = ["All", "Web", "Mobile", "Desktop", "Another"];

function Project() {
  const [active, setActive] = useState("All");

  const [show, setShow] = useState(false);
  const [activePopUp, setActivePopUp] = useState(0);

  const handleChangeActive = (e) => {
    setActive(e.target.innerHTML);
  };

  const handleShow = (e) => {
    setShow(true);
    setActivePopUp(e.target.id);
  };

  const handleHide = () => {
    setShow(false);
  };

  return (
    <div className={style.container}>
      <Title data={data} />
      <div className={style.boxType}>
        {types.map((item, index) => (
          <div
            key={index}
            onClick={handleChangeActive}
            className={clsx(style.type, item === active ? style.active : null)}
          >
            {item}
          </div>
        ))}

        {/* Show project */}
      </div>
      <div className={style.boxProject}>
        {Projects.filter(
          (item) => item.role === active || active === "All"
        ).map((item, index) => (
          <div key={index}>
            <div className={style.project} onClick={handleShow}>
              <img
                src={item.img}
                alt={item.name}
                className={style.img}
                id={item.id - 1}
              />
            </div>
          </div>
        ))}
        <div className={clsx(style.popup, show ? style.active : null)}>
          <div className={style.imgPopup}>
            <img
              src={Projects[activePopUp].img}
              alt={Projects[activePopUp].name}
              className={style.imageInPopup}
            />
            <div></div>
          </div>
          <div className={style.infoPopup}>
            <div className={style.boxIcon} onClick={handleHide}>
              <FontAwesomeIcon icon={faClose} className={style.icon} />
            </div>
            <h3 className={style.nameProject}>{Projects[activePopUp].name}</h3>
            <p className={style.desProject}>
              <span className={style.labelInfoProject}>Description: </span>
              {Projects[activePopUp].des}
            </p>
            <p className={style.desProject}>
              <span className={style.labelInfoProject}>Created: </span>{" "}
              {Projects[activePopUp].created}
            </p>
            <p className={style.desProject}>
              <span className={style.labelInfoProject}>Front-End: </span>{" "}
              {Projects[activePopUp].frontEnd}
            </p>
            <p className={style.desProject}>
              <span className={style.labelInfoProject}>Back-End: </span>{" "}
              {Projects[activePopUp].backEnd}
            </p>
            <p className={style.desProject}>
              <span className={style.labelInfoProject}>Demo: </span>{" "}
              <a
                href={Projects[activePopUp].demo}
                target="_blank"
                rel="noreferrer"
                className={style.linkDemo}
              >
                {Projects[activePopUp].demo}
              </a>
            </p>
            <p
              className={style.desProject}
              style={
                Projects[activePopUp].source !== "" ? null : { display: "none" }
              }
            >
              <span className={style.labelInfoProject}>Source: </span>{" "}
              <a
                href={Projects[activePopUp].source}
                target="_blank"
                rel="noreferrer"
                className={style.linkDemo}
              >
                {Projects[activePopUp].source}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
