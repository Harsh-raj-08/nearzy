import Layout from "../components/Layout";
import CartItem from "../components/CartItem";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/router";

export default function Cart() {
  const { cart, getCartTotal, clearCart } = useCart();
  const router = useRouter();

  const handleCheckout = () => {
    router.push("/checkout");
  };

  if (cart.length === 0) {
    return (
      <Layout>
        <div className="cart-page">
          <div className="empty-cart">
            <h2 className="empty-cart-title">Your cart is empty</h2>
            <p className="empty-cart-text">Add some products to get started!</p>
            <button
              onClick={() => router.push("/home")}
              className="btn btn-primary"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="cart-page">
        <h1 className="cart-title">Shopping Cart</h1>

        <div className="cart-layout">
          <div className="cart-items">
            {cart.map((item) => (
              <CartItem key={`${item.id}-${Math.random()}`} item={item} />
            ))}
          </div>

          <div className="cart-summary">
            <h2 className="summary-title">Order Summary</h2>

            <div className="space-y-4 mb-4">
              <div className="summary-row">
                <span>Subtotal:</span>
                <span>${getCartTotal().toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="summary-total">
                <span>Total:</span>
                <span className="total-price">
                  ${getCartTotal().toFixed(2)}
                </span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              className="btn btn-primary w-full mb-4"
            >
              Proceed to Checkout
            </button>

            <button onClick={clearCart} className="btn btn-secondary w-full">
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
