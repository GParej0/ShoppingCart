import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
export default function Cart() {
  const { cart, decreaseQuantity, increaseQuantity, deleteFromCart } =
    useContext(CartContext);
  const totalAmount = cart.reduce((acc, item) => {
    return acc + item.product.price * item.quantity;
  }, 0);

  return (
    <>
      <div className="cart-container">
        {cart.map((item) => {
          return (
            <div className="cart-item" key={item.id}>
              <img src={item.product.image} alt="Jewerely" />
              <h3>{item.product.title}</h3>
              <p>
                {item.product.price} € x {item.quantity} Total:
                <strong>{item.product.price * item.quantity} €</strong>
              </p>
              <button onClick={() => decreaseQuantity(item.product.id)}>
                -
              </button>
              <button onClick={() => increaseQuantity(item.product.id)}>
                +
              </button>
              <button onClick={() => deleteFromCart(item.product.id)}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
      <div className="totalamount">
        {totalAmount === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <p>
            Your total is <strong>{totalAmount} €</strong>
          </p>
        )}
      </div>
    </>
  );
}
