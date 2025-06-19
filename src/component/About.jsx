import React from "react";
// import Sociallinks from "./Sociallinks";
import Skill from './Skill';

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-auto  text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I’m Archit Salokhe, a passionate and detail-oriented software developer with a Bachelor’s degree in Information Technology 
          from Mumbai University. I specialize in full-stack web development, with hands-on experience in technologies like JavaScript, 
          React, Next.js, Node.js, Express, MongoDB, and Python. I’ve worked on impactful academic and personal projects—from crop recommendation 
          systems to chatbot integrations—combining clean UI with scalable backend logic. I’m always eager to learn, solve real-world problems 
          with code, and contribute to teams building meaningful digital experiences.
        </p>

        <br />

        
      </div>
      {/* <div className="skill">
      <Skill/>
      </div> */}
    </div>
  );
};

export default About;
