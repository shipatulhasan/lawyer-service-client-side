import React from 'react';
import Skeleton from 'react-loading-skeleton';

const CardSkeleton = ({card}) => {
    return (
        
       Array(card).fill(0).map((item,i)=> <div key={i} className='border border-khaki p-5 shadow-xl dark:bg-slate-800'>
          
       <div className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-72 hover:cursor-pointer">
           <Skeleton style={{height:'100%'}} />
       </div>
       
       
     <Skeleton style={{marginBottom:'16px'}} />
    <Skeleton count={3} style={{marginTop:'2px'}} />
       <div className='flex items-center justify-between mt-3'>
           <Skeleton width={100} />
           <Skeleton width={100} />
       </div>
     </div>)
    );
};

export default CardSkeleton;