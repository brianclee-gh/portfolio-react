import js from './images/skills/js.svg';
import html from './images/skills/html.svg';
import css from './images/skills/css.svg';
import sass from './images/skills/sass.jpg';
import react from './images/skills/react.svg';
import nextjs from './images/skills/nextjs.svg';
import jquery from './images/skills/jquery.png';

import node from './images/skills/node.png';
import express from './images/skills/express.png';
import firebase from './images/skills/firebase.png';
import mongodb from './images/skills/mongodb.png';
import postgres from './images/skills/postgres.svg';
import webpack from './images/skills/webpack.svg';
import mysql from './images/skills/mysql.svg';

import docker from './images/skills/docker.png';
import aws from './images/skills/aws.svg';
import vercel from './images/skills/vercel.png';
import nginx from './images/skills/nginx.png';

import git from './images/skills/git.png';
import npm from './images/skills/npm.png';
import jest from './images/skills/jest.png';
import heroku from './images/skills/heroku.png';

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
      'Next.js': nextjs,
    }
  },
  {
    title: 'Back End',
    items: {
      'Node.js': node,
      'Express': express,
      Firebase: firebase,
      MongoDB: mongodb,
      PostgreSQL: postgres,
      MySQL: mysql,
      // Mongoose: '',
    }
  },
  {
    title: 'Deployment',
    items: {
      Docker: docker,
      AWS: aws,
      Vercel: vercel,
      NGINX: nginx,
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