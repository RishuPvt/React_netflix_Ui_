import "./App.css";
import tvimg from "./assets/img/tv.png";
import tvimg2 from "./assets/img/device-pile-in.png";
import mobileimg from "./assets/img/mobile-0819.jpg";
import childrenimg from "./assets/img/children.png";
import tvvideo from "./assets/video/tvclip.mp4"
import tvvideo2 from "./assets/video/2tvclip.mp4"
import Nav from "./Nav";
import Section from "./Section";
import Section2 from "./section2";
import Seperation from "./Seperation";
import Section3 from "./section3";
import Section4 from "./section4";
function App() {
  return (
    <>
      <Nav />
      <Seperation />
      <Section
        url={tvimg}
        link={tvvideo}
        titlechange="Enjoy on your TV"
        parachange="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
      />
      <Seperation />
      <Section2
        url={mobileimg}
        titlechange="Download your shows to watch offline"
        parachange="Save your favourites easily and always have something to watch."
      />
      <Seperation />
      <Section4
        url={tvimg2}
        link={tvvideo2}
        titlechange="Watch everywhere"
        parachange="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
      />
      <Seperation />
      <Section2
        url={childrenimg}
        titlechange="Create profiles for kids"
        parachange="Send children on adventures with their favourite characters in a space made just for them—free with your membership."
      />
      <Seperation />
      <Section3 />
    </>
  );
}

export default App;
