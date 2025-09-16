import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkToken = () => setIsLoggedIn(!!localStorage.getItem("token"));
    checkToken();
    window.addEventListener("loginStatusChanged", checkToken);
    window.addEventListener("storage", checkToken);
    return () => {
      window.removeEventListener("loginStatusChanged", checkToken);
      window.removeEventListener("storage", checkToken);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    setIsLoggedIn(false);
    setIsOpen(false);
    navigate("/login");
    window.dispatchEvent(new Event("loginStatusChanged"));
  };

  return (
    <header className="bg-black text-white shadow-md sticky top-0 left-0 w-full z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/">
          <img
            src="https://restro-lake.vercel.app/static/media/logo-white.d1f41d5a88040eddd03f.png"
            alt="Logo"
            className="max-h-[60px] max-w-[60px]"
          />
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        <nav
          className={`${isOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto bg-black md:bg-transparent border-t md:border-none border-gray-700 md:items-center gap-4 md:gap-6 text-sm sm:text-base font-medium px-4 md:px-0 py-4 md:py-0`}
        >
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-gray-300">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-gray-300">About Us</Link>
          <Link to="/menu" onClick={() => setIsOpen(false)} className="hover:text-gray-300">Menu</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-gray-300">Contact Us</Link>
          <Link to="/booking" onClick={() => setIsOpen(false)} className="hover:text-gray-300">Booking</Link>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="px-3 py-1 border rounded-md border-gray-600 hover:bg-gray-800 text-red-500 hover:border-red-600 font-bold transition cursor-pointer"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="px-3 py-1 border rounded-md border-gray-600 hover:bg-gray-800 text-green-500 hover:border-green-600 font-bold transition cursor-pointer"
            >
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
