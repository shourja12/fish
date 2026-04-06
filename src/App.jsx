import { Routes, Route } from "react-router-dom";

// 🔹 Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BlogSection from "./components/BlogSection";
import BestSelling from "./components/BestSelling";
import Footer from "./components/footer";

// 🔹 Pages
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div className="bg-gradient-to-b from-blue-100 to-white min-h-screen">

      {/* 🔝 Navbar */}
      <Navbar />

      {/* 📄 Main Content */}
      <div className="pt-0">

        <Routes>

          {/* 🏠 Homepage */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <BlogSection />
                <BestSelling />
              </>
            }
          />

          {/* 📦 Products Page */}
          <Route path="/products" element={<Products />} />

          {/* 🔍 Product Details */}
          <Route path="/product/:id" element={<ProductDetails />} />

        </Routes>

      </div>

      {/* 🔻 Footer */}
      <Footer />

    </div>
  );
}

export default App;