import React from "react";
import "./Home.css";
import me from "../../assets/me.png";
export default function Home() {
  return (
    <div className="app__Home">
      <div className="app__Home-image">
        <img src={me} alt="me" />
      </div>
      <div className="app__Home-content">
        <h2>
          Bonjour, je suis <span>AYADI Oussama</span>. full stack developer.
        </h2>
        <p>
          j'ai l'esprit d'équipe, Mon point fort c'est que je cherche
          l'information et j'apprends rapidement. Je maîtrise les différentes
          étapes techniques de la création d'un site ou d'une application web
        </p>
        <a href="#a">telecharger cv</a>
      </div>
    </div>
  );
}
