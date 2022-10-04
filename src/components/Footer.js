import "./Footer.css";
import { ReactComponent as MixcloudSvg } from "../img/svg/mixcloud-icon.svg";
import { ReactComponent as InstaSvg } from "../img/svg/insta-icon.svg";
import { ReactComponent as CatIcon } from "../img/svg/cat-icon.svg";
import zooluftLogo from "../img/ZooluftLogo.png";


function Header() {
  return (
    <div className="footer-wrapper">
        <a href="https://www.zooluft.com/" target="blank"><img src={zooluftLogo} alt=""></img></a>
      <div className="media-wrapper">
        <div>
          <MixcloudSvg></MixcloudSvg>
        </div>
        <div>
          <InstaSvg></InstaSvg>
        </div>
        <div>
          <CatIcon></CatIcon>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Header;