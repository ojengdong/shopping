import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Nav = (e) => {
    const loginList = ['매장찾기', '고객센터', '가입하기', '로그인']
    const menuList = ['New Releases', 'Men', 'Women', 'Kids', 'sale', 'SNKRS', '나이키 앱']
    
    const navigate = useNavigate();
    const goToLogin = (index) => {
        navigate('/login')
    }    

    // onKeyPress 유저가 키를 눌렀을 때 발생한다.
    // alt, ctrl, shift, ESC onKeyPress가 먹지 않는다.
    // Enter (조건문)
    const [enter, setEnter] = useState("")
    const search = (e) => {
        if(e.key === 'Enter') {
            let value = e.target.value
            // value ===  ?
            console.log(value)
        }
    }
    
    const heart = <FontAwesomeIcon icon={faHeart} />
    const shopping = <FontAwesomeIcon icon={faCartShopping} />
  return (
    <div>
        <div className='login'>
            <ul>
                {loginList.map((item,i, index)=>{
                    if( i === loginList.length - 1 ){
                        return  <li className='login-item' key={i} onClick={goToLogin}>{item}</li>
                    }else {
                        return <li className='login-item' key={i}>{item}</li>
                    }
                })}
            </ul>
        </div>
        <div className='nav'>
            <Link to='/'>
            <img src="https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202004/23/b7510090-6f79-48f8-a096-65437ecf33f2.jpg" alt="logo" />
            </Link>
            <ul className='gnb-list'>
                {menuList.map((menu,i)=>{
                    return <li className='gnb-item' key={i}>{menu}</li>
                })}
            </ul>
            <div className='icon-list'>
                <div className='search-box'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input type="text" placeholder='검색' onKeyPress={search} />
                </div>
                <div className='icon-box'>
                <p>{heart}</p>
                <p>{shopping}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nav