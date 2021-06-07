import React from 'react';
import { FontAwesomeIcon } from '../../node_modules/@fortawesome/react-fontawesome';
import { faBars } from '../../node_modules/@fortawesome/free-solid-svg-icons';

function Header() {

    return (
        <div id='header' className='box-shadow'>
          <nav id='nav'>
            <div className='header-name'>
              <h3>BRIAN <span>CHRISTOPHER</span> LEE</h3>
            </div>
            <ul className='links'>
              <a href="#top">Home</a>
              <a href="#aboutme">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <li>Resume</li>
              <div className='theme-toggle-container'></div>
            </ul>

            <div className='burger-menu'><FontAwesomeIcon icon={faBars} /></div>
          </nav>
        </div>
    )
}

export default Header
