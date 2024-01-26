/* eslint-disable no-unused-vars */
import React from "react";
import ProjectCard from "../components/ProjectCard";
import projectsData from "../data/projectsData";

export default function Portfolio() {
  return (
    <div className="container aboutContainer mt-4">
      <h1 className="text-center p-4">Portfolio</h1>
      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
          <p className="text-center pb-4 fs-5">
            Below you will find different projects that I have coded or
            collaborated on. You can view the live deployments by clicking the
            images or if you wish to see the repositories, I have included GitHub links
            under each picture.
            {/* In the future, I intend to direct links to descriptions of the projects as well as
            screenshots of the application. Similar to a README.
            */}
          </p>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
        {/* Function to render all items in the array as styled cards for future projects */}
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            projectUrl={project.projectUrl}
            gitHubUrl={project.gitHubUrl}
          />
        ))}
      </div>
    </div>
  );
}
