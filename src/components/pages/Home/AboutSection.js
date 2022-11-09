import React from 'react';
import person from '../../../asset/lawyer/home-about-1.jpg'
import signature from '../../../asset/lawyer/john-mehta.png'

const AboutSection = () => {
    return (
        <div className='my-10 md:my-20'>
           <div className="px-6 py-10 md:py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      <div className="flex flex-col lg:items-center lg:flex-row gap-5">
        <div className="flex items-center mb-6 lg:w-1/2 lg:mb-0">
          
            <img className='w-4/5' src={person} alt="" />
        
        </div>
        <div className="lg:w-1/2">
            <p className='text-khaki font-bold tracking-widest'>About Me</p>
        <h2 className="max-w-xl mb-4 md:mb-6 text-4xl leading-tight font-bold font-crimson tracking-tight text-black dark:text-white md:text-7xl md:leading-tight capitalize">
                Jhon<span className='text-khaki'> Metha</span>
                </h2>
          <p className="text-gray-800 max-w-xl text-base mb-6">
          Attorney Jhon Metha works with you to achieve your desired objectives and engages you throughout the entire process. She takes time to listen, clarifies information, and makes sure that you are fully informed and aware of the total picture. Compassion and sincerity are what you can expect at the Law Office of Jhon Metha.
          </p>
          <img src={signature} alt="" />
        </div>
      </div>
    </div>
           </div>
    );
};

export default AboutSection;