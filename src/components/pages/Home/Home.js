import React from 'react';
import AboutSection from './AboutSection';
import HomeBanner from './HomeBanner';
import PartnersSection from './PartnersSection';
import ServicesSection from './ServicesSection';

import Statistics from './Statistics';

const Home = () => {
    return (
       <div>
           
           <HomeBanner />
           <div className='my-10 md:my-20'>
           <AboutSection />
           </div>
           <ServicesSection />
           <div className='my-10 md:my-16'>

           <Statistics />
           </div>
           <div className='pt-10 pb-20'>

           <PartnersSection />
           </div>

       </div>
    );
};

export default Home;