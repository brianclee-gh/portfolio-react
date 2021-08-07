import React from 'react'
import { FontAwesomeIcon } from '../../node_modules/@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram, faFacebook} from '../../node_modules/@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '../../node_modules/@fortawesome/free-regular-svg-icons';

const Contact = () => {
  return (
    <section id='contact'>
      <div id='contact-container'>
        <div id='contact-title'>
          {/* <h1>Contact Me</h1> */}
        </div>
        <div id='contact-me-container'>
          <ul id='contact-me' className='list'>
            <li><a className='linkedin-footer' href="https://www.linkedin.com/in/brian-lee-548606193/"><FontAwesomeIcon icon={ faLinkedin } /></a></li>
            <li><a className='github-footer' href="https://github.com"><FontAwesomeIcon icon={ faGithub } /></a></li>
            <li><a className='email-footer' href="mailto:blee0613@gmail.com"><FontAwesomeIcon icon={ faEnvelope } /></a></li>
            {/* <li><a className='instagram-footer' href="https://instagram.com"><FontAwesomeIcon icon={ faInstagram } /></a></li> */}

            {/* <li>Resume VV</li> */}
          </ul>
          <span id="contact-name">Brian Christopher Lee, 2021</span>
        </div>
      </div>
    </section>
  )
}

export default Contact