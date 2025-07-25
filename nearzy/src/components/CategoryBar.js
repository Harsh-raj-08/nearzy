import { useState, useEffect } from "react";
import { fetchCategories } from "../lib/api";

const CategoryBar = ({ onCategorySelect, selectedCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadCategories = async () => {
      const data = await fetchCategories();
      setCategories(["all", ...data]);
    };
    loadCategories();
  }, []);

  const formatCategoryName = (category) => {
    if (category === "all") return "All Products";
    return category
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="category-bar">
      <div className="category-content">
        <div className="category-list">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategorySelect(category)}
              className={`category-item ${
                selectedCategory === category ? "active" : ""
              }`}
            >
              {formatCategoryName(category)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryBar;
