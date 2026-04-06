import { Parallax } from "react-parallax";

export default function Hero() {
  return (
    <Parallax
      bgImage="https://images.unsplash.com/photo-1544551763-46a013bb70d5"
      strength={200}
      bgImageStyle={{
        objectFit: 'cover',
        objectPosition: 'center',
        width: '100%',
        height: '100vh'
      }}
    >
      <div className="relative h-screen flex items-center justify-center">

        {/* 🔥 Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* 🔥 Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(6,182,212,0.5)]">
            Premium Aquarium Store
          </h1>

          {/* Subheading */}
          <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Marine • Freshwater • Plants • Accessories
          </p>

          {/* CTA Button */}
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-primary text-black text-sm sm:text-lg rounded-full font-semibold hover:scale-105 transition duration-300 shadow-lg">
            Explore Collection
          </button>

        </div>
      </div>
    </Parallax>
  );
}