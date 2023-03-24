import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({menu}, i) => {
  const navigate = useNavigate()
  const showDetail = () => {
    navigate(`/product/${menu.id}`)
  }
  return (
    <div className='card-Box' onClick={showDetail}>
        <img src={menu?.img} alt="" />
        <div className='card-content-list'>
        <div className='choice-item'>{menu.choice === true ? "Best" : ""}</div>
        <div>{menu.title}</div>
        <div className='price-item'>{menu.price}</div>
        <div className='new-item'>{menu.new === true ? "신상" : ""}</div>
        </div>
  </div>
  )
}

export default ProductCard