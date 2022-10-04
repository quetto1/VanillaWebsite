import Header from "./components/Header.js";
import AboutPage from "./components/Pages/AboutPage.js";
import MusicPage from "./components/Pages/MusicPage.js";
import Footer from "./components/Footer.js";
import EventsPage from "./components/Pages/EventsPage.js";

import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <Routes>
          <Route path="/" element={<AboutPage></AboutPage>}></Route>
          <Route path="/music" element={<MusicPage></MusicPage>}></Route>
          <Route path="/events" element={<EventsPage></EventsPage>}></Route>
        </Routes>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
