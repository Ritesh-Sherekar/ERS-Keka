export default function MainPage() {
  return (
    <>
      <section className=" flex ml-16 mr-16 mt-10 font-arial">
        {/* left part start */}
        <div className=" w-2xl p-12 mb-5">
          <h1 className="text-4xl text-gray-800 font-bold mb-5 ">
            Everything you need to <br /> build a great company
          </h1>
          <p className="text-gray-500 text-lg mb-5">
            Keka is your people enabler. From automation of people <br />{" "}
            processes to creating an engaged and driven culture, Keka <br />
            is all you need to build a good to great company.
          </p>
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden w-[480px] mb-5">
            {/* Email Icon & Input Field */}
            <div className="flex items-center px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="black"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5A2.25 2.25 0 0119.5 19.5H4.5a2.25 2.25 0 01-2.25-2.25V6.75"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 6.75l8.25 5.25a1.5 1.5 0 001.5 0L21 6.75"
                />
              </svg>
            </div>

            <input
              type="email"
              placeholder="Your work email"
              className="w-full px-3 h-10 text-gray-600 bg-white outline-none"
            />

            {/* Signup Button */}
            <button className="bg-blue-500 h-10 text-white px-4 py-2 font-medium hover:bg-blue-600 text-[16px] flex-shrink-0 whitespace-nowrap">
              Signup for demo
            </button>
          </div>

          <div className="pt-3">
            <img
              src="Image/Frame-1.svg"
              alt=""
              className="w-full max-w-[400px] md:max-w-[450px] lg:max-w-[480px] h-auto"
            />
          </div>
        </div>

        {/* left part End */}

        {/* Right part start */}

        <div className="pt-12">
          <img src="Image\hero-home.svg" alt="" />
        </div>

        {/* Right part End */}
      </section>
    </>
  );
}
