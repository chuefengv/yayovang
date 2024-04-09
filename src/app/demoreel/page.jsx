'use client'
import React from 'react'
import "../../app/globals.css"
import dynamic from "next/dynamic";
import Link from 'next/link';
import { Icon } from '@iconify/react';
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export default function demoreel() {
    const URL = "https://vimeo.com/836371548"

  return (
    <div className='demoreel'>
      
      <h1>REEL</h1>

      <div className='demo-video-wrapper'>
        <ReactPlayer
          url={URL}
          playing={false}
          controls={true}
          width='100%'
          height='100%'
          light={true}
        />
      </div>

      <div className='nav-button-wrapper'>
        <Link href='/music-video'>
          <div className='nav-button'>
            <Icon className='icon' icon="la:angle-left" />
            <p>MUSIC VIDEOS</p>
          </div>
        </Link>
        <Link href='/narrative'>
          <div className='nav-button'>
            <p>NARRATIVE VIDEOS</p>
            <Icon className='icon' icon="la:angle-right" />
          </div>
        </Link>
      </div>

    </div>
  )
}
