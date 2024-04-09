'use client'
import React,{useState} from 'react'
import "../../app/globals.css"
import { projectlist } from '@/app/projectlist';
import "../../../node_modules/react-modal-video/scss/modal-video.scss"
import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function Project(props) {

  const getProject = (project) =>{
    props.setProjectsInfo(project)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    changeSlideToIndex0()
  }

  const changeSlideToIndex0 = () => {
    if(document.querySelector('.mySwiper2')!==null){
      const swiper = document.querySelector('.mySwiper2').swiper;
      swiper.slideTo(0);
    }

  }

  return (
    <div className='project'>

      <div className='project-type-section'>
        {props.projectType}
      </div>

        <div className='project-layout'>
          {projectlist.map((project, index) => {
            return (
              project.type===props.projectType?
              <div className='image-wrapper' key={index} onClick={()=>getProject(project)} style={{ backgroundImage: `url(${project.smallImage})` }}>
                <img src={project.image[0]} alt={project.name} loading='lazy'/>
                <div className="image-title">
                    <h4>{project.name}</h4>
                </div>
              </div>:null
            )
          })}
        </div>

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