import style from "./Title.module.scss";

function Title(props) {
    const title = props.data.title.split(" ");

    return ( 
        <div className={style.boxTitle}>
          <div className={style.titleBackground}>
            {props.data.background}
            </div>
          <h1 className={style.title}>
            {title[0]} <span className={style.span}>{title[1]}</span>
          </h1>
        </div>
     );
}

export default Title;