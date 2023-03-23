import React from 'react'

const ProductCard = ({menu}, i) => {
  return (
    <div className='card-Box'>
        <img src={menu.img} alt="" />
        <div className='choice-item'>{menu.choice === true ? "Best" : ""}</div>
        <div>{menu.title}</div>
        <div>{menu.price}</div>
        <div className='new-item'>{menu.new === true ? "신상" : ""}</div>
  </div>
  )
}

export default ProductCard