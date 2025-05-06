import Image from "next/image";
import Navbar from "./components/navbar"
import Searchbar from "./components/searchbar"
import FilterCategory from "./components/filterCategory"
export default function Home() {
  return (
    <>
    <Navbar/>
    <Searchbar/>
    <FilterCategory/>
    </>
  );
}
