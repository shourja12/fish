import { useParams } from "react-router-dom";
import { FaStar, FaShoppingCart, FaHeart, FaShare } from "react-icons/fa";

const products = [
  {
    id: "goldfish",
    name: "Goldfish",
    price: "₹200",
    originalPrice: "₹250",
    img: "https://images.unsplash.com/photo-1560275619-4662e36fa65c",
    desc: "Graceful, vibrant and easy-to-maintain freshwater fish perfect for beginners.",
    rating: 4.5,
    reviews: 128,
    category: "Freshwater Fish",
    careLevel: "Beginner",
    tankSize: "20L minimum",
    temperature: "18-24°C",
    features: ["Easy to care for", "Colorful scales", "Peaceful nature", "Long lifespan"],
    specifications: {
      "Scientific Name": "Carassius auratus",
      "Lifespan": "10-15 years",
      "Size": "15-30 cm",
      "Diet": "Omnivorous",
      "Water Type": "Freshwater"
    }
  },
  {
    id: "guppy",
    name: "Guppy",
    price: "₹100",
    originalPrice: "₹120",
    img: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d",
    desc: "Small, colorful fish that brings life and motion to any aquarium setup.",
    rating: 4.8,
    reviews: 95,
    category: "Freshwater Fish",
    careLevel: "Beginner",
    tankSize: "10L minimum",
    temperature: "22-28°C",
    features: ["Vibrant colors", "Livebearers", "Hardy species", "Schooling fish"],
    specifications: {
      "Scientific Name": "Poecilia reticulata",
      "Lifespan": "2-3 years",
      "Size": "3-6 cm",
      "Diet": "Omnivorous",
      "Water Type": "Freshwater"
    }
  },
  {
    id: "betta",
    name: "Betta Fish",
    price: "₹300",
    originalPrice: "₹350",
    img: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5",
    desc: "Elegant and bold fish known for its flowing fins and striking colors.",
    rating: 4.6,
    reviews: 156,
    category: "Freshwater Fish",
    careLevel: "Intermediate",
    tankSize: "15L minimum",
    temperature: "24-30°C",
    features: ["Flowing fins", "Aggressive males", "Labyrinth organ", "Colorful varieties"],
    specifications: {
      "Scientific Name": "Betta splendens",
      "Lifespan": "3-5 years",
      "Size": "6-8 cm",
      "Diet": "Carnivorous",
      "Water Type": "Freshwater"
    }
  },
];

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h1>
          <p className="text-gray-600">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6">
          <span>Home</span> / <span>{product.category}</span> / <span className="text-blue-600">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

          {/* Left: Product Images */}
          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="flex space-x-2">
              <img src={product.img} alt="thumbnail" className="w-20 h-20 object-cover rounded-lg border-2 border-blue-300" />
              <img src={product.img} alt="thumbnail" className="w-20 h-20 object-cover rounded-lg border-2 border-gray-200" />
              <img src={product.img} alt="thumbnail" className="w-20 h-20 object-cover rounded-lg border-2 border-gray-200" />
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="space-y-6">

            {/* Product Title */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">({product.reviews} reviews)</span>
                </div>
                <span className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                  {product.category}
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-blue-600">{product.price}</span>
              <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
              <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">
                Save ₹{parseInt(product.originalPrice.replace('₹', '')) - parseInt(product.price.replace('₹', ''))}
              </span>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
              <p className="text-gray-700 leading-relaxed">{product.desc}</p>
            </div>

            {/* Care Information */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900">Care Level</h4>
                <p className="text-blue-600">{product.careLevel}</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900">Tank Size</h4>
                <p className="text-blue-600">{product.tankSize}</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900">Temperature</h4>
                <p className="text-blue-600">{product.temperature}</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900">Stock Status</h4>
                <p className="text-green-600">In Stock</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 flex items-center justify-center space-x-2">
                <FaShoppingCart />
                <span>Add to Cart</span>
              </button>
              <div className="flex space-x-3">
                <button className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition duration-300">
                  Buy Now
                </button>
                <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-300">
                  <FaHeart className="text-gray-600" />
                </button>
                <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-300">
                  <FaShare className="text-gray-600" />
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Product Features */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Specifications */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Specifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium text-gray-700">{key}</span>
                <span className="text-gray-600">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Reviews */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Customer Reviews</h3>
          <div className="space-y-4">
            <div className="border-b border-gray-100 pb-4">
              <div className="flex items-center space-x-2 mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                  ))}
                </div>
                <span className="font-semibold">John D.</span>
                <span className="text-sm text-gray-500">2 weeks ago</span>
              </div>
              <p className="text-gray-700">Beautiful fish! Very healthy and active. Highly recommend for beginners.</p>
            </div>
            <div className="border-b border-gray-100 pb-4">
              <div className="flex items-center space-x-2 mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                  ))}
                </div>
                <span className="font-semibold">Sarah M.</span>
                <span className="text-sm text-gray-500">1 month ago</span>
              </div>
              <p className="text-gray-700">Perfect addition to my aquarium. The colors are vibrant and it gets along well with other fish.</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}