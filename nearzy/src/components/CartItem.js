import Image from "next/image";
import { useCart } from "../context/CartContext";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <Image src={item.image} alt={item.title} fill sizes="80px" />
      </div>

      <div className="cart-item-details">
        <h3 className="cart-item-title">{item.title}</h3>
        <p className="cart-item-price">${item.price}</p>
      </div>

      <div className="quantity-controls">
        <button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="quantity-btn"
        >
          <FiMinus />
        </button>
        <span className="quantity-value">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="quantity-btn"
        >
          <FiPlus />
        </button>
      </div>

      <button onClick={() => removeFromCart(item.id)} className="remove-btn">
        <FiTrash2 />
      </button>
    </div>
  );
};

export default CartItem;
