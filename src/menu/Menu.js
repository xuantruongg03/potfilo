import {
  faBriefcase,
  faEnvelope,
  faHome,
  faMoon,
  faSun,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Menu.module.scss";

function Menu() {
  const [isDark, setIsDark] = useState(true);

  //đổi màu nền
  const handleChangeTheme = () => setIsDark(!isDark);

  const iconMenu = [
    { link: "/", icon: faHome, name: "Home" },
    { link: "/project", icon: faBriefcase, name: "Project" },
    { link: "/about", icon: faUser, name: "About" },
    { link: "/contact", icon: faEnvelope, name: "Contact" },
  ];
  return (
    <div className="menu">
      <div className={style.box}>
        {iconMenu.map((item) => (
          <div className={style.boxIconMenu}>
            <Link to={item.link} className={style.link}>
              <FontAwesomeIcon icon={item.icon} className={style.iconMenu} />
            </Link>
          </div>
        ))}
        <div className={style.boxIconMenu} onClick={handleChangeTheme}>
          <FontAwesomeIcon
            icon={isDark ? faMoon : faSun}
            className={style.iconMenu}
          />
        </div>
      </div>
    </div>
  );
}

export default Menu;
