import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';
// import { scrollAnimation } from '../lib/scrollAnimation';
import '../css/Project.css';

const Project = () => {
  const { projectName } = useParams();
  const projectDetails = data.project[projectName.toLowerCase()];

  // useEffect(() => {
  //   scrollAnimation();
  // }, []);

  return (
    <div>
      <h1 className='proj-heading h'>{projectDetails.name}</h1>
      <p className='proj-date h'>{projectDetails.date}</p>
      <div className='proj-details'>
        <h3 className='h'>{projectDetails.description}</h3>
        <div className='proj-details-nav-wrapper h'>
          {projectDetails.nav.map((item, index) => (
            <div key={index} className='proj-details-nav hd'>
              <a target='_blank' rel='noopener noreferrer' href={item.url}>
                {item.name}
              </a>
            </div>
          ))}
        </div>
        <div className='proj-details-skills'>
          <p className='h'>Technologies and Frameworks used</p>
          <div className='proj-all-skills hd'>
            {projectDetails.tech.map((item, index) => (
              <div key={index} className='proj-skill'>
                <img draggable={false} src={item} alt={item} />
                <span className='proj-skill-name'>{item.split('/')[2].split('.')[0]}</span>
              </div>
            ))}
          </div>
        </div>
        <div className='proj-imgs hd'>
          {projectDetails.imgs.map((item, index) => (
            <img key={index} draggable={false} className='proj-img hd' src={item} alt={`Project ${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
