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
            <li><FontAwesomeIcon icon={ faLinkedin } /></li>
            <li><FontAwesomeIcon icon={ faGithub } /></li>
            <li><FontAwesomeIcon icon={ faEnvelope } /></li>
            <li><FontAwesomeIcon icon={ faInstagram } /></li>
            <li><FontAwesomeIcon icon={ faFacebook } /></li>

            {/* <li>Resume VV</li> */}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Contact