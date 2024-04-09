'use client'

import './globals.css'
import Link from 'next/link';
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export default function Home() {
  const URL = "https://vimeo.com/836371548"

  return (
    <div className='homepage'>

        <div className='video-wrapper'>
          <Link href='/demoreel'>
              <div className='demo-reel-text'>
                <h1>DEMO REEL</h1>
              </div>
          </Link>
          <img src='https://yayovangprojects.s3.amazonaws.com/images/img4_5.webp' loading='lazy'/>
        </div>


        <div className='project-nav-wrapper'>
          <Link href='/narrative'>
            <div className='project-nav-option'>
              <img src='https://yayovangprojects.s3.amazonaws.com/images/img5_4.webp' loading='lazy'/>
              <div className='project-nav-option-text' id='narrative'>
                <h1>NARRATIVE VIDEOS</h1>
              </div>
            </div>
          </Link>
          <Link href='/music-video'>
            <div className='project-nav-option'>
                <img src='https://yayovangprojects.s3.amazonaws.com/images/img9_4.webp' loading='lazy'/>
                <div className='project-nav-option-text' id='music-video'>
                  <h1>MUSIC VIDEOS</h1>
                </div>
            </div>
          </Link>
        </div>

    </div>
  )
}
