// pdf download of resume

import React from 'react';
import resume from '../../assets/pdf/resume.pdf'

export default function Resume() {
  return (
    <div>
      <h2>Resume</h2>
      <a href={resume}>Click to download resume!</a>
    </div>
  );
}
