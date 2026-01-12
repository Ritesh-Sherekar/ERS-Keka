import { useState } from "react";
import FeaturesDiv from "./FeaturesDiv";
import {fetures} from "../data/featuresData"

export default function FeatureSlider() {
  const [active, setActive] = useState(0);

  return (
    <div className="ml-16 mr-16 mt-10 mb-20">

      <div className="flex flex-col items-center mb-10">
        <h1 className="text-4xl font-bold text-[#2C2E31] p-2.5 mb-1.5">Smart HR to outsmart the changing world</h1>
        <p className="w-[54rem] text-center mb-8 text-[#69727A] text-[19px]">The world has changed, and it's going to keep changing. Keka HR helps your teams to adapt, 
          evolve, and scale by working more effectively. Spend less time on mundane tasks and focus more on 
          strategy.Turn data into smarter decisions and create experiences your employees will love.</p>
      </div>

      <div className="flex ">
      {/* LEFT SIDE */}
      <div className="flex flex-col gap-2 w-1/3">
        {fetures.map((item, index) => (
          <div
            key={index}
            onClick={() => setActive(index)}
            className={`cursor-pointer p-4 rounded-lg h-[6.3rem] w-[22rem] border-none transition 
              ${active === index 
                ? "shadow-[0px_0px_20px_0px_rgba(0,0,0,0.1)]" 
                : "bg-white hover:bg-gray-100"}
            `}
          >
            {<FeaturesDiv {...item} isActive={active === index} />}
          </div>
        ))}
      </div>

      {/* RIGHT SIDE */}
      <div className="w-2/3 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {fetures.map((item, index) => (
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
    </div>
  );
}
