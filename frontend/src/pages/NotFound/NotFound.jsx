import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound-page">
      <div className="notfound-code">404</div>
      <h1 className="notfound-title">Page Not Found</h1>
      <p className="notfound-text">
        Oops! The page you're looking for doesn't exist or has been moved.
        Let's get you back on track.
      </p>
      <Link to="/" className="btn-primary">
        ← Back to Home
      </Link>
    </div>
  );
};

export default NotFound;