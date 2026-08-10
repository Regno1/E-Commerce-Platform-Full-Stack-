import { createContext, useEffect, useState, useCallback } from "react";
import toast from "react-hot-toast";
import * as cartApi from "../api/cartApi";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);

  const isLoggedIn = () => !!localStorage.getItem("token");

  // Fetch cart from backend
  const fetchCart = useCallback(async () => {
    if (!isLoggedIn()) {
      setCart([]);
      return;
    }
    setLoading(true);
    try {
      const res = await cartApi.getCart();
      const items = (res.data.items || []).map((item) => ({
        cartItemId: item.cartItemId,
        id: item.productId,
        name: item.productName,
        image: item.imageUrl,
        price: parseFloat(item.price) || 0,
        qty: item.quantity,
        subTotal: parseFloat(item.subTotal) || 0,
      }));
      setCart(items);
    } catch {
      setCart([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // Re-fetch cart when token changes
  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  // Listen for storage events (login/logout in another tab)
  useEffect(() => {
    const handler = () => fetchCart();
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, [fetchCart]);

  const addToCart = async (product) => {
    if (!isLoggedIn()) {
      toast.error("Please login to add items to cart");
      return;
    }
    try {
      await cartApi.addToCart(product.id);
      toast.success("Added to cart");
      await fetchCart();
    } catch {
      toast.error("Failed to add to cart");
    }
  };

  const increaseQty = async (item) => {
    if (!isLoggedIn()) return;
    try {
      await cartApi.updateCartItem(item.cartItemId, item.qty + 1);
      await fetchCart();
    } catch {
      toast.error("Failed to update quantity");
    }
  };

  const decreaseQty = async (item) => {
    if (!isLoggedIn()) return;
    try {
      if (item.qty <= 1) {
        await cartApi.removeCartItem(item.cartItemId);
      } else {
        await cartApi.updateCartItem(item.cartItemId, item.qty - 1);
      }
      await fetchCart();
    } catch {
      toast.error("Failed to update quantity");
    }
  };

  const removeItem = async (item) => {
    if (!isLoggedIn()) return;
    try {
      await cartApi.removeCartItem(item.cartItemId);
      toast.success("Item removed");
      await fetchCart();
    } catch {
      toast.error("Failed to remove item");
    }
  };

  const clearCartItems = async () => {
    if (!isLoggedIn()) return;
    try {
      await cartApi.clearCart();
      setCart([]);
    } catch {
      toast.error("Failed to clear cart");
    }
  };

  const totalPrice = cart.reduce((total, item) => total + item.qty * item.price, 0);
  const totalItem = cart.reduce((total, item) => total + item.qty, 0);
  const delivery = totalPrice > 1000 ? 0 : 99;
  const gst = totalPrice * 0.18;
  const grandTotal = totalPrice + delivery + gst;

  return (
    <CartContext.Provider
      value={{
        cart,
        loading,
        addToCart,
        increaseQty,
        decreaseQty,
        removeItem,
        clearCartItems,
        fetchCart,
        totalPrice,
        totalItem,
        delivery,
        gst,
        grandTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;