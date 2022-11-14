import { Route, Routes } from "react-router-dom";
import "./App.css";
import Menu from "./menu/Menu";
import About from "./pages/aboutPage/About";
import Contact from "./pages/contactPage/Contact";
import CompHome from "./pages/homePage/Home";
import Project from "./pages/projectPage/Project";

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" index element={<CompHome />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/project" element={<Project/>} />
      </Routes>
    </div>
  );
}

export default App;
