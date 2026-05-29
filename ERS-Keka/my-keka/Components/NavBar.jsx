import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <nav className="bg-slate-50 h-[72px] px-6 flex justify-between items-center sticky top-0 z-50 shadow">
      <div className="flex w-full justify-between items-center mr-16">
        {/* Logo */}
        <div className="text-xl font-bold ml-8">
          <img src="Image\KekaLogoBlack.svg" alt="" className="ml-16" />
        </div>

        {/* Navigation Links */}
        <div>
          <ul className="flex gap-14">
            <li
              onClick={() => navigate("/")}
              className="text-gray-700 hover:text-gray-600 cursor-pointer"
            >
              Product
            </li>
            <li
              onClick={() => navigate("/")}
              className="text-gray-700 hover:text-gray-600 cursor-pointer"
            >
              Customer
            </li>
            <li
              onClick={() => navigate("/")}
              className="text-gray-700 hover:text-gray-600 cursor-pointer"
            >
              Pricing
            </li>
            <li
              onClick={() => navigate("/")}
              className="text-gray-700 hover:text-gray-600 cursor-pointer"
            >
              About
            </li>
            <li
              onClick={() => navigate("/")}
              className="text-gray-700 hover:text-gray-600 cursor-pointer"
            >
              Resource
            </li>
            <li
              onClick={() => navigate("/")}
              className="text-gray-700 hover:text-gray-600 cursor-pointer"
            >
              Careers
            </li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex gap-8">
          <div>
            <button
              onClick={() => navigate("/login-page")}
              className=" py-2 rounded text-gray-700 border-0 hover:text-gray-600 cursor-pointer"
            >
              Login/
            </button>

            <button
              onClick={() => navigate("/signup-page")}
              className=" py-2 rounded text-gray-700 border-0 hover:text-gray-600 cursor-pointer"
            >
              Signup
            </button>
          </div>

          <div>
            <button
            onClick={() => navigate("/create-account")}
            className="bg-blue-500 text-white px-4 py-2 rounded-4xl hover:bg-blue-600"
          >
            Get Free Trial
          </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
