import React from 'react';
import Slideout from '../helpers/Slideout'
import resume from '../data/resume.pdf';

function Header() {

    return (
      <section id='header'>
        <div id='header-container' className='box-shadow'>
          <nav id='nav'>
            <div className='header-name'>
              <h3>BRIAN <span>CHRISTOPHER</span> LEE</h3>
            </div>
            <ul className='links list'>
              <a href="#top">Home</a>
              <a href="#aboutme">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href={resume} download>Resume</a>
              <div className='theme-toggle-container'></div>
            </ul>
            <Slideout />
          </nav>
        </div>
      </section>
    )
}

export default Header
