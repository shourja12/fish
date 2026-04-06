import { Link } from "react-router-dom";

const data = [
  {
    id: "goldfish",
    name: "Goldfish",
    price: "₹200",
    img: "https://images.unsplash.com/photo-1560275619-4662e36fa65c",
  },
  {
    id: "guppy",
    name: "Guppy",
    price: "₹100",
    img: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d",
  },
  {
    id: "betta",
    name: "Betta Fish",
    price: "₹300",
    img: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5",
  },
];

export default function Section({ title }) {
  return (
    <section className="py-24 md:py-32">

      <div className="max-w-6xl mx-auto px-4">

        {/* 🍎 Section Title (Typography Upgrade) */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-8 sm:mb-12 md:mb-16 text-gray-900 tracking-tight">
          {title}
        </h2>

        {/* 🧩 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">

          {data.map((item, i) => (
            <div
              key={i}
              className="group bg-white p-4 sm:p-5 rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-500"
            >

              {/* 🖼 Image */}
              <div className="flex justify-center items-center h-40 sm:h-48 overflow-hidden rounded-2xl">
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-full object-contain group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* 📄 Content */}
              <div className="text-center mt-5">

                {/* Name */}
                <h3 className="text-lg font-semibold text-gray-800 tracking-wide">
                  {item.name}
                </h3>

                {/* Subtitle */}
                <p className="text-sm text-gray-500 mt-1">
                  Starting from
                </p>

                {/* Price */}
                <p className="text-primary text-xl font-semibold mt-1">
                  {item.price}
                </p>

                {/* Button */}
                <Link to={`/product/${item.id}`}>
                  <button className="mt-4 px-5 py-2 rounded-full bg-primary text-white font-medium hover:scale-105 transition duration-300 shadow-sm">
                    View Details
                  </button>
                </Link>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}