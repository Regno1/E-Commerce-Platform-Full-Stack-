import heroImg from "../../assets/images/img1.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">✦ New Collection 2026</div>
        <h1 className="hero-title">
          Shop the <span>Latest</span><br />Collection
        </h1>
        <p className="hero-subtitle">
          Discover premium products at the best prices. From cutting-edge electronics to
          fashion-forward styles — all in one place.
        </p>
        <div className="hero-actions">
          <Link to="/products" className="btn-primary">
            Shop Now →
          </Link>
          <Link to="/products" className="btn-secondary">
            Browse Categories
          </Link>
        </div>
      </div>

      <div className="hero-image-wrapper">
        <div className="hero-image-glow"></div>
        <img src={heroImg} className="hero-image" alt="Featured Collection" />
      </div>
    </section>
  );
};

export default Hero;