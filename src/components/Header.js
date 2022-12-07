import "./Header.css";
import HeaderAbout from "../img/ezgif.com-gif-maker.gif";
import { ReactComponent as MixcloudSvg } from "../img/svg/mixcloud-icon.svg";
import { ReactComponent as InstaSvg } from "../img/svg/insta-icon.svg";
import { Link } from 'react-router-dom'
// import { ReactComponent as CatIcon } from "../img/svg/cat-icon.svg";

function Header() {
  return (
    <div className="header-wrapper">
      {/* src to bedzie parametr ktory bedzie sie zmienial zaleznie od strony */}
      <img className="vanilla-pic" src={HeaderAbout} alt="prop"></img>
      <div className="social-media">
        <div>
          <a href="https://www.mixcloud.com/thevanillavillain/" target="blank">
            <MixcloudSvg></MixcloudSvg>
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/the.vanilla.villain/" target="blank">

            <InstaSvg></InstaSvg>
          </a>

        </div>
        {/* <div>
          <CatIcon></CatIcon>
        </div> */}
      </div>
      <div className="links-wrapper">
        <div><Link to="/music">Music</Link></div>
        <div><Link to="/">About</Link></div>
        <div><Link to="/events">Events</Link></div>
      </div>
    </div>
  );
}

export default Header;
