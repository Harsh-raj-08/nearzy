import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { FiShoppingCart, FiLogOut, FiSearch } from "react-icons/fi";

const Header = () => {
  const { currentUser, logout } = useAuth();
  const { getCartCount } = useCart();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };

  
  return (
    <header className="header">
      <div className="header-content">
        <Link href="/home" className="logo">
          NearZy
        </Link>

        <div className="search-container">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search products..."
              className="search-input"
            />
            <FiSearch className="search-icon" />
          </div>
        </div>

        <div className="nav-items">
          <Link href="/cart" className="cart-icon">
            <FiShoppingCart />
            {getCartCount() > 0 && (
              <span className="cart-badge">{getCartCount()}</span>
            )}
          </Link>

          {currentUser ? (
            <div className="user-info">
              <span>{currentUser.email}</span>
              <button onClick={handleLogout} className="logout-btn">
                <FiLogOut />
              </button>
            </div>
          ) : (
            <div className="flex space-x-2">
              <Link href="/login" className="btn btn-secondary">
                Login
              </Link>
              <Link href="/signup" className="btn btn-primary">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
