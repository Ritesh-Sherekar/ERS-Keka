import { useState } from "react";

const data = [
  { title: "Feature One", img: "Image/apollo-logo-new.png" },
  { title: "Feature Two", img: "Image/bombay-shaving-logo-new.png" },
  { title: "Feature Three", img: "Image/chumbak-logo-new.png" },
  { title: "Feature Four", img: "Image/clearTax-logo-new-one.png" },
];

export default function FeatureSlider() {
  const [active, setActive] = useState(0);

  return (
    <div className="flex gap-10">
      
      {/* LEFT SIDE */}
      <div className="flex flex-col gap-4 w-1/3">
        {data.map((item, index) => (
          <div
            key={index}
            onClick={() => setActive(index)}
            className={`cursor-pointer p-4 rounded-lg border transition
              ${active === index 
                ? "bg-red-500 text-white" 
                : "bg-white hover:bg-gray-100"}
            `}
          >
            {item.title}
          </div>
        ))}
      </div>

      {/* RIGHT SIDE */}
      <div className="w-2/3 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {data.map((item, index) => (
            <img
              key={index}
              src={item.img}
              alt=""
              className="w-full flex-shrink-0"
            />
          ))}
        </div>
      </div>

    </div>
  );
}
