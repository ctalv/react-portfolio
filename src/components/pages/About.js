// insert photo
// const src = require('../../assets/images/headshot.JPG')

import React from 'react';
import headshot from '../../assets/images/headshot.JPG' 

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <img src={headshot} />
      <p>
        My passion has always been science. From a young age, I spent all my time outside
        exploring the natural world. As I grew older, I began developing an interest in 
        video games and learning about computers. It was not until I took a college course
        in the MATLAB coding language that I realized coding is my thing. 

        I am a recent graduate from the University of Houston with a BS in Biology. 
        In August of 2023, I completed a Full Stack Web Development course from Rice
        University's Glassock School of Continuing Education.

        Currently, I am looking for a role in an entry level front end or back end 
        web development position. 
      </p>
    </div>
  );
}
