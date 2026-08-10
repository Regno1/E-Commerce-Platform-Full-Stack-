import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";
import WishlistContext from "../../context/WishlistContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { addToList } = useContext(WishlistContext);

  const price =
    typeof product.price === "number"
      ? product.price
      : parseFloat(product.price) || 0;

  const image = product.imageUrl || product.image;

  return (
    <div className="product-card">
      <div className="product-card-image-wrap">
        <span className="product-card-badge">🔥 Hot Deal</span>
        <Link to={`/products/${product.id}`}>
          <img src={image} alt={product.name} />
        </Link>
      </div>

      <div className="product-card-body">
        <h3 className="product-card-name">{product.name}</h3>
        {product.rating && (
          <p className="product-card-rating">⭐ {product.rating}</p>
        )}
        <p className="product-card-price">
          ₹{price.toLocaleString("en-IN")}
        </p>
        <button
          className="product-card-btn"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
        <button
          className="product-card-wishlist-btn"
          onClick={() =>
            addToList({
              ...product,
              image: image,
              price: price,
            })
          }
        >
          ♡ Add to Wishlist
        </button>
      </div>
    </div>
  );
};

export default ProductCard;