import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    toast.success("Added to cart")
    const existingProduct = cart.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            qty: item.qty + 1,
          };
        }

        return item;
      });

      setCart(updatedCart);
    } else {
      setCart([
        ...cart,
        {
          ...product,
          qty: 1,
        },
      ]);
    }
  };

  const increaseQty = (product) => {
    const updatedCart = cart.map((item) => {
      if (item.id === product.id) {
        return {
          ...item,
          qty: item.qty + 1,
        };
      }

      return item;
    });

    setCart(updatedCart);
  };

  const decreaseQty = (product) => {
    if (product.qty === 1) {
      const updatedCart = cart.filter(
        (item) => item.id !== product.id
      );

      setCart(updatedCart);
      return;
    }

    const updatedCart = cart.map((item) => {
      if (item.id === product.id) {
        return {
          ...item,
          qty: item.qty - 1,
        };
      }

      return item;
    });

    setCart(updatedCart);
  };

  const totalPrice = cart.reduce((total, item) => {
    return total + item.qty * item.price;
  }, 0);

  const totalItem = cart.reduce((total, item) => {
    return total + item.qty;
  }, 0);

  const delivery = totalPrice > 1000 ? 0 : 99;
  const gst = totalPrice * 0.18;
  const grandTotal = totalPrice + delivery + gst;

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQty,
        decreaseQty,
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