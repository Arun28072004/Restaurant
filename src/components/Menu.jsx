import { useState } from "react";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import chicken from "../assets/c2.jpg";
import mutton from "../assets/mu.jpg";
import fish from "../assets/fi.jpg";
import prawn from "../assets/pr.jpg";
import ambur from "../assets/am.jpg";
import hb from "../assets/hb.jpg";
import grill from "../assets/gr.jpg";
import vb from "../assets/vb.jpg";
import cw from "../assets/cw.jpg";
import cf from "../assets/cf.jpg";
import cs from "../assets/cs.jpg";
import mkb from "../assets/mkb.jpg";
import k from "../assets/k.jpg";
import ms from "../assets/ms.jpg";
import { Link } from "react-router-dom";

function Menu() {

  const [filter, setFilter] = useState("All");


  const items = [
    {
      name: "Chicken Briyani",
      price: "₹120",
      desc: "Classic chicken biryani",
      img: chicken,
      category: "Biryani"
    },
    {
      name: "Mutton Briyani",
      price: "₹350",
      desc: "Tender mutton biryani",
      img: mutton,
      category: "Biryani"
    },
    {
      name: "Fish Briyani",
      price: "₹150",
      desc: "Fresh fish biryani",
      img: fish,
      category: "Biryani"
    },
    {
      name: "Ambur Briyani",
      price: "₹200",
      desc: "Ambur special taste",
      img: ambur,
      category: "Biryani"
    },
    {
      name: "Hyderabadi Briyani",
      price: "₹250",
      desc: "Royal dum biryani",
      img: hb,
      category: "Biryani"
    },

    {
      name: "Chicken Wings",
      price: "₹100",
      desc: "Crispy wings",
      img: cw,
      category: "Starters"
    },
    {
      name: "Chicken Fry",
      price: "₹250",
      desc: "Spicy chicken fry",
      img: cf,
      category: "Starters"
    },
    {
      name: "Grilled Chicken",
      price: "₹250",
      desc: "Char grilled chicken",
      img: grill,
      category: "Starters"
    },
    {
      name: "Mutton Kola Balls",
      price: "₹250",
      desc: "Chettinad special",
      img: mkb,
      category: "Starters"
    },
    {
      name: "Prawn",
      price: "₹550",
      desc: "Spicy prawn fry",
      img: prawn,
      category: "Starters"
    },

    {
      name: "Chicken Soup",
      price: "₹50",
      desc: "Hot chicken soup",
      img: cs,
      category: "Soups"
    },
    {
      name: "Mutton Soup",
      price: "₹250",
      desc: "Rich mutton soup",
      img: ms,
      category: "Soups"
    },

    {
      name: "Veg Briyani",
      price: "₹180",
      desc: "Veg special biryani",
      img: vb,
      category: "Veg"
    },
    {
      name: "Keema",
      price: "₹250",
      desc: "Minced mutton masala",
      img: k,
      category: "Starters"
    },
  ];

  const filteredItems =
    filter === "All"
      ? items : items.filter(item => item.category === filter);

  return (
    <>
      <section className="bg-black text-white py-20 px-6">

        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-yellow-500"> Our Menu </h2>
          <p className="text-gray-400 mt-3">
            Delicious food made with love and premium ingredients
          </p>
        </div>


        <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
          {["All", "Biryani", "Starters", "Soups", "Veg"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-sm sm:text-base rounded-full border transition whitespace-nowrap
      ${filter === cat
                  ? "bg-yellow-500 text-black border-yellow-500" : "text-white border-gray-600 hover:text-yellow-500 hover:border-yellow-500"
                }`} >
              {cat}
            </button>
          ))}
        </div>


        <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3">

          {filteredItems.map((item, index) => (
            <div
              key={index} className="bg-white text-black rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group"  >


              <div className="relative">
                <img src={item.img} alt={item.name} className="w-full h-44 object-cover group-hover:scale-105 transition duration-300" />


                <button className="absolute top-3 right-3 bg-black/70 backdrop-blur-md p-2 rounded-full text-yellow-500 hover:bg-yellow-500 hover:text-black transition">
                  <FaShoppingCart size={14} />
                </button>
              </div>


              <div className="p-5">


                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <span className="text-yellow-500 font-bold">{item.price}</span>
                </div>


                <div className="flex items-center gap-1 mt-2 text-yellow-400 text-sm">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                  <span className="text-gray-500 text-xs ml-2">(4.0)</span>
                </div>


                <p className="text-gray-500 text-sm mt-2">{item.desc}</p>


                <button className="mt-4 w-full px-4 py-2 bg-yellow-500 text-black rounded-full font-semibold hover:bg-black hover:text-yellow-500 border border-yellow-500 transition">Order Now </button>

              </div>
            </div>
          ))}

        </div>

      </section>

      <footer className="w-full bg-gray-950 text-white pt-16 pb-6">

        <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-4">


          <div>
            <h2 className="text-2xl font-bold text-yellow-500 mb-4">Biryani House   </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Serving authentic and delicious biryani made with love, tradition,
              and premium spices. Experience the royal taste of India.
            </p>
          </div>


          <div>
            <h3 className="font-semibold mb-4 text-yellow-500"><i class="fa-solid fa-link"></i> Quick Links </h3>

            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-yellow-500 cursor-pointer">Home</li>
              <li className="hover:text-yellow-500 cursor-pointer">Menu</li>
              <li className="hover:text-yellow-500 cursor-pointer">About</li>
              <li className="hover:text-yellow-500 cursor-pointer">Contact</li>
            </ul>
          </div>


          <div>
            <h3 className="font-semibold mb-4 text-yellow-500"> <i class="fa-solid fa-phone"></i>Contact  </h3>

            <p className="text-gray-400 text-sm flex items-center gap-2"> <i class="fa-solid fa-map-pin"></i> Chennai, Tamil Nadu</p>
            <p className="text-gray-400 text-sm flex items-center gap-2"> <i class="fa-solid fa-address-book"></i>+91 123 456 7890</p>
            <p className="text-gray-400 text-sm flex items-center gap-2"> <i class="fa-regular fa-envelope"></i>info@biryanihouse.com
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <h3 className="font-semibold mb-3 text-yellow-500"> <i class="fa-solid fa-clock"></i>Opening Hours  </h3>

              <p className="text-gray-400 text-sm"> <i class="fa-solid fa-calendar-days"></i>Mon - Sun</p>
              <p className="text-gray-400 text-sm">9:00 AM - 11:00 PM</p>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-yellow-500"> Follow Us</h3>

              <div className="flex gap-4 text-lg">
                <i className="fa-brands fa-instagram cursor-pointer hover:text-yellow-500"></i>
                <i className="fa-brands fa-facebook cursor-pointer hover:text-yellow-500"></i>
                <i className="fa-brands fa-x-twitter cursor-pointer hover:text-yellow-500"></i>
                <i className="fa-brands fa-youtube cursor-pointer hover:text-yellow-500"></i>
              </div>
            </div>

          </div>

        </div>


        <div className="max-w-4xl mx-auto mt-12 px-6 text-center">
          <h3 className="text-xl text-yellow-500 mb-3"> Subscribe for Offers  </h3>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-full bg-transparent border border-gray-600 text-white placeholder-gray-400 outline-none w-full sm:w-auto focus:border-yellow-500" />
            <Link to="/Login">
              <button className="bg-yellow-500 px-6 py-3 rounded-full bg-yellow-500 text-black font-semibold hover:bg-black hover:text-yellow-500 border border-yellow-500 transition">Subscribe </button>
            </Link>
          </div>
        </div>


        <div className="border-t border-gray-800 mt-10 pt-4 text-center text-gray-500 text-sm px-6">
          © 2026 <span className="text-yellow-500">Biryani House</span>. All Rights Reserved.
        </div>

      </footer>
    </>
  );
}


export default Menu;