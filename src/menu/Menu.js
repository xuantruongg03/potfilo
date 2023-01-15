import {
  faBriefcase,
  faEnvelope,
  faHome,
  faMoon,
  faSun,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import style from "./Menu.module.scss";

function Menu() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.DarkMode);

  //đổi màu nền
  const handleChangeTheme = () => 
  {
    dispatch({
      type: 'CHANGE_THEME',
      state: true
    })
  };

  const iconMenu = [
    { link: "/", icon: faHome, name: "Home" },
    { link: "/about", icon: faUser, name: "About" },
    { link: "/project", icon: faBriefcase, name: "Project" },
    { link: "/contact", icon: faEnvelope, name: "Contact" },
  ];
  return (
    <div className="menu">
      <div className={style.box}>
        {iconMenu.map((item, key) => (
          <Link to={item.link} className={style.link} key = {key}>
            <div className={style.boxIconMenu}>
              <FontAwesomeIcon icon={item.icon} className={style.iconMenu} />
            </div>
          </Link>
        ))}
        <div className={style.boxIconMenu} onClick={handleChangeTheme}>
          <FontAwesomeIcon
            icon={state ? faSun : faMoon}
            className={style.iconMenu}
          />
        </div>
      </div>
    </div>
  );
}

export default Menu;
