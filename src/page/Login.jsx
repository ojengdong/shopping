import React from 'react'
import {Container, Form} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Login = ({setUserLogin}) => {
  const navigate = useNavigate()

  const loginUser = (e) => {
    // 콘솔이 잠깐 찍혔다가 사라지는 이유
    // : 페이지를 새로고침 하기 때문!
    // 해결방법 : preventDefault로 form이 새로고침 하는걸 막아준다.
    e.preventDefault();
    console.log("loginUser")

    setUserLogin(true);
    navigate('/')
  }

  return (
    <Container>
      {/* onSubmit: type이 submit일 경우 onClick이 아니라 onSubmit을 사용 */}
      {/* form 자체에서 주는 이벤트를 파라미터 값으로 보내줌 */}
    <Form onSubmit={(e) => loginUser(e)}>
    <div className='Login-box'>
      <div className='Login-logo'>
      <img src="https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202004/23/b7510090-6f79-48f8-a096-65437ecf33f2.jpg" alt="" />
      </div>

      <div className='txt-box'>
        <h2>
          가입 또는 로그인을 위해 이메일을 입력하세요
        </h2>
        <select name="" id="">
          <option value="">대한민국</option>
          <option value="">미국</option>
          <option value="">일본</option>
          <option value="">스페인</option>
          <option value="">남아프리카공화국</option>
        </select>
      </div>

      <div className='Login-email-input-box'>
        <p className='Login-email'>이메일</p>
        <input type="text" />
      </div>

      <div className='Login-footer-box'>
        <p>계속 진행하면 나이키의 
          <a href='https://agreementservice.svs.nike.com/rest/agreement?agreementType=privacyPolicy&country=KR&language=ko&requestType=redirect&uxId=4fd2d5e7db76e0f85a6bb56721bd51df' target={'_blank'}>
            개인 정보 처리 방침</a>및 
          <a href="https://agreementservice.svs.nike.com/rest/agreement?agreementType=termsOfUse&country=KR&language=ko&requestType=redirect&uxId=4fd2d5e7db76e0f85a6bb56721bd51df" target={'_blank'}>
            이용약관</a>에 동의하게 됩니다. </p>
      </div>
      
      <div className='Login-sub-btn-box'>
        <button type='submit' className='Login-sub-btn'>계속</button>
      </div>
    </div> 
    </Form>
    </Container>
  )
}

export default Login