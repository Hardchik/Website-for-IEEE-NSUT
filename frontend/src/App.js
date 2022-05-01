import WithSubnavigation from './components/NavBar' //Header
import LargeWithNewsletter from './components/Footer' //Footer

import CallToActionWithIllustration from './components/Hero' // Hero Section

import SplitWithImage from './components/Services' //Services provided by us
import SimpleThreeColumns from './components/About' // About Us

import GridBlurredBackdrop from './components/Testimonials' //Testimonials
import BasicStatistics from './components/Statistics' //Stats
import GridListWithHeading from './components/FAQs' //FAQs

function App() {
  return (
    <div>
      
      <WithSubnavigation />
      <CallToActionWithIllustration />
      <SplitWithImage />
      <SimpleThreeColumns />
      <GridBlurredBackdrop />
      <BasicStatistics />
      <GridListWithHeading />
      <LargeWithNewsletter />

    </div>
  );
}

export default App;