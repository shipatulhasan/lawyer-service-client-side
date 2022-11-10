import React from 'react';
import PageHeader from './shared/PageHeader';
import img from '../../asset/banner/divorce-law.jpg'
import AboutSection from './Home/AboutSection';
import Statistics from './Home/Statistics';
import { Helmet } from 'react-helmet-async';

const About = () => {
    const headerInfo = {
        img:img,
        title:'About'
    }
    return (
        <div>
            <Helmet>
          <title>About-Family Law Attorney</title>
          </Helmet>
            <PageHeader headerInfo={headerInfo} />
            <div className='py-10'>

            <AboutSection />
            </div>
            <div className=' pb-24'>

            <Statistics />
            </div>
        </div>
    );
};

export default About;