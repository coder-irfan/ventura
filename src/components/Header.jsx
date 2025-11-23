import React, { useState } from "react";
import { FaTimes, FaBars, FaSearch } from "react-icons/fa";

function Header({ handleNotAvailable }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="relative font-estedad">
        <div
          className="2xl:max-w-[100rem] mx-auto px-4 sm:px-6 md:px-8 py-3 md:py-4 lg:px-16 fixed top-0 right-0 left-0 z-[60]
          transition-color duration-300"
        >
          <div className="bg-colors-white px-3 md:px-4 pt-2.5 py-3 rounded-full shadow-[0_0_0.5rem] shadow-colors-midnight/40">
            <div
              className={`md:hidden fixed w-screen h-screen opacity-80 inset-0 bg-black transition-all duration-700 z-20
            ${
              isOpen
                ? "translate-x-0 delay-100 pointer-events-auto"
                : "translate-x-full delay-200 pointer-events-none"
            }`}
            ></div>

            <div className="flex items-center justify-between">
              <div className="hidden md:flex">
                <img
                  src="images/logo.webp"
                  alt="logo"
                  className="w-24 lg:w-28 xl:w-32"
                />
              </div>

              <div className="z-50">
                <nav
                  className={`md:relative fixed top-0 right-0 h-full w-4/5 md:left-0 sm:w-2/3 transition-all duration-700 pt-20 pr-6 md:pr-0 md:pt-0
                md:h-auto md:w-auto md:translate-x-0 bg-colors-cloud md:bg-transparent space-y-4 md:space-y-0 ${
                  isOpen ? "translate-x-0" : "translate-x-full"
                }`}
                >
                  <div className="absolute top-6 left-6 flex md:hidden">
                    <img src="images/logo.webp" alt="logo" className="w-28" />
                  </div>

                  <ul className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 lg:gap-12 text-base lg:text-lg font-semibold">
                    <li className="hover-link">
                      <a href="#خانه" className="">
                        خانه
                      </a>
                    </li>
                    <li className="hover-link">
                      <a href="#محصولات" className="">
                        محصولات
                      </a>
                    </li>
                    <li className="hover-link">
                      <a href="#درباره ما" className="">
                        درباره ما
                      </a>
                    </li>
                    <li className="hover-link">
                      <a href="#بلاگ" className="">
                        بلاگ
                      </a>
                    </li>
                    <li className="hover-link">
                      <a href="#تماس" className="">
                        تماس
                      </a>
                    </li>
                  </ul>

                  {isOpen && (
                    <div
                      className="absolute top-2.5 right-6 text-[1.4rem] md:hidden border border-colors-forest rounded-md p-1"
                      onClick={() => setIsOpen(false)}
                    >
                      <FaTimes
                        aria-label="Close Menu"
                        className="cursor-pointer text-colors-forest"
                      />
                    </div>
                  )}
                </nav>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-colors-mist p-2 rounded-xl">
                  <FaSearch className="text-lg md:text-xl lg:text-2xl" />
                </div>
                <button className="button" onClick={handleNotAvailable}>
                  ورود/ثبت نام
                </button>
              </div>
            </div>
            {!isOpen && (
              <div
                className="absolute top-6 right-8 text-[1.4rem] md:hidden border border-colors-forest rounded-md p-1"
                onClick={() => setIsOpen(true)}
              >
                <FaBars
                  aria-label="Open Menu"
                  className="cursor-pointer text-colors-forest"
                />
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
