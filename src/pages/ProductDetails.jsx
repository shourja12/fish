import { useParams } from "react-router-dom";

const products = [
  {
    id: "goldfish",
    name: "Goldfish",
    price: "₹200",
    img: "https://images.unsplash.com/photo-1560275619-4662e36fa65c",
    desc: "Graceful, vibrant and easy-to-maintain freshwater fish perfect for beginners.",
  },
  {
    id: "guppy",
    name: "Guppy",
    price: "₹100",
    img: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d",
    desc: "Small, colorful fish that brings life and motion to any aquarium setup.",
  },
  {
    id: "betta",
    name: "Betta Fish",
    price: "₹300",
    img: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5",
    desc: "Elegant and bold fish known for its flowing fins and striking colors.",
  },
];

export default function ProductDetails() {
  const { id } = useParams();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="text-center py-40 text-xl">
        Product not found
      </div>
    );
  }

  return (
    <div className="bg-dark text-white">

      {/* 🔥 HERO PRODUCT SECTION */}
      <section className="py-24 md:py-32 text-center max-w-5xl mx-auto px-4">

        {/* Product Image */}
        <img
          src={product.img}
          alt={product.name}
          className="mx-auto w-[280px] md:w-[400px] mb-12 transition-all duration-500 hover:scale-105"
        />

        {/* Product Name */}
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
          {product.name}
        </h1>

        {/* Description */}
        <p className="text-gray-400 max-w-xl mx-auto mb-6">
          {product.desc}
        </p>

        {/* Price */}
        <p className="text-2xl font-semibold mb-8">
          {product.price}
        </p>

        {/* CTA */}
        <button className="px-6 py-3 rounded-full bg-primary text-black font-medium hover:scale-105 transition duration-300">
          Buy Now
        </button>

      </section>

      {/* 🌊 FEATURE SECTION */}
      <section className="py-20 text-center max-w-4xl mx-auto px-4">

        <h2 className="text-3xl font-semibold mb-6">
          Designed for Elegance
        </h2>

        <p className="text-gray-400 leading-relaxed">
          This aquatic species enhances your aquarium with natural beauty,
          vibrant colors, and calming movement. Perfect for both beginners
          and experienced hobbyists.
        </p>

      </section>

      {/* 🖼 IMAGE SHOWCASE */}
      <section className="py-20">

        <img
          src={product.img}
          className="w-full max-w-5xl mx-auto rounded-3xl shadow-lg"
        />

      </section>

      {/* 🔻 FINAL CTA */}
      <section className="py-24 text-center">

        <h2 className="text-3xl font-semibold mb-4">
          Bring It Home Today
        </h2>

        <p className="text-gray-400 mb-6">
          Experience the beauty of aquatic life in your own space.
        </p>

        <button className="px-8 py-3 rounded-full bg-primary text-black font-medium hover:scale-105 transition">
          Order via WhatsApp
        </button>

      </section>

    </div>
  );
}