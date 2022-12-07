import React from 'react';
import { Helmet } from 'react-helmet-async';
import AboutSection from './AboutSection';
import HomeBanner from './HomeBanner';
import PartnersSection from './PartnersSection';
import ServicesSection from './ServicesSection';

import Statistics from './Statistics';

const Home = () => {
    return (
       <div>
            <Helmet>
          <title>Family Law Attorney</title>
          </Helmet>
           
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