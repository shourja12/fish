import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-100 to-blue-200 pt-16 pb-10 mt-20">

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10 text-center md:text-left">

        {/* Brand */}
        <div>
          <h1 className="text-2xl font-bold text-blue-700 mb-3">
            FishStore
          </h1>
          <p className="text-gray-600 text-sm">
            Premium destination for marine, freshwater fish & aquatic plants.
          </p>
        </div>

        {/* Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-gray-800">
            Quick Links
          </h2>

          <div className="flex flex-col space-y-2 text-gray-600 text-sm">
            <a href="#" className="hover:text-blue-700 transition">Marine Fish</a>
            <a href="#" className="hover:text-blue-700 transition">Freshwater Fish</a>
            <a href="#" className="hover:text-blue-700 transition">Aquatic Plants</a>
            <a href="#" className="hover:text-blue-700 transition">Contact</a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-gray-800">
            Contact
          </h2>

          <div className="text-gray-600 text-sm space-y-2">
            <p>📍 Kolkata, India</p>
            <p>📞 +91 XXXXXXXX</p>
            <p>✉️ fishstore@email.com</p>
          </div>
        </div>

      </div>

      {/* Social */}
      <div className="mt-10 flex flex-col items-center space-y-4">

        <div className="flex space-x-6 text-xl text-gray-600">

          <a href="#" className="hover:text-blue-700 transition hover:scale-110">
            <FaFacebookF />
          </a>

          <a href="#" className="hover:text-blue-700 transition hover:scale-110">
            <FaInstagram />
          </a>

          <a href="#" className="hover:text-green-500 transition hover:scale-110">
            <FaWhatsapp />
          </a>

        </div>

        <p className="text-gray-500 text-sm">
          © 2026 FishStore. All rights reserved.
        </p>

      </div>

    </footer>
  );
}