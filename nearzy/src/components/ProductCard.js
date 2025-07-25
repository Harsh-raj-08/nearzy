import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import { FiShoppingCart, FiStar } from "react-icons/fi";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <Link href={`/product/${product.id}`} className="product-card">
      <div className="product-image">
        <Image src={product.image} alt={product.title} fill sizes="250px" />
      </div>

      <h3 className="product-title">{product.title}</h3>

      <div className="product-rating">
        <FiStar className="rating-star" />
        <span className="rating-text">
          {product.rating?.rate || 0} ({product.rating?.count || 0})
        </span>
      </div>

      <div className="product-footer">
        <span className="product-price">${product.price}</span>
        <button onClick={handleAddToCart} className="add-to-cart-btn">
          <FiShoppingCart />
          <span>Add</span>
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
