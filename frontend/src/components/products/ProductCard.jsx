import { useContext } from "react"
import CartContext from "../../context/CartContext"

const ProductCard = ({product}) => {
const {cart,setCart,addToCart}= useContext(CartContext)
  


    
  
return <div 
className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:translate-y-2 transition-all duration-300 overflow-hidden cursor-pointer">
    
    
    <img src={product.image} alt={product.name}
    className="w-full h-56 object-cover"
    />
    <div className="p-4">
     <h1 className="text-xl font-semibold">
      {product.name}
      </h1>
    <p 
    className="text-yellow-500 font-medium mt-2">
      ⭐{product.rating}</p>
    <p 
    className="text-2xl font-bold text-green-600 mt-2">
       ₹{product.price}</p>
    <button 
    className="mt-5 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition" onClick={()=>{
    addToCart(product);
    }}>
      Add to Cart</button>
    </div>
    
  </div>

}

export default ProductCard