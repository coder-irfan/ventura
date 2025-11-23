import React, { useEffect, useState, useRef } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Products from "./components/Products";
import About from "./components/About";
import Shop from "./components/Shop";
import Brands from "./components/Brands";
import More from "./components/More";
import Footer from "./components/Footer";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

function App() {
  const handleNotAvailable = () => {
    toast.error("فعلا غیر فعال میباشد.");
  };

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
      <div className="bg-colors-cloud">
        <Header handleNotAvailable={handleNotAvailable} />
        <Hero />
      </div>
      <Categories scroll={scroll} scrollRef={scrollRef} />
      <Shop
        scroll={scroll}
        scrollRef={scrollRef}
        handleNotAvailable={handleNotAvailable}
      />
      <About />
      <Products
        scroll={scroll}
        scrollRef={scrollRef}
        handleNotAvailable={handleNotAvailable}
      />
      <Brands />
      <More handleNotAvailable={handleNotAvailable} />
      <Footer handleNotAvailable={handleNotAvailable} />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Slide}
        toastStyle={{
          margin: "0.2rem",
          maxWidth: "90vw",
          fontSize: "0.9rem",
          backgroundColor: "#F5F6F9",
          color: "#081035",
          fontWeight: 600,
        }}
        containerStyle={{
          padding: "0.5rem",
        }}
      />
    </>
  );
}

export default App;
