import React from 'react';
import PageHeader from './shared/PageHeader';
import img from '../../asset/banner/divorce-law.jpg'
import AboutSection from './Home/AboutSection';
import Statistics from './Home/Statistics';

const About = () => {
    const headerInfo = {
        img:img,
        title:'About'
    }
    return (
        <div>
            <PageHeader headerInfo={headerInfo} />
            <AboutSection />
            <Statistics />
        </div>
    );
};

export default About;