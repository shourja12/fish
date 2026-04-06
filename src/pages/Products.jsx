import Section from "../components/Section";

export default function Products() {
  return (
    <div className="pt-6 sm:pt-10 md:pt-16 lg:pt-20">

      {/* Page Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center text-gray-900 mb-6 sm:mb-8 md:mb-10 px-4">
        Our Products
      </h1>

      {/* Product Sections */}
      <Section title="Freshwater Fish" />
      <Section title="Aquatic Plants" />
      <Section title="Accessories" />

    </div>
  );
}