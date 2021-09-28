import js from './images/js.svg';
import html from './images/html.svg';
import css from './images/css.svg';
import sass from './images/sass.jpg';
import react from './images/react.png';
import jquery from './images/jquery.png';
import node from './images/node.png';
import firebase from './images/firebase.png';
import mongodb from './images/mongodb.png';
import webpack from './images/webpack.svg';

import git from './images/git.png';
import npm from './images/npm.png';
import jest from './images/jest.png';
import heroku from './images/heroku.png';

const skillsData = [
  {
    title: 'Front End',
    items: {
      'React/Redux': react,
      Javascript: js,
      HTML: html,
      CSS: css,
      SCSS: sass,
      jQuery: jquery,
      'Next.js': '',
    }
  },
  {
    title: 'Back End',
    items: {
      'Node.js': node,
      'Express': ``,
      Firebase: firebase,
      MongoDB: mongodb,
      PostgreSQL: '',
      Mongoose: '',
    }
  },
  {
    title: 'Deployment',
    items: {
      Docker: '',
      AWS: '',
      Vercel: '',
      NGINX: '',
    }
  },
  {
    title: 'Other',
    items: {
      Git: git,
      npm: npm,
      Jest: jest,
      Webpack: webpack,
      Heroku: heroku
    }
  }
]

export default skillsData;