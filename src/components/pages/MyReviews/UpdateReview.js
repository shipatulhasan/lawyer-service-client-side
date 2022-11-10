import React, { useState } from "react";

import { FaRegEdit } from "react-icons/fa";

const UpdateReview = ({ review, handleUpdate }) => {
  const [isOpen, setIsopen] = useState(false);


  const {_id,comment} = review



  return (
    <div>
      <div className="relative flex justify-center">
        <FaRegEdit
          onClick={() => setIsopen(true)}
          className="hover:cursor-pointer"
        />

        {isOpen && (
          <div
            className="fixed inset-0 z-10 overflow-y-auto"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
              <span
                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
              ></span>

              <div className="relative inline-block px-4 pt-5 pb-4  text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl rtl:text-right dark:bg-gray-900 sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                <div>
                  <div
                    onClick={() => setIsopen(false)}
                    className="absolute -top-3 -right-5 border border-khaki bg-khaki h-10 w-10 text-center  rounded-full p-2 font-bold text-white hover:cursor-pointer"
                  >
                    X
                  </div>

                  <div className="mt-2 text-center">
                    <form onSubmit={(event)=>handleUpdate(event,_id)}>
                      <div className="border border-khaki shadow-2xl shadow-slate-200">
                        <textarea
                          className="p-5 w-full dark:text-white focus:outline-none"
                          name="review"
                          rows="5"
                          placeholder="Write your review . . . . "
                          defaultValue={comment}
                        ></textarea>
                      </div>
                      <div className="flex justify-end">
                        <button type="submit" className="border-2 border-khaki px-8 py-2 text-white font-bold tracking-widest uppercase text-xs mt-6 bg-black  hover:bg-khaki ">
                          Update
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UpdateReview;
