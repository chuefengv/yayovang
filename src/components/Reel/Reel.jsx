'use client'
import React, { useState } from 'react'
import "../../app/globals.css"
import { projectlist } from '@/app/projectlist';

export default function Reel() {

  const [genre, setGenre] = useState(['Music Video','Narrative','Commercial'])
  
  function FilterGenre(newGenre){
    if(genre === newGenre){
      setGenre(['Music Video','Narrative','Commercial'])
    } else
    setGenre(newGenre)
  }

  return (
    <div className='reel'>

      <div className='genre-tabs'>
        <div onClick={()=>FilterGenre("Narrative")}>Narrative</div>
        <div onClick={()=>FilterGenre("Music Video")}>Music Video</div>
        <div>Commercial</div>
      </div>
      
      <div className='project-wrapper'>
        
        {projectlist.map((project, index) => {
          if (genre.includes(project.type))
          
          return (
            <div className='project' key={index}>
              {/* <img src={project.image[0]} alt={project.name} /> */}
              <div className='project-info'>
                <div className='project-title'>{project.name}</div>
                <div className='project-type'>{project.type}</div>
                <div className='project-director'>{project.director}</div>
              </div>
            </div>
          )
        })}

      </div>

    </div>
  );
}