import React from "react";
import { FaClock, FaShare } from "react-icons/fa";

const tips = [
  { id: "1", text: "نکات مهم کمپینگ در فصل زمستان" },
  { id: "2", text: "معرفی بهترین اکوکمپ های ایران" },
  { id: "3", text: "راهنمای خرید بهترین چادر کمپینگ" },
  { id: "4", text: "تفاوت های هدلایت شارژی و باتری خور" },
];

function More({ handleNotAvailable }) {
  return (
    <>
      <section
        id="بلاگ"
        className="p-4 pt-16 pb-28 md:pt-24 md:pb-32 lg:py-28 space-y-4 scroll-mt-12"
      >
        <h2 className="text-h2 text-center font-semibold">
          لایف هک و نکات کمپینگ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          <div className="flex flex-col gap-4 justify-between">
            <div className="border-2 border-colors-mist rounded-3xl flex items-center gap-4 p-4">
              <img src="images/tip-1.webp" alt="" className="rounded-2xl" />
              <div className="space-y-2">
                <span className="bg-colors-mint text-sm rounded-xl p-1.5 text-colors-forest">
                  دسته بندی
                </span>
                <h4 className="lg:text-sm xl:text-base">
                  چک لیست لوازم مهم و ضرروری برای کمپینگ و سفر
                </h4>
                <div className="flex items-center gap-2">
                  <FaClock className="text-colors-slate" />
                  <p className="text-sm">زمان مطالعه : 5 دقیقه</p>
                </div>
              </div>
            </div>
            <div className="border-2 border-colors-mist rounded-3xl flex items-center gap-4 p-4">
              <img src="images/tip-2.webp" alt="" className="rounded-2xl" />
              <div className="space-y-2">
                <span className="bg-colors-mint rounded-xl text-sm p-1.5 text-colors-forest">
                  دسته بندی
                </span>
                <h4 className="lg:text-sm xl:text-base">
                  بهترین روش های درست کردن قهوه در کمپینگ
                </h4>
                <div className="flex items-center gap-2">
                  <FaClock className="text-colors-slate" />
                  <p className="text-sm">زمان مطالعه : 5 دقیقه</p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:flex bg-tips-bg bg-center bg-no-repeat bg-cover rounded-3xl"></div>

          <div className="md:col-span-2 lg:col-span-1 space-y-2 flex flex-col justify-between">
            {tips.map((tip) => (
              <div
                className="border-2 border-colors-mist rounded-3xl p-4 flex items-center justify-between"
                key={tip.id}
              >
                <p className="lg:text-sm xl:text-base">{tip.text}</p>
                <button onClick={handleNotAvailable} className="button">
                  <FaShare />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center md:justify-center pt-2 md:pt-4">
          <a href="#" className="button flex items-center justify-center gap-2">
            مشاهده بیشتر
            <img src="images/right-icon.webp" alt="right-icon" className="" />
          </a>
        </div>
      </section>
    </>
  );
}

export default More;
