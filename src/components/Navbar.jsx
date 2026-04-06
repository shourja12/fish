import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [search, setSearch] = useState("");

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-7xl z-50">

      {/* 🌟 Navbar Container */}
      <div className="bg-white/80 backdrop-blur-lg border border-gray-200 rounded-2xl px-6 py-3 shadow-md">

        <div className="flex items-center justify-between gap-6">

          {/* 🐠 LEFT: Logo */}
          <Link to="/" className="text-xl font-bold text-primary whitespace-nowrap">
            FishStore
          </Link>

          {/* 🔍 CENTER: Search Bar (LONG) */}
          <div className="flex items-center flex-1 max-w-xl bg-white border border-gray-200 px-4 py-2 rounded-full shadow-sm">

            <FaSearch className="text-gray-400 mr-3" />

            <input
              type="text"
              placeholder="Search fish, tanks, accessories..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
            />

          </div>

          {/* 🧭 RIGHT: Menu */}
          <div className="flex items-center space-x-4 text-sm md:text-base">

  <Link
    to="/"
    className="px-4 py-2 rounded-full border border-gray-200 bg-white/50 backdrop-blur-md text-gray-700 hover:text-primary hover:border-primary/40 hover:bg-white transition duration-300"
  >
    Home
  </Link>

  <Link
    to="#"
    className="px-4 py-2 rounded-full border border-gray-200 bg-white/50 backdrop-blur-md text-gray-700 hover:text-primary hover:border-primary/40 hover:bg-white transition duration-300"
  >
    Products
  </Link>

  <Link
    to="#"
    className="px-4 py-2 rounded-full border border-gray-200 bg-white/50 backdrop-blur-md text-gray-700 hover:text-primary hover:border-primary/40 hover:bg-white transition duration-300"
  >
    About Us
  </Link>

  <Link
    to="#"
    className="px-4 py-2 rounded-full border border-gray-200 bg-white/50 backdrop-blur-md text-gray-700 hover:text-primary hover:border-primary/40 hover:bg-white transition duration-300"
  >
    Contact Page
  </Link>

</div>

        </div>

      </div>
    </div>
  );
}