import React from 'react';
import Card from '../helpers/Card';
import skillsData from '../data/skillsData';

const Skills = () => {

  const cards = () => {
    return skillsData.map((data, i) => {
      return <Card key={i} data={data} />
    })
  };

  return (
    <section id='skills'>
      <div id='skills-container'>
        <div id='skills-title'>
          <h1>Skills</h1>
        </div>
        <ul id='skills-list'>
          {cards()}
        </ul>
      </div>
    </section>
  )
}

export default Skills