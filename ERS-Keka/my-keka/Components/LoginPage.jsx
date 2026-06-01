import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import loginImg from "../Image/login-image.jpg";
import { loginWith } from "../data/loginWith";
import appleStore from "../Image/app-store.svg";
import playStrore from "../Image/google-play.svg";
import kekeLogo from "../Image/keka-full-32.svg";

function LoginPage() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const [isClicked, setIsClicked] = useState(false);

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:7575/consumer/login",
        loginData
      );

      const tokenData = response.data;

      localStorage.setItem(
        "accessToken",
        tokenData.activeToken
      );

      localStorage.setItem(
        "refreshToken",
        tokenData.refreshToken
      );

      alert("Login Successful");

      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      alert("Invalid Username or Password");
    }
  };

  return (
    <div className="flex h-screen font-arial overflow-hidden">
      {/* Left Image */}
      <div className="fixed left-0 top-0 w-[900px] h-screen">
        <img
          className="h-full w-full object-cover"
          src={loginImg}
          alt="login-image"
        />
      </div>

      {/* Right Side */}
      <div className="ml-[900px] flex-1 h-screen overflow-y-auto">
        <div className="mt-32 pl-18 pr-12 pb-8">

          <h2 className="text-[18px] text-[#0F1824] font-semibold mb-4">
            Login to Keka
          </h2>

          <form onSubmit={handleLogin}>
            {/* Username */}
            <input
              type="text"
              name="username"
              value={loginData.username}
              onChange={handleChange}
              onFocus={() => setIsClicked(true)}
              placeholder="Email or Username"
              className={`border rounded-[4px] p-3 mb-4 w-80 outline-none transition-colors
                ${
                  isClicked
                    ? "border-[#5746AF]"
                    : "border-[#DCDFE4] hover:border-[#848F9F]"
                }`}
            />

            {/* Password */}
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              placeholder="Password"
              className="border rounded-[4px] p-3 mb-4 w-80 outline-none border-[#DCDFE4] hover:border-[#848F9F] block"
            />

            {/* Login Button */}
            <button
              type="submit"
              className="bg-[#5746AF] hover:bg-[#3b2a92] text-white w-80 px-4 py-2 rounded"
            >
              Login
            </button>
          </form>

          {/* OR Section */}
          <div className="mt-8 flex items-center">
            <hr className="w-36 text-[#EBEDEF]" />
            <p className="p-2 text-[14px] text-[#777777]">Or</p>
            <hr className="w-36 text-[#EBEDEF]" />
          </div>

          {/* Social Login */}
          <div className="flex flex-col items-center w-80">
            {loginWith.map((value, index) => (
              <button
                key={index}
                className="flex items-center gap-3 border rounded-[4px] border-[#DCDFE4]
                           hover:bg-[#f4f5f8] w-80 p-2 mb-2"
              >
                <img
                  src={value.img}
                  alt="login-with-icon"
                  className="w-6 h-6 ml-[60px]"
                />
                <p className="text-[14px]">{value.desc}</p>
              </button>
            ))}
          </div>

          {/* App Store */}
          <div className="w-80 flex justify-center mt-6 gap-3">
            <a href="https://apps.apple.com/us/iphone/today">
              <img src={appleStore} alt="app-store" />
            </a>

            <a href="https://play.google.com/store/games?device=windows">
              <img src={playStrore} alt="play-store" />
            </a>
          </div>

          {/* Footer */}
          <div className="w-80 flex mt-8 gap-3">
            <img src={kekeLogo} alt="keka-logo" />

            <p className="text-[12px] text-[#777777]">
              By logging in, you agree to Keka{" "}
              <span className="underline underline-offset-1">
                Terms of Use
              </span>{" "}
              and{" "}
              <span className="underline underline-offset-1">
                Privacy Policy
              </span>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default LoginPage;