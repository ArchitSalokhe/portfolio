

import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';
import Project from './component/Project';
// import '@/css/Project.css';

const Project = () => {
  const { projectName } = useParams();
  const projectDetails = data.project[projectName];

  // if (!projectDetails) {
  //   return <div>Project not found</div>;
  // }

  return (
    <main className='proj'>
      <Project projectDetails={projectDetails} />
    </main>
  );
};

export default Project;