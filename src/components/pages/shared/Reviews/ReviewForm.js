import React from 'react';
import LoaderText from '../../../Spinner/LoderText'

const ReviewForm = ({handleSubmit,isLoading}) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='border border-khaki shadow-2xl shadow-slate-200'>
                <textarea className='p-5 w-full focus:outline-none' name="comment" rows='5' placeholder='write your review....' ></textarea>
                </div>
               <div className='flex justify-end'>
                  
               <button className='border-2 border-khaki px-8 py-2 text-white font-bold tracking-widest uppercase text-xs mt-6 bg-black  hover:bg-khaki '>
               {
                       isLoading ? <LoaderText /> : 'Review'
                   } 
                </button>
               </div>
               
            </form>
        </div>
    );
};

export default ReviewForm;