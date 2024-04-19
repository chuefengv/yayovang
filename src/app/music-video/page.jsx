'use client'
import React from 'react';
import { useState } from 'react';
import Project from '@/components/Project/Project';
import Info from '@/components/Info/Info';
import '../../app/globals.css'
import { projectlist } from '@/app/projectlist';

export default function Home() {
  //State variable used to store the project information.
  //The initial value is set to the last project in the projectlist array, which is an empty project object.
  const [projectsInfo, setProjectsInfo] = useState(projectlist[projectlist.length - 1]);
  const projectType = "MUSIC VIDEO";

  return (
    <>
      <Info projectsInfo={projectsInfo} setProjectsInfo={setProjectsInfo}/>
      <Project setProjectsInfo={setProjectsInfo} projectType={projectType}/>
    </>
  )
}
