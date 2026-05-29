import IndustryCard from "./IndustryCard";
import { industry } from "../data/industryData";

function Industry() {
  return (
    <div className="ml-16 mr-16 mt-10 mb-20 font-arial">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-[#2C2E31] mb-5">Personalized HCM Software for YOUR <br /> industry</h1>
        <p className="text-[1.2rem] text-[#69727A]">
          You need someone that understands you. Check our tailored offerings
          for your industry. This is <br /> People Management - À la carte.
        </p>
      </div>

      <div className="flex justify-evenly"> 
        {industry.map((item, index) => (
          <IndustryCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Industry;
