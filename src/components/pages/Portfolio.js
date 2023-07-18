// activites 13 and 14 for event handling
// activities 9 and 10

// parent of project component

import React from 'react';
import projects from '../Project'

const styles = {
  portfolioStyle: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'min-content'
  },
  projectStyle: {
    position: 'relative',
    // backgroundColor: '#f6f7e5',
    padding: '3px',
    margin: '7px',
  },
  projectImageStyle: {
    display: 'block',
    objectFit: 'cover',
    width: '100%',
    height: '300px',
  },
  projectHeadingStyle: {
    position: 'absolute',
    background: 'rgba(0, 0, 0, 0.5)',
    color: '#f6f7e5',
    width: '75%',
    fontSize: '20px',
    textAlign: 'center',
  }
};

export default function Portfolio() {

  return (
    <div>
      <h2>Portfolio</h2>
      <section style={styles.portfolioStyle}>
        {projects.map((project) => (
          <div style={styles.projectStyle}>
            <h3 style={styles.projectHeadingStyle} >{`${project.title}`}</h3>
            <a href={project.link}>
              <img src={project.image} alt={project.alt} style={styles.projectImageStyle} />
            </a>
          </div>
        ))}
      </section>
    </div>
  );
}


