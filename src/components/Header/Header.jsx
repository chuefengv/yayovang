import React from 'react'

export default function Header() {
  return (
    <div className='header'>

      <a href='/'>
        <div className='header-logo-wrapper'>
          <img src='../icon.ico' alt='logo for yayo vang' loading='lazy'/>
        </div>  
      </a>

      <a href='/'>
        <div className='header-title'>
          <h1>YAYO VANG</h1>
          <h2>DIRECTOR OF PHOTOGRAPHY</h2>
        </div>
      </a>
      
    </div>
  )
}
