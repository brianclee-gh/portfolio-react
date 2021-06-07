import './App.css';
import Header from './components/Header';
import Intro from './components/Intro';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

import { FontAwesomeIcon } from '../node_modules/@fortawesome/react-fontawesome';
import { faArrowUp } from '../node_modules/@fortawesome/free-solid-svg-icons';

function App() {

  const handleScroll = () => {
    const scrollToTopBtn = document.querySelectorAll('.scrollToTopBtn')[0];
    let rootElement = document.documentElement;
    let scrollTotal = (rootElement.scrollHeight - rootElement.clientHeight);
    if ((rootElement.scrollTop / scrollTotal) > 0.30) {
      scrollToTopBtn.classList.add('showBtn');
      scrollToTopBtn.style.opacity = 1;
    } else {
      scrollToTopBtn.classList.remove('showBtn');
      scrollToTopBtn.style.opacity = 0;
    }
  }

  const scrollToTop = () => {
    // Scroll to top logic
    let rootElement = document.documentElement;
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  document.addEventListener('scroll', handleScroll);

  return (
    <div className="App">
      <Header />
      <Intro />
      <AboutMe />
      <button className="scrollToTopBtn" onClick={ scrollToTop }>
        <FontAwesomeIcon icon={ faArrowUp } />
      </button>
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
