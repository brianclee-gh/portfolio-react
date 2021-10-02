import React from 'react'
import projectData from '../data/projectData'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <section id='projects'>
      <div id='projects-container'>
        <div id='projects-title'>
          <h1>Projects</h1>
        </div>
        { projectData
          ?
            <div class='row'>
              {projectData.map((project) => <ProjectCard project={project} />) }
            </div>
          : ''
        }
      </div>
    </section>
  )
}

export default Projects