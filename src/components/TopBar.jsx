import { Link } from "react-router-dom";

export default function TopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-40 w-full bg-gradient-to-r from-blue-100 to-blue-200 py-2 sm:py-3 px-4 sm:px-6 flex justify-between items-center flex-wrap gap-2 sm:gap-3 shadow-sm">

      {/* 👤 Left: Profile */}
      <div className="flex items-center gap-2 sm:gap-3">

        {/* Profile Image */}
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="w-8 sm:w-10 h-8 sm:h-10 rounded-full border border-gray-300"
        />

        {/* User Text */}
        <span className="text-gray-700 text-xs sm:text-sm hidden sm:inline">
          Welcome, Guest
        </span>
      </div>

      {/* 🔐 Right: Auth Buttons */}
      <div className="flex items-center gap-2 sm:gap-3">

        {/* Sign In */}
        <Link
          to="#"
          className="px-3 sm:px-4 py-1.5 rounded-full border border-blue-300 text-blue-700 hover:bg-blue-100 transition text-xs sm:text-sm"
        >
          Sign In
        </Link>

        {/* Sign Up (Artistic Button) */}
        <Link
          to="#"
          className="px-3 sm:px-5 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xs sm:text-sm font-medium shadow-md hover:scale-105 transition"
        >
          Sign Up
        </Link>

      </div>
    </div>
  );
}