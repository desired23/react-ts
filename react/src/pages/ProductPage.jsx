import React, { useEffect } from 'react'

const ProductPage = (props) => {
  useEffect(() => {
    console.log(props)
    })
  return (
    <div>
      <div><h1>ProductPage</h1>
      {props.products.map(item=>{
        return (<div key={item.id}><h4>{item.name??""}</h4>
        <h4>{item.desc??""}</h4>
        <h4>{item.image??""}</h4></div>)})}</div>
    </div>

  )
}

export default ProductPage