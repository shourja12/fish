import { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-12 sm:top-16 left-1/2 transform -translate-x-1/2 w-[95%] sm:w-[90%] max-w-7xl z-30">

      {/* 🌟 Navbar Container */}
      <div className="bg-white/80 backdrop-blur-lg border border-gray-200 rounded-2xl px-4 sm:px-6 py-3 shadow-md">

        <div className="flex items-center justify-between gap-2 sm:gap-6">

          {/* 🐠 LEFT: Logo */}
          <Link to="/" className="text-lg sm:text-xl font-bold text-primary whitespace-nowrap">
            FishStore
          </Link>

          {/* 🔍 CENTER: Search Bar (Hidden on Mobile) */}
          <div className="hidden md:flex items-center flex-1 max-w-xl bg-white border border-gray-200 px-4 py-2 rounded-full shadow-sm">
            <FaSearch className="text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="Search fish, tanks, accessories..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* 🧭 RIGHT: Menu (Desktop) */}
          <div className="hidden lg:flex items-center space-x-2 text-xs sm:text-sm">
            <Link
              to="/"
              className="px-3 sm:px-4 py-2 rounded-full border border-gray-200 bg-white/50 backdrop-blur-md text-gray-700 hover:text-primary hover:border-primary/40 hover:bg-white transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="px-3 sm:px-4 py-2 rounded-full border border-gray-200 bg-white/50 backdrop-blur-md text-gray-700 hover:text-primary hover:border-primary/40 hover:bg-white transition duration-300"
            >
              Products
            </Link>
            <Link
              to="#"
              className="px-3 sm:px-4 py-2 rounded-full border border-gray-200 bg-white/50 backdrop-blur-md text-gray-700 hover:text-primary hover:border-primary/40 hover:bg-white transition duration-300"
            >
              About Us
            </Link>
            <Link
              to="#"
              className="px-3 sm:px-4 py-2 rounded-full border border-gray-200 bg-white/50 backdrop-blur-md text-gray-700 hover:text-primary hover:border-primary/40 hover:bg-white transition duration-300"
            >
              Contact
            </Link>
          </div>

          {/* 📱 Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-primary"
          >
            {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>

        </div>

        {/* 📱 Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-gray-200 flex flex-col gap-2">
            {/* Mobile Search */}
            <div className="flex items-center bg-white border border-gray-200 px-3 py-2 rounded-full shadow-sm mb-2">
              <FaSearch className="text-gray-400 mr-2 text-sm" />
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent outline-none text-xs text-gray-700 placeholder-gray-400"
              />
            </div>

            {/* Mobile Links */}
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 rounded-full bg-gray-50 text-gray-700 hover:text-primary hover:bg-blue-50 transition text-sm"
            >
              Home
            </Link>
            <Link
              to="/products"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 rounded-full bg-gray-50 text-gray-700 hover:text-primary hover:bg-blue-50 transition text-sm"
            >
              Products
            </Link>
            <Link
              to="#"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 rounded-full bg-gray-50 text-gray-700 hover:text-primary hover:bg-blue-50 transition text-sm"
            >
              About Us
            </Link>
            <Link
              to="#"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 rounded-full bg-gray-50 text-gray-700 hover:text-primary hover:bg-blue-50 transition text-sm"
            >
              Contact
            </Link>
          </div>
        )}

      </div>
    </div>
  );
}