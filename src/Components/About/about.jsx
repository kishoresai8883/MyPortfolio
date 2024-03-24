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
              <small>6+ Worldwide</small>
            </article>
            <article className='about-card'>
              <VscFolderLibrary className='about-icon'/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
            I specialize in crafting responsive websites and dynamic web applications 
            using HTML, CSS, JavaScript, React.js, Node.js, and more. 
            With expertise in front-end and back-end development, 
            I create seamless user experiences and robust server-side solutions. 
            Explore my projects including e-commerce platforms, portfolio websites, 
            and task management apps, showcasing my skills in design, development, 
            and integration. Let's connect and bring your digital ideas to life! 
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
