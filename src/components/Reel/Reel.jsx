'use client'
import React, { useState } from 'react'
import "../../app/globals.css"
import { projectlist } from '@/app/projectlist';
import "../../../node_modules/react-modal-video/scss/modal-video.scss"
import ModalVideo from 'react-modal-video'

export default function Reel() {

  const [isOpen, setOpen] = useState(false)
  const [videoId,setVideoId] = useState(" ")

  const getVideo = (videoid) =>{
    setVideoId(videoid)
    if(videoid){
      setOpen(true)
    }
  }

  return (
    <div className='reel'>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={videoId} onClose={()=>setOpen(false)} />

        {projectlist.map((project, index) => {
          return (
            <div className='project-wrapper' key={index} onClick={()=>(project.video?getVideo(project.video):null)}>
                <div className='image-wrapper'>
                  <img src={project.image[2]} alt={project.name} loading='lazy'/>
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