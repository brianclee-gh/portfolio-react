import cubePhoto from '../data/images/projects/cube.png'
import atelierPhoto from '../data/images/projects/atelier.png'
import wellnessPhoto from '../data/images/projects/wellness.png'
import tictactoePhoto from '../data/images/projects/tictactoe.png'
import todoListPhoto from '../data/images/projects/todolist.png'
import wowPhoto from '../data/images/projects/wow.png'

const projectData = [
  {
    title: 'Shopping Retail Portal',
    imageSrc: cubePhoto,
    linkAlt: 'CUBE product page',
    description: 'Modernized retail product website',
    ghLink: 'https://github.com/brianclee-gh/cube',
    techs: [
      'React',
      'Node.js',
      'Express',
      'AWS'
    ]
  },
  {
    title: 'RESTful API',
    imageSrc: atelierPhoto,
    linkAlt: 'Atelier image',
    description: 'A RESTful API built to serve product data for an e-commerce shopping site.',
    ghLink: 'https://github.com/brianclee-gh/atelier',
    techs: [
      'PostgreSQL',
      'Node.js',
      'Express',
      'AWS',
      'NGINX',
      'Loader.io'
    ]
  },
  {
    title: 'Healthcare Portal',
    imageSrc: wellnessPhoto,
    linkAlt: 'Unlocking Wellness image',
    description: `A health-care web and mobile app that allows patients to find and assemble
      a team of providers who are specially trained to care for marginalized communities and people groups.`,
    ghLink: 'https://github.com/brianclee-gh/wellness',
    techs: [
      'PostgreSQL',
      'Express',
      'React.js',
      'Next.js',
      'Node.js',
      'AWS',
      'NGINX',
      'Firebase',
      'Google Maps API',
      'Yelp API',
      'Loader.io'
    ]
  },
  {
    title: 'MinMax Tic Tac Toe',
    imageSrc: tictactoePhoto,
    linkAlt: 'Tic Tac Toe photo',
    description: `Play with your friend, a randomized computer, or a computer that can't lose!`,
    ghLink: 'https://github.com/brianclee-gh/tictactoe-minmax',
    techs: [
      'Javascript',
    ]
  },
  {
    title: 'To-Do List',
    imageSrc: todoListPhoto,
    linkAlt: 'To Do List photo',
    description: `Add, manage and keep track of all the things you need to get done!`,
    ghLink: 'https://github.com/brianclee-gh/todo_list',
    techs: [
      'Javascript',
    ]
  },
  {
    title: 'World of Warcraft Site',
    imageSrc: wowPhoto,
    linkAlt: 'WoW photo',
    description: `See weekly affixes and prepare before heading into your favorite dungeons with
    included routes, tips and tricks, and recommended items!`,
    ghLink: 'https://github.com/brianclee-gh/wow-mplus',
    techs: [
      'React',
      'Webpack',
      'Babel',
      'Raider.io API',
      'MaterialUI'
    ]
  },
]

export default projectData;