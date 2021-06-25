import js from './images/js.svg';
import html from './images/html.svg';
import css from './images/css.svg';

const skillsData = [
  // {
  //   title: 'Languages',
  //   items: {
  //     Javascript: js,
  //     HTML: html,
  //     CSS: css,
  //     SCSS: '',
  //   }
  // },
  {
    title: 'Front End',
    items: {
      Javascript: js,
      HTML: html,
      CSS: css,
      SCSS: '',
      'React/Redux': ``,
      jQuery: ``,

    }
  },
  {
    title: 'Back End',
    items: {
      'Node.js': ``,
      'Express': ``,
      Firebase: ``,
      MongoDB: ``
    }
  },
  {
    title: 'Other',
    items: {
      Git: ``,
      npm: ``,
      Jest: ``,
      Webpack: ``,
      Heroku: ``
    }
  }
]

export default skillsData;