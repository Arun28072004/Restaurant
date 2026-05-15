import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

function Contact() {
  const handleclick = () => {
    alert("Suceesfully");
  };
  return (
    <>

      <section className="bg-black text-white py-20 px-6">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-yellow-500">  Get in Touch
          </h2>
          <p className="text-gray-400 mt-3"> Reserve your table or ask anything about our restaurant </p>
        </div>


        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">


          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-lg">

            <h3 className="text-xl font-semibold mb-6 text-yellow-500"> Book a Table </h3>

            <input type="text" placeholder="Your Name"
              className="w-full mb-4 p-3 rounded-lg bg-transparent border border-gray-600 focus:border-yellow-500 outline-none" />

            <input type="email" placeholder="Your Email"
              className="w-full mb-4 p-3 rounded-lg bg-transparent border border-gray-600 focus:border-yellow-500 outline-none" />

            <input type="text" placeholder="Phone Number"
              className="w-full mb-4 p-3 rounded-lg bg-transparent border border-gray-600 focus:border-yellow-500 outline-none" />

            <textarea rows="4" placeholder="Your Message"
              className="w-full mb-4 p-3 rounded-lg bg-transparent border border-gray-600 focus:border-yellow-500 outline-none" ></textarea>

            <button className="w-full bg-yellow-500 text-black py-3 rounded-full font-semibold hover:bg-black hover:text-yellow-500 border border-yellow-500 transition"> Send Message </button>
          </div>


          <div className="flex flex-col gap-6">

            <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/20 flex items-start gap-4">
              <FaMapMarkerAlt className="text-yellow-500 text-xl mt-1" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-400 text-sm">
                  Chennai, Tamil Nadu, India
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/20 flex items-start gap-4">
              <FaPhone className="text-yellow-500 text-xl mt-1" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-400 text-sm">+91 98765 43210</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/20 flex items-start gap-4">
              <FaEnvelope className="text-yellow-500 text-xl mt-1" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-400 text-sm">
                  info@biryanirestaurant.com
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/20 flex items-start gap-4">
              <FaClock className="text-yellow-500 text-xl mt-1" />
              <div>
                <h3 className="font-semibold">Opening Hours</h3>
                <p className="text-gray-400 text-sm">
                  9:00 AM - 11:00 PM
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="bg-yellow-500 text-black py-16 text-center">
        <h2 className="text-3xl font-bold mb-4"> Reserve Your Table Now </h2>

        <p className="mb-6">  Experience premium biryani with your loved ones
        </p>


        <button onClick={handleclick} className="px-6 py-3 rounded-full border border-black hover:bg-black hover:text-yellow-500 transition">   Book Now </button>

      </section>

      <div className="bg-black p-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=..." className="w-full h-80 rounded-xl border-0" loading="lazy" ></iframe>
      </div>


      <footer className="bg-black text-gray-400 py-10 text-center border-t border-gray-800">
        <h2 className="text-white font-bold text-xl mb-2"> Biryani House </h2>
        <p>© 2026 All Rights Reserved</p>
      </footer>

    </>
  );
}

export default Contact;
