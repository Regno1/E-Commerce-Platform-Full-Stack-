import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen bg-[#3a4660] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-[28px] shadow-[0_16px_48px_rgba(58,70,96,0.25)] overflow-hidden">
        {/* Top bar */}
        <div className="bg-[#3a4660] px-8 py-6 text-center">
          <span className="font-['Outfit'] text-2xl font-black text-[#e5d8cc] tracking-tight">ShopEase</span>
        </div>

        <div className="px-8 py-8">
          <h1 className="font-['Outfit'] text-2xl font-black text-[#1e2028] mb-1">Welcome Back</h1>
          <p className="text-[#7a7060] text-sm mb-7">Sign in to your account to continue shopping</p>

          <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-1.5">
              <label className="text-[#3a3d48] text-sm font-semibold" htmlFor="login-email">Email Address</label>
              <input
                id="login-email"
                type="email"
                className="w-full px-4 py-3 border-2 border-[#e0d5c8] rounded-xl text-sm text-[#1e2028] bg-[#fdfaf7] outline-none transition-all placeholder-[#b0a898] focus:border-[#ed8a63] focus:shadow-[0_0_0_3px_rgba(237,138,99,0.15)]"
                placeholder="you@example.com"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[#3a3d48] text-sm font-semibold" htmlFor="login-password">Password</label>
              <input
                id="login-password"
                type="password"
                className="w-full px-4 py-3 border-2 border-[#e0d5c8] rounded-xl text-sm text-[#1e2028] bg-[#fdfaf7] outline-none transition-all placeholder-[#b0a898] focus:border-[#ed8a63] focus:shadow-[0_0_0_3px_rgba(237,138,99,0.15)]"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#ed8a63] text-white rounded-xl font-['Inter'] text-[0.95rem] font-black cursor-pointer shadow-[0_6px_20px_rgba(237,138,99,0.32)] transition-all hover:bg-[#d4724a] hover:-translate-y-0.5 mt-2"
            >
              Sign In →
            </button>
          </form>

          <p className="text-[#7a7060] text-sm text-center mt-6">
            Don't have an account?{" "}
            <Link to="/register" className="text-[#ed8a63] font-bold hover:underline">Create one</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;