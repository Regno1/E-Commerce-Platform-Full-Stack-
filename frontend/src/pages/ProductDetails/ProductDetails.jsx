import { Link, useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { getProductById } from "../../api/productApi";
import CartContext from "../../context/CartContext";
import WishlistContext from "../../context/WishlistContext";
import { useAuth } from "../../context/AuthContext";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const { addToList } = useContext(WishlistContext);
  const { isAuthenticated } = useAuth();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(false);
      try {
        const res = await getProductById(id);
        setProduct(res.data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="spinner"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="product-not-found">
        <div className="product-not-found-icon">🔍</div>
        <h1>Product Not Found</h1>
        <Link to="/products" className="product-details-back">
          ← Back to Products
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }
    addToCart(product);
  };

  const handleBuyNow = () => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }
    addToCart(product);
    navigate("/checkout");
  };

  const price = typeof product.price === "number"
    ? product.price
    : parseFloat(product.price) || 0;

  return (
    <div className="product-details-page">
      <h1 className="product-details-title">Product Details</h1>

      <div className="product-details-card">
        <div className="product-details-image-col">
          <img
            src={product.imageUrl || product.image}
            alt={product.name}
            className="product-details-image"
          />
        </div>

        <div className="product-details-info-col">
          <span className="product-details-category">
            {product.category}
          </span>

          <h2 className="product-details-name">{product.name}</h2>

          {product.rating && (
            <p className="product-details-rating">
              ⭐ {product.rating}
            </p>
          )}

          <p className="product-details-price">
            ₹{price.toLocaleString("en-IN")}
          </p>

          {product.stock !== undefined && (
            <span
              className={`product-details-stock ${
                product.stock > 0 ? "in-stock" : "out-of-stock"
              }`}
            >
              {product.stock > 0
                ? `✓ In Stock (${product.stock} available)`
                : "✕ Out of Stock"}
            </span>
          )}

          <p className="product-details-description">
            {product.description}
          </p>

          <div className="product-details-actions">
            <button className="btn-cart" onClick={handleAddToCart}>
              🛒 Add to Cart
            </button>
            <button className="btn-buynow" onClick={handleBuyNow}>
              ⚡ Buy Now
            </button>
            <button
              className="btn-wishlist"
              onClick={() => addToList({
                ...product,
                image: product.imageUrl || product.image,
                price: price,
              })}
            >
              ♡ Add to Wishlist
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