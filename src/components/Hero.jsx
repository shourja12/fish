import { Parallax } from "react-parallax";

export default function Hero() {
  return (
    <Parallax
      bgImage="https://images.unsplash.com/photo-1544551763-46a013bb70d5"
      strength={300}
    >
      <div className="relative h-[50vh] sm:h-[60vh] md:h-[65vh] lg:h-[75vh] flex items-center justify-center">

        {/* 🔥 Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* 🔥 Content */}
        <div className="relative z-10 text-center px-4 max-w-3xl">

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(6,182,212,0.5)]">
            Premium Aquarium Store
          </h1>

          {/* Subheading */}
          <p className="text-xs sm:text-sm md:text-lg lg:text-xl text-gray-300 mb-4 sm:mb-6">
            Marine • Freshwater • Plants
          </p>

          {/* CTA Button */}
          <button className="px-4 sm:px-6 py-2 sm:py-3 bg-primary text-black text-xs sm:text-base rounded-full font-semibold hover:scale-105 transition duration-300">
            Explore Collection
          </button>

        </div>
      </div>
    </Parallax>
  );
}