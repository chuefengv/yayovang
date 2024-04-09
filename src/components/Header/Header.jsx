import React from 'react'

export default function Header() {
  return (
    <div className='header'>

      <a href='/'>
        <div className='logo-wrapper'>
          <img src='../icon.ico' alt='logo for yayo vang'/>
        </div>  
      </a>

      <a href='/'>
        <div className='header-wrapper'>
          <h1>YAYO VANG</h1>
          <h2>DIRECTOR OF PHOTOGRAPHY</h2>
        </div>
      </a>
      
    </div>
  )
}
