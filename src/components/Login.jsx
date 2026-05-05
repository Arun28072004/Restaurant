import { FaUser, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Login() {

  const handleSubmit = (e) => {
    e.preventDefault();

    const phone = e.target.phone.value;
    const password = e.target.password.value;

    console.log("Phone:", phone);
    console.log("Password:", password);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-900">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-80">

        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">  Sign In</h2>

    
        <div className="flex items-center border p-2 mb-4 rounded-lg focus-within:border-yellow-500">
          <FaUser className="text-gray-400 mr-2" />
          <input type="tel"name="phone" placeholder="Phone Number"className="w-full outline-none"required />
        </div>

        
        <div className="flex items-center border p-2 mb-6 rounded-lg focus-within:border-yellow-500">
          <FaLock className="text-gray-400 mr-2" />
          <input type="password" name="password"  placeholder="Password"className="w-full outline-none" required />
        </div>

        <Link to={'/'}>
        <button
          type="submit"className="w-full bg-yellow-500 text-white p-2 rounded-lg hover:bg-yellow-600 transition" > Sign In  </button>
</Link>
      </form>
    </div>
  );
}