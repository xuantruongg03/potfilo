import style from "./Home.module.scss";

function CompHome() {
  return (
    <div className={style.homePage}>
        <div className={style.blockColor}/>
      <div className={style.imageBox}>
        <div className={style.image} />
      </div>
      <div className={style.textBox}>
        <h1 className={style.name}>Xuân Trường</h1>
        <h2 className={style.job}>I'm a Web Developer</h2>
        <p className={style.intro}>
          Hello mọi người! Mình là Trường, hiện đang là sinh viên năm 2 trường Đại học
          Quy Nhơn chuyên ngành Kĩ Thuật Phần Mềm
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, quod, quia, voluptate quae voluptatem quibusdam
            voluptatibus quos quas quidem nesciunt. Quisquam, quae. Quisquam
            voluptates, quod, quia, voluptate quae voluptatem quibusdam
            voluptatibus quos quas quidem nesciunt. Quisquam, quae.

        </p>
      </div>
    </div>
  );
}

export default CompHome;
