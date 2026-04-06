export default function BlogSection() {
  return (
    <section
      className="py-28 px-4 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100"
      data-aos="fade-up"
    >
      <div className="max-w-5xl mx-auto text-center">

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-8 leading-tight">
          Discover the World of Aquatic Beauty
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-600 mb-12">
          Dive into the mesmerizing world of aquariums, where nature meets design.
          Create a peaceful environment filled with vibrant life and stunning aquatic ecosystems.
        </p>

        {/* Content Blocks */}
        <div className="grid md:grid-cols-2 gap-10 text-left">

          <div
            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition"
            data-aos="fade-right"
          >
            <h2 className="text-2xl font-semibold mb-3 text-blue-700">
              Freshwater Aquariums
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Perfect for beginners, freshwater aquariums are easy to maintain and
              offer a wide variety of fish like guppies, goldfish, and tetras.
              With the right setup, they create a vibrant and relaxing environment.
            </p>
          </div>

          <div
            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition"
            data-aos="fade-left"
          >
            <h2 className="text-2xl font-semibold mb-3 text-cyan-700">
              Marine Ecosystems
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Marine aquariums bring the ocean to your home. With colorful corals
              and exotic fish, they offer unmatched beauty and complexity for
              experienced hobbyists.
            </p>
          </div>

          <div
            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition"
            data-aos="fade-right"
          >
            <h2 className="text-2xl font-semibold mb-3 text-blue-700">
              Aquatic Plants
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Plants enhance oxygen levels and create a natural habitat for fish.
              From easy moss to advanced aquascaping plants, they transform tanks
              into living art.
            </p>
          </div>

          <div
            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition"
            data-aos="fade-left"
          >
            <h2 className="text-2xl font-semibold mb-3 text-cyan-700">
              Smart Aquarium Setup
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Modern aquariums use smart lighting, filtration, and temperature
              control systems. These innovations make maintenance easier and
              ensure a healthy ecosystem.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}