'use client'

import React from 'react';
import Project from '../components/Project/Project';
import './globals.css'
import { useState } from 'react';
import Info from '@/components/Info/Info';

export default function Home() {

  const [projectsInfo, setProjectsInfo] = useState([null]);

  return (
    <>
      <Info projectsInfo={projectsInfo} />
      <Project setProjectsInfo={setProjectsInfo} />
    </>
  )
}
