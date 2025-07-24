import React from 'react'

const ItemCards = (props) => {
  return (
    <>
    <div className="itemCards">
        <div className="itemImg"><img src={props.images ? props.image : "nearzy_logo.png"} alt="" /></div>
        <div className="itemTitle">{props.title}</div>
        <div className="itemSubContainer">
            <div className="itemPrice">₹{props.price}</div>
            <div className="itemAdd"><button>Add</button></div>
        </div>
    </div>
    </>
  )
}

export default ItemCards