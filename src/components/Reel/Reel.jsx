'use client'
import React from 'react'
import "../../app/globals.css"
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

export default function Reel() {
  const URL = 'https://player.vimeo.com/video/836371548?h=551c266867';

  return (
    <div className='reel'>
      <div className='reel-wrapper'>
        <ReactPlayer
          className='react-player'
          width='100%'
          height='100%'
          controls={true}
          url={URL}
          light={'https://yayovangprojects.s3.amazonaws.com/img/reel-thumb.jpeg'}
        />
      </div>
    </div>
  );
}