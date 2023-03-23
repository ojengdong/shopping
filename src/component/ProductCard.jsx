import React from 'react'

const ProductCard = ({menu}) => {
  return (
    <div className='card-Box'>
        <img src={menu.img} alt="" />
        <div className='choice-item'>{menu.choice === true ? "베스트샐러" : ""}</div>
        <div>{menu.title}</div>
        <div>{menu.price}</div>
        <div>{menu.new === true ? "신제품" : ""}</div>
  </div>
  )
}

export default ProductCard