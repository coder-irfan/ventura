import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

function Footer({ handleNotAvailable }) {
  return (
    <>
      <footer
        id="تماس"
        className="relative px-4 pt-20 pb-6 sm:px-6 md:pt-14 md:pb-8 md:px-8 lg:pt-20 lg:pb-10 xl:pt-24 lg:px-16 bg-colors-cloud space-y-6 md:space-y-8"
      >
        <div className="absolute -top-12 md:-top-9 lg:-top-8 -translate-x-1/2 left-1/2 flex items-center justify-center text-colors-white">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-10 bg-colors-forest p-3 rounded-2xl">
            <p className="">از تخفیف هایمان با خبر باشید!</p>
            <div className="relative">
              <input
                type="email"
                placeholder="آدرس ایمیل..."
                className="px-2 pt-2 pb-1.5 rounded-lg outline-none text-colors-midnight"
              />
              <button
                onClick={handleNotAvailable}
                className="absolute top-1/2 -translate-y-1/2 left-1 bg-colors-sunrise py-1.5 px-2.5 rounded-lg"
              >
                ارسال
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-12 lg:gap-10">
          <div className="space-y-2 lg:space-y-5">
            <h3 className="text-h3 font-medium">
              دسته بندی <span className="text-colors-forest">محصولات</span>
            </h3>
            <ul className="space-y-2 lg:space-y-3 text-base list-disc ms-4 marker:text-colors-forest">
              <li className="">
                <a href="#" className="hover-link">
                  چادر کمپینگ
                </a>
              </li>
              <li className="">
                <a href="#" className="hover-link">
                  کوله پشتی
                </a>
              </li>
              <li className="">
                <a href="#" className="hover-link">
                  فلاسک و ماگ
                </a>
              </li>
              <li className="">
                <a href="#" className="hover-link">
                  کیسه خواب
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-2 lg:space-y-5 flex flex-col lg:items-center lg:justify-center">
            <img src="images/logo.webp" alt="logo" className="w-28 xl:w-32" />

            <p className="lg:text-xl">
              تجهیزات حرفه‌ای، ماجراجویی‌های فراموش‌نشدنی!
            </p>

            <ul className="flex items-center gap-2 lg:text-lg text-colors-white">
              <li className="bg-colors-forest p-2 rounded-full hover:bg-colors-midnight transition-colors duration-300">
                <a href="https://instagram.com" target="_blank" className="">
                  <FaInstagram />
                </a>
              </li>
              <li className="bg-colors-forest p-2 rounded-full hover:bg-colors-midnight transition-colors duration-300">
                <a href="https://facebook.com" target="_blank" className="">
                  <FaFacebook />
                </a>
              </li>
              <li className="bg-colors-forest p-2 rounded-full hover:bg-colors-midnight transition-colors duration-300">
                <a href="https://linkedin.com" target="_blank" className="">
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="bg-colors-forest p-2 rounded-full hover:bg-colors-midnight transition-colors duration-300">
                <a href="https://youtube.com" target="_blank" className="">
                  <FaYoutube />
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-2 lg:space-y-5">
            <h3 className="text-h3 font-medium">
              لینک های <span className="text-colors-forest">مهم</span>
            </h3>
            <ul className="space-y-2 lg:space-y-3 text-base list-disc ms-4 marker:text-colors-forest">
              <li className="">
                <a href="#" className="hover-link">
                  بلاگ
                </a>
              </li>
              <li className="">
                <a href="#" className="hover-link">
                  محصولات
                </a>
              </li>
              <li className="">
                <a href="#" className="hover-link">
                  درباره ما
                </a>
              </li>
              <li className="">
                <a href="#" className="hover-link">
                  تماس با ما
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="" />

        <div className="flex items-center justify-between text-xs sm:text-sm md:text-base gap-2">
          <p className="font-lora">
            © {new Date().getFullYear()}{" "}
            <span className="font-vazir">تمام حقوق محفوظ است.</span>
          </p>
          <p className="">
            توسعه یافته توسط{" "}
            <span className="text-colors-forest underline">
              <a
                href="https://coder-irfan-portfolio.onrender.com"
                target="_blank"
              >
                Coder Irfan
              </a>
            </span>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
