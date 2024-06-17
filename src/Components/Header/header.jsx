import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../Assets/myImg.jpg'
import HeaderSocials from './headerSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello, I'm</h5>
        <h1>Kishore Sai</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className='me'>
          <img src={Me} alt="my-img" />
        </div>
        <a href="#contact" className="scroll_down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
