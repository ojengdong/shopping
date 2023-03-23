import React from 'react'


const Login = () => {
  return (
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
        <button className='Login-sub-btn'>계속</button>
      </div>
    </div> 
  )
}

export default Login