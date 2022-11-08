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
           <AboutSection />
           <ServicesSection />
           <Statistics />
           <PartnersSection />

       </div>
    );
};

export default Home;