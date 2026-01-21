import { useState } from "react";
import loginImg from "../Image/login-image.jpg";
import { loginWith } from "../data/loginWith";

function LoginPage() {
  const [isClicked, setIsClicked] = useState();

  return (
    <div className="flex h-screen font-arial">
      {/* LEFT IMAGE SECTION */}
      <div className="w-[900px] h-full flex-shrink-0">
        <img
          className="h-full w-full object-cover"
          src={loginImg}
          alt="login-image"
        />
      </div>

      {/* RIGHT LOGIN SECTION */}
      <div className="flex-1">
        <div className="mt-32 pl-18 pr-12">
          <h2 className="text-[18px] text-[#0F1824] font-semibold mb-4">
            Login to Keka
          </h2>

          <input
            type="text"
            placeholder="Email or Username"
            onClick={() => setIsClicked(true)}
            className={`border rounded-[4px] p-3 mb-4 w-80 outline-none transition-colors
              ${isClicked ? "border-[#5746AF]" : "border-[#DCDFE4] hover:border-[#848F9F]"}
            `}
          />
          <br />
          <button className="bg-[#5746AF] text-white w-80 px-4 py-2 rounded">
            Continue
          </button>

          <div className="mt-8 flex items-center">
            <hr className="w-36 text-[#EBEDEF]" />
            <p className="p-2 text-[14px] text-[#777777]">Or</p>
            <hr className="w-36 text-[#EBEDEF]" />
          </div>

          <div className="flex flex-col items-center justify-center">
            {loginWith.map((value, index) => (
              <button
                key={index}
                className="flex items-center gap-3 justify-start border-2 w-80 p-2 mb-2"
              >
                <img
                  src={value.img}
                  alt="login-with-icon"
                  className="w-6 h-6"
                />

                <p className="text-[14px]">{value.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
