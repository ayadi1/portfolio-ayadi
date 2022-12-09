import React from "react";
import "./Technologie.css"
export default function Technologie({ title, size }) {
  return (
    <div className="app__Technologie">
      <div className="app__Technologie-title">{title}</div>
      <div className="app__Technologie-line">
        <div className="count">{size}%</div>
        <div className="dark-line">
          <div className="blue-line" style={{ width: `${size}%` }}></div>
        </div>
      </div>
    </div>
  );
}
