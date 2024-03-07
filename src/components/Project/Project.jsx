'use client'
import React from 'react'
import "../../app/globals.css"
import { projectlist } from '@/app/projectlist';
import "../../../node_modules/react-modal-video/scss/modal-video.scss"

export default function Project(props) {

  const getProject = (project) =>{
    props.setProjectsInfo(project)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    props.setOpenFlag(true)
    changeSlideToIndex0()
  }

  const changeSlideToIndex0 = () => {
    const swiper = document.querySelector('.mySwiper2').swiper;
    swiper.slideTo(0);
  }
  

  return (
    <div className='project'>
      <div className='project-type-section'>Narratives</div>

      <div className='project-layout'>
          {projectlist.map((project, index) => {
            return (
              project.type==="Narrative"?<div className='image-wrapper' key={index} onClick={()=>getProject(project)}>
                    <img src={project.image[0]} alt={project.name} loading='lazy'/>
                    <div className="image-title">
                        <h4>{project.name}</h4>
                    </div>
              </div>:null
            )
          })}
      </div>

      <div className='project-type-section'>Music Videos</div>

        <div className='project-layout'>
          {projectlist.map((project, index) => {
            return (
              project.type==="Music Video"?<div className='image-wrapper' key={index} onClick={()=>getProject(project)}>
                    <img src={project.image[0]} alt={project.name} loading='lazy'/>
                    <div className="image-title">
                        <h4>{project.name}</h4>
                    </div>
              </div>:null
            )
          })}
      </div>
    </div>
  );
}