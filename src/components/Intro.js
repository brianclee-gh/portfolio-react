import React from 'react';
import wallpaper from '../data/images/wallpaper_2.png';
import { FontAwesomeIcon } from '../../node_modules/@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '../../node_modules/@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '../../node_modules/@fortawesome/free-regular-svg-icons';

const Intro = () => {
  return (
    <section id='intro'>
      <div id='intro-container'>
        <div className='img-wrapper'>
          {/* <div id='intro-text'>
            <h1>Hi, I'm Brian!</h1>
          </div> */}

          <img className='background-image' src={ wallpaper } alt='background'></img>
          <div id='social-btns'>
            <a href="https://www.linkedin.com/in/brian-lee-548606193/" alt="linkedin" className='social-btn linkedin' id='linkedin'>
              <FontAwesomeIcon icon={ faLinkedin } />
            </a>
            <a href="https://github.com/brianclee-gh/" alt="github" className='social-btn github' id='github'>
              <FontAwesomeIcon icon={ faGithub } />
            </a>
            <a href="mailto:blee0613@gmail.com" alt="email" className='social-btn email' id='email'>
              <FontAwesomeIcon icon={ faEnvelope } />
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Intro