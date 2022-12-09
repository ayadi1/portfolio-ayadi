import "./Portfolio.css";
import { projects } from "./data";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
export default function Portfolio() {
  return (
    <div className="app__Portfolio">
      <h2 className="section-title">
        Mon <span>Portfolio</span>
      </h2>
      <p>
        Voici quelques-uns des travaux que j'ai effectués dans divers langages
        de programmation.
      </p>
      <div className="app__Portfolio-cards">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            title={project.title}
            github={project.github}
            previewLink={project.previewLink}
          />
        ))}
      </div>
    </div>
  );
}
