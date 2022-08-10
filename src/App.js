import "./App.css";
import { Routes, Route } from "react-router-dom";
import Menu from "./Components/Menu";
import Navbar from "./Navbar/Navbar";
import Link from "./Components/Link";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import About from "./Components/About";

import HomeRead from "./Components/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route exact path="home" element={<HomeRead />} />
       <Route path="menu" element={<Menu />} />
        <Route path="about" element={<About />} />
        <Route path="link" element={<Link />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
