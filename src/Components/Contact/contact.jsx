import React, { useRef } from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { FaLinkedin } from "react-icons/fa";
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_ssisb0j', 'template_vdtkj1n', form.current, 
        'btfhpEzLPD46s9T8q',
      );
    e.target.reset();
  };

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
            <a href="mailto:kishore.sai207@gmail.com" target='_blank' rel="noreferrer">Send a Message</a>
          </article>
          <article className='contact-option'>
            <BsWhatsapp className='contact-option-icon'/>
            <h4>WhatsApp</h4>
            <h3>+91 9502908883</h3>
            <a href="https://web.whatsapp.com/" target='_blank' rel="noreferrer">Send a Message</a>
          </article>
          <article className='contact-option'>
            <FaLinkedin className='contact-option-icon'/>
            <h4>Linkedin</h4>
            <h3>https://linkedin.com/in/kishore-sai</h3>
            <a href="https://linkedin.com/in/kishore-sai" target='_blank' rel="noreferrer">Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
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
