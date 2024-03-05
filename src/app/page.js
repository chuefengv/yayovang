'use client'

import React from 'react';
import Project from '../components/Project/Project';
import './globals.css'
import { useState } from 'react';
import Info from '@/components/Info/Info';
import { projectlist } from '@/app/projectlist';


export default function Home() {

  const [projectsInfo, setProjectsInfo] = useState(projectlist[12]);
  const [openFlag, setOpenFlag] = useState(false);

  return (
    <>
      <Info projectsInfo={projectsInfo} openFlag={openFlag} />
      <Project setProjectsInfo={setProjectsInfo} setOpenFlag={setOpenFlag} />
    </>
  )
}
