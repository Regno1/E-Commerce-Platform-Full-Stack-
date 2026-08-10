import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, logout, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="loader-container">
        <div className="spinner"></div>
      </div>
    );
  }

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const initial = user?.name ? user.name.charAt(0).toUpperCase() : "U";

  return (
    <div className="profile-page">
      <h1 className="page-title">My Profile</h1>

      {/* Profile Header */}
      <div className="profile-header">
        <div className="profile-avatar">{initial}</div>
        <div>
          <h2 className="profile-name">{user?.name || "User"}</h2>
          <p className="profile-email">{user?.email || ""}</p>
        </div>
      </div>

      {/* Profile Info */}
      <div className="profile-info-grid">
        <div className="profile-info-card">
          <div className="profile-info-label">Full Name</div>
          <div className="profile-info-value">{user?.name || "—"}</div>
        </div>
        <div className="profile-info-card">
          <div className="profile-info-label">Email</div>
          <div className="profile-info-value">{user?.email || "—"}</div>
        </div>
        <div className="profile-info-card">
          <div className="profile-info-label">Role</div>
          <div className="profile-info-value">{user?.role || "USER"}</div>
        </div>
        <div className="profile-info-card">
          <div className="profile-info-label">Member Since</div>
          <div className="profile-info-value">
            {user?.createdAt
              ? new Date(user.createdAt).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })
              : "—"}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="profile-actions">
        <button className="btn-primary" onClick={() => navigate("/orders")}>
          📦 My Orders
        </button>
        <button className="btn-danger" onClick={handleLogout}>
          🚪 Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;