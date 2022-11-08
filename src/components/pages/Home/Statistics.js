import React from "react";
import CountUp, { useCountUp } from "react-countup";


const Statistics = () => {
  const statistcs = [
    {
      
      count: 144,
      title: "Case closed",
    },
    {
     
      count: 50,
      title: "Trusted Client",
    },
    {
      
      count: 90,
      title: "Successfull Case",
    },
    {
    
      count: 25,
      title: "Partners",
    },
  ];

  return (
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  md:px-8 lg:py-20  border border-khaki rounded bg-slate-700 backdrop-blur md:backdrop-blur-md bg-opacity-30 shadow-2xl">
      <div class="grid grid-cols-2 gap-8 md:grid-cols-4 ">
        {statistcs.map((stat, i) => (
          <div key={i} class="text-center text-white">
        
            <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl mb-3">
              <CountUp
                start={0}
                end={stat.count}
                duration={2}
                separator=" "
                decimal=","
              />
              +
            </h6>
            <p class="text-sm font-bold tracking-widest text-khaki md:text-white lg:text-khaki uppercase lg:text-base">
              {stat.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
