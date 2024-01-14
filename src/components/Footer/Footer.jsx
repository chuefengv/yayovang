'use client'

import React from 'react'
import '../../app/globals.css'
import { Icon } from '@iconify/react';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='under-construciton'>
        <p>WEBSITE UNDER CONSTRUCTION</p>
        <p>MORE COMING SOON</p>
      </div>
      <div className='footer-text'>
        <h1>REACH OUT</h1>
        <h4>NEW YORK, NEW YORK</h4>
      </div>
      <div className='footer-icons'>
        <a href='https://www.instagram.com/yayovang/' target='_blank'>
          <Icon className='icons' icon="iconoir:instagram" />
        </a>
        <a href='mailto:contact@yayovang.com' >
          <Icon className='icons' icon="ic:outline-mail" />
        </a>
      </div>
    </div>
  )
}
