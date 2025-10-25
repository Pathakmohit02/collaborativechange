import { TextEffectPerChar } from "./components/core/text-effect";
// import {Hero} from "./components/core/hero"
import { TextLoopBasic } from "./components/core/text-loop";
import { TextRollBasic } from "./components/core/text-roll";
import {TextScrambleCustomTrigger} from "./components/core/text-scramble";
import Hero from "./components/Hero/Hero";
import {InfiniteSliderBasic} from "./components/core/infinite-slider";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import CardRow from "./components/CardRow/CardRow";
import FAQ from "./components/FAQ/FAQ";
// import VideoCarousel from "./components/VideoCarousel/VideoCarousel";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import { TabsTransitionPanel } from "./components/VideoCarousel/transitionpanel";

import './App.css';

function App() {
  return (
    <>
      {/* <TextEffectPerChar />
      <TextLoopBasic/> */}
      <Navbar/>
      <Hero />
      <About/>
      <CardRow/>
      <FAQ/>
      <TabsTransitionPanel/>
      {/* <VideoCarousel/> */}
      <ContactUs/>
      <Footer/>
      {/* <InfiniteSliderBasic/>
      <TextRollBasic/>
      <TextScrambleCustomTrigger/> */}
    </>
  );
}

export default App;
