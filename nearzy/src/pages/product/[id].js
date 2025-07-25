import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Layout from "../../components/Layout";
import { fetchProductById } from "../../lib/api";
import { useCart } from "../../context/CartContext";
import { FiStar, FiShoppingCart } from "react-icons/fi";

export default function ProductDetail() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  const { id } = router.query;
  const { addToCart } = useCart();

  useEffect(() => {
    if (id) {
      loadProduct();
    }
  }, [id]);

  const loadProduct = async () => {
    try {
      const data = await fetchProductById(id);
      setProduct(data);
    } catch (error) {
      console.error("Error loading product:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    alert("Added to cart!");
  };

  const handleBuyNow = () => {
    handleAddToCart();
    router.push("/cart");
  };

  if (loading) {
    return (
      <Layout>
        <div className="loading">Loading product...</div>
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout>
        <div className="text-center py-8">
          <p>Product not found.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="product-detail">
        <div className="product-layout">
          <div className="product-detail-image">
            <Image src={product.image} alt={product.title} fill sizes="500px" />
          </div>

          <div className="product-info">
            <h1 className="product-detail-title">{product.title}</h1>

            <div className="product-meta">
              <div className="product-rating">
                <FiStar className="rating-star" />
                <span className="rating-text">
                  {product.rating?.rate || 0} ({product.rating?.count || 0}{" "}
                  reviews)
                </span>
              </div>
              <span className="product-category">{product.category}</span>
            </div>

            <p className="product-detail-price">${product.price}</p>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Description</h3>
              <p className="product-description">{product.description}</p>
            </div>

            <div className="quantity-selector">
              <label htmlFor="quantity" className="filter-label">
                Quantity:
              </label>
              <select
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="quantity-select"
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>

            <div className="product-actions">
              <button
                onClick={handleAddToCart}
                className="btn btn-secondary flex align-center"
              >
                <FiShoppingCart style={{ marginRight: "8px" }} />
                Add to Cart
              </button>
              <button onClick={handleBuyNow} className="btn btn-primary">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
