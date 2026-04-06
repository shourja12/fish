import Section from "../components/Section";

export default function Products() {
  return (
    <div className="pt-28">

      {/* Page Title */}
      <h1 className="text-4xl font-semibold text-center text-gray-900 mb-10">
        Our Products
      </h1>

      {/* Product Sections */}
      <Section title="Freshwater Fish" />
      <Section title="Aquatic Plants" />
      <Section title="Accessories" />

    </div>
  );
}