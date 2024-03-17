import React from 'react'
import { BsPatchCheckFill } from "react-icons/bs";
import './experience.css'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container exp-container">
        <div className="exp-frontend">
          <h3>Frontend Development</h3>
          <div className="exp-content">
            <article className="exp-details">
              <BsPatchCheckFill className='exp-details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="exp-details">
              <BsPatchCheckFill className='exp-details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="exp-details">
              <BsPatchCheckFill className='exp-details-icon'/>
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="exp-details">
              <BsPatchCheckFill className='exp-details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="exp-details">
              <BsPatchCheckFill className='exp-details-icon'/>
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="exp-details">
              <BsPatchCheckFill className='exp-details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="exp-backend">
          <h3>Backend Development</h3>
          <div className="exp-content">
          <article className="exp-details">
              <BsPatchCheckFill className='exp-details-icon'/>
              <div>
                <h4>Nodejs</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="exp-details">
              <BsPatchCheckFill className='exp-details-icon'/>
              <div>
                <h4>Mongodb</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="exp-details">
              <BsPatchCheckFill className='exp-details-icon'/>
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="exp-details">
              <BsPatchCheckFill className='exp-details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="exp-details">
              <BsPatchCheckFill className='exp-details-icon'/>
              <div>
                <h4>MySql</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
