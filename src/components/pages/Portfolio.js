// activites 13 and 14 for event handling
// activities 9 and 10

// parent of project component

import React from 'react';
import projects from '../Project'

export default function Portfolio() {

  return (
    <div>
      <h2>Portfolio</h2>
      <section>
        {projects.map((project) => (
          <div>
            <h3>{`${project.title}`}</h3>
            <a href={project.link}>
              <img src={project.image} alt={project.alt} />
            </a>
          </div>
        ))}
      </section>
    </div>
  );
}


