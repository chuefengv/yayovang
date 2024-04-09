'use client'

import React from 'react'
import '../../app/globals.css'
import { Icon } from '@iconify/react';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer-text'>
        <h1>CONTACT ME:</h1>
        <p>YAYO VANG</p>
        <p>NEW YORK, NEW YORK</p>
      </div>
      <div className='footer-icon'>
        <a href='mailto:contact@yayovang.com'>
          <Icon icon="mdi-light:email" />
        </a>
        <a href='https://www.instagram.com/yayovang/' target='_blank'>
          <Icon icon="openmoji:instagram" />
        </a>
      </div>
      <div className='copyright'>
        <p>© 2021 YAYO VANG</p>
      </div>
    </div>
  )
}
