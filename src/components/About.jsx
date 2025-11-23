import React from "react";

function About() {
  return (
    <>
      <section
        id="درباره ما"
        className="pb-8 md:pb-16 md:pt-10 lg:pb-10 lg:pt-10 px-4 sm:px-6 md:px-8 lg:px-16 max-w-[85rem] 2xl:max-w-[88rem] mx-auto scroll-mt-52"
      >
        <div className="flex flex-col md:flex-row items-center justify-around gap-12 sm:gap-14">
          <div className="max-w-lg md:max-w-sm lg:max-w-lg space-y-3 md:space-y-5 lg:space-y-8 text-center md:text-right">
            <div className="flex items-end justify-center md:justify-start gap-4">
              <h2 className="text-h2 font-medium leading-tight">
                کــوله پشتی های سری <br />
                <span className="font-lora font-bold text-colors-forest">
                  JACK WOLFSKIN
                </span>
              </h2>
              <img
                src="images/arrow.webp"
                alt="arrow down"
                className="w-6 md:w-10 lg:w-12"
              />
            </div>
            <p className="text-description">
              طراحی ارگونومیک و پشتی طبی سری Jack Wolfskin مناسب حمل طولانی مدته
              و کمترین فشار رو به گردن و کمر شما وارد میکنه !!
            </p>
            <div className="flex items-center justify-center md:justify-start">
              <a
                href="#"
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

          <div className="">
            <img
              src="images/travel-bag.webp"
              alt="bag"
              className="w-72 sm:w-96 md:w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
