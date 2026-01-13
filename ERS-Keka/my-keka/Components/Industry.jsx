import IndustryCard from "./IndustryCard";
import { industry } from "../data/industryData";

function Industry() {
  return (
    <div>
      <div>
        <h1>Personalized HCM Software for YOUR industry</h1>
        <p>
          You need someone that understands you. Check our tailored offerings
          for your industry. This is People Management - À la carte.
        </p>
      </div>

      <div>
        {industry.map((item, index) => (
          <IndustryCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Industry;
