import React from "react";

const brands = [
  {
    id: "1",
    img: "images/company.webp",
  },
  {
    id: "2",
    img: "images/company1.webp",
  },
  {
    id: "3",
    img: "images/company-2.webp",
  },
  {
    id: "4",
    img: "images/company-3.webp",
  },
  {
    id: "5",
    img: "images/company-4.webp",
  },
  {
    id: "6",
    img: "images/company-5.webp",
  },
  {
    id: "7",
    img: "images/company-6.webp",
  },
  {
    id: "8",
    img: "images/company-7.webp",
  },
];

function Brands() {
  return (
    <>
      <section className="space-y-2 md:space-y-4">
        <h2 className="text-h2 text-center font-semibold">برند ها</h2>
        <div className="bg-colors-mint">
          <div className="p-4 py-6 md:py-10 lg:py-16 max-w-5xl mx-auto">
            <div className="grid grid-cols-4 gap-4">
              {brands.map((brand) => (
                <div className="bg-colors-white p-4 rounded-2xl" key={brand.id}>
                  <img
                    src={brand.img}
                    alt=""
                    className="h-8 md:w-28 md:h-16 object-contain mx-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Brands;
