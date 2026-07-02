import { useState } from "react";
import { CartContext } from "../Context/CartContext";

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(product, quantity) {
    if (cart.some((item) => item.product.id === product.id)) {
      setCart(
        cart.map((item) => {
          if (item.product.id === product.id) {
            return {
              product: item.product,
              quantity: item.quantity + quantity,
            };
          } else {
            return item;
          }
        })
      );
    } else {
      setCart([...cart, { product, quantity }]);
    }
  }
  function decreaseQuantity(productId) {
    const item = cart.find((item) => item.product.id === productId);
    if (!item) return;
    if (item.quantity === 1) {
      deleteFromCart(productId);
      return;
    }
    setCart(
      cart.map((item) => {
        return item.product.id === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item;
      })
    );
  }
  function increaseQuantity(productId) {
    setCart(
      cart.map((item) => {
        return item.product.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      })
    );
  }

  function deleteFromCart(productId) {
    setCart(cart.filter((item) => item.product.id !== productId));
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        decreaseQuantity,
        increaseQuantity,
        deleteFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
