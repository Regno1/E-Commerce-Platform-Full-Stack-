import { Link, useParams } from "react-router-dom";
import { useContext } from "react";

import product from "../../components/products/product.js";
import CartContext from "../../context/CartContext";
import WishlistContext from "../../context/WishlistContext";

const ProductDetails = () => {
  const { id } = useParams();

  const { addToCart } = useContext(CartContext);
  const { addToList } = useContext(WishlistContext);

  const detail = product.find(
    (item) => item.id === Number(id)
  );

  if (!detail) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-center">
        <div className="text-[4rem]">🔍</div>

        <h1 className="font-['Outfit'] text-2xl font-black text-[#d4724a]">
          Product Not Found
        </h1>

        <Link
          to="/products"
          className="inline-flex items-center gap-1 text-[#4d5d7a] text-sm font-bold hover:text-[#ed8a63]"
        >
          ← Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] py-10 px-12 max-w-[1200px] mx-auto bg-[#f5f0eb]">

      {/* Title */}
      <h1 className="font-['Outfit'] text-[clamp(1.6rem,2.5vw,2.2rem)] font-black text-[#1e2028] text-center mb-8">
        Product Details
      </h1>

      {/* Card */}
      <div className="bg-white rounded-3xl shadow-lg flex flex-col md:flex-row overflow-hidden">

        {/* Image */}
        <div className="flex-1 flex justify-center items-center bg-[#f7f2ee] p-10">
          <img
            src={detail.image}
            alt={detail.name}
            className="max-w-[350px] w-full object-contain hover:scale-105 duration-300"
          />
        </div>

        {/* Details */}
        <div className="flex-1 p-10">

          <span className="inline-block px-4 py-1 rounded-full bg-[#3a4660] text-white text-xs font-bold mb-4">
            {detail.category}
          </span>

          <h2 className="text-4xl font-black mb-3">
            {detail.name}
          </h2>

          <p className="mb-3">
            ⭐ {detail.rating}
          </p>

          <p className="text-3xl font-black text-[#845007] mb-5">
            ₹{detail.price.toLocaleString("en-IN")}
          </p>

          <p className="text-gray-600 leading-7 mb-8">
            {detail.description}
          </p>

          <div className="flex flex-wrap gap-4">

            {/* Cart */}
            <button
              onClick={() => addToCart(detail)}
              className="px-6 py-3 bg-[#3a4660] text-white rounded-lg hover:bg-[#2b3448]"
            >
              🛒 Add to Cart
            </button>

            {/* Buy */}
            <button
              className="px-6 py-3 bg-[#ed8a63] text-white rounded-lg hover:bg-[#d4724a]"
            >
              ⚡ Buy Now
            </button>

            {/* Wishlist */}
            <button
              onClick={() => addToList(detail)}
              className="px-6 py-3 border-2 border-[#845007] text-[#845007] rounded-lg hover:bg-[#845007] hover:text-white"
            >
              ♡ Add to Wishlist
            </button>

          </div>

          <Link
            to="/products"
            className="inline-block mt-8 text-[#4d5d7a] font-bold hover:text-[#ed8a63]"
          >
            ← Back to Products
          </Link>

        </div>

      </div>
    </div>
  );
};

export default ProductDetails;