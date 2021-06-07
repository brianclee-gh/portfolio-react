import React from 'react';
import wallpaper from '../data/images/wallpaper_2.png';
import { FontAwesomeIcon } from '../../node_modules/@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '../../node_modules/@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '../../node_modules/@fortawesome/free-regular-svg-icons';

const Intro = () => {
  return (
    <section id='intro'>
      <div id='intro-container'>
        <div className='wrapper'>
          <img className='background-image' src={ wallpaper } alt='background'></img>
          <div id='social-btns'>
            <a href="https://linkedin.com" alt="linkedin" className='social-btn' id='linkedin'>
              <FontAwesomeIcon icon={ faLinkedin } />
            </a>
            <a href="https://github.com/brianclee-gh/" alt="github" className='social-btn' id='github'>
              <FontAwesomeIcon icon={ faGithub } />
            </a>
            <a href="mailto:blee0613@gmail.com" alt="email" className='social-btn' id='email'>
              <FontAwesomeIcon icon={ faEnvelope } />
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Intro