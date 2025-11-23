import React, { useRef } from "react";

const allCategories = [
  {
    id: "1",
    img: "images/flash.webp",
    title: "چراغ قوه",
  },
  {
    id: "2",
    img: "images/leather-travel-mug-with-black-lid-black-lid_786255-20508.webp",
    title: "فلاسک و ماگ",
  },
  {
    id: "3",
    img: "images/comfortable-portable-folding-chair-ideal-relaxation-outdoor-adventures-events_1033130-33132.webp",
    title: "میز و صندلی",
  },
  {
    id: "4",
    img: "images/stylish-outdoor-adventure-solo-backpacking-gear-white-background_983420-38732.webp",
    title: "کوله پشتی",
  },
  {
    id: "5",
    img: "images/classic-sunglasses-white-background-minimalist-eyewear-modern-style.jpg",
    title: "عینک آفتابی",
  },
  {
    id: "6",
    img: "images/flashlight-isolated_770883-3085.webp",
    title: "چراغ شبانه",
  },
  {
    id: "7",
    img: "images/lightweight-synthetic-fill-sleeping-bag-unrolled-ready-use-isolated-white_41097-5030.webp",
    title: "پتو گرم",
  },
  {
    id: "8",
    img: "images/outdoor-camping-tent_1225636-16282.webp",
    title: "خیمه",
  },
  {
    id: "9",
    img: "images/photorealistic-water-bottle_23-2151049018.webp",
    title: "بتری چای",
  },
  {
    id: "10",
    img: "images/portable-green-rds-table-camping_899449-25078.webp",
    title: "میز",
  },
  {
    id: "11",
    img: "images/water-bottle-mockup_1263326-37811.webp",
    title: "بتری آب",
  },
];

function Catagories() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="max-w-[75rem] mx-auto p-4 -mt-32 space-y-2 lg:space-y-4">
        <div className="space-y-2 lg:space-y-4 bg-colors-forest p-4 lg:px-8 lg:py-4 rounded-[2rem]">
          <h2 className="text-h2 font-semibold text-center text-colors-white font-estedad">
            دسته بندی محصولات
          </h2>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide gap-5 md:gap-8 py-2"
          >
            {allCategories.map((category) => (
              <div
                className="flex-shrink-0 snap-start border border-colors-sunrise bg-colors-white p-2 rounded-3xl text-center space-y-2 
                  hover:scale-105 transition-transform duration-300 cursor-pointer"
                key={category.id}
              >
                <img
                  src={category.img}
                  className="w-20 md:w-28 lg:w-32 h-16 md:h-24 lg:h-28 object-contain"
                />
                <h3 className="text-sm md:text-base font-medium">
                  {category.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
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
        <p className="max-w-5xl mx-auto text-description leading-relaxed text-center pt-4 lg:pt-4">
          "تجهیزات حرفه‌ای، ماجراجویی‌های فراموش‌نشدنی!" باور داریم که هر سفر به
          طبیعت می‌تونه به تجربه منحصر‌ به‌فرد و خاطره‌انگیز تبدیل شه. به همین
          دلیل بهترین و باکیفیت‌ترین لوازم کمپینگ و سفر رو برای شما فراهم کردیم.
          از چادرهای سبک و کم‌حجم تا وسایل آشپزی و روشنایی، همه‌چیز آماده‌ست تا
          شما بدون نگرانی به دل طبیعت بزنید.
        </p>
      </section>
    </>
  );
}

export default Catagories;
