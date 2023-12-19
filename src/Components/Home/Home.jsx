import React from 'react';
import RiofinAssets from './RiofinAssets';
import HowInvest from './HowInvest';
import Tab from './Tab';
import Founders from './Founders';
import Story from './Story';
import Banner from './Banner';
import Nation from './Nation';
import CallToAction from './CallToAction';
import Testimonials from './Testimonials';
import Counter from './Counter';
import CurrentProjects from './CurrentProjects';
import Blog from './Blog'
import Funded from './Funded';
const Home= () => {
  return (
   <>
   <Banner />
   <Counter />
   <RiofinAssets />
   <CurrentProjects />
   <Tab />
    <HowInvest />
    <Founders />
   <Story />
   <Nation />
   <Testimonials />
   <Funded />
   <Blog />
   <CallToAction />  
   </>
  );
};

export default Home;
