import React from 'react';
import { FontAwesomeIcon } from '../../node_modules/@fortawesome/react-fontawesome';
import { faBars } from '../../node_modules/@fortawesome/free-solid-svg-icons';

function Slideout() {

  const toggleMenu = () => {
    const menu = document.getElementById('slideout-menu');
    document.body.classList.toggle('body-overflow');
    menu.classList.toggle('hide-menu');
  }

  return (
    <>
      <div id='menu-container'>
          <div
            className='burger-menu'
            onClick={ toggleMenu }
          >
            <FontAwesomeIcon icon={ faBars } />
          </div>

          <ul id="slideout-menu" className="hide-menu">
            <button
              id="close-slideout"
              onClick={ toggleMenu }
            > X
            </button>
            <a href="#top" onClick={ toggleMenu }>HOME</a>
            <a href="#aboutme" onClick={ toggleMenu }>ABOUT</a>
            <a href="#skills" onClick={ toggleMenu }>SKILLS</a>
            <a href="#projects" onClick={ toggleMenu }>PROJECTS</a>
            <a href="#resume" onClick={ toggleMenu }>RESUME</a>
          </ul>

      </div>
    </>
  )
}

export default Slideout