
function ProductCard({ title, description, icon, iconBg }) {
  return (
    <div className="w-[20rem] rounded-[12px] shadow-[0px_2px_6px_rgba(0,0,0,0.1)] pt-8 pb-8">
      
      <div
        className="w-16 h-16 m-5.5 rounded-full flex items-center justify-center"
        style={{ backgroundColor: iconBg }}
      >
        <img src={icon} alt={title} className="w-10 h-10 rounded-full p-1" />
      </div>

      <h2 className="ml-5.5 mr-5.5 mt-6 font-medium text-2xl text-[#2C2E31]">
        {title}
      </h2>

      <p className="ml-5.5 mr-5.5 mt-2.5 mb-3.5 text-[19px] text-[#69727A]">
        {description}
      </p>

      <div className="flex items-center gap-2 ml-5.5">
        <a className="text-[20px] font-medium text-[#1013DA]" href="#">
          Learn more
        </a>
        <img
          className="w-8 h-8"
          src="/Image/arrow-sm-right-svgrepo-com.png"
          alt="Arrow Icon"
        />
      </div>
    </div>
  );
}

export default ProductCard