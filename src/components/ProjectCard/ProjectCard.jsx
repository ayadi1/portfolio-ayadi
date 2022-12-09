import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import "./ProjectCard.css";
export default function ProjectCard({ image, title, github, previewLink }) {
  return (
    <div
      className="app__ProjectCard"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="app__ProjectCard-content">
        <div className="app__ProjectCard-content-inner">
          <h6>{title}</h6>
          <div className="app__ProjectCard-content-links">
            <a href={github} target="_blank" rel="noopener noreferrer">
              <AiFillGithub />
            </a>
            <a href={previewLink} target="_blank" rel="noopener noreferrer">
              <CgWebsite />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
