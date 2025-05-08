import React from 'react'
import CategoryCard from "./CategoryCard"
const Categories = () => {
  return (
    <>
      <div className="categoriesContainer">
          <CategoryCard title="grocery" img="grocery.png"/>
          <CategoryCard title="electronics" img="electronics.png"/>
          <CategoryCard title="beauty" img="beauty.png"/>
          <CategoryCard title="home deco" img="home_deco.png"/>
          <CategoryCard title="sports" img="sports.png"/>
          <CategoryCard title="medicine" img="medicine.webp"/>
          <CategoryCard title="stationery" img="stationery.png"/>
          <CategoryCard title="home deco" img="nearzy_logo.png"/>
      </div>
    </>
  )
}

export default Categories