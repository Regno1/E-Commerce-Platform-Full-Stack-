import product from "../../components/products/product";
import ProductCard from "../../components/products/ProductCard";

const Products = () => {
  return (
     <section className="featured-section">
      <div className="section-header">
        <span className="section-label">Hand-Picked For You</span>
        <h2 className="section-title">All Products</h2>
        <p className="section-subtitle">Explore our Products</p>
      </div>
    <div className="grid grid-cols-4 gap-6"> 
   {product.map((item)=>{
    return<ProductCard key={item.name} product={item}/>
   })}
    </div>
     </section>
    
  );
};

export default Products;