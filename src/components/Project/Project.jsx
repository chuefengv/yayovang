'use client'
import React, { useState } from 'react'
import "../../app/globals.css"
import { projectlist } from '@/app/projectlist';
import "../../../node_modules/react-modal-video/scss/modal-video.scss"
import ModalVideo from 'react-modal-video'

export default function Project(setProjectsInfo) {

  const [isOpen, setOpen] = useState(false)
  const [videoId,setVideoId] = useState(" ")

  const getVideo = (project) =>{
    setVideoId(project.video)
    if(project.video !== " "){
      setOpen(true)
      setProjectsInfo.setProjectsInfo(project.name)
    }
  }

  return (
    <div className='project'>
        {/* <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={videoId} onClose={()=>setOpen(false)} /> */}

        {projectlist.map((project, index) => {
          return (
            <div className='project-wrapper' key={index} onClick={()=>getVideo(project)}>
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