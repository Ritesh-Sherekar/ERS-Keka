function IndustryCard({ img, heading, desc, iconBg }) {
  return (
    <div>
      <div className="w-3xs  text-center p-[12px]">
        <div className="w-[4rem] h-[4rem] flex items-center justify-center m-auto border-none rounded-full"
        style={{ backgroundColor: iconBg }}>
          <img className="w-[2.5rem]" src={img} alt="image-icon" />
        </div>
        <h3 className="text-[#2C2E31] font-semibold mt-4 mb-2">{heading}</h3>
        <p className="text-[#69727A] mb-3">{desc}</p>
        <a className="text-[18px] text-[#1077DA]" href="">Know More</a>
      </div>
    </div>
  );
}

export default IndustryCard;
