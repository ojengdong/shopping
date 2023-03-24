import React from 'react'
import { Navigate } from 'react-router-dom'
import { useState } from 'react'
import ProductDetail from '../page/ProductDetail'
import Login from '../page/Login'

// useNavigate (React Hook중에 하나)
// React Hook규칙
// 조건문, 반복문에서 useNavigate를 사용할 수 없다.
// Navigate

// 조건부 렌더링
// userLogin이 true라면 <ProducDetail/>를 보여주고 
// userLogin이 false라면 Login 페이지로 이동
const PrivateRoute = ({userLogin}) => {
  return (
    userLogin === true ? <ProductDetail/> : <Navigate to='./login'/>
  )
}


export default PrivateRoute