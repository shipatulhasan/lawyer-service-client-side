import React from "react";
import loader from '../../../asset/counter/loader.svg'

const Loader = () => {
  return (
    <div className="min-h-[300px] flex items-center justify-center w-full mx-auto">
      <img className="w-20 mx-auto" src={loader} alt="" />
    </div>
  );
};

export default Loader;
