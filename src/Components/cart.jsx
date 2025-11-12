import { useState, useEffect } from "react";
import { getCart, removeFromCart, clearCart } from "../utils/cartUtil";
import "../styles/cart.css";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(getCart());
  }, []);

  const handleRemove = (id) => {
    const updated = removeFromCart(id);
    setCart(updated);
  };

  const handleClear = () => {
    clearCart();
    setCart([]);
  };

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <p>El carrito está vacío 🛒</p>
      </div>
    );
  }

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2 className="cart-title">🛍️ Tu carrito</h2>
      <ul className="cart-list">
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} className="cart-image" />
            <div className="cart-info">
              <h4>{item.title}</h4>
              <p>${item.price} × {item.quantity}</p>
            </div>
            <button className="remove-btn" onClick={() => handleRemove(item.id)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      <div className="cart-footer">
        <h3>Total: ${total.toFixed(2)}</h3>
        <button className="clear-btn" onClick={handleClear}>Vaciar carrito</button>
      </div>
    </div>
  );
}

export default Cart;
