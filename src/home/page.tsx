import React from "react";
import Navbar from "../components/navbar";
import Searchbar from "../components/SearchBar";
import Categories from "../components/Categories";
import ItemRow from "../components/ItemRow";

export default function page() {
  return (
    <>
      <Navbar />
      <Searchbar />
      <div className="filterContainer">
        <button>
          <img src="shop.png" /> Shops
        </button>
        <button>
          <img src="service.png" /> Services
        </button>
      </div>
      <div className="mainContainer">
        <Categories />
        <ItemRow title="Fashion and Style" />
        <ItemRow title="Grocery" />
        <ItemRow title="Trending" />
        <ItemRow title="Electronics" />
      </div>
    </>
  );
}
