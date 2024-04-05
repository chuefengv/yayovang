'use client'

import React from 'react';
import Project from '../components/Project/Project';
import './globals.css'
import { useState } from 'react';
import Info from '@/components/Info/Info';
import { projectlist } from '@/app/projectlist';


export default function Home() {

  const [projectsInfo, setProjectsInfo] = useState(projectlist[projectlist.length - 1]);

  return (
    <>
      <Info projectsInfo={projectsInfo} setProjectsInfo={setProjectsInfo}/>
      <Project setProjectsInfo={setProjectsInfo} />
    </>
  )
}
