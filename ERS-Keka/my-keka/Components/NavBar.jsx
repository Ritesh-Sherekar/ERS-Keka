export default function NavBar() {
  return (
    <nav className="bg-slate-50 h-18 px-6 flex justify-between items-center">
      <div className="flex w-full justify-between items-center mr-16">
        {/* Logo */}
        <div className="text-xl font-bold ml-8">
          <img src="Image\KekaLogoBlack.svg" alt="" className="ml-16" />
        </div>

        {/* Navigation Links */}
        <div>
          <ul className="flex gap-14">
            <li className="text-gray-700 hover:text-gray-600 cursor-pointer">
              Product
            </li>
            <li className="text-gray-700 hover:text-gray-600 cursor-pointer">
              Customer
            </li>
            <li className="text-gray-700 hover:text-gray-600 cursor-pointer">
              Pricing
            </li>
            <li className="text-gray-700 hover:text-gray-600 cursor-pointer">
              About
            </li>
            <li className="text-gray-700 hover:text-gray-600 cursor-pointer">
              Resource
            </li>
            <li className="text-gray-700 hover:text-gray-600 cursor-pointer">
              Careers
            </li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="px-4 py-2 rounded text-gray-700 border-0 hover:text-gray-600 cursor-pointer">
            Login
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-4xl hover:bg-blue-600">
            Get Free Trial
          </button>
        </div>
      </div>
    </nav>
  );
}
