import "./Contacts.css";
import { GoLocation } from "react-icons/go";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineGithub,
} from "react-icons/ai";
export default function Contacts() {
  return (
    <div className="app__Contacts">
      <h2 className="section-title">
        Contactez <span>moi</span>
      </h2>
      <div className="app__Contacts-info">
        <h4>Contactez-moi ici</h4>
        <div className="row">
          <div className="col-icon">
            <GoLocation size={25} /> Location
          </div>
          <div className="col-info">Berkane, Maroc</div>
        </div>
        <div className="row">
          <div className="col-icon">
            <AiOutlineMail size={25} /> E-mail
          </div>
          <div className="col-info">ayadi.oussama0666@gmail.com</div>
        </div>
        <div className="row">
          <div className="col-icon">
            <AiOutlinePhone size={25} /> Tele
          </div>
          <div className="col-info">+212626005713</div>
        </div>
      </div>
      <div className="app__Contacts-icons">
        <a
          href="https://www.facebook.com/ossama.ayadi.9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineFacebook size={30} />
        </a>
        <a
          href="https://twitter.com/ayadioo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineTwitter size={30} />
        </a>
        <a
          href="https://github.com/ayadi1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineGithub size={30} />
        </a>
      </div>
    </div>
  );
}
