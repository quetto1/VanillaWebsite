import  "./EventsPage.css"
import "./Glitch.css";
import DjNightNovember from "../../img/djnight26.png"
import ZooExp4 from "../../img/zooexp4.png"


function EventsPage() {
    return (
        <div className="event-page-main-wrapper">
        <div class="glitch ">
          <span aria-hidden="true">Events</span>
          Events
          <span aria-hidden="true">Events</span>
        </div>
        <h1>Latests/Upcoming Events</h1>
        <div className="upcoming-events-wrapper">
          <a href="https://www.mixcloud.com/thevanillavillain/part2/" target="blank">
            <div className="djnight-info discover-ele2">
                House&Techno
                26th of Novmeber
            </div>
            </a>
          <div className="djnight-wrapper"><img src={DjNightNovember} alt="chuj"></img></div>
          <p>VANILLA_DJ_House_Techno_Night</p>
        </div>
        <h1>Previous Events</h1>

        <div className="previous-events-wrapper">
            <a target="blank" href="https://www.zooluft.com/events/zooluft-experience-4">
                <img src={ZooExp4} alt=''></img>
            </a>
        </div>
      </div>
    )
}

export default EventsPage;

