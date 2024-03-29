import React from 'react';
import img1 from '../../../asset/company/home2-partner-logo.png'
import img2 from '../../../asset/company/home2-partner-logo-2.png'
import img3 from '../../../asset/company/home2-partner-logo-3.png'
import img4 from '../../../asset/company/home2-partner-logo-4.png'
import PartnerSlider from './Partner/PartnerSlider';

const partners = [
  img1,img2,img3,img4
]

const PartnersSection = () => {
    return (
        <section className="px-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-8">
              <div className="mx-auto sm:text-center lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
          <p className='text-khaki  font-bold tracking-widest '>Partner</p>
          </div>
          <h2 className="max-w-xl mb-6 font-Bellefair font-normal text-3xl  md:leading-tight tracking-tight text-black dark:text-white md:text-6xl md:mx-auto">
            Trusted <span className='text-khaki'>Companies</span>
          </h2>
        </div>
        </div>

        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center justify-items-center">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
        </div> */}
        <div className='mx-auto'>
          <PartnerSlider partners={partners} />
        </div>
            
        </section>
    );
};

export default PartnersSection;