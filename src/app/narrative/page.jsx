'use client'

import React from 'react';
import { useState } from 'react';
import Project from '@/components/Project/Project';
import Info from '@/components/Info/Info';
import '../../app/globals.css'

import { projectlist } from '@/app/projectlist';

export default function Home() {

  const [projectsInfo, setProjectsInfo] = useState(projectlist[projectlist.length - 1]);
  const projectType = "NARRATIVE";

  return (
    <>
      <Info projectsInfo={projectsInfo} setProjectsInfo={setProjectsInfo}/>
      <Project setProjectsInfo={setProjectsInfo} projectType={projectType} />
    </>
  )
}
