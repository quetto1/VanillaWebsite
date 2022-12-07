import ReactPlayer from "react-player";
import "./MusicPage.css";
import "./Glitch.css";

function MusicPage() {
  return (
    <div className="music-page-main-wrapper">
      <div class="glitch ">
        <span aria-hidden="true">Music</span>
        Music
        <span aria-hidden="true">Music</span>
      </div>
      <h1>Discover DJ mixes</h1>
      <div className="youtube-wrapper">
        <iframe
          width="820"
          height="465"
          src="https://www.youtube.com/embed/HYTQc7sXvnk?start=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>{" "}
        <p>VANILLA_SUMMER WAVE DJ _SET</p>
      </div>
      <h1>Live gigs</h1>
      <ReactPlayer
        className="hip-hop"
        url="https://www.mixcloud.com/thevanillavillain/zooluft-exp4-vv-mix/"
        width="100%"
        height={180}
      />

 <ReactPlayer
        className="hip-hop"
        url="https://www.mixcloud.com/thevanillavillain/part1/"
        width="100%"
        height={180}
      />
 <ReactPlayer
        className="hip-hop"
        url="https://www.mixcloud.com/thevanillavillain/part2/"
        width="100%"
        height={180}
      />
 
      <div className="hip-to-hop">
        <h1>HIP-HOP </h1>
        <h1>& RAP</h1>
      </div>

      <ReactPlayer
        className="hip-hop"
        url="https://www.mixcloud.com/thevanillavillain/hip-hop-cut/"
        width="100%"
        height={180}
      />
      <h1>House & Dance</h1>

      <ReactPlayer
        className="hip-hop"
        url="https://www.mixcloud.com/publicaffairradio/zooluft-w-vanilla-villain-150522-back/"
        width="100%"
        height={180}
      />

      <ReactPlayer
        className="hip-hop"
        url="https://www.mixcloud.com/thevanillavillain/kitchen-party-1/"
        width="100%"
        height={180}
      />
      <h1>Rave & Techno</h1>

      <ReactPlayer
        className="hip-hop"
        url="https://www.mixcloud.com/thevanillavillain/p3/"
        width="100%"
        height={180}
      />

    </div>
  );
}

export default MusicPage;
