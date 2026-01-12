function FeaturesDiv({ title, desc, isActive }) {
  return (
    <div>
      <h2
        className={`font-Nunito text-[1.2rem] font-semibold transition-colors duration-300
          ${isActive ? "!text-[#1077DA]" : "!text-[#2C2E31]"}
        `}
      >
        {title}
      </h2>

      <p className="text-[#69727A]">{desc}</p>
    </div>
  );
}

export default FeaturesDiv;
