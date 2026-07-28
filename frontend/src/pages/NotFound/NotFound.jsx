import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center gap-5 text-center px-6 bg-[#f5f0eb]">
      <div className="font-['Outfit'] text-[7rem] font-black text-[#3a4660] leading-none opacity-20 select-none">
        404
      </div>
      <h1 className="font-['Outfit'] text-2xl font-black text-[#1e2028] -mt-6">Page Not Found</h1>
      <p className="text-[#7a7060] text-sm max-w-sm leading-relaxed">
        Oops! The page you're looking for doesn't exist or has been moved.
        Let's get you back on track.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 px-8 py-3.5 bg-[#ed8a63] text-white rounded-lg font-['Inter'] text-[0.95rem] font-black shadow-[0_6px_20px_rgba(237,138,99,0.32)] transition-all hover:bg-[#d4724a] hover:-translate-y-0.5"
      >
        ← Back to Home
      </Link>
    </div>
  );
};

export default NotFound;