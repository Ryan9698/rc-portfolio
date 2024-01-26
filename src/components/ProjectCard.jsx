import React from "react";
import PropTypes from "prop-types";

export default function ProjectCard({
  title,
  description,
  imageUrl,
  projectUrl,
  gitHubUrl,
}) {
  return (
    <div className="col-12 col-md-6 col-lg-6 mb-4">
      <div className="card h-100">
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none"
        >
          <div className="card-image-container">
            <img
              src={imageUrl}
              alt={title}
              className="card-img-top img-fluid"
            />
            <div className="card-image-overlay">
              <h5 className="card-title">{title}</h5>
            </div>
          </div>
        </a>
        <div className="card-body card-description">
          <p className="card-text">{description}</p>
          <a
            href={gitHubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <i className="fab fa-github"></i> View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  projectUrl: PropTypes.string.isRequired,
  gitHubUrl: PropTypes.string.isRequired,
};
