import React from "react";
import "./About.css";
import Deplome from "../../components/Deplome/Deplome";
import { deplome, experience, technologies } from "./data";
import { BsBriefcase } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";
import Technologie from "../../components/Technologie/Technologie";
export default function About() {
  return (
    <div className="app__About">
      <h2 className="section-title">
        À propos de <span>moi</span>
      </h2>
      <div className="app__About-technologie">
        <h3>technologies</h3>
        <div className="app__About-technologie-list">
          {technologies.map((techn) => (
            <Technologie key={techn.id} title={techn.title} size={techn.size} />
          ))}
        </div>
      </div>

      <div className="app__About-diplome">
        <h3>diplôme</h3>
        <div className="app__About-diplome__list">
          {deplome.map((d) => (
            <Deplome
              key={d.id}
              title={d.title}
              content={d.content}
              date={d.date}
              location={d.location}
              Icon={BsBriefcase}
            />
          ))}
        </div>
      </div>
      <div className="app__About-competences">
        <h3>compétence professionnel</h3>
        <div className="app__About-competences-list">
          {experience.map((d) => (
            <Deplome
              key={d.id}
              title={d.title}
              content={d.content}
              date={d.date}
              location={d.location}
              Icon={AiOutlineCheck}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
