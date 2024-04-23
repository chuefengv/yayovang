'use client'
import React from 'react'
import "../../app/globals.css"
import dynamic from "next/dynamic";
import Link from 'next/link';
import { Icon } from '@iconify/react';
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export default function demoreel() {
    const URL = "https://www.youtube.com/watch?v=KrEekJPrAds&ab_channel=YayoDP"

  return (
    <div className='demoreel'>
      <h1>REEL</h1>
      <div className='demoreel-video-wrapper'>
        <ReactPlayer
          url={URL}
          playing={false}
          controls={true}
          width='100%'
          height='100%'
          light='https://yayovangprojects.s3.amazonaws.com/images/reel_thumbnail.webp'
        />
      </div>

      <div className='nav-button-wrapper'>
        <Link href='/music-video'>
          <div className='nav-button'>
            <Icon className='icon' icon="la:angle-left" />
            <p>MUSIC VIDEO</p>
          </div>
        </Link>
        <Link href='/narrative'>
          <div className='nav-button'>
            <p>NARRATIVE</p>
            <Icon className='icon' icon="la:angle-right" />
          </div>
        </Link>
      </div>

    </div>
  )
}
