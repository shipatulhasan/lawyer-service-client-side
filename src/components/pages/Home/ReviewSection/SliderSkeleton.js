import React from 'react';
import Skeleton from 'react-loading-skeleton'

const SliderSkeleton = ({fake}) => {
    return (
        
           <div className={` border-khaki pt-10 pb-0 mx-5 dark:text-white`}>
        

            <div className='flex justify-between items-center'>
            <div className="w-full flex items-center gap-4">
             <Skeleton width={56} height={56} circle />
              <div className="w-3/5">
                <Skeleton count={1.5} />
              </div>
            </div>
            <div>
            </div>
         
            </div>
    
            <div className='px-4 pt-5'>
           <Skeleton count={1.5} />
                 
            
            </div>
          </div>
        
       
    );
};

export default SliderSkeleton;