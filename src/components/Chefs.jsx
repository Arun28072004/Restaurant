import chef1 from "../assets/chef11.jpg";
import chef2 from "../assets/chef22.jpg";
import chef3 from "../assets/chef33.jpg";
import k1 from "../assets/chef6.jpg";
import k2 from "../assets/chef5.jpg";
import k3 from "../assets/chef41.jpg";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

function Chefs() {
  const chefs = [
    {
      name: "Chef Arjun",
      role: "Head Chef",
      exp: "15+ Years Experience",
      img: chef1,
    },
    {
      name: "Chef Ravi",
      role: "Biryani Specialist",
      exp: "12+ Years Experience",
      img: chef2,
    },
    {
      name: "Chef Karthik",
      role: "Grill Master",
      exp: "10+ Years Experience",
      img: chef3,
    },
     {
      name: "Chef Arjun",
      role: "Head Chef",
      exp: "15+ Years Experience",
      img: k1,
    },
    {
      name: "Chef Ravi",
      role: "Biryani Specialist",
      exp: "12+ Years Experience",
      img: k2,
    },
    {
      name: "Chef Karthik",
      role: "Grill Master",
      exp: "10+ Years Experience",
      img: k3,
    },
  ];

  return (
    <>
    <section className="bg-black text-white py-24 px-6">

      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold text-yellow-500 tracking-wide"> Our Master Chefs</h2>
        <p className="text-gray-400 mt-4 text-lg">Crafted with passion, served with perfection </p>
      </div>

      <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 md:grid-cols-3">

        {chefs.map((chef, index) => (
          <div key={index}className="group relative rounded-3xl overflow-hidden" >

            
            <img src={chef.img} className="w-full h-[420px] object-cover transform group-hover:scale-110 transition duration-500" />

           
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

            
            <div className="absolute bottom-0 p-6 w-full">

              <span className="bg-yellow-500 text-black text-xs px-3 py-1 rounded-full">   {chef.exp} </span>

              <h3 className="text-2xl font-bold mt-3">
                {chef.name}
              </h3>

              <p className="text-gray-300 text-sm mb-4">
                {chef.role}
              </p>

             
              <div className="flex gap-4 opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0 transition duration-500">
                <FaInstagram className="cursor-pointer hover:text-yellow-500" />
                <FaFacebook className="cursor-pointer hover:text-yellow-500" />
                <FaTwitter className="cursor-pointer hover:text-yellow-500" />
              </div>

            </div>

          </div>
        ))}
      </div>

      
      <div className="text-center mt-16">
        <button className="px-8 py-3 rounded-full border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition"> View Full Team </button>
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
      <input type="email"placeholder="Enter your email"className="px-4 py-2 rounded-full bg-transparent border border-gray-600 text-white placeholder-gray-400 outline-none w-full sm:w-auto focus:border-yellow-500"/>
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