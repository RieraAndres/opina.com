import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Views/Home/Home";
import About from "./Views/About/About";
import Detail from "./Views/Detail/Detail";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
