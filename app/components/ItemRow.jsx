"use client"
import React, { useEffect,useState } from 'react'
import ItemCards from './ItemCards'

const ItemRow = (props) => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=10')
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            setData(data)
          })
      }, [])
  return (
    <>
    <div className="items">

      <h2>{props.title}</h2>
      <div className="itemRow">
          {
              data.map((e)=>{
                  return <ItemCards key={e.id} img={e.images[0]} title={e.title} price={e.price} />
              })
          }
      </div>
    </div>
    </>
  )
}

export default ItemRow