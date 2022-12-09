import React from "react";
import "./Home.css";
import me from "../../assets/me.jpeg";
export default function Home() {
  return (
    <div className="app__Home">
      <div className="app__Home-image">
        <img src={me} alt="me" />
      </div>
      <div className="app__Home-content">
        <h2>Bonjour, je suis <span>AYADI Oussama</span>.  full stack developer.</h2>
        <p>
          je suis bon au travail d'équipe, mon superpouvoir je suis un chercheur
          et j'apprends rapidement. Je maîtrise les différentes étapes
          techniques de la création d'un site ou d'une application web
        </p>
        <a href="#a">telecharger cv</a>
      </div>
    </div>
  );
}
