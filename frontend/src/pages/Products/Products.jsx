
import { useSearchParams } from "react-router-dom";
import product from "../../components/products/product";
import ProductCard from "../../components/products/ProductCard";
import { useState } from "react";

const Products = () => {
   const [searchParams]= useSearchParams();
   

   const [sortBy, setSortBy] = useState("featured");
   
   
   const category= searchParams.get("category")|| "";
  
   const query= searchParams.get("search")|| "";
   
   
   const filterdProducts= product.filter((item)=>{
     const matchSearch=item
     .name
     .toLowerCase()
     .includes(query.toLowerCase());

     const matchCategory=
     category==="All" || item.category ===category || category===""; 
   
     return matchSearch && matchCategory;
 }) 

 const sortedProduct= [...filterdProducts];
 
 if (sortBy === "lowToHigh") {
  sortedProduct.sort((a,b)=>a.price-b.price);
}

if (sortBy === "highToLow") {
  sortedProduct.sort((a,b)=>b.price-a.price);
}
if(sortBy==="rating"){
  sortedProduct.sort((a,b)=>b.rating-a.rating);
}if(sortBy==="name"){
  sortedProduct.sort((a,b)=>a.name.localeCompare(b.name))
}

const [currentPage, setcurrentPage] = useState(1);

const productsPerPage=8;
const totalPAge=Math.ceil(sortedProduct.length/8);

const PageNumber=Array.from(
  {length:totalPAge},
  (_,index)=>index+1);

const startIndex=(currentPage-1)* productsPerPage;
const endIndex=startIndex+productsPerPage;

const currentProduct=sortedProduct.slice(
  startIndex,endIndex
);
  return (
    <div>
<section className="sorting" 
   
>
     <select value={sortBy}
  onChange={(e)=>{
  setSortBy(e.target.value);
  }}

  >
 
  <option value={"lowToHigh"}>Price: Low to High</option>
  <option value={"highToLow"}>Price: High to Low</option>
  <option value={"rating"}>Rating</option>
  <option value={"name"}>Name (A-Z)</option>
</select>
    </section>
    
     <section className="featured-section">
      <div className="section-header">
        <span className="section-label">Hand-Picked For You</span>
        <h2 className="section-title">All Products</h2>
        <p className="section-subtitle">Explore our Products</p>
      </div>
    <div className="grid grid-cols-4 gap-6"> 
   {currentProduct.map((item)=>{
    return<ProductCard key={item.name} product={item}/>
   })}
    </div>
     </section>
     <section >
      <button 
        onClick={()=>{
          if(currentPage>1){
setcurrentPage(currentPage-1); 
          }
          
        }}
        >Previous</button>
      {PageNumber.map((item)=>{
        return  <button key={item}  onClick={()=>{
          setcurrentPage(item);
        }}>{item}</button>
        
        
        
      })}
      <button   onClick={()=>{
        if(currentPage<totalPAge){
setcurrentPage(currentPage+1); 
          }
          
        }}>Next</button>
        
      

     </section>
    </div>
    
    
  );
};

export default Products;