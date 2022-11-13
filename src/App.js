import { Route, Routes } from "react-router-dom";
import "./App.css";
import Menu from "./menu/Menu";
import About from "./pages/aboutPage/About";
import CompHome from "./pages/homePage/Home";

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" index element={<CompHome />} />
        <Route path="/about" index element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
