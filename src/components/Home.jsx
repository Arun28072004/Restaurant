import Briyani from "../assets/home.jpg";
import pic2 from "../assets/b2.jpg";
import c2 from"../assets/c2.jpg";
import c3 from"../assets/c3.jpg"
import img2 from"../assets/first.jpg";
import img3 from"../assets/second.jpg";
import t1 from"../assets/t1.jpg";
import t2 from"../assets/t2.jpg";
import t3 from"../assets/t3.jpg";
import t4 from"../assets/t4.jpg";
import t5 from"../assets/t5.jpg";
import t6 from"../assets/t6.jpg";
import t7 from"../assets/t7.jpg";
import t8 from"../assets/t8.jpg";
import t9 from"../assets/t9.jpg";
import t10 from"../assets/t10.jpg";
import A from "../assets/ba.jpg";
import b from"../assets/c1.jpg";
import f from "../assets/f1.jpg";
import c11 from"../assets/chef1.jpg";
import c22 from"../assets/chef2.jpg";
import c33 from"../assets/chef3.jpg";
import c44 from"../assets/chef4.jpg";
import c from"../assets/c3.jpg";
import React from "react";
import chicken from "../assets/c2.jpg";
import mutton from "../assets/mu.jpg";
import fish from "../assets/fi.jpg";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

    
  function Home() {
    const dishes = [
    {
     name: "Chicken Biryani",
     price: "₹250", 
     img: chicken },

    {
     name: "Mutton Biryani",
     price: "₹350",
     img:  mutton },

    {
     name: "Fish Biryani",
     price: "₹180",
     img: fish },

  ];
   const reviews = [
    { 
      name: "Rahul",
      text: "Best biryani in town!",
      rating: 4 ,
      img:t1
      },

    { 
      name: "Karthi Priyan",
      text: "Amazing taste and aroma!",
       rating: 5,
      img:t2 
    },
    {
        name: "Arjun",
        text: "Loved the food and service!", 
        rating: 4,
        img:t3 
      },
    { 
      name: "Santro", 
      text: "Delicious and fresh!",
       rating: 5 ,
       img:t4
      },
    {
       name: "Karthika",
       text: "Worth every rupee!",
       rating: 4 ,
      img:t5
    },
    { 
      name: "MurugaN",
       text: "Super fast delivery!", 
       rating: 5 ,
       img:t6
      },
    { 
      name: "ValarMathi",
      text: "Authentic taste!",
      rating: 4 ,
      img:t7 
      },
    { name: "Arunraj",
      text: "Highly recommended!",
      rating: 5 ,
      img:t8
      },
    {
       name: "Ravi",
       text: "Nice ambience & taste!",
       rating: 4 ,
       img:t9
        },
    { 
      name: "Divya",
      text: "Loved every bite!",
      rating: 5 ,
      img:t10},
  ];

  return (
    <>
   <section className="relative min-h-screen flex items-center overflow-hidden">


  <img
    src={Briyani}alt="Briyani1"className="absolute inset-0 w-full h-full object-cover brightness-110 "/>

  <div className="absolute inset-0 bg-black/40"></div>


  <div className="relative z-10 w-full px-6 lg:px-16 flex items-center">
    
  
    <div className="max-w-xl text-white">
      
      <p className="text-yellow-500 text-base md:text-lg italic mb-3 tracking-wide"> Authentic. Aromatic. Irresistible. </p>

      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight"> EXPERIENCE <br /> <span className="text-yellow-500">THE ROYAL</span> <br /> FLAVOR </h1>

      <p className="mt-4 text-gray-300 text-base md:text-lg leading-relaxed">
        Every grain, every spice, every moment — <br/>crafted to bring you the true taste of royalty. </p>
 <Link to={"/Menu"}>
          <button className="mt-6 px-6 py-3 bg-yellow-500 text-black rounded-lg hover:bg-black hover:text-yellow-500 border border-yellow-500 transition">  Order Now </button>
        </Link>
    </div>

  </div>
</section>
 <section className="bg-black text-white py-16 px-6">
      <h2 className="text-3xl text-center text-yellow-500 mb-10">Popular Dishes  </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {dishes.map((item, index) => (
          <div key={index} className="bg-gray-900 rounded-xl overflow-hidden">
            <img src={item.img} className="w-full h-52 object-cover" />
            <div className="p-4">
              <h3 className="text-xl">{item.name}</h3>
              <p className="text-yellow-500">{item.price}</p>
              <Link to={'/Menu'}>
              <button className="mt-3 bg-yellow-500 px-4 py-2 rounded-full text-black hover:bg-black hover:text-yellow-500 border border-yellow-500 transition"> Order Now </button>
           </Link>
            </div>
          </div>
         
  ))
}
</div>
  
  </section>
  <section className="py-20 bg-black text-center">

 
  <div className="max-w-2xl mx-auto mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-4">Why Choose Us</h2>
    <p className="text-gray-400">From authentic flavors to premium quality, we ensure every bite gives you a royal experience you’ll never forget.
    </p>
  </div>

 
  <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3 px-4">

  
    <div className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden transition-all duration-700 ease-in-out hover:scale-105">
      <img src={b} className="w-full h-48 object-cover" />
      <div className="p-5 text-left">
        <h3 className="text-lg font-semibold text-yellow-500 mb-2">Expert Chefs  </h3>
        <p className="text-sm text-gray-400 mb-4"> Our skilled chefs prepare every biryani with traditional  recipes and rich spices for authentic taste </p>

        <Link to={"/About"}>
          <button className="mt-2 px-4 py-2 bg-yellow-500 text-black rounded-lg hover:bg-black hover:text-yellow-500 border border-yellow-500 transition">  Read More </button>
        </Link>
      </div>
    </div>

   
    <div className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden transition-all duration-700 ease-in-out hover:scale-105">
      <img src={f} className="w-full h-48 object-cover" />
      <div className="p-5 text-left">
        <h3 className="text-lg font-semibold text-yellow-500 mb-2">Fast Delivery </h3>
        <p className="text-sm text-gray-400 mb-4">Enjoy hot and fresh biryani delivered quickly to your doorstep with our reliable service. </p>

        <Link to={"/About"}>
          <button className="mt-2 px-4 py-2 bg-yellow-500 text-black rounded-lg hover:bg-black hover:text-yellow-500 border border-yellow-500 transition">Read More </button>
        </Link>
      </div>
    </div>

   
    <div className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden transition-all duration-700 ease-in-out hover:scale-105">
      <img src={c} className="w-full h-48 object-cover" />
      <div className="p-5 text-left">
        <h3 className="text-lg font-semibold text-yellow-500 mb-2"> Fresh Ingredients </h3>
        <p className="text-sm text-gray-400 mb-4"> We use only high-quality fresh ingredients to maintain hygiene and deliver the best flavor.</p>

        <Link to={"/About"}>
          <button className="mt-2 px-4 py-2 bg-yellow-500 text-black rounded-lg hover:bg-black hover:text-yellow-500 border border-yellow-500 transition">Read More </button>
        </Link>
      </div>
    </div>

  </div>
</section>

    <section className="bg-black text-white py-16 px-6 text-center">
      <h2 className="text-3xl text-yellow-500 mb-6">About Us</h2>
      <p className="max-w-2xl mx-auto text-gray-300">
        Since 2010, we serve authentic biryani with traditional spices and royal taste. Every dish is crafted with passion and love. </p>
    </section>
   

   <section className="relative bg-black text-white py-24 px-6 overflow-hidden">

  <div className="absolute inset-0">
    <img src="/src/assets/c2.jpg"className="w-full h-full object-cover opacity-100" />
  </div>

  
  <div className="absolute inset-0 bg-black/70"></div>

  <div className="relative text-center max-w-3xl mx-auto">

   
    <span className="bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-semibold"> Limited Time Offer  </span>

    
    <h2 className="text-4xl md:text-6xl font-bold mt-6 text-yellow-500"> Weekend Special </h2>

    <p className="text-gray-300 mt-4 text-lg">  Enjoy authentic biryani with your loved ones and get
      <span className="text-yellow-500 font-bold"> 20% OFF </span>on all orders this weekend.</p>

    <p className="mt-4 text-sm text-gray-400"> Offer valid till Sunday midnight </p>

   <Link to='/Menu'>
    <button className="mt-8 px-8 py-3 rounded-full bg-yellow-500 text-black font-semibold hover:bg-black hover:text-yellow-500 border border-yellow-500 transition">  Order Now</button>
</Link>
  </div>

</section>


<section className="py-20 bg-black text-center">

  <h2 className="text-3xl md:text-5xl font-bold text-yellow-500 mb-12"> Our Customers Say</h2>

  <Swiper
    modules={[Autoplay, Navigation]}
    spaceBetween={20}
    autoplay={{ delay: 3000 }}
    navigation
    loop={true}
    breakpoints={{
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }} >

    {reviews.map((item, index) => (
      <SwiperSlide key={index}>
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg transition-all duration-700 ease-in-out hover:scale-105">

          
          <div className="flex items-center gap-3 mb-4">
            <img src={item.img}alt={item.name}className="w-12 h-12 rounded-full object-cover border-2 border-yellow-500" />

            <div>
              <h4 className="text-yellow-500 font-semibold">{item.name}</h4>

              <div className="flex text-yellow-400 text-sm">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>
                    {i < item.rating ? "★" : "☆"}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>

        </div>
      </SwiperSlide>
    ))}   

  </Swiper>
</section>


<section className="py-20 bg-black text-center">

  
  <div className="max-w-2xl mx-auto mb-16 px-4">
    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-yellow-500">Meet Our Chefs </h2>
    <p className="text-gray-400">
      The passionate team behind our signature biryani, crafting every dish with tradition, love, and perfection. </p>
  </div>

 
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">

    <div className="bg-gray-900 rounded-2xl p-5 text-center shadow-lg transition-all duration-700 ease-in-out hover:scale-105 border border-gray-800 group">
      
      <div className="relative">
        <img src={c11} className="mx-auto mb-4 rounded-full w-32 h-32 object-cover border-4 border-yellow-500" />

        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition">
          <i className="fa-brands fa-facebook text-white bg-yellow-500 p-2 rounded-full"></i>
          <i className="fa-brands fa-instagram text-white bg-yellow-500 p-2 rounded-full"></i>
        </div>
      </div>

      <h2 className="font-semibold text-white text-lg">Cheyenne Workman</h2>
      <p className="text-yellow-500 text-sm">Head Chef</p>
      <p className="text-gray-400 text-sm mt-2"> Expert in crafting authentic biryani with rich spices and royal taste. </p>
    </div>

    
    <div className="bg-gray-900 rounded-2xl p-5 text-center shadow-lg transition-all duration-700 ease-in-out hover:scale-105 border border-gray-800 group">
      
      <div className="relative">
        <img src={c22} className="mx-auto mb-4 rounded-full w-32 h-32 object-cover border-4 border-yellow-500" />

        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition">
          <i className="fa-brands fa-facebook text-white bg-yellow-500 p-2 rounded-full"></i>
          <i className="fa-brands fa-instagram text-white bg-yellow-500 p-2 rounded-full"></i>
        </div>
      </div>

      <h2 className="font-semibold text-white text-lg">Corey Rosser</h2>
      <p className="text-yellow-500 text-sm">Kitchen Manager</p>
      <p className="text-gray-400 text-sm mt-2">
        Ensures quality, hygiene, and consistency in every dish served. </p>
    </div>

    
    <div className="bg-gray-900 rounded-2xl p-5 text-center shadow-lg transition-all duration-700 ease-in-out hover:scale-105 border border-gray-800 group">
      
      <div className="relative">
        <img src={c33} className="mx-auto mb-4 rounded-full w-32 h-32 object-cover border-4 border-yellow-500" />

        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition">
          <i className="fa-brands fa-facebook text-white bg-yellow-500 p-2 rounded-full"></i>
          <i className="fa-brands fa-instagram text-white bg-yellow-500 p-2 rounded-full"></i>
        </div>
      </div>

      <h2 className="font-semibold text-white text-lg">Marilyn Westervelt</h2>
      <p className="text-yellow-500 text-sm">Junior Chef</p>
      <p className="text-gray-400 text-sm mt-2">
        Specializes in balancing flavors and enhancing the biryani aroma.
      </p>
    </div>

    
    <div className="bg-gray-900 rounded-2xl p-5 text-center shadow-lg transition-all duration-700 ease-in-out hover:scale-105 border border-gray-800 group">
      
      <div className="relative">
        <img src={c44} className="mx-auto mb-4 rounded-full w-32 h-32 object-cover border-4 border-yellow-500" />

        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition">
          <i className="fa-brands fa-facebook text-white bg-yellow-500 p-2 rounded-full"></i>
          <i className="fa-brands fa-instagram text-white bg-yellow-500 p-2 rounded-full"></i>
        </div>
      </div>

      <h2 className="font-semibold text-white text-lg">Ryan Arcand</h2>
      <p className="text-yellow-500 text-sm">Culinary Director</p>
      <p className="text-gray-400 text-sm mt-2">Leads innovation and ensures every recipe delivers a royal experience.</p>
    </div>

  </div>
</section>


    <section className="bg-gray-950 text-white py-16 text-center">
      <h2 className="text-3xl mb-4">Ready to Taste Royal Biryani?</h2>
      <Link to={'/Menu'}>
      <button className="bg-yellow-500 px-6 py-3 rounded-full bg-yellow-500 text-black font-semibold hover:bg-black hover:text-yellow-500 border border-yellow-500 transition"> Order Now </button>
      </Link>
    </section>


<section className="w-full bg-black py-20 px-4 text-center">

  
  <div className="max-w-3xl mx-auto mb-12">
    <h2 className="text-3xl md:text-5xl font-bold text-white">Frequently Asked Questions </h2>
    <p className="text-gray-400 mt-3">  Everything you need to know about our biryani and services</p>
  </div>

  
  <div className="max-w-4xl mx-auto space-y-5 text-left">

    <details className="group bg-gray-100 border border-gray-200 rounded-xl p-5 cursor-pointer transition">
      <summary className="flex justify-between items-center font-semibold text-black text-lg">
        Do you take table reservations?
        <span className="text-yellow-500 group-open:rotate-180 transition"><i class="fa-solid fa-angle-down"></i></span>
      </summary>
      <p className="text-gray-600 mt-3 text-sm leading-relaxed">
        Yes, we accept both online and phone reservations for your convenience.</p>
    </details>

    <details className="group bg-gray-100 border border-gray-200 rounded-xl p-5 cursor-pointer transition">
      <summary className="flex justify-between items-center font-semibold text-black text-lg">
        Do you offer home delivery?
        <span className="text-yellow-500 group-open:rotate-180 transition"><i class="fa-solid fa-angle-down"></i></span>
      </summary>
      <p className="text-gray-600 mt-3 text-sm leading-relaxed">
        Yes, we deliver hot and fresh biryani to your doorstep quickly. </p>
    </details>

    <details className="group bg-gray-100 border border-gray-200 rounded-xl p-5 cursor-pointer transition">
      <summary className="flex justify-between items-center font-semibold text-black text-lg">
        What are your opening hours?
        <span className="text-yellow-500 group-open:rotate-180 transition"><i class="fa-solid fa-angle-down"></i></span>
      </summary>
      <p className="text-gray-600 mt-3 text-sm leading-relaxed">
        We are open daily from 9:00 AM to 11:00 PM. </p>
    </details>

    <details className="group bg-gray-100 border border-gray-200 rounded-xl p-5 cursor-pointer transition">
      <summary className="flex justify-between items-center font-semibold text-black text-lg">
        Do you have vegetarian options?
        <span className="text-yellow-500 group-open:rotate-180 transition"><i class="fa-solid fa-angle-down"></i></span>
      </summary>
      <p className="text-gray-600 mt-3 text-sm leading-relaxed">
        Yes, we offer a variety of delicious vegetarian biryani and dishes. </p>
    </details>

  </div>

 
  <div className="mt-12">
    <p className="text-gray-400 mb-4">Still have questions?</p>
    <Link to={"/Contact"}>
    <button className="bg-yellow-500 px-6 py-3 rounded-full bg-yellow-500 text-black font-semibold hover:bg-black hover:text-yellow-500 border border-yellow-500 transition"> Contact Us </button>
      </Link>
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

export default Home;