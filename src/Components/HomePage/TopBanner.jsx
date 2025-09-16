import React from "react";
import { Link } from "react-router-dom";

export default function TopBanner() {
  return (
    <div
      className="relative bg-cover bg-center min-h-[580px]"
      style={{ backgroundImage: "url('https://restro-lake.vercel.app/static/media/bg5.4415973cd4bdf20f31fc.jpg')" }}
    >
      {/* Hero content */}
      <div
        className="flex flex-col items-center justify-center min-h-[580px] text-center text-white px-4"
        data-aos="fade-down"
        data-aos-easing='linear'
        data-aos-duration="2000"
      >
        <h1 className="text-5xl sm:text-7xl font-serif font-bold mb-4">Opulenza Verve</h1>
        <p className="text-xl sm:text-2xl mb-2">Nothing Brings Together Like</p>
        <p className="text-lg sm:text-xl mb-6">Where Flavors Come To Life.</p>
        <Link
          to="/booking"
          className="px-6 py-3 bg-white text-black rounded-md shadow hover:bg-gray-200 transition"
          data-aos="fade-down"
          data-aos-easing='linear'
          data-aos-duration="1500"
        >
          BOOK YOUR TABLE
        </Link>
      </div>
    </div>
  );
}
