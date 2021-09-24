import React from 'react';

const ProjectCard = ({ project }) => {
  return (<div className='project-card'>
    <div className='project-card-img'>
      <img
          className='portfolio-img'
          src={ project.imageSrc }
          alt={ project.linkAlt }
      />
    </div>
    <div className='project-card-desc'>
      <h3>{ project.title }</h3>
      <p>{ project.description }</p>
      <ul>
      { project.techs ? project.techs.map((tech) => <li>{tech}</li>) : ''}
      </ul>
      <a href={project.ghLink} alt={project.linkAlt}>
        <button className='project-btn'>See Project on Github</button>
      </a>
    </div>
  </div>)
}

export default ProjectCard;
