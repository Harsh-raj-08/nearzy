import { useState } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

export default function Checkout() {
  const [orderData, setOrderData] = useState({
    address: "",
    city: "",
    postalCode: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [loading, setLoading] = useState(false);
  const { cart, getCartTotal, clearCart } = useCart();
  const { currentUser } = useAuth();
  const router = useRouter();

  const handleInputChange = (e) => {
    setOrderData({
      ...orderData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate payment processing
    setTimeout(() => {
      alert("Order placed successfully!");
      clearCart();
      router.push("/home");
      setLoading(false);
    }, 2000);
  };

  if (!currentUser) {
    router.push("/login");
    return null;
  }

  if (cart.length === 0) {
    router.push("/cart");
    return null;
  }

  return (
    <Layout>
      <div className="checkout-page">
        <h1 className="checkout-title">Checkout</h1>

        <div className="checkout-layout">
          <form onSubmit={handleSubmit} className="checkout-form">
            <div className="form-section">
              <h2 className="section-title">Shipping Information</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  name="address"
                  placeholder="Street Address"
                  value={orderData.address}
                  onChange={handleInputChange}
                  required
                  className="input"
                />
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={orderData.city}
                  onChange={handleInputChange}
                  required
                  className="input"
                />
                <input
                  type="text"
                  name="postalCode"
                  placeholder="Postal Code"
                  value={orderData.postalCode}
                  onChange={handleInputChange}
                  required
                  className="input"
                />
              </div>
            </div>

            <div className="form-section">
              <h2 className="section-title">Payment Information</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number"
                  value={orderData.cardNumber}
                  onChange={handleInputChange}
                  required
                  className="input"
                />
                <div className="form-row">
                  <input
                    type="text"
                    name="expiryDate"
                    placeholder="MM/YY"
                    value={orderData.expiryDate}
                    onChange={handleInputChange}
                    required
                    className="input"
                  />
                  <input
                    type="text"
                    name="cvv"
                    placeholder="CVV"
                    value={orderData.cvv}
                    onChange={handleInputChange}
                    required
                    className="input"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary w-full"
            >
              {loading
                ? "Processing..."
                : `Place Order - $${getCartTotal().toFixed(2)}`}
            </button>
          </form>

          <div className="order-summary">
            <h2 className="section-title">Order Summary</h2>
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="order-item">
                  <span>
                    {item.title} × {item.quantity}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="order-total">
                <span>Total:</span>
                <span className="total-price">
                  ${getCartTotal().toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
