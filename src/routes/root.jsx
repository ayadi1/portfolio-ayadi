import { Link, Outlet } from "react-router-dom";
import "./Root.css";
import { AiOutlineHome, AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { BsBriefcase } from "react-icons/bs";
export default function Root() {
  return (
    <div className="app__main">
      <div id="detail">
        <Outlet />
      </div>
      <div className="app__main-nav">
        <ul className="app__main-nav__list">
          <li className="app__main-nav__list-item">
            <Link className="app__main-nav__list-item__link" to={`/`}>
              <AiOutlineHome size={35} />
            </Link>
          </li>
          <li className="app__main-nav__list-item">
            <Link className="app__main-nav__list-item__link" to={`about`}>
              <AiOutlineUser size={35} />
            </Link>
          </li>
          <li className="app__main-nav__list-item">
            <Link className="app__main-nav__list-item__link" to={`portfolio`}>
              <BsBriefcase size={35} />
            </Link>
          </li>
          <li className="app__main-nav__list-item">
            <Link className="app__main-nav__list-item__link" to={`contacts`}>
              <AiOutlineMail size={35} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
