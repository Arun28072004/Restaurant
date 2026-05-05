import { Link } from "react-router-dom";
import pic2 from"../assets/c2.jpg";
import kit from"../assets/A1.jpg"
function About() {
  return (
    <>
   <section className="bg-black text-white py-20 px-6">

  
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

  
    <div className="overflow-hidden rounded-2xl">
      <img src={pic2} className="w-full h-full object-cover hover:scale-105 transition duration-500" />
    </div>

    
    <div>
      <h2 className="text-3xl md:text-5xl font-bold text-yellow-500 mb-4">Our Story </h2>

      <p className="text-gray-300 mb-4 leading-relaxed">
        Since 2010, we have been serving authentic biryani crafted with
        traditional recipes and premium spices. Every dish we prepare
        carries the rich heritage of Indian flavors.
      </p>

      <p className="text-gray-400 mb-6">
        From handpicked ingredients to slow-cooked perfection,
        we ensure every bite gives you a royal experience.
      </p>

   <Link to={"/Menu"}>
      <button className="bg-yellow-500 px-6 py-3 rounded-full text-black font-semibold hover:bg-yellow-400 transition"> Explore Menu</button>
   </Link>
    </div>
  </div>

  <div className="mt-20 grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">

    <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition">
      <h3 className="text-yellow-500 text-xl mb-2">10+ Years</h3>
      <p className="text-gray-400 text-sm">Experience</p>
    </div>

    <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition">
      <h3 className="text-yellow-500 text-xl mb-2">50K+</h3>
      <p className="text-gray-400 text-sm">Happy Customers</p>
    </div>

    <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition">
      <h3 className="text-yellow-500 text-xl mb-2">100%</h3>
      <p className="text-gray-400 text-sm">Fresh Ingredients</p>
    </div>

    <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition">
      <h3 className="text-yellow-500 text-xl mb-2">Fast</h3>
      <p className="text-gray-400 text-sm">Delivery</p>
    </div>

  </div>

  
 <section className="mt-20 bg-gray-950 py-16 px-6">

 
  <div className="text-center max-w-3xl mx-auto mb-12">
    <h2 className="text-3xl md:text-5xl font-bold text-yellow-500 mb-4">   Why We Stand Out </h2>
    <p className="text-gray-400">We don’t just serve food — we deliver an unforgettable biryani experience. </p>
  </div>

  
  <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">

    
    <div className="bg-gray-900 p-6 rounded-2xl text-center transition-all duration-700 ease-in-out hover:scale-105 border border-gray-800 hover:border-yellow-500">
      <i className="fa-solid fa-utensils text-yellow-500 text-3xl mb-4"></i>
      <h3 className="text-yellow-500 text-lg font-semibold mb-2">Authentic Taste </h3>
      <p className="text-gray-400 text-sm">Traditional dum cooking method that brings out the true biryani flavor. </p>
    </div>

  
    <div className="bg-gray-900 p-6 rounded-2xl text-center transition-all duration-700 ease-in-out hover:scale-105 border border-gray-800 hover:border-yellow-500">
      <i className="fa-solid fa-star text-yellow-500 text-3xl mb-4"></i>
      <h3 className="text-yellow-500 text-lg font-semibold mb-2"> Premium Quality</h3>
      <p className="text-gray-400 text-sm">Handpicked spices, fresh meat, and high-quality ingredients in every dish. </p>
    </div>

 
    <div className="bg-gray-900 p-6 rounded-2xl text-center transition-all duration-700 ease-in-out hover:scale-105 border border-gray-800 hover:border-yellow-500">
      <i className="fa-solid fa-shield-halved text-yellow-500 text-3xl mb-4"></i>
      <h3 className="text-yellow-500 text-lg font-semibold mb-2">Hygienic Kitchen </h3>
      <p className="text-gray-400 text-sm">
        Clean, safe, and well-maintained cooking environment for your health.
      </p>
    </div>


    <div className="bg-gray-900 p-6 rounded-2xl text-center transition-all duration-700 ease-in-out hover:scale-105 border border-gray-800 hover:border-yellow-500">
      <i className="fa-solid fa-truck text-yellow-500 text-3xl mb-4"></i>
      <h3 className="text-yellow-500 text-lg font-semibold mb-2">Fast Delivery </h3>
      <p className="text-gray-400 text-sm"> Hot and fresh biryani delivered quickly to your doorstep.</p>
    </div>

  </div>

</section>

</section>

<section className="bg-black text-white py-20 px-6">
  <h2 className="text-3xl text-yellow-500 text-center mb-10">
  Why Choose Us
</h2>

 
  <div className="grid md:grid-cols-3 gap-8 text-center">
    <div className="bg-gray-900 p-6 rounded-xl transition-all duration-700 ease-in-out hover:scale-105">
      <h3 className="text-yellow-500 text-lg mb-2">Authentic Taste</h3>
      <p className="text-gray-400 text-sm">
        Traditional dum cooking method for real biryani flavor.
      </p>
    </div>

    <div className="bg-gray-900 p-6 rounded-xl transition-all duration-700 ease-in-out hover:scale-105">
      <h3 className="text-yellow-500 text-lg mb-2">Premium Quality</h3>
      <p className="text-gray-400 text-sm">
        Only fresh meat, spices, and high-quality ingredients used.
      </p>
    </div>

    <div className="bg-gray-900 p-6 rounded-xl transition-all duration-700 ease-in-out hover:scale-105">
      <h3 className="text-yellow-500 text-lg mb-2">Hygienic Kitchen</h3>
      <p className="text-gray-400 text-sm">
        Clean, safe, and well-maintained cooking environment.  </p>
    </div>
  </div>

 
  <div className="mt-20 max-w-4xl mx-auto">
    <h2 className="text-3xl text-yellow-500 text-center mb-10"> Our Journey
    </h2>

    <div className="space-y-6">
      <div className="bg-gray-900 p-5 rounded-lg">
        <h4 className="text-yellow-500">2010</h4>
        <p className="text-gray-400 text-sm">Started our first kitchen</p>
      </div>

      <div className="bg-gray-900 p-5 rounded-lg">
        <h4 className="text-yellow-500">2015</h4>
        <p className="text-gray-400 text-sm">Expanded to multiple branches</p>
      </div>

      <div className="bg-gray-900 p-5 rounded-lg">
        <h4 className="text-yellow-500">2020</h4>
        <p className="text-gray-400 text-sm">Started online delivery</p>
      </div>

      <div className="bg-gray-900 p-5 rounded-lg">
        <h4 className="text-yellow-500">2025</h4>
        <p className="text-gray-400 text-sm">50,000+ happy customers</p>
      </div>
    </div>
  </div>

 
  <div className="mt-20">
    <img src={kit} className="rounded-xl mx-auto transition-all duration-700 ease-in-out hover:scale-105"/>
  </div>

 
  <div className="mt-16 text-center">
    <p className="text-gray-400">
      Trusted by <span className="text-yellow-500 font-semibold">50,000+</span> customers <i className="fa-solid fa-heart text-red-600"></i>
    </p>
  </div>

  
  <div className="mt-16 text-center">
    
    <button className="bg-yellow-500 px-8 py-3 rounded-full text-black font-semibold hover:bg-yellow-400 transition"> Order Now </button>
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

export default About;