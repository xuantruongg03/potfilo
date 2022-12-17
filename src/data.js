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
    name: "Đồng hồ đếm ngược",
    img: require("./assets/images/dong-ho.png"),
    created: "2022",
    des: "Đây là sản phẩm đầu tiên. Sản phẩm được dùng để đếm ngược thời gian đã được định trước",
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
    des: "Một sản phẩm tương đối hoàn thiện vẫn còn đang phát triển một vài tính năng. Về cơ bản đây là trang web thương mại điện tử loại hàng là các loại máy tính và phụ kiện máy tính",
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
    des: "App dùng để tính tiền tip với một số tính năng cơ bản như tính tiền tip sau mỗi đơn, tổng tiền tip thu được",
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
    des: "Ứng dụng chơi nhạc với những tính năng cơ bản. Là sản phẩm đầu tiên khi làm việc với Java",
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
  },
  { name: "CSS", icon: "https://img.icons8.com/color/48/000000/css3.png" },
  {
    name: "JavaScript",
    icon: "https://img.icons8.com/color/48/000000/javascript--v1.png",
  },
  {
    name: "ReactJS",
    icon: "https://img.icons8.com/color/48/000000/react-native.png",
  },
  { name: "SASS", icon: "https://img.icons8.com/color/48/000000/sass.png" },
  {
    name: "Bootstrap",
    icon: "https://img.icons8.com/color/48/000000/bootstrap.png",
  },
  {
    name: "Java",
    icon: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png",
  },
  {
    name: "C++",
    icon: "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png",
  },
  { name: "SQL", icon: "https://img.icons8.com/color/48/000000/sql.png" },
  {
    name: "GitHub",
    icon: "https://img.icons8.com/fluent/48/000000/github.png",
  },
];

const Experiences = [
  { time: "2021 - 2025", place: "Quy Nhon University" },
  { time: "2022", place: "F8 Education" },
];

export { Info, Projects, Skills, Experiences };
