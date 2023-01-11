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
    name: "Dong Ho Dem Nguoc",
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
    name: "Web bán máy tính",
    img: require("./assets/images/store/store1.png"),
    des: "A relatively mature product that still has a few features in development. This is basically an e-commerce website that sells computers and computer accessories.",
    created: "2022",
    frontEnd: "ReactJS",
    backEnd: "",
    demo: "https://xuantruongg03.github.io/store/",
    source: "",
    role: "Web",
  },
  {
    id: 3,
    name: "App tính tiền tip",
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
    icon: "https://img.icons8.com/color/48/000000/html-5--v1.png",
    reached: 90
  },
  { name: "CSS", icon: "https://img.icons8.com/color/48/000000/css3.png", reached: 90 },
  {
    name: "JavaScript",
    icon: "https://img.icons8.com/color/48/000000/javascript--v1.png",
    reached: 80
  },
  {
    name: "ReactJS",
    icon: "https://img.icons8.com/color/48/000000/react-native.png",
    reached: 80
  },
  { name: "SASS", icon: "https://img.icons8.com/color/48/000000/sass.png", reached: 70 },
  {
    name: "Bootstrap",
    icon: "https://img.icons8.com/color/48/000000/bootstrap.png",
    reached: 70
  },
  {
    name: "Java",
    icon: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png",
    reached: 80
  },
  {
    name: "C++",
    icon: "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png",
    reached: 80
  },
  { name: "SQL", icon: "https://img.icons8.com/color/48/000000/sql.png", reached: 80 },
  {
    name: "GitHub",
    icon: "https://img.icons8.com/fluent/48/000000/github.png",
    reached: 70
  },
];

const Experiences = [
  { time: "2021 - 2025", place: "Quy Nhon University" },
  { time: "2022", place: "F8 Education" },
];

export { Info, Projects, Skills, Experiences };
