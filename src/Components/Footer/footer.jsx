import React from 'react'
import './footer.css'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer-logo">Kishore</a>
      <ul className="perma-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Experience</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className='footer-socials'>
        <a href="https://instagram.com/kishoresai_g" target='_blank'><FiInstagram/></a>
        <a href="https://github.com/kishoresai8883" target='_blank'><FaGithub/></a>
        <a href="https://twitter.com/Sai207Sai" target='_blank'><IoLogoTwitter/></a>
      </div>
      <div className="footer-copyright">
        <small>&copy; Kishore. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
