import { useContext } from "react"
import CartContext from "../../context/CartContext"

const Cart = () => {
  const {cart,
        increaseQty,
        decreaseQty, 
        totalPrice,
        totalItem,
        Delivary,
        grandTotal,} = useContext(CartContext);
  if(cart.length===0){
    return <h1>Cart is Empty</h1>
  } 
  return <div className="min-h-screen bg-gray-100 py-10 px-6">
    <div className="max-w-5xl mx-auto">
      <h1>Shopping Cart</h1>
    </div>
     {cart.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex items-center justify-between mb-6"
        >
          <div className="flex items-center gap-6">
            <img
              src={item.image}
              alt={item.name}
              className="w-32 h-32 object-cover rounded-xl"
            />

            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                {item.name}
              </h2>

              <p className="text-green-600 text-xl font-bold mt-2">
                ₹{item.price}
              </p>

              <p className="text-gray-500 mt-2">
                Quantity:
                
              </p>
            </div>
          </div>
          <button 
          className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition" 
          onClick={()=>increaseQty(item)}
          >+</button>
          
          
          <span className="font-bold text-black ml-2">
                  {item.qty}
                </span>
          
          
          <button 
          className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition"
          onClick={()=> decreaseQty(item)}
          >
            -
          </button>
        </div>
      ))}
    <div>
      <h1>Total Items:{totalItem}</h1>
      <h1>Total:{totalPrice}</h1>
      <h1>Delivery:{Delivary}</h1>
      <h1>GrandTotal:{Math.round(grandTotal)}</h1>
      <button className="bg-amber-400 text-blue-300">Proceed To Checkout</button>
    </div>
  </div> 
  
  
  
}

export default Cart