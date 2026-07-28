import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";
import WishlistContext from "../../context/WishlistContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { addToList } = useContext(WishlistContext);
  
  return (
    <div className="product-card">
      <div className="product-card-image-wrap">
        <span className="product-card-badge">🔥 Hot Deal</span>
        <Link to={`/products/${product.id}`}>
         <img src={product.image} alt={product.name}/>
       
        </Link>
       
      </div>

      <div className="product-card-body ">
        <h3 className="product-card-name">{product.name}</h3>
        <p className="product-card-rating">⭐ {product.rating}</p>
        <p className="product-card-price">₹{product.price.toLocaleString("en-IN")}</p>
        <button
          className="product-card-btn"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
          <button
              onClick={() => addToList(product)}
              className="px-6 py-3 border-2 border-[#845007] text-[#845007] rounded-lg hover:bg-[#845007] hover:text-white"
            >
              ♡ Add to Wishlist
            </button>
      </div>
    </div>
  );
};


export default ProductCard