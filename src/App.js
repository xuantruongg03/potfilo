import "./App.css";
import Menu from "./menu/Menu";
import CompHome from "./pages/homePage/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Menu />
        <Routes>
            <Route path = "/" index element={<CompHome />} />
        </Routes>
    </div>
  );
}

export default App;
