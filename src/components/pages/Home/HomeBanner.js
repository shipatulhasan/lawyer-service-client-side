import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../asset/banner/hero_banner.jpg'
import IconBox from './IconBox';

const HomeBanner = () => {
    return (
        <main>

        <section className='relative min-h-[400px] md:min-h-[600px] lg:min-h-screen pt-10 lg:pt-32 pb-52 flex items-center justify-start bg-center bg-no-repeat bg-cover' style={{backgroundImage:`url(${banner})`}}>
            <div className='w-full h-full absolute bg-gradient-to-r from-black to-transparent opacity-60' />
             <div className="px-6 md:px-16 lg:px-0 w-full max-w-xl xl:pl-16 xl:mb-0 xl:w-2/3 z-10">
                <h2 className="max-w-xl mb-4 md:mb-6 text-5xl leading-tight font-bold font-crimson tracking-tight text-white md:text-7xl md:leading-tight capitalize">
                    Easy & <span className='text-khaki'> quick leagal </span> helps
                </h2>
                <p className='text-white text-sm md:text-lg font-semibold '>
                Law is commonly Understood as a System of  rules that are Created  and Enforeced through social or Government 
                </p>
                <Link to='/services'
                 className='border border-khaki px-8 py-2 text-white font-bold tracking-widest uppercase text-xs mt-6 bg-slate-100 bg-opacity-20 hover:bg-khaki '>
                    view all services
                </Link>
            </div>

        </section>
        <div className='-mt-40 md:-mt-32'>
            <IconBox />
        </div>
            
        </main>
    );
};

export default HomeBanner;