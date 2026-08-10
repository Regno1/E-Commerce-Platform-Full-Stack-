import { useSearchParams } from "react-router-dom";
import ProductCard from "../../components/products/ProductCard";
import { useState, useEffect } from "react";
import { getProducts } from "../../api/productApi";

const Products = () => {
  const [searchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState("id");
  const [direction, setDirection] = useState("asc");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);

  const category = searchParams.get("category") || "";
  const query = searchParams.get("search") || "";

  useEffect(() => {
    setCurrentPage(0);
  }, [category, query, sortBy, direction]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const params = {
          page: currentPage,
          size: 8,
          sortBy: sortBy,
          direction: direction,
        };
        if (query) params.keyword = query;
        if (category && category !== "All") params.category = category;

        const res = await getProducts(params);
        setProducts(res.data.content || []);
        setTotalPages(res.data.totalPages || 0);
        setTotalElements(res.data.totalElements || 0);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [currentPage, sortBy, direction, category, query]);

  const handleSortChange = (e) => {
    const val = e.target.value;
    if (val === "priceLow") {
      setSortBy("price");
      setDirection("asc");
    } else if (val === "priceHigh") {
      setSortBy("price");
      setDirection("desc");
    } else if (val === "rating") {
      setSortBy("rating");
      setDirection("desc");
    } else if (val === "name") {
      setSortBy("name");
      setDirection("asc");
    } else {
      setSortBy("id");
      setDirection("asc");
    }
  };

  const getSortValue = () => {
    if (sortBy === "price" && direction === "asc") return "priceLow";
    if (sortBy === "price" && direction === "desc") return "priceHigh";
    if (sortBy === "rating") return "rating";
    if (sortBy === "name") return "name";
    return "featured";
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i);

  return (
    <div className="products-page">
      <div className="section-header">
        <span className="section-label">
          {category ? category : "Browse All"}
        </span>
        <h1 className="section-title">
          {category ? `${category}` : "All Products"}
        </h1>
        <p className="section-subtitle">
          {query ? `Results for "${query}"` : "Explore our collection"}
        </p>
      </div>

      <div className="products-toolbar">
        <span className="products-count">
          {totalElements} product{totalElements !== 1 ? "s" : ""} found
        </span>
        <select
          className="products-sort-select"
          value={getSortValue()}
          onChange={handleSortChange}
        >
          <option value="featured">Featured</option>
          <option value="priceLow">Price: Low to High</option>
          <option value="priceHigh">Price: High to Low</option>
          <option value="rating">Rating</option>
          <option value="name">Name (A-Z)</option>
        </select>
      </div>

      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : products.length === 0 ? (
        <div className="placeholder-page">
          <div className="placeholder-icon">🔍</div>
          <h2 className="placeholder-title">No Products Found</h2>
          <p className="placeholder-text">
            Try adjusting your search or filters to find what you're looking for.
          </p>
        </div>
      ) : (
        <>
          <div className="products-grid">
            {products.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="pagination">
              <button
                className="pagination-btn"
                disabled={currentPage === 0}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                ← Prev
              </button>
              {pageNumbers.map((num) => (
                <button
                  key={num}
                  className={`pagination-btn${currentPage === num ? " active" : ""}`}
                  onClick={() => setCurrentPage(num)}
                >
                  {num + 1}
                </button>
              ))}
              <button
                className="pagination-btn"
                disabled={currentPage >= totalPages - 1}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next →
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Products;