import "./Header.css";
import HeaderAbout from "../img/ezgif.com-gif-maker.gif";
import { ReactComponent as MixcloudSvg } from "../img/svg/mixcloud-icon.svg";
import { ReactComponent as InstaSvg } from "../img/svg/insta-icon.svg";
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
        <div> <a href="/music">Music</a></div>
        <div><a href="/">About</a></div>
        <div><a href="/events">Events</a></div>
      </div>
    </div>
  );
}

export default Header;
