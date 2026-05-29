import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-[#3b2a92]">Create Account</h1>
          <p className="text-gray-500 mt-2">Sign up to get started</p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full px-4 py-3 rounded-xl border border-[#5746AF] bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none   focus:border-[#5746AF] transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#5746AF] transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#5746AF] transition"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[#5746AF] hover:bg-[#3b2a92] text-white font-semibold py-3 rounded-xl transition duration-300"
          >
            Create Account
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-center text-gray-500 mt-6">
          Already have an account?{" "}
          <span
            className="text-[#3b2a92] font-medium cursor-pointer hover:underline"
            onClick={() => navigate("/login-page")}
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
