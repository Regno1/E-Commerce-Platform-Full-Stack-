import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-logo">
          <span className="auth-logo-text">ShopEase</span>
        </div>
        <h1 className="auth-title">Create Account</h1>
        <p className="auth-subtitle">Join thousands of happy shoppers today</p>

        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label className="form-label" htmlFor="reg-name">Full Name</label>
            <input
              id="reg-name"
              type="text"
              className="form-input"
              placeholder="Your full name"
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="reg-email">Email Address</label>
            <input
              id="reg-email"
              type="email"
              className="form-input"
              placeholder="you@example.com"
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="reg-password">Password</label>
            <input
              id="reg-password"
              type="password"
              className="form-input"
              placeholder="Create a strong password"
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="reg-confirm">Confirm Password</label>
            <input
              id="reg-confirm"
              type="password"
              className="form-input"
              placeholder="Confirm your password"
            />
          </div>

          <button type="submit" className="auth-submit">
            Create Account →
          </button>
        </form>

        <p className="auth-footer">
          Already have an account?{" "}
          <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;