const Orders = () => {
  return (
    <div className="min-h-[80vh] py-10 px-12 max-w-[1200px] mx-auto bg-[#f5f0eb]">
      <h1 className="font-['Outfit'] text-[1.8rem] font-black text-[#1e2028] mb-7 flex items-center gap-3 before:content-[''] before:inline-block before:w-[5px] before:h-[1.5em] before:bg-[#ed8a63] before:rounded-full before:shrink-0">
        My Orders
      </h1>

      <div className="min-h-[50vh] flex flex-col items-center justify-center gap-4 text-center bg-white border-2 border-[#e0d5c8] rounded-[20px] p-12 shadow-[0_8px_28px_rgba(58,70,96,0.14)]">
        <div className="text-[3.5rem]">📦</div>
        <h2 className="font-['Outfit'] text-xl font-black text-[#1e2028]">No Orders Yet</h2>
        <p className="text-[#7a7060] text-sm max-w-sm">
          You haven't placed any orders yet. Start shopping and your orders will appear here.
        </p>
        <a
          href="/products"
          className="inline-flex items-center gap-1.5 px-8 py-3.5 bg-[#ed8a63] text-white rounded-lg font-['Inter'] text-[0.95rem] font-black shadow-[0_6px_20px_rgba(237,138,99,0.32)] transition-all hover:bg-[#d4724a] hover:-translate-y-0.5"
          style={{ textDecoration: "none" }}
        >
          Start Shopping →
        </a>
      </div>
    </div>
  );
};

export default Orders;