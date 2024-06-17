import React from 'react'
import './footer.css'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer-logo">Kishore</a>
      <ul className="perma-links">
        <li><a href="home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className='footer-socials'>
        <a href="https://instagram.com/kishoresai_g" target='_blank' rel="noreferrer"><FiInstagram/></a>
        <a href="https://github.com/kishoresai8883" target='_blank' rel="noreferrer"><FaGithub/></a>
        <a href="https://twitter.com/Sai207Sai" target='_blank' rel="noreferrer"><IoLogoTwitter/></a>
      </div>
      <div className="footer-copyright">
        <small>&copy; Kishore. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
