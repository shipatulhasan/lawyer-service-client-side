import React from "react";

import banner from '../../../asset/banner/inner_background_01.jpg'

const Statistics = () => {
  const statistcs = [
    {
      id:1112,
      count: 144,
      title: "Case closed",
    },
    {
      id:1114,
     count: 50,
     title: "Trusted Client",
    },
    {
      id:1115,
     count: 25,
     title: "Partners",
    },
    
    {
      id:1116,
      count: 90,
      title: "Successfull Case",
    },
    
  ];

  return (
    <div className="px-4 py-16 my-10 md:my-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  md:px-8 lg:py-20 bg-cover bg-no-repeat  border border-khaki rounded bg-slate-800 shadow-2xl" style={{backgroundImage:`url(${banner})`,backgroundColor:'rgb(0 0 0 / 35%)',backgroundBlendMode:'overlay'}}>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4 ">
        {statistcs.map((stat, i) => <div key={stat.id} className={`text-center text-white z-10 ${i===statistcs.length-1?'md:border-none':'md:border-r'} border-khaki`}>
        
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl mb-3">
            {stat.count}
              +
            </h6>
            <p className="text-sm font-bold tracking-widest text-khaki md:text-white lg:text-khaki uppercase lg:text-base">
              {stat.title}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Statistics;
