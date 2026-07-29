
import { useOutletContext, useSearchParams } from "react-router-dom";
import product from "../../components/products/product";
import ProductCard from "../../components/products/ProductCard";

const Products = () => {
   const {search=""} = useOutletContext();
   const [searchParams]= useSearchParams();
   const query= searchParams.get("search")|| "";
   const filterdProducts= product.filter((item)=>{
     return item
     .name
     .toLowerCase()
     .includes(query.toLowerCase())
   
 })
  return (
  
    
     <section className="featured-section">
      <div className="section-header">
        <span className="section-label">Hand-Picked For You</span>
        <h2 className="section-title">All Products</h2>
        <p className="section-subtitle">Explore our Products</p>
      </div>
    <div className="grid grid-cols-4 gap-6"> 
   {filterdProducts.map((item)=>{
    return<ProductCard key={item.name} product={item}/>
   })}
    </div>
     </section>
    
  );
};

export default Products;