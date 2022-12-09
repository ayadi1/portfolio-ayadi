import React from "react";
import "./Deplome.css";
export default function Deplome({ title, date, location, content, Icon }) {
  return (
    <div className="app__Deplome">
      <div className="app__Deplome-icon">
        <div className="app__Deplome-icon__icon-image">
          <Icon size={30} />
        </div>
        <div className="line"></div>
      </div>
      <div className="app__Deplome-content">
        <h5>{date}</h5>
        <h4>
          {title} - <span>{location}</span>
        </h4>
        <div className="app__Deplome-content-list">
          <ul>
            {content.map((data, i) => (
              <li key={i}>{data}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
