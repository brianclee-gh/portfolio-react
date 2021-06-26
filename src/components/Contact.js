import React from 'react'
import { FontAwesomeIcon } from '../../node_modules/@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram, faFacebook} from '../../node_modules/@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '../../node_modules/@fortawesome/free-regular-svg-icons';

const Contact = () => {
  return (
    <section id='contact'>
      <div id='contact-container'>
        <div id='contact-title'>
          <h1>Contact Me</h1>
        </div>
        <div id='contact-me-container'>
          <ul id='contact-me' className='list'>
            <li><a href="https://linkedin.com"><FontAwesomeIcon icon={ faLinkedin } /></a></li>
            <li><a href="https://github.com"><FontAwesomeIcon icon={ faGithub } /></a></li>
            <li><a href="mailto:blee0613@gmail.com"><FontAwesomeIcon icon={ faEnvelope } /></a></li>
            <li><a href="https://instagram.com"><FontAwesomeIcon icon={ faInstagram } /></a></li>
            <li><a href="https://facebook.com"><FontAwesomeIcon icon={ faFacebook } /></a></li>

            {/* <li>Resume VV</li> */}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Contact