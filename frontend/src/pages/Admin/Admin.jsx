
const Admin = () => {
  const stats = [
    { icon: "📦", label: "Total Products", value: "128" },
    { icon: "🛒", label: "Total Orders",   value: "942" },
    { icon: "👥", label: "Customers",      value: "3.2K" },
    { icon: "💰", label: "Revenue",        value: "₹4.8L" },
  ];

  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1 className="page-title" style={{ marginBottom: 0 }}>Admin Dashboard</h1>
        <span className="admin-badge">Admin</span>
      </div>

      <div className="admin-grid">
        {stats.map((stat) => (
          <div className="admin-stat-card" key={stat.label}>
            <div className="admin-stat-icon">{stat.icon}</div>
            <div className="admin-stat-value">{stat.value}</div>
            <div className="admin-stat-label">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="placeholder-page" style={{ minHeight: "30vh" }}>
        <div className="placeholder-icon">🛠️</div>
        <h2 className="placeholder-title">Admin Panel</h2>
        <p className="placeholder-text">
          Manage products, orders, users, and store settings from this dashboard.
        </p>
      </div>
    </div>
  );
};

export default Admin;