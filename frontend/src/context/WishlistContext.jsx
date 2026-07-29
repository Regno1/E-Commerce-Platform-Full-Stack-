import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const WishlistContext = createContext();

export const WlistProvider = ({ children }) => {
  const [wList, setWList] = useState(() => {
    const savedList = localStorage.getItem("list");
    return savedList ? JSON.parse(savedList) : [];
  });

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(wList));
  }, [wList]);

  // Add to Wishlist
  const addToList = (product) => {
    toast.success("Added to Wishlist")
    const existingProduct = wList.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      return;
    }

    setWList([
      ...wList,
      product,
    ]);
  };

  // Remove from Wishlist
  const removeFromWishList = (product) => {
    toast.error("removes from Wishlist")
    const updatedList = wList.filter(
      (item) => item.id !== product.id
    );

    setWList(updatedList);
  };

  return (
    <WishlistContext.Provider
      value={{
        wList,
        addToList,
        removeFromWishList,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistContext;