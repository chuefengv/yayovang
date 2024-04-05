'use client'
import React from 'react'
import "../../app/globals.css"
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export default function demoreel() {
    const URL = "https://vimeo.com/836371548"

  return (
    <div className='demoreel'>
        <div className='video-wrapper'>
            <ReactPlayer 
                className='react-player'
                width='100%'
                height='100%'
                controls={true}
                url={URL}
            />
        </div>
    </div>
  )
}
