import { useState } from "react";
import g1 from "../assets/c2.jpg";
import g2 from "../assets/mu.jpg";
import g3 from "../assets/fi.jpg";
import g4 from "../assets/pr.jpg";
import g5 from "../assets/am.jpg";
import g6 from "../assets/hb.jpg";
import g7 from "../assets/gr.jpg";
import g8 from "../assets/vb.jpg";
import g9 from "../assets/cf.jpg";
import g10 from "../assets/k.jpg";
import g11 from "../assets/mkb.jpg";
import g12 from "../assets/cs.jpg";
import g13 from "../assets/kk1.jpg";
import g14 from "../assets/kk2.jpg";
import g15 from "../assets/kk3.jpg";
import g16 from "../assets/kk4.jpg";
import g17 from "../assets/kk5.jpg";
import g18 from "../assets/rr.jpg";
import g19 from "../assets/rr1.jpg";
import g20 from "../assets/rr2.jpg";
import g21 from "../assets/rr3.jpg";
import g22 from "../assets/rr4.jpg";
import { Link } from "react-router-dom";

function Chefs() {

  const [filter, setFilter] = useState("All");

  const images = [
    {
      img: g1,
      category: "Food"
    },
    {
      img: g2,
      category: "Food"
    },
    {
      img: g3,
      category: "Food"
    },
    {
      img: g4,
      category: "Food"
    },
    {
      img: g5,
      category: "Food"
    },
    {
      img: g6,
      category: "Food"
    },

    {
      img: g7,
      category: "Food"
    },
    {
      img: g8,
      category: "Food"
    },
    {
      img: g9,
      category: "Food"
    },

    {
      img: g10,
      category: "Food"
    },
    {
      img: g11,
      category: "Food"
    },
    {
      img: g12,
      category: "Food"
    },
    {
      img: g13,
      category: "Kitchen"
    },
    {
      img: g14,
      category: "Kitchen"
    },
    {
      img: g15,
      category: "Kitchen"
    },
    {
      img: g16,
      category: "Kitchen"
    },
    {
      img: g17,
      category: "Kitchen"
    },
    {
      img: g18,
      category: "Restaurant"
    },
    {
      img: g19,
      category: "Restaurant"
    },
    {
      img: g20,
      category: "Restaurant"
    },
    {
      img: g21,
      category: "Restaurant"
    },
    {
      img: g22,
      category: "Restaurant"
    },

  ];

  const filteredImages =
    filter === "All"
      ? images : images.filter(item => item.category === filter);

  return (
    <>
      <section className="bg-black text-white py-20 px-6">


        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-yellow-500"> Our Gallery </h2>
          <p className="text-gray-400 mt-3">A glimpse of our delicious dishes and ambiance </p>
        </div>


        <div className="flex justify-center flex-wrap gap-4 mb-10">
          {["All", "Food", "Kitchen", "Restaurant"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full border transition 
              ${filter === cat ? "bg-yellow-500 text-black border-yellow-500" : "border-gray-600 text-white hover:text-yellow-500 hover:border-yellow-500"}`} > {cat}
            </button>
          ))}
        </div>


        <div className="max-w-6xl mx-auto grid gap-5 sm:grid-cols-2 md:grid-cols-3">

          {filteredImages.map((item, index) => (
            <div key={index} className="relative overflow-hidden rounded-xl group"  >


              <img src={item.img} className="w-full h-64 object-cover group-hover:scale-110 transition duration-500" />


              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <p className="text-yellow-500 text-lg font-semibold">
                  {item.category}
                </p>
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


export default Chefs;