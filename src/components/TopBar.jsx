import { Link } from "react-router-dom";

export default function TopBar() {
  return (
    <div className="w-full bg-gradient-to-r from-blue-100 to-blue-200 py-3 px-6 flex justify-between items-center">

      {/* 👤 Left: Profile */}
      <div className="flex items-center gap-3">

        {/* Profile Image */}
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="w-10 h-10 rounded-full border border-gray-300"
        />

        {/* User Text */}
        <span className="text-gray-700 text-sm">
          Welcome, Guest
        </span>
      </div>

      {/* 🔐 Right: Auth Buttons */}
      <div className="flex items-center gap-3">

        {/* Sign In */}
        <Link
          to="#"
          className="px-4 py-1.5 rounded-full border border-blue-300 text-blue-700 hover:bg-blue-100 transition text-sm"
        >
          Sign In
        </Link>

        {/* Sign Up (Artistic Button) */}
        <Link
          to="#"
          className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-sm font-medium shadow-md hover:scale-105 transition"
        >
          Sign Up
        </Link>

      </div>
    </div>
  );
}