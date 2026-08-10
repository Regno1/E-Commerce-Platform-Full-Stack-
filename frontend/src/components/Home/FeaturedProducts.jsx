import { useEffect, useState } from "react";
import { getProducts } from "../../api/productApi";
import ProductCard from "../products/ProductCard";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const res = await getProducts({
          page: 0,
          size: 8,
          sortBy: "rating",
          direction: "desc",
        });
        setProducts(res.data.content || []);
      } catch {
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchFeatured();
  }, []);

  if (loading) {
    return (
      <section className="featured-section">
        <div className="section-header">
          <span className="section-label">Hand-Picked For You</span>
          <h2 className="section-title">Featured Products</h2>
          <p className="section-subtitle">Explore our best-selling and most-loved products</p>
        </div>
        <div className="loader-container" style={{ minHeight: "30vh" }}>
          <div className="spinner"></div>
        </div>
      </section>
    );
  }

  if (products.length === 0) return null;

  return (
    <section className="featured-section">
      <div className="section-header">
        <span className="section-label">Hand-Picked For You</span>
        <h2 className="section-title">Featured Products</h2>
        <p className="section-subtitle">Explore our best-selling and most-loved products</p>
      </div>

      <div className="products-grid">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;