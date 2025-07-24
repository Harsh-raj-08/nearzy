import React from 'react'

const CategoryCard = (props) => {
  return (
    <>
    <div className="categoryCardContainer">
        <div className="categoryContainer">
            <img src={props.img} alt={props.img} />
        </div>
        <h4>{props.title}</h4>
    </div>
    </>
  )
}

export default CategoryCard