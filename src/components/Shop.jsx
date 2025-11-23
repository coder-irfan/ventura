import React from "react";
import { FaBagShopping } from "react-icons/fa6";

const products = [
  {
    id: "1",
    img: "images/portable-green-rds-table-camping_899449-25078.webp",
    title: "میز کمپینگ تاشو کچوا",
    rate: 4.5,
    prevprice: "$30.00",
    price: "$20.00",
  },
  {
    id: "2",
    img: "images/water-bottle-mockup_1263326-37811.webp",
    title: "فلاسک کچوا بدنه پلاستیک",
    rate: 1.5,
    prevprice: "$40.00",
    price: "$30.00",
  },
  {
    id: "3",
    img: "images/flash.webp",
    title: "چراغ قوه رنگ سیاه",
    rate: 5,
    prevprice: "$25.00",
    price: "$15.00",
  },
  {
    id: "4",
    img: "images/leather-travel-mug-with-black-lid-black-lid_786255-20508.webp",
    title: "فلاسک و ماگ 2 لیتره",
    rate: 4.5,
    prevprice: "$30.00",
    price: "$20.00",
  },
  {
    id: "5",
    img: "images/classic-sunglasses-white-background-minimalist-eyewear-modern-style.jpg",
    title: "عینک اسپای سری",
    rate: 3.5,
    prevprice: "$20.00",
    price: "$10.00",
  },
  {
    id: "6",
    img: "images/flashlight-isolated_770883-3085.webp",
    title: "هدلایت اسمال سان",
    rate: 3,
    prevprice: "$20.00",
    price: "$10.00",
  },
  {
    id: "7",
    img: "images/comfortable-portable-folding-chair-ideal-relaxation-outdoor-adventures-events_1033130-33132.webp",
    title: "میز و صندلی تک نفره",
    rate: 5,
    prevprice: "$35.00",
    price: "$25.00",
  },
  {
    id: "8",
    img: "images/stylish-outdoor-adventure-solo-backpacking-gear-white-background_983420-38732.webp",
    title: "کوله پشتی جا دار",
    rate: 4.5,
    prevprice: "$45.00",
    price: "$35.00",
  },

  {
    id: "9",
    img: "images/lightweight-synthetic-fill-sleeping-bag-unrolled-ready-use-isolated-white_41097-5030.webp",
    title: "کیسه خواب پر کلایس",
    rate: 2,
    prevprice: "$50.00",
    price: "$40.00",
  },
  {
    id: "10",
    img: "images/outdoor-camping-tent_1225636-16282.webp",
    title: "چادر کمپ 6 نفره",
    rate: 5,
    prevprice: "$65.00",
    price: "$55.00",
  },
  {
    id: "11",
    img: "images/photorealistic-water-bottle_23-2151049018.webp",
    title: "بتری چای 0.5 لیتره",
    rate: 3,
    prevprice: "$25.00",
    price: "$15.00",
  },
];

function Shop({ handleNotAvailable, scrollRef, scroll }) {
  return (
    <>
      <section
        id="محصولات"
        className="max-w-[85rem] mx-auto p-4 md:px-4 py-16 md:py-16 lg:py-20 lg:pt-24 space-y-2 lg:space-y-4 scroll-mt-12"
      >
        <div className="space-y-4 lg:space-y-10 bg-colors-mint p-4 lg:px-8 lg:py-4 rounded-[2rem]">
          <div className="flex items-center justify-between">
            <h3 className="text-h3 font-bold font-estedad">محصولات کمپینگ</h3>
            <a
              href="#"
              className="button flex items-center justify-center gap-2"
            >
              مشاهده بیشتر
              <img src="images/right-icon.webp" alt="right-icon" className="" />
            </a>
          </div>
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide gap-5 md:gap-8 py-2"
          >
            {products.map((product) => (
              <div
                className="flex-shrink-0 snap-start bg-colors-white p-4 rounded-3xl space-y-4"
                key={product.id}
              >
                <img
                  src={product.img}
                  alt={product.title}
                  className="mx-auto w-44 h-28 lg:w-60 lg:h-40 object-contain"
                />
                <div className="space-y-3 lg:space-y-4">
                  <div className="space-y-1 lg:space-y-2">
                    <h3 className="text-h3 font-estedad font-bold">
                      {product.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-colors-sunrise font-lora">
                        {product.rate}
                      </span>
                      <img src="images/star.webp" alt="star" className="" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      onClick={handleNotAvailable}
                      className="bg-colors-cloud p-3 rounded-2xl"
                    >
                      <FaBagShopping className="text-h3" />
                    </button>
                    <div className="font-lora">
                      <h5 className="text-sm md:text-base line-through decoration-2 decoration-colors-forest text-end font-semibold text-colors-slate">
                        {product.prevprice}
                      </h5>
                      <h4 className="text-h4 font-semibold text-colors-forest">
                        {product.price}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="z-10 bg-colors-forest hover:bg-colors-midnight transition-colors 
              duration-300 rounded-full p-2 md:p-3 shadow-md"
            onClick={() => scroll("right")}
          >
            <img
              src="images/right-icon.webp"
              alt="left-icon"
              className="w-6 md:w-8 rotate-180"
            />
          </button>
          <button
            className="z-10 bg-colors-forest hover:bg-colors-midnight
              transition-colors duration-300 rounded-full p-2 md:p-3 shadow-2xl"
            onClick={() => scroll("left")}
          >
            <img
              src="images/right-icon.webp"
              alt="right-icon"
              className="w-6 md:w-8"
            />
          </button>
        </div>
      </section>
    </>
  );
}

export default Shop;
