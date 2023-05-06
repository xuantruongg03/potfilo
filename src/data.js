const Info = [
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

const Projects = [
  {
    id: 1,
    name: "Clock Countdown",
    img: require("./assets/images/dong-ho.png"),
    created: "2022",
    des: "This is the first product. The product is used to count down a predetermined time.",
    frontEnd: "HTML, CSS, JavaScript",
    backEnd: "",
    demo: "https://xuantruongg03.github.io/dong-ho/",
    source: "",
    role: "Web",
  },
  {
    id: 2,
    name: "Computer Store",
    img: require("./assets/images/store/home1.png"),
    des: "A relatively mature product that still has a few features in development. This is basically an e-commerce website that sells computers and computer accessories.",
    created: "2022",
    frontEnd: "ReactJS",
    backEnd: "NodeJS, MySQL",
    demo: "",
    source: "",
    role: "Web",
  },
  {
    id: 3,
    name: "App Calculator Tip",
    img: require("./assets/images/tip-cal.png"),
    des: "The app is used to calculate tip and includes some basic features such as tip calculation after each order and total tip collected.",
    created: "2022",
    frontEnd: "VueJS",
    backEnd: "",
    demo: "https://xt-tip-calculator-app.netlify.app/",
    source: "",
    role: "Web",
  },
  {
    id: 4,
    name: "Music Player",
    img: require("./assets/images/music-player.jpg"),
    des: "Music player application with basic features. The first product when working with Java",
    created: "2022",
    frontEnd: "JavaFX",
    backEnd: "Java",
    demo: "https://goeco.link/DFuvJ",
    source: "https://github.com/xuantruongg03/music-player",
    role: "Desktop",
  },
];

const Skills = [
  {
    name: "HTML",
    icon: require("./assets/images/html.png"),
    reached: 90
  },
  { name: "CSS", icon: require("./assets/images/css.jpg"), reached: 90 },
  {
    name: "JavaScript",
    icon: require("./assets/images/js.jpg"),
    reached: 80
  },
  {
    name: "ReactJS",
    icon: require("./assets/images/reactjs.jpg"),
    reached: 80
  },
  { name: "SASS", icon: require('./assets/images/sass.jpg'), reached: 70 },
  {
    name: "Tailwind",
    icon: require("./assets/images/tailwind.jpg"),
    reached: 70
  },
  {
    name: "Java",
    icon: require("./assets/images/java.jpg"),
    reached: 80
  },
  {
    name: "C++",
    icon: require("./assets/images/c++.jpg"),
    reached: 80
  },
  { name: "SQL", icon: require("./assets/images/sql.jpg"), reached: 80 },
  {
    name: "GitHub",
    icon: require("./assets/images/github.jpg"),
    reached: 70
  },
];

const Experiences = [
  { time: "2021 - 2025", place: "Quy Nhon University" },
  { time: "2022", place: "F8 Education" },
];

export { Info, Projects, Skills, Experiences };
