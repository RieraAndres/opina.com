import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Views/Home/Home";
import About from "./Views/About/About";
import Detail from "./Views/Detail/Detail";
import Login from "./Views/Login/Login";
import Admin from "./Views/Admin/Admin";
import AdminDetail from "./Views/AdminDetail/AdminDetail";
import Create from "./Views/Create/Create";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/adminlogin" element={<Login />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/admin/:surveyId" element={<AdminDetail />}></Route>
        <Route path="/admin/create" element={<Create />}></Route>
      </Routes>
    </div>
  );
}

export default App;
