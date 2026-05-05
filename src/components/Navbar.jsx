import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/g.jpg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navStyle = ({ isActive }) =>
    isActive  ? "text-yellow-500 font-semibold" : "hover:text-yellow-500 transition";

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">

      <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">

        
        <div className="flex items-center gap-3">
          <img src={logo}  alt="logo" className="w-12 h-12 rounded-full object-cover border-2 border-yellow-500" />
          <h1 className="font-bold text-2xl md:text-3xl text-gray-800">   Restaurant </h1>
        </div>

      
        <div className="hidden md:flex items-center gap-6 text-gray-700">
          <NavLink to="/" end className={navStyle}>Home</NavLink>
          <NavLink to="/about" className={navStyle}>About</NavLink>
          <NavLink to="/menu" className={navStyle}>Menu</NavLink>
          <NavLink to="/chefs" className={navStyle}>Chefs</NavLink>
          <NavLink to="/contact" className={navStyle}>Contact</NavLink>
          <NavLink to="/gallery" className={navStyle}>Gallery</NavLink>
        </div>

       
        <div className="hidden md:flex items-center gap-3">
          <Link to="/contact">
            <button className="px-4 py-2 rounded-full bg-yellow-500 text-white hover:bg-yellow-600 transition shadow"> Book Table  </button>
          </Link>

          <Link to="/login">
            <button className="px-4 py-2 rounded-full border border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white transition">Login </button>
          </Link>
        </div>

        
        <button
          onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-3xl text-gray-800" > {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      
      <div
        className={`md:hidden bg-white overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[500px] py-6" : "max-h-0"   }`} >
        <div className="flex flex-col items-center gap-5 text-gray-700">

          <NavLink to="/"  onClick={() => setMenuOpen(false)} className={navStyle}>Home</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)} className={navStyle}>About</NavLink>
          <NavLink to="/menu" onClick={() => setMenuOpen(false)} className={navStyle}>Menu</NavLink>
          <NavLink to="/chefs" onClick={() => setMenuOpen(false)} className={navStyle}>Chefs</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)} className={navStyle}>Contact</NavLink>
          <NavLink to="/gallery" onClick={() => setMenuOpen(false)} className={navStyle}>Gallery</NavLink>

          <div className="flex flex-col gap-3 mt-3">
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              <button className="px-6 py-2 bg-yellow-500 text-white rounded-full"> Book Table  </button>
            </Link>

            <Link to="/Login" onClick={() => setMenuOpen(false)}>
              <button className="px-6 py-2 border border-yellow-500 text-yellow-600 rounded-full"> Login </button>
            </Link>
          </div>
        </div>
      </div>

    </nav>
  );
}

export default Navbar;