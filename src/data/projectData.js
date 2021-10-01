import cubePhoto from '../data/images/projects/cube.png'
import atelierPhoto from '../data/images/projects/atelier.png'
import wellnessPhoto from '../data/images/projects/wellness.png'

const projectData = [
  {
    title: 'CUBE',
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
    title: 'Atelier',
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
    title: 'Unlocking Wellness',
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
  }
]

export default projectData;