import React from "react";

function Hero() {
  return (
    <>
      <section
        id="خانه"
        className="relative overflow-hidden pt-28 pb-48 md:pt-36 md:pb-36 lg:pt-36 lg:pb-32 xl:pb-36 px-4 sm:px-6 md:px-8 lg:px-16 max-w-[85rem] 2xl:max-w-[88rem] mx-auto"
      >
        <img
          src="images/line.webp"
          alt="line"
          className="absolute bottom-40 left-0 hidden lg:flex"
        />
        <img
          src="images/line-2.webp"
          alt="line"
          className="absolute top-52 right-0 hidden lg:flex"
        />
        <div className="flex flex-col gap-20 md:gap-10 lg:gap-0">
          <div className="">
            <h1 className="text-h1 font-medium leading-tight text-center">
              سفرت را بچین، <span className="text-colors-forest">وسایلش</span>{" "}
              را داریم!
            </h1>
            <div className="flex items-center justify-center pt-4 lg:pt-8">
              <a
                href="#محصولات"
                className="button flex items-center justify-center gap-2"
              >
                مشاهده محصولات
                <img
                  src="images/right-icon.webp"
                  alt="right-icon"
                  className=""
                />
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src="images/hero-bg.webp"
              alt="animated tent"
              className="mx-auto lg:h-[450px] w-auto object-cover"
            />
            <div className="flex items-center absolute -bottom-8 md:bottom-20 right-0 md:right-20 bg-colors-white px-4 py-2 border-r-8 rounded-lg border-r-colors-sunrise">
              <h2 className="text-h2 text-colors-sunrise font-medium font-lora">
                +200
              </h2>
              <span className="mr-2 text-sm md:text-base">محصول متنوع</span>
            </div>
            <div className="flex items-center absolute -top-8 md:top-20 left-0 md:left-20 bg-colors-white px-4 py-2 border-l-8 rounded-lg border-l-colors-forest">
              <span className="ml-2 text-sm md:text-base">مشتری راضی</span>
              <h2 className="text-h2 text-colors-forest font-medium font-lora">
                +999
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
