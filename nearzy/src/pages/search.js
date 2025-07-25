// src/pages/search.js
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import { fetchProducts } from "../lib/api";

export default function Search() {
  const router = useRouter();
  const { q } = router.query; // Search query param: ?q=searchterm

  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Load all products once
  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const products = await fetchProducts();
        setAllProducts(products);
      } catch (error) {
        console.error("Failed to load products:", error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  // Filter products based on search query
  useEffect(() => {
    if (!q) {
      setFilteredProducts([]);
      return;
    }
    const filtered = allProducts.filter((product) =>
      product.title.toLowerCase().includes(q.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [q, allProducts]);

  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-8">
          Search Results for: <span className="text-primary">{q}</span>
        </h1>

        {loading && <p>Loading products...</p>}

        {!loading && filteredProducts.length === 0 && (
          <p>No products found matching your search.</p>
        )}

        <div className="grid grid-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
