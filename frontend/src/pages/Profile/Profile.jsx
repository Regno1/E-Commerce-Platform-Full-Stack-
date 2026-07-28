
const Profile = () => {
  return (
    <div className="profile-page">
      <h1 className="page-title">My Profile</h1>

      <div className="profile-header">
        <div className="profile-avatar">U</div>
        <div>
          <h2 className="profile-name">Guest User</h2>
          <p className="profile-email">guest@shopease.com</p>
        </div>
      </div>

      <div className="placeholder-page" style={{ minHeight: "30vh" }}>
        <div className="placeholder-icon">⚙️</div>
        <h2 className="placeholder-title">Profile Settings</h2>
        <p className="placeholder-text">
          Manage your account details, saved addresses, and preferences here.
        </p>
      </div>
    </div>
  );
};

export default Profile;