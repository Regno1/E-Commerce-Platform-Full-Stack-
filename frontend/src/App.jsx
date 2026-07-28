import { BrowserRouter ,Routes ,Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Products from "./pages/Products/Products"
import ProductDetails from "./pages/ProductDetails/ProductDetails"
import Cart from "./pages/Cart/Cart"
import Wishlist from "./pages/Wishlist/Wishlist"
import Checkout from "./pages/Checkout/Checkout"
import Register from "./pages/Register/Register"
import Login from "./pages/Login/Login"
import Orders from "./pages/Orders/Orders"
import Profile from "./pages/Profile/Profile"
import Admin from "./pages/Admin/Admin"
import NotFound from "./pages/NotFound/NotFound"
import Layout from "./components/layout/Layout"
import { CartProvider } from "./context/CartContext"
import { WlistProvider } from "./context/WishlistContext"


const App = () => {
  return (
    <CartProvider>
      <WlistProvider>
<BrowserRouter>
   <Routes>
    <Route element={<Layout/>}> 

    
   <Route path="/" element={<Home />} />
   <Route path="/products"  element={<Products />} />
   <Route path="/products/:id" element={<ProductDetails />} />
   <Route path="/cart" element={<Cart />} />
   <Route path="/wishlist" element={<Wishlist/>}/>
   <Route path="/checkout" element={<Checkout/>}/>
   
   <Route path="/orders" element={<Orders/>} />
   <Route path="/profile" element={<Profile />} />
   <Route path="/admin" element={<Admin />} />
  
   </Route>
   <Route path="/register" element={<Register/>}/>
   <Route path="/login" element={<Login/>} />
    <Route path="*" element={<NotFound />}/>
   </Routes>
   
   </BrowserRouter>
      </WlistProvider>

    </CartProvider>
   
    
  )
}

export default App