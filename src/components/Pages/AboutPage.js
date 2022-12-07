import "./AboutPage.css";
import VanillaPic1 from "../../img/vv1.jpg"
import VanillaPic2 from "../../img/vv2.png"
import VanillaGif1 from "../../img/vvGIF.gif"
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
                    <p className="middle-text"> <a href="https://www.mixcloud.com/thevanillavillain/" target="blank"><div className="discover-ele">DISCOVER THE VANILLA MIXES!</div></a> </p>
                    <p className="bottom-text">None one knows for sure who is this piece of shit, only what we can be certain of that he is an extraordinary artist and visioner, part-time DJ, and part-time Web Developer. Just a casual who whats to share his passion for music with the world. Here you can find my mixes and events that I have played on or that I'm going to play in the future so stay tuned so you can join for the next Vanilla party! </p>
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
                    <p className="middle-text2"> Zooluf Records</p>
                    <p className="bottom-text2">Vanilla Villain is a part of the Zooluft artist collective, which brings together people with all kinds of passions from music through design, photography to even poetry, check out the other members who share there the fruits of their hard work! </p>
                </div>
                
            </div>
            <div className="about-fourth-row-wrapper">
                <div className="about-fourth-row-first-column">
                    <div className="fourth-row-title">
                        <div className="green-cunt7">INSTA</div> _<div className="green-cunt8" >GRAM</div> </div>
                    <p className="bottom-text">Do you want to be up to date with events or maybe you want to send some props? Check out the Instagram the.vanilla.villain! One follow equals one soul devoured by this masked kunt.</p>
                </div>
                <div className="about-fourth-row-second-column">
                    <a href="https://www.instagram.com/the.vanilla.villain/" target="blank">
                    <img alt="" src={VanillaGif1}></img>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;