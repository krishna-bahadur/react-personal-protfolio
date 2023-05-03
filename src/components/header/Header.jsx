import React from 'react'
import './header.css'
import CTA from './CTA'
import krishna from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Krishna Bahadur</h1>
        <h5 className='text-light'>.NET Developer</h5>
        
        <CTA/>
        <HeaderSocial/>

        <div className="me">
          <img src={krishna} alt="krishna" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header