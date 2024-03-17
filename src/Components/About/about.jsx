import React from 'react'
import './about.css'
import Me from '../../Assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about-container">
        <div className="about-me">
          <img src={Me} alt="About img" className="about-me-img" />
        </div>
        <div className="about-content">
          <div className="about-cards">
            <article className='about-card'>
              <FaAward className='about-icon'/>
              <h5>Experience</h5>
              <small>1+ Year's Working</small>
            </article>
            <article className='about-card'>
              <FiUsers className='about-icon'/>
              <h5>Clients</h5>
              <small>20+ Worldwide</small>
            </article>
            <article className='about-card'>
              <VscFolderLibrary className='about-icon'/>
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Error, a molestiae? Obcaecati reiciendis excepturi ipsam quas, 
            nobis quo cumque adipisci similique iste architecto eaque officiis, 
            deleniti sint fugiat corporis error?
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
