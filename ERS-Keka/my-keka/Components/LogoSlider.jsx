import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LogoSlider() {
    const settings = {
        dots: false,          // Hide navigation dots
        infinite: true,       // Enable infinite scrolling
        slidesToShow: 5,      // Number of logos visible at a time
        slidesToScroll: 1,    // Scrolls one slide at a time
        autoplay: true,       // Enables auto-scrolling
        speed: 5000,         // Slower speed for smooth effect
        autoplaySpeed: 0,     // No delay, for seamless movement
        cssEase: "linear",    // Continuous scrolling effect
        arrows: false,        // Hide navigation arrows
        pauseOnHover: false   // Keep sliding even when hovered
      };
      
  return (
    <div className="flex items-center h-32 mt-16 mb-16 bg-gray-100 px-10">
      {/* Left Side Text */}
      <div className="text-2xl font-semibold p-4 pr-12 pl-14 border-r-2 border-gray-400">
        Trusted by 10,000+ <br />
        Organizations
      </div>

      {/* Logo Slider */}
      <div className="w-3/4 pl-8">
        <Slider {...settings}>
          <div className="flex justify-center">
            <img src="Image\apollo-logo-new.png" alt="BYD Logo" className="h-16" />
          </div>
          <div className="flex justify-center">
            <img src="Image\astraTalk-logo-new.png" alt="Capitals Logo" className="h-16" />
          </div>
          <div className="flex justify-center">
            <img src="Image/bombay-shaving-logo-new.png" alt="AstroTalk Logo" className="h-16" />
          </div>
          <div className="flex justify-center">
            <img src="Image/byd-logo-new.png" alt="Beer Biceps Logo" className="h-16" />
          </div>
          <div className="flex justify-center">
            <img src="Image\beers-and-biseps-logo-new.png" alt="Chumbak Logo" className="h-16" />
          </div>
          <div className="flex justify-center">
            <img src="Image\chumbak-logo-new.png" alt="Mok Logo" className="h-16" />
          </div>
          <div className="flex justify-center">
            <img src="Image\clearTax-logo-new-one.png" alt="Mok Logo" className="h-16" />
          </div>
          <div className="flex justify-center">
            <img src="Image\dadus-logo-new.png" alt="Mok Logo" className="h-16" />
          </div>
          <div className="flex justify-center">
            <img src="Image\delhi-capitals-logo-new.png" alt="Mok Logo" className="h-16" />
          </div>
          <div className="flex justify-center">
            <img src="Image\hetero-logo-new.png" alt="Mok Logo" className="h-16" />
          </div>
          <div className="flex justify-center">
            <img src="Image\hp-logo-new.png" alt="Mok Logo" className="h-16" />
          </div>
          <div className="flex justify-center">
            <img src="Image\jupiter-logo-new.png" alt="Mok Logo" className="h-16" />
          </div>
          <div className="flex justify-center">
            <img src="Image\mokobara-logo-new.png" alt="Mok Logo" className="h-16" />
          </div>
          <div className="flex justify-center">
            <img src="Image\nobroker-logo-new.png" alt="Mok Logo" className="h-16" />
          </div>
          <div className="flex justify-center">
            <img src="Image\one-plus-logo-new.png" alt="Mok Logo" className="h-16" />
          </div>
          <div className="flex justify-center">
            <img src="Image\plum-logo-new-one.png" alt="Mok Logo" className="h-16" />
          </div>
          <div className="flex justify-center">
            <img src="Image\rajasthan-royals-logo-new.png" alt="Mok Logo" className="h-16" />
          </div>
          <div className="flex justify-center">
            <img src="Image\rvjc-logo-new.png" alt="Mok Logo" className="h-16" />
          </div>
          <div className="flex justify-center">
            <img src="Image\thrillophilla-logo-new.png" alt="Mok Logo" className="h-16" />
          </div>
          <div className="flex justify-center">
            <img src="Image\yulu-logo-new.png" alt="Mok Logo" className="h-16" />
          </div>
        </Slider>
      </div>
    </div>
  );
}
