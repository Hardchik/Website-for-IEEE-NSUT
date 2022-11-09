import WithSubnavigation from './components/NavBar' //Header
import LargeWithNewsletter from './components/Footer' //Footer

import './App.css'

import CallToActionWithIllustration from './components/Hero' // Hero Section

import SplitWithImage from './components/Services' //Services provided by us
import SimpleThreeColumns from './components/About' // About Us

import GridBlurredBackdrop from './components/Testimonials' //Testimonials
import BasicStatistics from './components/Statistics' //Stats
import GridListWithHeading from './components/FAQs' //FAQs

import Carousel from './components/carousel/Carousel';
import Team from './components/team/Team';

import About from './components/about/About';
import Contact from './components/Contact' //contactUs
import Card from './components/cards/displayCard'
// import Awards from './components/awards/Awards';
import Achievements from './components/achievements/Achievements'
import Portfolio from './components/portfolio/Portfolio';
import Faculty from './components/Faculty';

import Events from './components/events/events'

function App() {
  return (
    <div className='App'>
      <WithSubnavigation />
      <CallToActionWithIllustration />
      <Carousel/>
      <About/>
      <SplitWithImage />
      <Card />
      {/* <SimpleThreeColumns /> */}
      {/* <GridBlurredBackdrop /> */}
      {/* <BasicStatistics /> */}
      {/* <GridListWithHeading /> */}
      <Faculty />
      {/* <Awards /> */}
      <Achievements />
      <Team />
      <Portfolio/>
      <Events />
      <Contact />
      <LargeWithNewsletter />

    </div>
  );
}

export default App;