import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { FaInstagram } from 'react-icons/fa'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact-container">
        <div className="contact-options">
          <article className='contact-option'>
            <MdOutlineEmail className='contact-option-icon'/>
            <h4>Email</h4>
            <h3>kishore.sai207@gmail.com</h3>
            <a href="mailto:kishore.sai207@gmail.com" target='_blank'>Send a Message</a>
          </article>
          <article className='contact-option'>
            <BsWhatsapp className='contact-option-icon'/>
            <h4>WhatsApp</h4>
            <h3>+9502908883</h3>
            <a href="https://web.whatsapp.com/" target='_blank'>Send a Message</a>
          </article>
          <article className='contact-option'>
            <FaInstagram className='contact-option-icon'/>
            <h4>Instagram</h4>
            <h3>kishore.sai207@gmail.com</h3>
            <a href="" target='_blank'>Send a Message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" cols="30" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
