import "./AboutPage.css";
import VanillaPic1 from "../../img/vv1.jpg"
import VanillaPic2 from "../../img/vv2.png"
import "./Glitch.css";

function AboutPage() {
    return(
        <div>
            <div class="glitch about-glitch-wrapper">
        <span aria-hidden="true">About</span>
        About
        <span aria-hidden="true">About</span>
      </div>

            <div className="about-first-row-wrapper">
                <div className="about-first-row-first-column">
                    <div className="first-row-title">
                        W<div className="green-cunt5">HO</div>_<div className="green-cunt3" >IS</div> <p className="green-cunt"><div className="green-cunt4">T</div>HIS</p> <div className="green-cunt2">GUY</div>?</div>
                    <p className="middle-text"> Yours truly Mr Vanilla <div className="discover-ele">DISCOVER THE VANILLA MIXES!</div> </p>
                    <p className="bottom-text">I got the call from my higher self. Motherfucker was talking to me for 3h straight. I don't remember shit actually. But who needs a good memory anyway, as long as I remember where my stash is.</p>
                </div>
                <div className="about-first-row-second-column">
                    <img alt="" src={VanillaPic1}></img>
                </div>
            </div>
            {/*  */}
            <div className="about-third-row-wrapper">
                <div className="about-third-row-second-column">
                   <a href="https://www.zooluft.com/" target="blank"><img alt="" src={VanillaPic2}></img></a> 
                </div>
                <div className="about-third-row-first-column">
                    <div className="third-row-title">
                    <div className="color-change-zooluft">ZOOLUFT_</div>COLLA<p className="collab-p">BORATION</p> </div>
                    <p className="middle-text2"> Yours truly Mr Vanilla  </p>
                    <p className="bottom-text">I got the call from my higher self. Motherfucker was talking to me for 3h straight. I don't remember shit actually. But who needs a good memory anyway, as long as I remember where my stash is.</p>
                </div>
                
            </div>
        </div>
    );
}

export default AboutPage;