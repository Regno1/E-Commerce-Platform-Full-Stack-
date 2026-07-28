import Product from "../products/product.js";
import ProductCard from "../products/ProductCard";

const FeaturedProducts = () => {
  
  return (

    <section className="featured-section">
      <div className="section-header">
        <span className="section-label">Hand-Picked For You</span>
        <h2 className="section-title">Featured Products</h2>
        <p className="section-subtitle">Explore our best-selling and most-loved products</p>
      </div>

      <div className="products-grid">
        {Product.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;