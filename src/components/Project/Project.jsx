'use client'
import React,{useState} from 'react'
import "../../app/globals.css"
import { projectlist } from '@/app/projectlist';
import "../../../node_modules/react-modal-video/scss/modal-video.scss"
import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function Project(props) {

  //Function to change the slide index to 0 when the user clicks on a project
  const changeSlideToIndex0 = () => {
    if(document.querySelector('.mySwiper2')!==null){
      const swiper = document.querySelector('.mySwiper2').swiper;
      swiper.slideTo(0);
    }

  }

  //Function to get the project information and set it in the projectsInfo state
  const getProject = (project) =>{
    props.setProjectsInfo(project)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    changeSlideToIndex0()
  }

  return (
    <div className='project'>

      <div className='project-type-section'>
        {props.projectType}
      </div>

        {/* The project-layout div contains a list of project images that are displayed based on the projectType prop. */}
        <div className='project-layout'>
          {projectlist.map((project, index) => {
            return (
              //Check if the project type matches the projectType prop, if it does, display the project
              project.type===props.projectType?
              <div className='project-image-wrapper' key={index} onClick={()=>getProject(project)} style={{ backgroundImage: `url(${project.smallImage})` }}>
                <img src={project.image[0]} alt={project.name} loading='lazy'/>
                <div className="project-image-title">
                    <h4>{project.name}</h4>
                </div>
              </div>:null
            )
          })}
        </div>

        {/* The nav-button-wrapper div contains two navigation buttons that allow the user to navigate between the music video and narrative projects. */}
        <div className='nav-button-wrapper'>
          <Link href='/demoreel'>
            <div className='nav-button'>
              <Icon className='icon' icon="la:angle-left" />
              <p>REEL</p>
            </div>
          </Link>
          <Link href={props.projectType === 'MUSIC VIDEO'?'/narrative':'/music-video'}>
            <div className='nav-button'>
              {props.projectType === 'MUSIC VIDEO' ? <p>NARRATIVE</p> : <p>MUSIC VIDEO</p>}
              <Icon className='icon' icon="la:angle-right" />
            </div>
          </Link>
        </div>

    </div>
  );
}