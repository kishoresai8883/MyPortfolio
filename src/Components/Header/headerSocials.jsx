import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import './header.css'

const HeaderSocials = () => {
  return (
    <div className='header-socials'>
      <a href="https://linkedin.com/in/kishore-sai" target='__blank'><BsLinkedin/></a>
      <a href="https://github.com/kishoresai8883" target='__blank'><FaGithub/></a>
      <a href="https://instagram.com/kishoresai_g" target='__blank'><FaInstagram/></a>
    </div>
  )
}

export default HeaderSocials
