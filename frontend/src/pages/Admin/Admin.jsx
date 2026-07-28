const Admin = () => {
  const stats = [
    { icon: "📦", label: "Total Products", value: "128" },
    { icon: "🛒", label: "Total Orders",   value: "942" },
    { icon: "👥", label: "Customers",      value: "3.2K" },
    { icon: "💰", label: "Revenue",        value: "₹4.8L" },
  ];

  return (
    <div className="min-h-[80vh] py-10 px-12 max-w-[1200px] mx-auto bg-[#f5f0eb]">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <h1 className="font-['Outfit'] text-[1.8rem] font-black text-[#1e2028] flex items-center gap-3 before:content-[''] before:inline-block before:w-[5px] before:h-[1.5em] before:bg-[#ed8a63] before:rounded-full before:shrink-0">
          Admin Dashboard
        </h1>
        <span className="inline-flex px-3 py-1 bg-[#ed8a63] text-white text-xs font-black rounded-full uppercase tracking-wider shadow-[0_6px_20px_rgba(237,138,99,0.32)]">
          Admin
        </span>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white border-2 border-[#e0d5c8] rounded-[20px] p-6 flex flex-col items-center gap-2 shadow-[0_1px_4px_rgba(58,70,96,0.08)] transition-all hover:-translate-y-1 hover:border-[#ed8a63] hover:shadow-[0_12px_36px_rgba(237,138,99,0.18)]"
          >
            <div className="text-[2.5rem]">{stat.icon}</div>
            <div className="font-['Outfit'] text-2xl font-black text-[#3a4660]">{stat.value}</div>
            <div className="text-[#7a7060] text-sm font-medium text-center">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Placeholder */}
      <div className="min-h-[30vh] flex flex-col items-center justify-center gap-4 text-center bg-white border-2 border-[#e0d5c8] rounded-[20px] p-10 shadow-[0_8px_28px_rgba(58,70,96,0.14)]">
        <div className="text-[3.5rem]">🛠️</div>
        <h2 className="font-['Outfit'] text-xl font-black text-[#1e2028]">Admin Panel</h2>
        <p className="text-[#7a7060] text-sm max-w-sm">
          Manage products, orders, users, and store settings from this dashboard.
        </p>
      </div>
    </div>
  );
};

export default Admin;