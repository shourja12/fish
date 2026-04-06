import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const products = [
  {
    name: "Goldfish",
    price: "₹200",
    img: "https://images.unsplash.com/photo-1560275619-4662e36fa65c",
  },
  {
    name: "Betta Fish",
    price: "₹300",
    img: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5",
  },
  {
    name: "Guppy",
    price: "₹100",
    img: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d",
  },
  {
    name: "Aquarium Tank",
    price: "₹1500",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
  },
  {
    name: "Aquatic Plants",
    price: "₹250",
    img: "https://images.unsplash.com/photo-1524594154908-edd2c3b27f47",
  },
];

export default function BestSelling() {
  return (
    <section className="py-24 bg-white" data-aos="fade-up">

      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-gray-900">
        Best Selling Products
      </h2>

      <div className="max-w-6xl mx-auto px-4">

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >

          {products.map((item, i) => (
            <SwiperSlide key={i}>

              <div className="bg-gray-50 p-5 rounded-2xl shadow-sm hover:shadow-lg transition hover:-translate-y-2">

                <img
                  src={item.img}
                  className="h-40 mx-auto object-contain mb-4"
                />

                <h3 className="text-lg font-semibold text-gray-800 text-center">
                  {item.name}
                </h3>

                <p className="text-primary text-center mt-1">
                  {item.price}
                </p>

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>

    </section>
  );
}