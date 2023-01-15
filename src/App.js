import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Menu from "./menu/Menu";
import About from "./pages/aboutPage/About";
import Contact from "./pages/contactPage/Contact";
import CompHome from "./pages/homePage/Home";
import Project from "./pages/projectPage/Project";

// const light =

function App() {
  const stateDarkMode = useSelector((state) => state.DarkMode);

  const dark = {
    "--color": "#ffb400",
    "--text-name-color": "#ffb400",
    "--text-job-color": "#ffb400",
    "--text-intro-color": "#fff",
  };

  const body = document.getElementsByTagName("body")[0];
  body.style.backgroundColor = stateDarkMode ? "black" : "white";

  return (
    <div className="App" style={stateDarkMode ? dark : null}>
      <Menu />
      <Routes>
        <Route path="/" index element={<CompHome />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;
