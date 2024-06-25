import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import data from '../data.json';
// import { scrollAnimation } from '../lib/scrollAnimation';
import { BsArrowRight } from 'react-icons/bs';
import '../css/Projects.css';
// import Projects from './Projects';

function Projects() {
  const allProjects = data.allProjects;
  const navigate = useNavigate();

  // useEffect(() => {
  //   scrollAnimation();
  // }, []);

  return (
    <section id='projects' className='proj '>
      <h1 className='proj-heading h  '>Projects</h1>
      <div className='proj-wrapper'>
        {allProjects.map((item, index) => (
          <div key={index} className='proj-card-wrapper hd' onClick={() => navigate(`/project/${item.name.toLowerCase()}`)}>
            <div className='proj-card-link'>
              <div className='proj-card'>
                <div className='proj-card-nav'>
                  <BsArrowRight color='black' size='25px' />
                </div>
                <img draggable={false} className='proj-card-img' src={item.thumbnail} alt={item.name} />
                <div className='proj-card-skills'>
                  {item.stack.map((skill, index) => (
                    <span key={index}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className='proj-card-name'>
              <div>
                <p>{item.name}</p>
                <p>{item.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
