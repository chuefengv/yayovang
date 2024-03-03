'use client'
import React, { useState } from 'react'
import "../../app/globals.css"
import { projectlist } from '@/app/projectlist';
import "../../../node_modules/react-modal-video/scss/modal-video.scss"
import ModalVideo from 'react-modal-video'

export default function Project(props) {

  const [isOpen, setOpen] = useState(false)
  const [videoId,setVideoId] = useState(" ")

  const getProject = (project) =>{

    props.setProjectsInfo(project)
    props.setIsExpanded(true)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  }

  return (
    <div className='project'>

        {projectlist.map((project, index) => {
          return (
            <div className='project-wrapper' key={index} onClick={()=>getProject(project)}>
                <div className='image-wrapper'>
                  <img src={project.image[0]} alt={project.name} loading='lazy'/>
                  <div className="image-title">
                      <h4>{project.name}</h4>
                  </div>
                </div>
            </div>
          )
        })}

    </div>
  );
}