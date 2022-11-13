import style from "./About.module.scss";

function About() {
  return (
    <div>
      <div className={style.boxTitle}>
        <div className={style.titleBackground}>AboutMe</div>
        <h1 className={style.title}>
          ABOUT <span className={style.span}>ME</span>
        </h1>
      </div>
    </div>
  );
}

export default About;
