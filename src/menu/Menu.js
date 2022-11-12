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

  return (
    <div className="menu">
      <div className={style.box}>
        <Link to="/" className="link">
          <div className={style.boxIconMenu}>
            <FontAwesomeIcon icon={faHome} className={style.iconMenu} />
          </div>
        </Link>
        <div className={style.boxIconMenu}>
          <FontAwesomeIcon icon={faBriefcase} className={style.iconMenu} />
        </div>
        <div className={style.boxIconMenu}>
          <FontAwesomeIcon icon={faUser} className={style.iconMenu} />
        </div>
        <div className={style.boxIconMenu}>
          <FontAwesomeIcon icon={faEnvelope} className={style.iconMenu} />
        </div>
        <div className={style.boxIconMenu} onClick={handleChangeTheme}>
          {isDark ? (
            <FontAwesomeIcon icon={faMoon} className={style.iconMenu} />
          ) : (
            <FontAwesomeIcon icon={faSun} className={style.iconMenu} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Menu;
