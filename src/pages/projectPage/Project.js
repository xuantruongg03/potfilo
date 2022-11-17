import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useState } from "react";
import Title from "../../title/Title";
import style from "./Project.module.scss";

const data = { background: "Works", title: "My Projects" };

const type = ["All", "Web", "Mobile", "Desktop", "Another"];

const project = [
  {
    name: "Đồng hồ đếm ngược",
    img: require("../../assets/images/dong-ho.png"),
    created: "2022",
    des: "Đây là sản phẩm đầu tiên. Sản phẩm được dùng để đếm ngược thời gian đã được định trước",
    frontEnd: "HTML, CSS, JavaScript",
    backEnd: "",
    demo: "https://xuantruongg03.github.io/dong-ho/",
    role: "Web",
  },
  {
    name: "Web bán máy tính",
    img: require("../../assets/images/store/store1.png"),
    des: "Một sản phẩm tương đối hoàn thiện vẫn còn đang phát triển một vài tính năng. Về cơ bản đây là trang web thương mại điện tử loại hàng là các loại máy tính và phụ kiện máy tính",
    created: "2022",
    frontEnd: "ReactJS",
    backEnd: "",
    demo: "https://xuantruongg03.github.io/store/",
    role: "Web",
  },
  {
    name: "App tính tiền tip",
    img: require("../../assets/images/tip-cal.png"),
    des: "App dùng để tính tiền tip với một số tính năng cơ bản như tính tiền tip sau mỗi đơn, tổng tiền tip thu được",
    created: "2022",
    frontEnd: "VueJS",
    backEnd: "",
    demo: "",
    role: "Web",
  },
];

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
        {type.map((item, index) => (
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
        {project.map((item, index) => (
          <div key={index}>
            <div className={style.project} onClick={handleShow}>
              <img src={item.img} alt={item.name} className={style.img} id = {index}/>
            </div>
          </div>
        ))}
            <div className={clsx(style.popup, show ? style.active : null)}>
              <div className={style.imgPopup}>
                <img
                  src={project[activePopUp].img}
                  alt={project[activePopUp].name}
                  className={style.imageInPopup}
                />
                <div>
                </div>
              </div>
              <div className={style.infoPopup}>
                <div className={style.boxIcon} onClick={handleHide}>
                  <FontAwesomeIcon icon={faClose} className={style.icon} />
                </div>
                <h3 className={style.nameProject}>{project[activePopUp].name}</h3>
                <p className={style.desProject}>
                  <span className={style.labelInfoProject}>Mô tả: </span>
                  {project[activePopUp].des}
                </p>
                <p className={style.desProject}>
                  <span className={style.labelInfoProject}>Ngày tạo: </span>{" "}
                  {project[activePopUp].created}
                </p>
                <p className={style.desProject}>
                  <span className={style.labelInfoProject}>Front-End: </span>{" "}
                  {project[activePopUp].frontEnd}
                </p>
                <p className={style.desProject}>
                  <span className={style.labelInfoProject}>Back-End: </span>{" "}
                  {project[activePopUp].backEnd}
                </p>
                <p className={style.desProject}>
                  <span className={style.labelInfoProject}>Demo: </span>{" "}
                  <a
                    href={project[activePopUp].demo}
                    target="_blank"
                    rel="noreferrer"
                    className={style.linkDemo}
                  >
                    {project[activePopUp].demo}
                  </a>
                </p>
              </div>
            </div>
      </div>
    </div>
  );
}

export default Project;
