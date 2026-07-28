import { Link, useParams } from "react-router-dom";
import product from "../../components/products/product.js";

const ProductDetails = () => {
  const { id } = useParams();
  const detail = product.find((item) => item.id === Number(id));

  if (!detail) {
    return (
      <div className="product-not-found">
        <div className="product-not-found-icon">🔍</div>
        <h1>Product Not Found</h1>
        <a href="/products" className="product-details-back">← Back to Products</a>
      </div>
    );
  }

  return (
    <div className="product-details-page">
      <h1 className="product-details-title">Product Details</h1>

      <div className="product-details-card">

        {/* Image */}
        <div className="product-details-image-col">
          <img
            src={detail.image}
            alt={detail.name}
            className="product-details-image"
          />
        </div>

        {/* Product Info */}
        <div className="product-details-info-col">

          <span className="product-details-category">
            {detail.category}
          </span>

          <h2 className="product-details-name">
            {detail.name}
          </h2>

          <p className="product-details-rating">
            ⭐ {detail.rating}
          </p>

          <p className="product-details-price">
            ₹{detail.price.toLocaleString("en-IN")}
          </p>

          <p className="product-details-description">
            {detail.description}
          </p>

          <div className="product-details-actions">
            <button className="btn-cart">
              🛒 Add to Cart
            </button>
            <button className="btn-buynow">
              ⚡ Buy Now
            </button>
          </div>

          <Link to="/products" className="product-details-back">
            ← Back to Products
          </Link>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;