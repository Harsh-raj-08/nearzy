import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import CategoryBar from "../components/CategoryBar";
import ProductCard from "../components/ProductCard";
import FilterSort from "../components/FilterSort";
import { fetchProducts, fetchProductsByCategory } from "../lib/api";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("");
  const [priceRange, setPriceRange] = useState(1000);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, [selectedCategory]);

  useEffect(() => {
    applyFiltersAndSort();
  }, [products, sortBy, priceRange]);

  const loadProducts = async () => {
    setLoading(true);
    try {
      let data;
      if (selectedCategory === "all") {
        data = await fetchProducts();
      } else {
        data = await fetchProductsByCategory(selectedCategory);
      }
      setProducts(data);
    } catch (error) {
      console.error("Error loading products:", error);
    } finally {
      setLoading(false);
    }
  };

  const applyFiltersAndSort = () => {
    let filtered = products.filter((product) => product.price <= priceRange);

    if (sortBy) {
      filtered.sort((a, b) => {
        switch (sortBy) {
          case "price-asc":
            return a.price - b.price;
          case "price-desc":
            return b.price - a.price;
          case "rating":
            return (b.rating?.rate || 0) - (a.rating?.rate || 0);
          case "title":
            return a.title.localeCompare(b.title);
          default:
            return 0;
        }
      });
    }

    setFilteredProducts(filtered);
  };

  if (loading) {
    return (
      <Layout>
        <div className="loading">Loading products...</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <CategoryBar
        onCategorySelect={setSelectedCategory}
        selectedCategory={selectedCategory}
      />

      <div className="container py-8">
        <FilterSort
          onSortChange={setSortBy}
          onPriceFilter={setPriceRange}
          sortBy={sortBy}
          priceRange={priceRange}
        />

        <div className="grid grid-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-8">
            <p>No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </Layout>
  );
}
