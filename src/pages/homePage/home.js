import style from "./Home.module.scss";

function CompHome() {
  return (
    <div className={style.homePage} data-role="home">
      <div className={style.blockColor} />
      <div className={style.imageBox}>
        <div className={style.image} />
      </div>
      <div className={style.textBox}>
        <h1 className={style.name}>Le Xuan Truong</h1>
        <h2 className={style.job}>I'm a Developer</h2>
        <p className={style.intro}>
          Hello everyone! I'm Truong, currently a second-year student at Quy
          Nhon University majoring in Software Engineering. I really like
          programming and am learning to become a good programmer. I have a few
          small projects that I hope you enjoy.
        </p>
      </div>
    </div>
  );
}

export default CompHome;
