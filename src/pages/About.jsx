/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import avatarImage from '/avatar.png'; 

export default function About() {
  return (
    <div className="aboutContainer mt-4">
      <div className="row">
     {/* Avatar to compliment About Me section */}
        <div className="col-md-5 col-lg-4">
          <img src={avatarImage} alt="Ryan Caltabiano" className="img-fluid about-avatar mt-4" />
        </div>
     {/* Text */}
        <div className="col-md-7 col-lg-8">
          <h1>About Me</h1>
          <p className="fs-5">
            Hello and thank you for visiting my portfolio! My name is Ryan Caltabiano and I am currently
          studying web development at the University of Central Florida's Full-Stack Boot Camp. Design and 
          programming has always been something I've been interested in so I'm very excited to go on this 
          journey. I am always looking for ways to modify or improve my skillset and look forward to learn
          more as I advance. Looking forward, I intend to branch out and learn many of the concepts at length.
          It's my dream to be able to do this work for a living. When I'm not at the job or working on web 
          projects, I'll usually be spending time with the people closest to me, playing music, or practicing
          karate.
          </p>
        </div>
      </div>
    </div>
  );
}
