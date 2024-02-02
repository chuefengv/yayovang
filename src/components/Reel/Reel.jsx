'use client'
import React from 'react'
import "../../app/globals.css"
import { projectlist } from '@/app/projectlist';

export default function Reel() {
  const URL = 'https://player.vimeo.com/video/836371548?h=551c266867';

  return (
    <div className='reel'>

      <div className='genre-tabs'>
        <div>Narrative</div>
        <div>Commercial</div>
        <div>Music Videos</div>
      </div>
      
      <div className='project-wrapper'>
        {projectlist.map((project) => (
          <div key={project.id} className='project'>
            <h2>{project.name}</h2>
            <p>Director: {project.director}</p>
            <p>Producer: {project.producer}</p>
            {/* <img src={project.image[0]} alt={project.name} /> */}
          </div>
        ))}
      </div>

    </div>
  );
}