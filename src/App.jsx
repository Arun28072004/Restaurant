import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Menu from "./components/Menu";
import About from "./components/About";
import Contact from "./components/Contact";
import Chefs from "./components/Chefs";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Gallery from "./components/Gallery";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Chefs" element={<Chefs />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;